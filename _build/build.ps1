$ErrorActionPreference = "SilentlyContinue"
Remove-Item -Path "$PSScriptRoot\..\_temp" -Recurse -Force
Remove-Item -Path "$PSScriptRoot\..\primagi-items" -Recurse -Force
$ErrorActionPreference = "Break"

New-Item "$PSScriptRoot\..\_temp" -ItemType Directory
dotnet publish "$PSScriptRoot\..\_submodules\primagi-items\src\Shipwreck.PrimagiItems.Web\Shipwreck.PrimagiItems.Web.csproj" -c Release -o "$PSScriptRoot\..\_temp"
Move-Item -Path "$PSScriptRoot\..\_temp\wwwroot" -Destination "$PSScriptRoot\..\primagi-items"

$ErrorActionPreference = "SilentlyContinue"
Remove-Item -Path "$PSScriptRoot\..\_temp" -Recurse -Force