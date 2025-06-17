$images = @(
    @{
        url = "https://ext.same-assets.com/422046658/2029834703.svg"
        path = "public\images\social\facebook.svg"
    },
    @{
        url = "https://ext.same-assets.com/422046658/3257518115.svg"
        path = "public\images\social\linkedin.svg"
    },
    @{
        url = "https://ext.same-assets.com/422046658/1045802843.svg"
        path = "public\images\icons\location.svg"
    },
    @{
        url = "https://ext.same-assets.com/422046658/890538655.svg"
        path = "public\images\icons\email.svg"
    },
    @{
        url = "https://ext.same-assets.com/422046658/1295800748.svg"
        path = "public\images\icons\phone.svg"
    },
    @{
        url = "https://ext.same-assets.com/422046658/919375268.png"
        path = "public\images\logo.png"
    },
    # Product logos
    @{
        url = "https://www.versehub.io/assets/logo/logo-befitter.png"
        path = "public\images\products\befitter.png"
    },
    @{
        url = "https://www.versehub.io/assets/logo/logo-nv.png"
        path = "public\images\products\nextverse.png"
    },
    @{
        url = "https://www.versehub.io/assets/logo/logo-cowitup.png"
        path = "public\images\products\cowitup.png"
    },
    @{
        url = "https://www.versehub.io/assets/logo/logo-scan.png"
        path = "public\images\products\network-scan.png"
    },
    @{
        url = "https://www.versehub.io/assets/logo/logo-bridge.png"
        path = "public\images\products\network-bridge.png"
    },
    @{
        url = "https://www.versehub.io/assets/logo/penpal-logo.png"
        path = "public\images\products\penpal.png"
    }
)

foreach ($image in $images) {
    $directory = Split-Path -Path $image.path -Parent
    if (-not (Test-Path $directory)) {
        New-Item -ItemType Directory -Force -Path $directory
    }
    Invoke-WebRequest -Uri $image.url -OutFile $image.path
    Write-Host "Downloaded $($image.url) to $($image.path)"
} 