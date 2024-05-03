# SVG to PNG Icon Converter

This package converts SVG icons to multiple PNG icons with required sizes.
(Useful for React-Native applications)

## Installation

```bash
npm install icon-svg-to-png
```

## Input
* A directory containing a list of svg icons.
* Desired output sizes (optional).

## Output
* A directory containing a directory for each icon, each has multiple png icons generated based on required icon sizes.

## Usage

* ### Using default output sizes [24, 48, 72]
```bash
npm icon-svg-to-png /path/to/svg/icons /path/to/output/png/icons
```

This command generates the following
```
───output  
   │
   └───icon-1
   │   └───icon-1.png    (24x24)
   │   └───icon-1@2x.png (48x48)
   │   └───icon-1@3x.png (72x72)
   │
   └───icon-2
   │   └───icon-2.png    (24x24)
   │   └───icon-2@2x.png (48x48)
   │   └───icon-2@3x.png (72x72)
   │
```

* ### Using custom output sizes (comma separated sizes)
```bash
npm icon-svg-to-png /path/to/svg/icons /path/to/output/png/icons 24,48,512
```

This command generates the following
```
───output  
   │
   └───icon-1
   │   └───icon-1.png    (24x24)
   │   └───icon-1@2x.png (48x48)
   │   └───icon-1@3x.png (512x512)
   │
   └───icon-2
   │   └───icon-2.png    (24x24)
   │   └───icon-2@2x.png (48x48)
   │   └───icon-2@3x.png (512x512)
   │
```

## Limitation
- Assuming square sized svg icons as an input
