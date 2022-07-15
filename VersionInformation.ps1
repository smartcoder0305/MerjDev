#import-module -Name 'PSDocs' -Scope CurrentUser
import-module -name 'C:\Program Files\WindowsPowerShell\Modules\PSDocs'

$gitHistory = (git log --format="%an`t%s" --cherry origin/master... --no-merges  -n 500) | 
    ConvertFrom-Csv -Delimiter "`t" -Header ("Author","Subject")  |
    Sort -Unique -Property Subject 


$formattedHistory = [PSCustomObject]@{
    WithJira = $gitHistory | Where-Object -FilterScript { $_.Subject | Select-String  -Pattern "^[A-Z]+-[0-9]+" | 
        Select-Object -ExpandProperty Matches | Select-Object -ExpandProperty Value -Unique }
    WithoutJira = $gitHistory | Where-Object -FilterScript { $_.Subject | Select-String  -NotMatch -Pattern "^[A-Z]+-[0-9]+" }
}

Document ReleaseNotes {
    # Add an introduction section
    Title "Version (prelease)"
    Section "Items with a JIRA" {
        $InputObject.WithJira | 
            Table -Property @{ Name = 'JIRA'; Expression = { 
                                $_.Subject | Select-String -Pattern "((?<!([A-Z]{1,10})-?)[A-Z]+-\d+)" -AllMatches | 
                                % { $_.Matches } | 
                                % { "[$($_.Value)](http://jira.vtfs.cloud/browse/$($_.Value))" } |  Out-String } 
                              },
                            @{ Name = 'Subject'; Expression = { $_.Subject } },
                            @{ Name = 'Author'; Expression = { $_.Author } }

    }

    Section "Other" {
        $InputObject.WithoutJira | Table -Property Subject,Author
    }
}
ReleaseNotes -InputObject $formattedHistory -OutputPath '.\out';