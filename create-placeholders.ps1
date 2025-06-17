$techIcons = @(
    'java',
    'nodejs',
    'spring',
    'oracle',
    'intellect',
    'react',
    'nextjs',
    'postgresql',
    'mysql',
    'elasticsearch',
    'grafana',
    'gtm',
    'aws',
    'azure',
    'gcp',
    'ai',
    'blockchain',
    'vr-ar',
    'sibs',
    'ios',
    'android',
    'flutter',
    'unity',
    'unreal',
    'cocos2dx'
)

foreach ($icon in $techIcons) {
    Copy-Item "public/tech/placeholder.png" "public/tech/$icon.png"
} 