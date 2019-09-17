var pxtTargetBundle = {
  "id": "microbit",
  "nickname": "microbit",
  "name": "makecode.microbit.org",
  "title": "Microsoft MakeCode for micro:bit",
  "description": "A Blocks / JavaScript code editor for the micro:bit powered by Microsoft MakeCode.",
  "corepkg": [
    "core"
  ],
  "bundleddirs": [
    "libs/core",
    "libs/radio",
    "libs/devices"
  ],
  "cloud": {
    "workspace": false,
    "packages": false,
    "sharing": true,
    "publishing": true,
    "importing": true,
    "preferredPackages": [
      "Microsoft/pxt-neopixel"
    ],
    "githubPackages": true
  },
  "compile": {
    "isNative": false,
    "hasHex": true,
    "deployDrives": "(MICROBIT|MBED)",
    "driveName": "MICROBIT",
    "hexMimeType": "application/x-microbit-hex",
    "openocdScript": "source [find interface/cmsis-dap.cfg]; source [find target/nrf51.cfg]",
    "flashUsableEnd": 242688,
    "flashEnd": 242688,
    "flashCodeAlign": 1024,
    "floatingPoint": true,
    "taggedInts": true,
    "patches": {
      "0.0.0 - 1.0.0": [
        {
          "type": "package",
          "map": {
            "microbit": "core"
          }
        },
        {
          "type": "blockId",
          "map": {
            "device_get_acceleration": "device_acceleration"
          }
        },
        {
          "type": "blockValue",
          "map": {
            "device_print_message.message": "text"
          }
        }
      ]
    },
    "hidSelectors": [
      {
        "usagePage": "0xFF00",
        "usageId": "0x0001",
        "vid": "0x0d28",
        "pid": "0x0204"
      }
    ],
    "webUSB": true,
    "nativeType": "thumb",
    "jsRefCounting": false,
    "vtableShift": 2,
    "noSourceInFlash": true
  },
  "runtime": {
    "mathBlocks": false,
    "loopsBlocks": true,
    "logicBlocks": false,
    "variablesBlocks": false,
    "textBlocks": false,
    "listsBlocks": false,
    "functionBlocks": false,
    "onStartColor": "#1E90FF",
    "onStartNamespace": "basic",
    "onStartWeight": 54
  },
  "simulator": {
    "autoRun": false,
    "streams": false,
    "aspectRatio": 1.22,
    "parts": false,
    "partsAspectRatio": 0.69,
    "boardDefinition": {
      "visual": "microbit",
      "gpioPinBlocks": [
        [
          "P0"
        ],
        [
          "P1"
        ],
        [
          "P2"
        ],
        [
          "P3"
        ],
        [
          "P4",
          "P5",
          "P6",
          "P7"
        ],
        [
          "P8",
          "P9",
          "P10",
          "P11",
          "P12"
        ],
        [
          "P16"
        ]
      ],
      "gpioPinMap": {
        "P0": "P0",
        "P1": "P1",
        "P2": "P2",
        "P3": "P3",
        "P4": "P4",
        "P5": "P5",
        "P6": "P6",
        "P7": "P7",
        "P8": "P8",
        "P9": "P9",
        "P10": "P10",
        "P11": "P11",
        "P12": "P12",
        "P13": "P13",
        "P14": "P14",
        "P15": "P15",
        "P16": "P16",
        "P19": "P19",
        "P20": "P20"
      },
      "spiPins": {
        "MOSI": "P15",
        "MISO": "P14",
        "SCK": "P13"
      },
      "i2cPins": {
        "SDA": "P20",
        "SCL": "P19"
      },
      "analogInPins": [
        "P0",
        "P1",
        "P2",
        "P3",
        "P10"
      ],
      "groundPins": [
        "GND"
      ],
      "threeVoltPins": [
        "+3v3"
      ],
      "attachPowerOnRight": true,
      "onboardComponents": [
        "accelerometer",
        "buttonpair",
        "ledmatrix",
        "speaker",
        "bluetooth",
        "thermometer",
        "compass"
      ],
      "pinStyles": {
        "P0": "croc",
        "P1": "croc",
        "P2": "croc",
        "GND": "croc",
        "+3v3": "croc"
      },
      "marginWhenBreadboarding": [
        0,
        0,
        80,
        0
      ]
    }
  },
  "compileService": {
    "yottaTarget": "bbc-microbit-classic-gcc",
    "yottaCorePackage": "microbit",
    "githubCorePackage": "lancaster-university/microbit",
    "gittag": "v2.1.0",
    "serviceId": "microbit",
    "dockerImage": "pext/yotta:latest",
    "yottaBinary": "pxt-microbit-app-combined.hex"
  },
  "serial": {
    "nameFilter": "^(mbed Serial Port|DAPLink CMSIS-DAP)",
    "log": true,
    "useEditor": true,
    "editorTheme": {
      "graphBackground": "#d9d9d9",
      "lineColors": [
        "#6633cc",
        "#3891A6",
        "#3454D1",
        "#EF767A",
        "#F46197",
        "#107C10"
      ]
    },
    "vendorId": "0x0d28",
    "productId": "0x0204",
    "rawHID": true
  },
  "appTheme": {
    "accentColor": "#5C005C",
    "logoUrl": "https://microbit.org/code/",
    "logo": "docs/static/logo.portrait.white.svg",
    "docsLogo": "docs/static/logo.square.white.svg",
    "portraitLogo": "docs/static/logo.square.white.svg",
    "footerLogo": "docs/static/logo.portrait.black.svg",
    "cardLogo": "docs/static/icons/apple-touch-icon.png",
    "appLogo": "docs/static/icons/apple-touch-icon.png",
    "organization": "Microsoft MakeCode",
    "organizationUrl": "https://makecode.com/",
    "organizationLogo": "docs/static/Microsoft-logo_rgb_c-gray-square.png",
    "organizationWideLogo": "docs/static/Microsoft-logo_rgb_c-white.png",
    "homeScreenHero": "docs/static/hero.png",
    "homeUrl": "/pxt-sharks/",
    "embedUrl": "https://makecode.microbit.org/",
    "shareUrl": "https://makecode.microbit.org/",
    "privacyUrl": "https://makecode.com/privacy",
    "termsOfUseUrl": "https://makecode.com/termsofuse",
    "githubUrl": "https://github.com/Microsoft/pxt-microbit",
    "boardName": "micro:bit",
    "driveDisplayName": "MICROBIT",
    "appStoreID": "1092687276",
    "mobileSafariDownloadProtocol": "microbithex://?data",
    "crowdinProject": "kindscript",
    "extendEditor": true,
    "extendFieldEditors": true,
    "enableTrace": true,
    "ignoreDocsErrors": true,
    "experiments": [
      "greenScreen",
      "print",
      "allowPackageExtensions",
      "instructions",
      "debugger",
      "bluetoothUartConsole",
      "bluetoothPartialFlashing"
    ],
    "bluetoothUartFilters": [
      {
        "namePrefix": "BBC micro:bit"
      }
    ],
    "docMenu": [
      {
        "name": "Support",
        "path": "https://support.microbit.org/"
      },
      {
        "name": "Reference",
        "path": "/pxt-sharks/docs/reference"
      },
      {
        "name": "Blocks",
        "path": "/pxt-sharks/docs/blocks"
      },
      {
        "name": "JavaScript",
        "path": "/pxt-sharks/docs/javascript"
      },
      {
        "name": "Hardware",
        "path": "/pxt-sharks/docs/device"
      },
      {
        "name": "Buy",
        "path": "https://microbit.org/resellers"
      }
    ],
    "hasReferenceDocs": true,
    "usbDocs": "/device/usb",
    "usbHelp": [
      {
        "name": "connection",
        "os": "*",
        "browser": "*",
        "path": "/static/mb/device/usb-generic.jpg"
      },
      {
        "name": "connection",
        "os": "mac",
        "browser": "*",
        "path": "/static/mb/device/usb-mac.jpg"
      },
      {
        "name": "save",
        "os": "windows",
        "browser": "firefox",
        "path": "/static/mb/device/usb-windows-firefox-1.png"
      },
      {
        "name": "save",
        "os": "mac",
        "browser": "firefox",
        "path": "/static/mb/device/usb-osx-firefox-1.jpg"
      },
      {
        "name": "save",
        "os": "mac",
        "browser": "chrome",
        "path": "/static/mb/device/usb-osx-chrome.png"
      },
      {
        "name": "save",
        "os": "windows",
        "browser": "edge",
        "path": "/static/mb/device/usb-windows-edge-1.png"
      },
      {
        "name": "save",
        "os": "windows",
        "browser": "ie",
        "path": "/static/mb/device/usb-windows-ie11-1.png"
      },
      {
        "name": "save",
        "os": "windows",
        "browser": "chrome",
        "path": "/static/mb/device/usb-windows-chrome.png"
      },
      {
        "name": "copy",
        "os": "mac",
        "browser": "*",
        "path": "/static/mb/device/usb-osx-dnd.png"
      },
      {
        "name": "copy",
        "os": "windows",
        "browser": "*",
        "path": "/static/mb/device/usb-windows-sendto.jpg"
      }
    ],
    "invertedMenu": true,
    "coloredToolbox": true,
    "monacoToolbox": true,
    "hasAudio": true,
    "blocklyOptions": {
      "grid": {
        "spacing": 45,
        "length": 7,
        "colour": "rgba(189, 195, 199, 0.30)",
        "snap": false
      }
    },
    "blockColors": {
      "logic": "#00A4A6",
      "loops": "#30c947",
      "math": "#9400D3",
      "variables": "#1E90FF",
      "text": "#B8860B",
      "advanced": "#00272B",
      "functions": "#3455DB",
      "arrays": "#00A4A6"
    },
    "highContrast": true,
    "greenScreen": false,
    "selectLanguage": true,
    "availableLocales": [
      "en",
      "ar",
      "cs",
      "da",
      "de",
      "el",
      "es-ES",
      "fi",
      "fr",
      "hu",
      "is",
      "it",
      "ja",
      "ko",
      "nl",
      "no",
      "pt-BR",
      "pt-PT",
      "ru",
      "si-LK",
      "sk",
      "sv-SE",
      "tr",
      "uk",
      "zh-CN",
      "zh-TW"
    ],
    "monacoColors": {
      "editor.background": "#ecf0f1"
    },
    "browserDbPrefixes": {
      "1": "v1"
    },
    "editorVersionPaths": {
      "0": "v0"
    },
    "TOC": [
      {
        "name": "About",
        "subitems": [],
        "path": "/about",
        "nextName": "FAQ",
        "nextPath": "/faq"
      },
      {
        "name": "FAQ",
        "subitems": [],
        "path": "/faq",
        "prevName": "About",
        "prevPath": "/about",
        "nextName": "Support",
        "nextPath": "https://support.microbit.org/"
      },
      {
        "name": "Support",
        "subitems": [],
        "path": "https://support.microbit.org/",
        "prevName": "FAQ",
        "prevPath": "/faq",
        "nextName": "Projects",
        "nextPath": "/projects"
      },
      {
        "name": "Projects",
        "subitems": [
          {
            "name": "Flashing Heart",
            "subitems": [],
            "path": "/projects/flashing-heart",
            "prevName": "Projects",
            "prevPath": "/projects",
            "nextName": "Smiley Buttons",
            "nextPath": "/projects/smiley-buttons"
          },
          {
            "name": "Smiley Buttons",
            "subitems": [],
            "path": "/projects/smiley-buttons",
            "prevName": "Flashing Heart",
            "prevPath": "/projects/flashing-heart",
            "nextName": "Love Meter",
            "nextPath": "/projects/love-meter"
          },
          {
            "name": "Love Meter",
            "subitems": [],
            "path": "/projects/love-meter",
            "prevName": "Smiley Buttons",
            "prevPath": "/projects/smiley-buttons",
            "nextName": "Rock Paper Scissors",
            "nextPath": "/projects/rock-paper-scissors"
          },
          {
            "name": "Rock Paper Scissors",
            "subitems": [],
            "path": "/projects/rock-paper-scissors",
            "prevName": "Love Meter",
            "prevPath": "/projects/love-meter",
            "nextName": "Magic Button Trick",
            "nextPath": "/projects/magic-button-trick"
          },
          {
            "name": "Magic Button Trick",
            "subitems": [],
            "path": "/projects/magic-button-trick",
            "prevName": "Rock Paper Scissors",
            "prevPath": "/projects/rock-paper-scissors",
            "nextName": "Coin Flipper",
            "nextPath": "/projects/coin-flipper"
          },
          {
            "name": "Coin Flipper",
            "subitems": [],
            "path": "/projects/coin-flipper",
            "prevName": "Magic Button Trick",
            "prevPath": "/projects/magic-button-trick",
            "nextName": "Salute!",
            "nextPath": "/projects/salute"
          },
          {
            "name": "Salute!",
            "subitems": [],
            "path": "/projects/salute",
            "prevName": "Coin Flipper",
            "prevPath": "/projects/coin-flipper",
            "nextName": "Hack Your Headphones",
            "nextPath": "/projects/hack-your-headphones"
          },
          {
            "name": "Hack Your Headphones",
            "subitems": [],
            "path": "/projects/hack-your-headphones",
            "prevName": "Salute!",
            "prevPath": "/projects/salute",
            "nextName": "Banana Keyboard",
            "nextPath": "/projects/banana-keyboard"
          },
          {
            "name": "Banana Keyboard",
            "subitems": [],
            "path": "/projects/banana-keyboard",
            "prevName": "Hack Your Headphones",
            "prevPath": "/projects/hack-your-headphones",
            "nextName": "Guitar",
            "nextPath": "/projects/guitar"
          },
          {
            "name": "Guitar",
            "subitems": [],
            "path": "/projects/guitar",
            "prevName": "Banana Keyboard",
            "prevPath": "/projects/banana-keyboard",
            "nextName": "Duct Tape Wallet",
            "nextPath": "/projects/wallet"
          },
          {
            "name": "Duct Tape Wallet",
            "subitems": [],
            "path": "/projects/wallet",
            "prevName": "Guitar",
            "prevPath": "/projects/guitar",
            "nextName": "Watch",
            "nextPath": "/projects/watch"
          },
          {
            "name": "Watch",
            "subitems": [],
            "path": "/projects/watch",
            "prevName": "Duct Tape Wallet",
            "prevPath": "/projects/wallet",
            "nextName": "Soil Moisture",
            "nextPath": "/projects/soil-moisture"
          },
          {
            "name": "Soil Moisture",
            "subitems": [],
            "path": "/projects/soil-moisture",
            "prevName": "Watch",
            "prevPath": "/projects/watch",
            "nextName": "Plant Watering",
            "nextPath": "/projects/plant-watering"
          },
          {
            "name": "Plant Watering",
            "subitems": [],
            "path": "/projects/plant-watering",
            "prevName": "Soil Moisture",
            "prevPath": "/projects/soil-moisture",
            "nextName": "Reaction Time",
            "nextPath": "/projects/reaction-time"
          },
          {
            "name": "Reaction Time",
            "subitems": [],
            "path": "/projects/reaction-time",
            "prevName": "Plant Watering",
            "prevPath": "/projects/plant-watering",
            "nextName": "States of Matter",
            "nextPath": "/projects/states-of-matter"
          },
          {
            "name": "States of Matter",
            "subitems": [],
            "path": "/projects/states-of-matter",
            "prevName": "Reaction Time",
            "prevPath": "/projects/reaction-time",
            "nextName": "Mood Radio",
            "nextPath": "/projects/mood-radio"
          },
          {
            "name": "Mood Radio",
            "subitems": [],
            "path": "/projects/mood-radio",
            "prevName": "States of Matter",
            "prevPath": "/projects/states-of-matter",
            "nextName": "Tele-Potato",
            "nextPath": "/projects/tele-potato"
          },
          {
            "name": "Tele-Potato",
            "subitems": [],
            "path": "/projects/tele-potato",
            "prevName": "Mood Radio",
            "prevPath": "/projects/mood-radio",
            "nextName": "Hot or Cold",
            "nextPath": "/projects/hot-or-cold"
          },
          {
            "name": "Hot or Cold",
            "subitems": [],
            "path": "/projects/hot-or-cold",
            "prevName": "Tele-Potato",
            "prevPath": "/projects/tele-potato",
            "nextName": "Voting Machine",
            "nextPath": "/projects/voting-machine"
          },
          {
            "name": "Voting Machine",
            "subitems": [],
            "path": "/projects/voting-machine",
            "prevName": "Hot or Cold",
            "prevPath": "/projects/hot-or-cold",
            "nextName": "Infection",
            "nextPath": "/projects/infection"
          },
          {
            "name": "Infection",
            "subitems": [],
            "path": "/projects/infection",
            "prevName": "Voting Machine",
            "prevPath": "/projects/voting-machine",
            "nextName": "Fireflies",
            "nextPath": "/projects/fireflies"
          },
          {
            "name": "Fireflies",
            "subitems": [],
            "path": "/projects/fireflies",
            "prevName": "Infection",
            "prevPath": "/projects/infection",
            "nextName": "Rock Paper Scissors Teams",
            "nextPath": "/projects/rps-teams"
          },
          {
            "name": "Rock Paper Scissors Teams",
            "subitems": [],
            "path": "/projects/rps-teams",
            "prevName": "Fireflies",
            "prevPath": "/projects/fireflies",
            "nextName": "Inchworm",
            "nextPath": "/projects/inchworm"
          },
          {
            "name": "Inchworm",
            "subitems": [],
            "path": "/projects/inchworm",
            "prevName": "Rock Paper Scissors Teams",
            "prevPath": "/projects/rps-teams",
            "nextName": "Milk Carton Robot",
            "nextPath": "/projects/milk-carton-robot"
          },
          {
            "name": "Milk Carton Robot",
            "subitems": [],
            "path": "/projects/milk-carton-robot",
            "prevName": "Inchworm",
            "prevPath": "/projects/inchworm",
            "nextName": "Milk Monster",
            "nextPath": "/projects/milky-monster"
          },
          {
            "name": "Milk Monster",
            "subitems": [],
            "path": "/projects/milky-monster",
            "prevName": "Milk Carton Robot",
            "prevPath": "/projects/milk-carton-robot",
            "nextName": "RC Car",
            "nextPath": "/projects/rc-car"
          },
          {
            "name": "RC Car",
            "subitems": [],
            "path": "/projects/rc-car",
            "prevName": "Milk Monster",
            "prevPath": "/projects/milky-monster",
            "nextName": "Timing Gates",
            "nextPath": "/projects/timing-gates"
          },
          {
            "name": "Timing Gates",
            "subitems": [],
            "path": "/projects/timing-gates",
            "prevName": "RC Car",
            "prevPath": "/projects/rc-car",
            "nextName": "Compass",
            "nextPath": "/projects/compass"
          },
          {
            "name": "Compass",
            "subitems": [],
            "path": "/projects/compass",
            "prevName": "Timing Gates",
            "prevPath": "/projects/timing-gates",
            "nextName": "Telegraph",
            "nextPath": "/projects/telegraph"
          },
          {
            "name": "Telegraph",
            "subitems": [],
            "path": "/projects/telegraph",
            "prevName": "Compass",
            "prevPath": "/projects/compass",
            "nextName": "Railway Crossing",
            "nextPath": "/projects/railway-crossing"
          },
          {
            "name": "Railway Crossing",
            "subitems": [],
            "path": "/projects/railway-crossing",
            "prevName": "Telegraph",
            "prevPath": "/projects/telegraph",
            "nextName": "Karel",
            "nextPath": "/projects/karel"
          },
          {
            "name": "Karel",
            "subitems": [],
            "path": "/projects/karel",
            "prevName": "Railway Crossing",
            "prevPath": "/projects/railway-crossing",
            "nextName": "Stopwatch",
            "nextPath": "/projects/stopwatch"
          },
          {
            "name": "Stopwatch",
            "subitems": [],
            "path": "/projects/stopwatch",
            "prevName": "Karel",
            "prevPath": "/projects/karel",
            "nextName": "Name Tag",
            "nextPath": "/projects/name-tag"
          },
          {
            "name": "Name Tag",
            "subitems": [],
            "path": "/projects/name-tag",
            "prevName": "Stopwatch",
            "prevPath": "/projects/stopwatch",
            "nextName": "Step counter",
            "nextPath": "/projects/step-counter"
          },
          {
            "name": "Step counter",
            "subitems": [],
            "path": "/projects/step-counter",
            "prevName": "Name Tag",
            "prevPath": "/projects/name-tag",
            "nextName": "Servo calibrator",
            "nextPath": "/projects/servo-calibrator"
          },
          {
            "name": "Servo calibrator",
            "subitems": [],
            "path": "/projects/servo-calibrator",
            "prevName": "Step counter",
            "prevPath": "/projects/step-counter",
            "nextName": "Analog Pin Tester",
            "nextPath": "/projects/analog-pin-tester"
          },
          {
            "name": "Analog Pin Tester",
            "subitems": [],
            "path": "/projects/analog-pin-tester",
            "prevName": "Servo calibrator",
            "prevPath": "/projects/servo-calibrator",
            "nextName": "Light Level Meter",
            "nextPath": "/projects/light-level-meter"
          },
          {
            "name": "Light Level Meter",
            "subitems": [],
            "path": "/projects/light-level-meter",
            "prevName": "Analog Pin Tester",
            "prevPath": "/projects/analog-pin-tester",
            "nextName": "Radio bridge",
            "nextPath": "/projects/radio-bridge"
          },
          {
            "name": "Radio bridge",
            "subitems": [],
            "path": "/projects/radio-bridge",
            "prevName": "Light Level Meter",
            "prevPath": "/projects/light-level-meter",
            "nextName": "Snap the dot",
            "nextPath": "/projects/snap-the-dot"
          },
          {
            "name": "Snap the dot",
            "subitems": [],
            "path": "/projects/snap-the-dot",
            "prevName": "Radio bridge",
            "prevPath": "/projects/radio-bridge",
            "nextName": "Red light green light",
            "nextPath": "/projects/red-light-green-light"
          },
          {
            "name": "Red light green light",
            "subitems": [],
            "path": "/projects/red-light-green-light",
            "prevName": "Snap the dot",
            "prevPath": "/projects/snap-the-dot",
            "nextName": "Courses",
            "nextPath": "/courses"
          }
        ],
        "path": "/projects",
        "prevName": "Support",
        "prevPath": "https://support.microbit.org/",
        "nextName": "Flashing Heart",
        "nextPath": "/projects/flashing-heart"
      },
      {
        "name": "Courses",
        "subitems": [
          {
            "name": "CS Intro",
            "subitems": [
              {
                "name": "About",
                "subitems": [],
                "path": "/courses/csintro/about",
                "prevName": "CS Intro",
                "prevPath": "/courses/csintro",
                "nextName": "Introduction",
                "nextPath": "/courses/csintro/introduction"
              },
              {
                "name": "Introduction",
                "subitems": [],
                "path": "/courses/csintro/introduction",
                "prevName": "About",
                "prevPath": "/courses/csintro/about",
                "nextName": "References",
                "nextPath": "/courses/csintro/references"
              },
              {
                "name": "References",
                "subitems": [],
                "path": "/courses/csintro/references",
                "prevName": "Introduction",
                "prevPath": "/courses/csintro/introduction",
                "nextName": "Acknowledgements",
                "nextPath": "/courses/csintro/acknowledgements"
              },
              {
                "name": "Acknowledgements",
                "subitems": [],
                "path": "/courses/csintro/acknowledgements",
                "prevName": "References",
                "prevPath": "/courses/csintro/references",
                "nextName": "Making",
                "nextPath": "/courses/csintro/making"
              },
              {
                "name": "Making",
                "subitems": [
                  {
                    "name": "Introduction",
                    "subitems": [],
                    "path": "/courses/csintro/making/introduction",
                    "prevName": "Making",
                    "prevPath": "/courses/csintro/making",
                    "nextName": "Unplugged",
                    "nextPath": "/courses/csintro/making/unplugged"
                  },
                  {
                    "name": "Unplugged",
                    "subitems": [],
                    "path": "/courses/csintro/making/unplugged",
                    "prevName": "Introduction",
                    "prevPath": "/courses/csintro/making/introduction",
                    "nextName": "Walkthrough",
                    "nextPath": "/courses/csintro/making/activity"
                  },
                  {
                    "name": "Walkthrough",
                    "subitems": [],
                    "path": "/courses/csintro/making/activity",
                    "prevName": "Unplugged",
                    "prevPath": "/courses/csintro/making/unplugged",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/making/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/making/project",
                    "prevName": "Walkthrough",
                    "prevPath": "/courses/csintro/making/activity",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/making/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/making/standards",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/making/project",
                    "nextName": "Algorithms",
                    "nextPath": "/courses/csintro/algorithms"
                  }
                ],
                "path": "/courses/csintro/making",
                "prevName": "Acknowledgements",
                "prevPath": "/courses/csintro/acknowledgements",
                "nextName": "Introduction",
                "nextPath": "/courses/csintro/making/introduction"
              },
              {
                "name": "Algorithms",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/csintro/algorithms/overview",
                    "prevName": "Algorithms",
                    "prevPath": "/courses/csintro/algorithms",
                    "nextName": "Unplugged",
                    "nextPath": "/courses/csintro/algorithms/unplugged"
                  },
                  {
                    "name": "Unplugged",
                    "subitems": [],
                    "path": "/courses/csintro/algorithms/unplugged",
                    "prevName": "Overview",
                    "prevPath": "/courses/csintro/algorithms/overview",
                    "nextName": "Activity",
                    "nextPath": "/courses/csintro/algorithms/activity"
                  },
                  {
                    "name": "Activity",
                    "subitems": [],
                    "path": "/courses/csintro/algorithms/activity",
                    "prevName": "Unplugged",
                    "prevPath": "/courses/csintro/algorithms/unplugged",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/algorithms/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/algorithms/project",
                    "prevName": "Activity",
                    "prevPath": "/courses/csintro/algorithms/activity",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/algorithms/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/algorithms/standards",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/algorithms/project",
                    "nextName": "Variables",
                    "nextPath": "/courses/csintro/variables"
                  }
                ],
                "path": "/courses/csintro/algorithms",
                "prevName": "Standards",
                "prevPath": "/courses/csintro/making/standards",
                "nextName": "Overview",
                "nextPath": "/courses/csintro/algorithms/overview"
              },
              {
                "name": "Variables",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/csintro/variables/overview",
                    "prevName": "Variables",
                    "prevPath": "/courses/csintro/variables",
                    "nextName": "Unplugged",
                    "nextPath": "/courses/csintro/variables/unplugged"
                  },
                  {
                    "name": "Unplugged",
                    "subitems": [],
                    "path": "/courses/csintro/variables/unplugged",
                    "prevName": "Overview",
                    "prevPath": "/courses/csintro/variables/overview",
                    "nextName": "Activity",
                    "nextPath": "/courses/csintro/variables/activity"
                  },
                  {
                    "name": "Activity",
                    "subitems": [],
                    "path": "/courses/csintro/variables/activity",
                    "prevName": "Unplugged",
                    "prevPath": "/courses/csintro/variables/unplugged",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/variables/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/variables/project",
                    "prevName": "Activity",
                    "prevPath": "/courses/csintro/variables/activity",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/variables/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/variables/standards",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/variables/project",
                    "nextName": "Conditionals",
                    "nextPath": "/courses/csintro/conditionals"
                  }
                ],
                "path": "/courses/csintro/variables",
                "prevName": "Standards",
                "prevPath": "/courses/csintro/algorithms/standards",
                "nextName": "Overview",
                "nextPath": "/courses/csintro/variables/overview"
              },
              {
                "name": "Conditionals",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/csintro/conditionals/overview",
                    "prevName": "Conditionals",
                    "prevPath": "/courses/csintro/conditionals",
                    "nextName": "Unplugged",
                    "nextPath": "/courses/csintro/conditionals/unplugged"
                  },
                  {
                    "name": "Unplugged",
                    "subitems": [],
                    "path": "/courses/csintro/conditionals/unplugged",
                    "prevName": "Overview",
                    "prevPath": "/courses/csintro/conditionals/overview",
                    "nextName": "Activity",
                    "nextPath": "/courses/csintro/conditionals/activity"
                  },
                  {
                    "name": "Activity",
                    "subitems": [],
                    "path": "/courses/csintro/conditionals/activity",
                    "prevName": "Unplugged",
                    "prevPath": "/courses/csintro/conditionals/unplugged",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/conditionals/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/conditionals/project",
                    "prevName": "Activity",
                    "prevPath": "/courses/csintro/conditionals/activity",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/conditionals/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/conditionals/standards",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/conditionals/project",
                    "nextName": "Iteration",
                    "nextPath": "/courses/csintro/iteration"
                  }
                ],
                "path": "/courses/csintro/conditionals",
                "prevName": "Standards",
                "prevPath": "/courses/csintro/variables/standards",
                "nextName": "Overview",
                "nextPath": "/courses/csintro/conditionals/overview"
              },
              {
                "name": "Iteration",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/csintro/iteration/overview",
                    "prevName": "Iteration",
                    "prevPath": "/courses/csintro/iteration",
                    "nextName": "Unplugged",
                    "nextPath": "/courses/csintro/iteration/unplugged"
                  },
                  {
                    "name": "Unplugged",
                    "subitems": [],
                    "path": "/courses/csintro/iteration/unplugged",
                    "prevName": "Overview",
                    "prevPath": "/courses/csintro/iteration/overview",
                    "nextName": "Activity",
                    "nextPath": "/courses/csintro/iteration/activity"
                  },
                  {
                    "name": "Activity",
                    "subitems": [],
                    "path": "/courses/csintro/iteration/activity",
                    "prevName": "Unplugged",
                    "prevPath": "/courses/csintro/iteration/unplugged",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/iteration/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/iteration/project",
                    "prevName": "Activity",
                    "prevPath": "/courses/csintro/iteration/activity",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/iteration/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/iteration/standards",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/iteration/project",
                    "nextName": "Mini-project",
                    "nextPath": "/courses/csintro/miniproject"
                  }
                ],
                "path": "/courses/csintro/iteration",
                "prevName": "Standards",
                "prevPath": "/courses/csintro/conditionals/standards",
                "nextName": "Overview",
                "nextPath": "/courses/csintro/iteration/overview"
              },
              {
                "name": "Mini-project",
                "subitems": [
                  {
                    "name": "Review",
                    "subitems": [],
                    "path": "/courses/csintro/miniproject/review",
                    "prevName": "Mini-project",
                    "prevPath": "/courses/csintro/miniproject",
                    "nextName": "Activity",
                    "nextPath": "/courses/csintro/miniproject/activity"
                  },
                  {
                    "name": "Activity",
                    "subitems": [],
                    "path": "/courses/csintro/miniproject/activity",
                    "prevName": "Review",
                    "prevPath": "/courses/csintro/miniproject/review",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/miniproject/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/miniproject/project",
                    "prevName": "Activity",
                    "prevPath": "/courses/csintro/miniproject/activity",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/miniproject/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/miniproject/standards",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/miniproject/project",
                    "nextName": "Coordinates",
                    "nextPath": "/courses/csintro/coordinates"
                  }
                ],
                "path": "/courses/csintro/miniproject",
                "prevName": "Standards",
                "prevPath": "/courses/csintro/iteration/standards",
                "nextName": "Review",
                "nextPath": "/courses/csintro/miniproject/review"
              },
              {
                "name": "Coordinates",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/csintro/coordinates/overview",
                    "prevName": "Coordinates",
                    "prevPath": "/courses/csintro/coordinates",
                    "nextName": "Unplugged",
                    "nextPath": "/courses/csintro/coordinates/unplugged"
                  },
                  {
                    "name": "Unplugged",
                    "subitems": [],
                    "path": "/courses/csintro/coordinates/unplugged",
                    "prevName": "Overview",
                    "prevPath": "/courses/csintro/coordinates/overview",
                    "nextName": "Activity",
                    "nextPath": "/courses/csintro/coordinates/activity"
                  },
                  {
                    "name": "Activity",
                    "subitems": [],
                    "path": "/courses/csintro/coordinates/activity",
                    "prevName": "Unplugged",
                    "prevPath": "/courses/csintro/coordinates/unplugged",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/coordinates/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/coordinates/project",
                    "prevName": "Activity",
                    "prevPath": "/courses/csintro/coordinates/activity",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/coordinates/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/coordinates/standards",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/coordinates/project",
                    "nextName": "Booleans",
                    "nextPath": "/courses/csintro/booleans"
                  }
                ],
                "path": "/courses/csintro/coordinates",
                "prevName": "Standards",
                "prevPath": "/courses/csintro/miniproject/standards",
                "nextName": "Overview",
                "nextPath": "/courses/csintro/coordinates/overview"
              },
              {
                "name": "Booleans",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/csintro/booleans/overview",
                    "prevName": "Booleans",
                    "prevPath": "/courses/csintro/booleans",
                    "nextName": "Unplugged",
                    "nextPath": "/courses/csintro/booleans/unplugged"
                  },
                  {
                    "name": "Unplugged",
                    "subitems": [],
                    "path": "/courses/csintro/booleans/unplugged",
                    "prevName": "Overview",
                    "prevPath": "/courses/csintro/booleans/overview",
                    "nextName": "Activity",
                    "nextPath": "/courses/csintro/booleans/activity"
                  },
                  {
                    "name": "Activity",
                    "subitems": [],
                    "path": "/courses/csintro/booleans/activity",
                    "prevName": "Unplugged",
                    "prevPath": "/courses/csintro/booleans/unplugged",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/booleans/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/booleans/project",
                    "prevName": "Activity",
                    "prevPath": "/courses/csintro/booleans/activity",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/booleans/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/booleans/standards",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/booleans/project",
                    "nextName": "Binary",
                    "nextPath": "/courses/csintro/binary"
                  }
                ],
                "path": "/courses/csintro/booleans",
                "prevName": "Standards",
                "prevPath": "/courses/csintro/coordinates/standards",
                "nextName": "Overview",
                "nextPath": "/courses/csintro/booleans/overview"
              },
              {
                "name": "Binary",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/csintro/binary/overview",
                    "prevName": "Binary",
                    "prevPath": "/courses/csintro/binary",
                    "nextName": "Unplugged",
                    "nextPath": "/courses/csintro/binary/unplugged"
                  },
                  {
                    "name": "Unplugged",
                    "subitems": [],
                    "path": "/courses/csintro/binary/unplugged",
                    "prevName": "Overview",
                    "prevPath": "/courses/csintro/binary/overview",
                    "nextName": "Activity",
                    "nextPath": "/courses/csintro/binary/activity"
                  },
                  {
                    "name": "Activity",
                    "subitems": [],
                    "path": "/courses/csintro/binary/activity",
                    "prevName": "Unplugged",
                    "prevPath": "/courses/csintro/binary/unplugged",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/binary/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/binary/project",
                    "prevName": "Activity",
                    "prevPath": "/courses/csintro/binary/activity",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/binary/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/binary/standards",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/binary/project",
                    "nextName": "Radio",
                    "nextPath": "/courses/csintro/radio"
                  }
                ],
                "path": "/courses/csintro/binary",
                "prevName": "Standards",
                "prevPath": "/courses/csintro/booleans/standards",
                "nextName": "Overview",
                "nextPath": "/courses/csintro/binary/overview"
              },
              {
                "name": "Radio",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/csintro/radio/overview",
                    "prevName": "Radio",
                    "prevPath": "/courses/csintro/radio",
                    "nextName": "Unplugged",
                    "nextPath": "/courses/csintro/radio/unplugged"
                  },
                  {
                    "name": "Unplugged",
                    "subitems": [],
                    "path": "/courses/csintro/radio/unplugged",
                    "prevName": "Overview",
                    "prevPath": "/courses/csintro/radio/overview",
                    "nextName": "Activity",
                    "nextPath": "/courses/csintro/radio/activity"
                  },
                  {
                    "name": "Activity",
                    "subitems": [],
                    "path": "/courses/csintro/radio/activity",
                    "prevName": "Unplugged",
                    "prevPath": "/courses/csintro/radio/unplugged",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/radio/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/radio/project",
                    "prevName": "Activity",
                    "prevPath": "/courses/csintro/radio/activity",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/radio/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/radio/standards",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/radio/project",
                    "nextName": "Arrays",
                    "nextPath": "/courses/csintro/arrays"
                  }
                ],
                "path": "/courses/csintro/radio",
                "prevName": "Standards",
                "prevPath": "/courses/csintro/binary/standards",
                "nextName": "Overview",
                "nextPath": "/courses/csintro/radio/overview"
              },
              {
                "name": "Arrays",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/csintro/arrays/overview",
                    "prevName": "Arrays",
                    "prevPath": "/courses/csintro/arrays",
                    "nextName": "Unplugged",
                    "nextPath": "/courses/csintro/arrays/unplugged"
                  },
                  {
                    "name": "Unplugged",
                    "subitems": [],
                    "path": "/courses/csintro/arrays/unplugged",
                    "prevName": "Overview",
                    "prevPath": "/courses/csintro/arrays/overview",
                    "nextName": "Activity",
                    "nextPath": "/courses/csintro/arrays/activity"
                  },
                  {
                    "name": "Activity",
                    "subitems": [],
                    "path": "/courses/csintro/arrays/activity",
                    "prevName": "Unplugged",
                    "prevPath": "/courses/csintro/arrays/unplugged",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/arrays/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/arrays/project",
                    "prevName": "Activity",
                    "prevPath": "/courses/csintro/arrays/activity",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/arrays/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/arrays/standards",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/arrays/project",
                    "nextName": "Final Project",
                    "nextPath": "/courses/csintro/finalproject"
                  }
                ],
                "path": "/courses/csintro/arrays",
                "prevName": "Standards",
                "prevPath": "/courses/csintro/radio/standards",
                "nextName": "Overview",
                "nextPath": "/courses/csintro/arrays/overview"
              },
              {
                "name": "Final Project",
                "subitems": [
                  {
                    "name": "Review",
                    "subitems": [],
                    "path": "/courses/csintro/finalproject/review",
                    "prevName": "Final Project",
                    "prevPath": "/courses/csintro/finalproject",
                    "nextName": "Project",
                    "nextPath": "/courses/csintro/finalproject/project"
                  },
                  {
                    "name": "Project",
                    "subitems": [],
                    "path": "/courses/csintro/finalproject/project",
                    "prevName": "Review",
                    "prevPath": "/courses/csintro/finalproject/review",
                    "nextName": "Examples",
                    "nextPath": "/courses/csintro/finalproject/examples"
                  },
                  {
                    "name": "Examples",
                    "subitems": [],
                    "path": "/courses/csintro/finalproject/examples",
                    "prevName": "Project",
                    "prevPath": "/courses/csintro/finalproject/project",
                    "nextName": "Standards",
                    "nextPath": "/courses/csintro/finalproject/standards"
                  },
                  {
                    "name": "Standards",
                    "subitems": [],
                    "path": "/courses/csintro/finalproject/standards",
                    "prevName": "Examples",
                    "prevPath": "/courses/csintro/finalproject/examples",
                    "nextName": "Blocks to JavaScript",
                    "nextPath": "/courses/blocks-to-javascript"
                  }
                ],
                "path": "/courses/csintro/finalproject",
                "prevName": "Standards",
                "prevPath": "/courses/csintro/arrays/standards",
                "nextName": "Review",
                "nextPath": "/courses/csintro/finalproject/review"
              }
            ],
            "path": "/courses/csintro",
            "prevName": "Courses",
            "prevPath": "/courses",
            "nextName": "About",
            "nextPath": "/courses/csintro/about"
          },
          {
            "name": "Blocks to JavaScript",
            "subitems": [
              {
                "name": "Hello JavaScript",
                "subitems": [],
                "path": "/courses/blocks-to-javascript/hello-javascript",
                "prevName": "Blocks to JavaScript",
                "prevPath": "/courses/blocks-to-javascript",
                "nextName": "Starter Blocks",
                "nextPath": "/courses/blocks-to-javascript/starter-blocks"
              },
              {
                "name": "Starter Blocks",
                "subitems": [],
                "path": "/courses/blocks-to-javascript/starter-blocks",
                "prevName": "Hello JavaScript",
                "prevPath": "/courses/blocks-to-javascript/hello-javascript",
                "nextName": "Writing Code",
                "nextPath": "/courses/blocks-to-javascript/writing-code"
              },
              {
                "name": "Writing Code",
                "subitems": [],
                "path": "/courses/blocks-to-javascript/writing-code",
                "prevName": "Starter Blocks",
                "prevPath": "/courses/blocks-to-javascript/starter-blocks",
                "nextName": "Writing Functions",
                "nextPath": "/courses/blocks-to-javascript/writing-functions"
              },
              {
                "name": "Writing Functions",
                "subitems": [],
                "path": "/courses/blocks-to-javascript/writing-functions",
                "prevName": "Writing Code",
                "prevPath": "/courses/blocks-to-javascript/writing-code",
                "nextName": "Science experiments",
                "nextPath": "/courses/ucp-science"
              }
            ],
            "path": "/courses/blocks-to-javascript",
            "prevName": "Standards",
            "prevPath": "/courses/csintro/finalproject/standards",
            "nextName": "Hello JavaScript",
            "nextPath": "/courses/blocks-to-javascript/hello-javascript"
          },
          {
            "name": "Science experiments",
            "subitems": [
              {
                "name": "Data collection",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/ucp-science/data-collection/overview",
                    "prevName": "Data collection",
                    "prevPath": "/courses/ucp-science/data-collection",
                    "nextName": "Setup and procedure",
                    "nextPath": "/courses/ucp-science/data-collection/setup-procedure"
                  },
                  {
                    "name": "Setup and procedure",
                    "subitems": [],
                    "path": "/courses/ucp-science/data-collection/setup-procedure",
                    "prevName": "Overview",
                    "prevPath": "/courses/ucp-science/data-collection/overview",
                    "nextName": "Resources",
                    "nextPath": "/courses/ucp-science/data-collection/resources"
                  },
                  {
                    "name": "Resources",
                    "subitems": [],
                    "path": "/courses/ucp-science/data-collection/resources",
                    "prevName": "Setup and procedure",
                    "prevPath": "/courses/ucp-science/data-collection/setup-procedure",
                    "nextName": "Population Traits",
                    "nextPath": "/courses/ucp-science/population"
                  }
                ],
                "path": "/courses/ucp-science/data-collection",
                "prevName": "Science experiments",
                "prevPath": "/courses/ucp-science",
                "nextName": "Overview",
                "nextPath": "/courses/ucp-science/data-collection/overview"
              },
              {
                "name": "Population Traits",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/ucp-science/population/overview",
                    "prevName": "Population Traits",
                    "prevPath": "/courses/ucp-science/population",
                    "nextName": "Setup and procedure",
                    "nextPath": "/courses/ucp-science/population/setup-procedure"
                  },
                  {
                    "name": "Setup and procedure",
                    "subitems": [],
                    "path": "/courses/ucp-science/population/setup-procedure",
                    "prevName": "Overview",
                    "prevPath": "/courses/ucp-science/population/overview",
                    "nextName": "Resources",
                    "nextPath": "/courses/ucp-science/population/resources"
                  },
                  {
                    "name": "Resources",
                    "subitems": [],
                    "path": "/courses/ucp-science/population/resources",
                    "prevName": "Setup and procedure",
                    "prevPath": "/courses/ucp-science/population/setup-procedure",
                    "nextName": "Temperature",
                    "nextPath": "/courses/ucp-science/temperature"
                  }
                ],
                "path": "/courses/ucp-science/population",
                "prevName": "Resources",
                "prevPath": "/courses/ucp-science/data-collection/resources",
                "nextName": "Overview",
                "nextPath": "/courses/ucp-science/population/overview"
              },
              {
                "name": "Temperature",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/ucp-science/temperature/overview",
                    "prevName": "Temperature",
                    "prevPath": "/courses/ucp-science/temperature",
                    "nextName": "Setup and procedure",
                    "nextPath": "/courses/ucp-science/temperature/setup-procedure"
                  },
                  {
                    "name": "Setup and procedure",
                    "subitems": [],
                    "path": "/courses/ucp-science/temperature/setup-procedure",
                    "prevName": "Overview",
                    "prevPath": "/courses/ucp-science/temperature/overview",
                    "nextName": "Resources",
                    "nextPath": "/courses/ucp-science/temperature/resources"
                  },
                  {
                    "name": "Resources",
                    "subitems": [],
                    "path": "/courses/ucp-science/temperature/resources",
                    "prevName": "Setup and procedure",
                    "prevPath": "/courses/ucp-science/temperature/setup-procedure",
                    "nextName": "Soil Moisture",
                    "nextPath": "/courses/ucp-science/soil-moisture"
                  }
                ],
                "path": "/courses/ucp-science/temperature",
                "prevName": "Resources",
                "prevPath": "/courses/ucp-science/population/resources",
                "nextName": "Overview",
                "nextPath": "/courses/ucp-science/temperature/overview"
              },
              {
                "name": "Soil Moisture",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/ucp-science/soil-moisture/overview",
                    "prevName": "Soil Moisture",
                    "prevPath": "/courses/ucp-science/soil-moisture",
                    "nextName": "Setup and procedure",
                    "nextPath": "/courses/ucp-science/soil-moisture/setup-procedure"
                  },
                  {
                    "name": "Setup and procedure",
                    "subitems": [],
                    "path": "/courses/ucp-science/soil-moisture/setup-procedure",
                    "prevName": "Overview",
                    "prevPath": "/courses/ucp-science/soil-moisture/overview",
                    "nextName": "Resources",
                    "nextPath": "/courses/ucp-science/soil-moisture/resources"
                  },
                  {
                    "name": "Resources",
                    "subitems": [],
                    "path": "/courses/ucp-science/soil-moisture/resources",
                    "prevName": "Setup and procedure",
                    "prevPath": "/courses/ucp-science/soil-moisture/setup-procedure",
                    "nextName": "Gravity, Motion and Waves",
                    "nextPath": "/courses/ucp-science/gravity"
                  }
                ],
                "path": "/courses/ucp-science/soil-moisture",
                "prevName": "Resources",
                "prevPath": "/courses/ucp-science/temperature/resources",
                "nextName": "Overview",
                "nextPath": "/courses/ucp-science/soil-moisture/overview"
              },
              {
                "name": "Gravity, Motion and Waves",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/ucp-science/gravity/overview",
                    "prevName": "Gravity, Motion and Waves",
                    "prevPath": "/courses/ucp-science/gravity",
                    "nextName": "Setup and procedure",
                    "nextPath": "/courses/ucp-science/gravity/setup-procedure"
                  },
                  {
                    "name": "Setup and procedure",
                    "subitems": [],
                    "path": "/courses/ucp-science/gravity/setup-procedure",
                    "prevName": "Overview",
                    "prevPath": "/courses/ucp-science/gravity/overview",
                    "nextName": "Resources",
                    "nextPath": "/courses/ucp-science/gravity/resources"
                  },
                  {
                    "name": "Resources",
                    "subitems": [],
                    "path": "/courses/ucp-science/gravity/resources",
                    "prevName": "Setup and procedure",
                    "prevPath": "/courses/ucp-science/gravity/setup-procedure",
                    "nextName": "Body Electrical and Waves",
                    "nextPath": "/courses/ucp-science/body-electrical"
                  }
                ],
                "path": "/courses/ucp-science/gravity",
                "prevName": "Resources",
                "prevPath": "/courses/ucp-science/soil-moisture/resources",
                "nextName": "Overview",
                "nextPath": "/courses/ucp-science/gravity/overview"
              },
              {
                "name": "Body Electrical and Waves",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/ucp-science/body-electrical/overview",
                    "prevName": "Body Electrical and Waves",
                    "prevPath": "/courses/ucp-science/body-electrical",
                    "nextName": "Setup and procedure",
                    "nextPath": "/courses/ucp-science/body-electrical/setup-procedure"
                  },
                  {
                    "name": "Setup and procedure",
                    "subitems": [],
                    "path": "/courses/ucp-science/body-electrical/setup-procedure",
                    "prevName": "Overview",
                    "prevPath": "/courses/ucp-science/body-electrical/overview",
                    "nextName": "Resources",
                    "nextPath": "/courses/ucp-science/body-electrical/resources"
                  },
                  {
                    "name": "Resources",
                    "subitems": [],
                    "path": "/courses/ucp-science/body-electrical/resources",
                    "prevName": "Setup and procedure",
                    "prevPath": "/courses/ucp-science/body-electrical/setup-procedure",
                    "nextName": "Electricity",
                    "nextPath": "/courses/ucp-science/electricity"
                  }
                ],
                "path": "/courses/ucp-science/body-electrical",
                "prevName": "Resources",
                "prevPath": "/courses/ucp-science/gravity/resources",
                "nextName": "Overview",
                "nextPath": "/courses/ucp-science/body-electrical/overview"
              },
              {
                "name": "Electricity",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/ucp-science/electricity/overview",
                    "prevName": "Electricity",
                    "prevPath": "/courses/ucp-science/electricity",
                    "nextName": "Setup and procedure",
                    "nextPath": "/courses/ucp-science/electricity/setup-procedure"
                  },
                  {
                    "name": "Setup and procedure",
                    "subitems": [],
                    "path": "/courses/ucp-science/electricity/setup-procedure",
                    "prevName": "Overview",
                    "prevPath": "/courses/ucp-science/electricity/overview",
                    "nextName": "Resources",
                    "nextPath": "/courses/ucp-science/electricity/resources"
                  },
                  {
                    "name": "Resources",
                    "subitems": [],
                    "path": "/courses/ucp-science/electricity/resources",
                    "prevName": "Setup and procedure",
                    "prevPath": "/courses/ucp-science/electricity/setup-procedure",
                    "nextName": "Rocket Acceleration",
                    "nextPath": "/courses/ucp-science/rocket-acceleration"
                  }
                ],
                "path": "/courses/ucp-science/electricity",
                "prevName": "Resources",
                "prevPath": "/courses/ucp-science/body-electrical/resources",
                "nextName": "Overview",
                "nextPath": "/courses/ucp-science/electricity/overview"
              },
              {
                "name": "Rocket Acceleration",
                "subitems": [
                  {
                    "name": "Overview",
                    "subitems": [],
                    "path": "/courses/ucp-science/rocket-acceleration/overview",
                    "prevName": "Rocket Acceleration",
                    "prevPath": "/courses/ucp-science/rocket-acceleration",
                    "nextName": "Build",
                    "nextPath": "/courses/ucp-science/rocket-acceleration/build"
                  },
                  {
                    "name": "Build",
                    "subitems": [],
                    "path": "/courses/ucp-science/rocket-acceleration/build",
                    "prevName": "Overview",
                    "prevPath": "/courses/ucp-science/rocket-acceleration/overview",
                    "nextName": "Setup and procedure",
                    "nextPath": "/courses/ucp-science/rocket-acceleration/setup-procedure"
                  },
                  {
                    "name": "Setup and procedure",
                    "subitems": [],
                    "path": "/courses/ucp-science/rocket-acceleration/setup-procedure",
                    "prevName": "Build",
                    "prevPath": "/courses/ucp-science/rocket-acceleration/build",
                    "nextName": "Resources",
                    "nextPath": "/courses/ucp-science/rocket-acceleration/resources"
                  },
                  {
                    "name": "Resources",
                    "subitems": [],
                    "path": "/courses/ucp-science/rocket-acceleration/resources",
                    "prevName": "Setup and procedure",
                    "prevPath": "/courses/ucp-science/rocket-acceleration/setup-procedure",
                    "nextName": "Reference",
                    "nextPath": "/reference"
                  }
                ],
                "path": "/courses/ucp-science/rocket-acceleration",
                "prevName": "Resources",
                "prevPath": "/courses/ucp-science/electricity/resources",
                "nextName": "Overview",
                "nextPath": "/courses/ucp-science/rocket-acceleration/overview"
              }
            ],
            "path": "/courses/ucp-science",
            "prevName": "Writing Functions",
            "prevPath": "/courses/blocks-to-javascript/writing-functions",
            "nextName": "Data collection",
            "nextPath": "/courses/ucp-science/data-collection"
          }
        ],
        "path": "/courses",
        "prevName": "Red light green light",
        "prevPath": "/projects/red-light-green-light",
        "nextName": "CS Intro",
        "nextPath": "/courses/csintro"
      },
      {
        "name": "Reference",
        "subitems": [
          {
            "name": "Basic",
            "subitems": [
              {
                "name": "show number",
                "subitems": [],
                "path": "/reference/basic/show-number",
                "prevName": "Basic",
                "prevPath": "/reference/basic",
                "nextName": "show icon",
                "nextPath": "/reference/basic/show-icon"
              },
              {
                "name": "show icon",
                "subitems": [],
                "path": "/reference/basic/show-icon",
                "prevName": "show number",
                "prevPath": "/reference/basic/show-number",
                "nextName": "show leds",
                "nextPath": "/reference/basic/show-leds"
              },
              {
                "name": "show leds",
                "subitems": [],
                "path": "/reference/basic/show-leds",
                "prevName": "show icon",
                "prevPath": "/reference/basic/show-icon",
                "nextName": "show string",
                "nextPath": "/reference/basic/show-string"
              },
              {
                "name": "show string",
                "subitems": [],
                "path": "/reference/basic/show-string",
                "prevName": "show leds",
                "prevPath": "/reference/basic/show-leds",
                "nextName": "clear screen",
                "nextPath": "/reference/basic/clear-screen"
              },
              {
                "name": "clear screen",
                "subitems": [],
                "path": "/reference/basic/clear-screen",
                "prevName": "show string",
                "prevPath": "/reference/basic/show-string",
                "nextName": "forever",
                "nextPath": "/reference/basic/forever"
              },
              {
                "name": "forever",
                "subitems": [],
                "path": "/reference/basic/forever",
                "prevName": "clear screen",
                "prevPath": "/reference/basic/clear-screen",
                "nextName": "pause",
                "nextPath": "/reference/basic/pause"
              },
              {
                "name": "pause",
                "subitems": [],
                "path": "/reference/basic/pause",
                "prevName": "forever",
                "prevPath": "/reference/basic/forever",
                "nextName": "show arrow",
                "nextPath": "/reference/basic/show-arrow"
              },
              {
                "name": "show arrow",
                "subitems": [],
                "path": "/reference/basic/show-arrow",
                "prevName": "pause",
                "prevPath": "/reference/basic/pause",
                "nextName": "show animation",
                "nextPath": "/reference/basic/show-animation"
              },
              {
                "name": "show animation",
                "subitems": [],
                "path": "/reference/basic/show-animation",
                "prevName": "show arrow",
                "prevPath": "/reference/basic/show-arrow",
                "nextName": "Input",
                "nextPath": "/reference/input"
              }
            ],
            "path": "/reference/basic",
            "prevName": "Reference",
            "prevPath": "/reference",
            "nextName": "show number",
            "nextPath": "/reference/basic/show-number"
          },
          {
            "name": "Input",
            "subitems": [
              {
                "name": "on button pressed",
                "subitems": [],
                "path": "/reference/input/on-button-pressed",
                "prevName": "Input",
                "prevPath": "/reference/input",
                "nextName": "on gesture",
                "nextPath": "/reference/input/on-gesture"
              },
              {
                "name": "on gesture",
                "subitems": [],
                "path": "/reference/input/on-gesture",
                "prevName": "on button pressed",
                "prevPath": "/reference/input/on-button-pressed",
                "nextName": "on pin pressed",
                "nextPath": "/reference/input/on-pin-pressed"
              },
              {
                "name": "on pin pressed",
                "subitems": [],
                "path": "/reference/input/on-pin-pressed",
                "prevName": "on gesture",
                "prevPath": "/reference/input/on-gesture",
                "nextName": "button is pressed",
                "nextPath": "/reference/input/button-is-pressed"
              },
              {
                "name": "button is pressed",
                "subitems": [],
                "path": "/reference/input/button-is-pressed",
                "prevName": "on pin pressed",
                "prevPath": "/reference/input/on-pin-pressed",
                "nextName": "compass heading",
                "nextPath": "/reference/input/compass-heading"
              },
              {
                "name": "compass heading",
                "subitems": [],
                "path": "/reference/input/compass-heading",
                "prevName": "button is pressed",
                "prevPath": "/reference/input/button-is-pressed",
                "nextName": "pin is pressed",
                "nextPath": "/reference/input/pin-is-pressed"
              },
              {
                "name": "pin is pressed",
                "subitems": [],
                "path": "/reference/input/pin-is-pressed",
                "prevName": "compass heading",
                "prevPath": "/reference/input/compass-heading",
                "nextName": "temperature",
                "nextPath": "/reference/input/temperature"
              },
              {
                "name": "temperature",
                "subitems": [],
                "path": "/reference/input/temperature",
                "prevName": "pin is pressed",
                "prevPath": "/reference/input/pin-is-pressed",
                "nextName": "acceleration",
                "nextPath": "/reference/input/acceleration"
              },
              {
                "name": "acceleration",
                "subitems": [],
                "path": "/reference/input/acceleration",
                "prevName": "temperature",
                "prevPath": "/reference/input/temperature",
                "nextName": "light level",
                "nextPath": "/reference/input/light-level"
              },
              {
                "name": "light level",
                "subitems": [],
                "path": "/reference/input/light-level",
                "prevName": "acceleration",
                "prevPath": "/reference/input/acceleration",
                "nextName": "rotation",
                "nextPath": "/reference/input/rotation"
              },
              {
                "name": "rotation",
                "subitems": [],
                "path": "/reference/input/rotation",
                "prevName": "light level",
                "prevPath": "/reference/input/light-level",
                "nextName": "magnetic force",
                "nextPath": "/reference/input/magnetic-force"
              },
              {
                "name": "magnetic force",
                "subitems": [],
                "path": "/reference/input/magnetic-force",
                "prevName": "rotation",
                "prevPath": "/reference/input/rotation",
                "nextName": "running time",
                "nextPath": "/reference/input/running-time"
              },
              {
                "name": "running time",
                "subitems": [],
                "path": "/reference/input/running-time",
                "prevName": "magnetic force",
                "prevPath": "/reference/input/magnetic-force",
                "nextName": "set accelerometer range",
                "nextPath": "/reference/input/set-accelerometer-range"
              },
              {
                "name": "set accelerometer range",
                "subitems": [],
                "path": "/reference/input/set-accelerometer-range",
                "prevName": "running time",
                "prevPath": "/reference/input/running-time",
                "nextName": "Music",
                "nextPath": "/reference/music"
              }
            ],
            "path": "/reference/input",
            "prevName": "show animation",
            "prevPath": "/reference/basic/show-animation",
            "nextName": "on button pressed",
            "nextPath": "/reference/input/on-button-pressed"
          },
          {
            "name": "Music",
            "subitems": [
              {
                "name": "play tone",
                "subitems": [],
                "path": "/reference/music/play-tone",
                "prevName": "Music",
                "prevPath": "/reference/music",
                "nextName": "ring tone",
                "nextPath": "/reference/music/ring-tone"
              },
              {
                "name": "ring tone",
                "subitems": [],
                "path": "/reference/music/ring-tone",
                "prevName": "play tone",
                "prevPath": "/reference/music/play-tone",
                "nextName": "rest",
                "nextPath": "/reference/music/rest"
              },
              {
                "name": "rest",
                "subitems": [],
                "path": "/reference/music/rest",
                "prevName": "ring tone",
                "prevPath": "/reference/music/ring-tone",
                "nextName": "beat",
                "nextPath": "/reference/music/beat"
              },
              {
                "name": "beat",
                "subitems": [],
                "path": "/reference/music/beat",
                "prevName": "rest",
                "prevPath": "/reference/music/rest",
                "nextName": "tempo",
                "nextPath": "/reference/music/tempo"
              },
              {
                "name": "tempo",
                "subitems": [],
                "path": "/reference/music/tempo",
                "prevName": "beat",
                "prevPath": "/reference/music/beat",
                "nextName": "change tempo by",
                "nextPath": "/reference/music/change-tempo-by"
              },
              {
                "name": "change tempo by",
                "subitems": [],
                "path": "/reference/music/change-tempo-by",
                "prevName": "tempo",
                "prevPath": "/reference/music/tempo",
                "nextName": "set tempo",
                "nextPath": "/reference/music/set-tempo"
              },
              {
                "name": "set tempo",
                "subitems": [],
                "path": "/reference/music/set-tempo",
                "prevName": "change tempo by",
                "prevPath": "/reference/music/change-tempo-by",
                "nextName": "Led",
                "nextPath": "/reference/led"
              }
            ],
            "path": "/reference/music",
            "prevName": "set accelerometer range",
            "prevPath": "/reference/input/set-accelerometer-range",
            "nextName": "play tone",
            "nextPath": "/reference/music/play-tone"
          },
          {
            "name": "Led",
            "subitems": [
              {
                "name": "plot",
                "subitems": [],
                "path": "/reference/led/plot",
                "prevName": "Led",
                "prevPath": "/reference/led",
                "nextName": "unplot",
                "nextPath": "/reference/led/unplot"
              },
              {
                "name": "unplot",
                "subitems": [],
                "path": "/reference/led/unplot",
                "prevName": "plot",
                "prevPath": "/reference/led/plot",
                "nextName": "point",
                "nextPath": "/reference/led/point"
              },
              {
                "name": "point",
                "subitems": [],
                "path": "/reference/led/point",
                "prevName": "unplot",
                "prevPath": "/reference/led/unplot",
                "nextName": "toggle",
                "nextPath": "/reference/led/toggle"
              },
              {
                "name": "toggle",
                "subitems": [],
                "path": "/reference/led/toggle",
                "prevName": "point",
                "prevPath": "/reference/led/point",
                "nextName": "brightness",
                "nextPath": "/reference/led/brightness"
              },
              {
                "name": "brightness",
                "subitems": [],
                "path": "/reference/led/brightness",
                "prevName": "toggle",
                "prevPath": "/reference/led/toggle",
                "nextName": "set brightness",
                "nextPath": "/reference/led/set-brightness"
              },
              {
                "name": "set brightness",
                "subitems": [],
                "path": "/reference/led/set-brightness",
                "prevName": "brightness",
                "prevPath": "/reference/led/brightness",
                "nextName": "stop animation",
                "nextPath": "/reference/led/stop-animation"
              },
              {
                "name": "stop animation",
                "subitems": [],
                "path": "/reference/led/stop-animation",
                "prevName": "set brightness",
                "prevPath": "/reference/led/set-brightness",
                "nextName": "plot bar graph",
                "nextPath": "/reference/led/plot-bar-graph"
              },
              {
                "name": "plot bar graph",
                "subitems": [],
                "path": "/reference/led/plot-bar-graph",
                "prevName": "stop animation",
                "prevPath": "/reference/led/stop-animation",
                "nextName": "enable",
                "nextPath": "/reference/led/enable"
              },
              {
                "name": "enable",
                "subitems": [],
                "path": "/reference/led/enable",
                "prevName": "plot bar graph",
                "prevPath": "/reference/led/plot-bar-graph",
                "nextName": "Radio",
                "nextPath": "/reference/radio"
              }
            ],
            "path": "/reference/led",
            "prevName": "set tempo",
            "prevPath": "/reference/music/set-tempo",
            "nextName": "plot",
            "nextPath": "/reference/led/plot"
          },
          {
            "name": "Radio",
            "subitems": [
              {
                "name": "send number",
                "subitems": [],
                "path": "/reference/radio/send-number",
                "prevName": "Radio",
                "prevPath": "/reference/radio",
                "nextName": "send value",
                "nextPath": "/reference/radio/send-value"
              },
              {
                "name": "send value",
                "subitems": [],
                "path": "/reference/radio/send-value",
                "prevName": "send number",
                "prevPath": "/reference/radio/send-number",
                "nextName": "send string",
                "nextPath": "/reference/radio/send-string"
              },
              {
                "name": "send string",
                "subitems": [],
                "path": "/reference/radio/send-string",
                "prevName": "send value",
                "prevPath": "/reference/radio/send-value",
                "nextName": "on received number",
                "nextPath": "/reference/radio/on-received-number"
              },
              {
                "name": "on received number",
                "subitems": [],
                "path": "/reference/radio/on-received-number",
                "prevName": "send string",
                "prevPath": "/reference/radio/send-string",
                "nextName": "on received string",
                "nextPath": "/reference/radio/on-received-string"
              },
              {
                "name": "on received string",
                "subitems": [],
                "path": "/reference/radio/on-received-string",
                "prevName": "on received number",
                "prevPath": "/reference/radio/on-received-number",
                "nextName": "on received buffer",
                "nextPath": "/reference/radio/on-received-buffer"
              },
              {
                "name": "on received buffer",
                "subitems": [],
                "path": "/reference/radio/on-received-buffer",
                "prevName": "on received string",
                "prevPath": "/reference/radio/on-received-string",
                "nextName": "received packet",
                "nextPath": "/reference/radio/received-packet"
              },
              {
                "name": "received packet",
                "subitems": [],
                "path": "/reference/radio/received-packet",
                "prevName": "on received buffer",
                "prevPath": "/reference/radio/on-received-buffer",
                "nextName": "set group",
                "nextPath": "/reference/radio/set-group"
              },
              {
                "name": "set group",
                "subitems": [],
                "path": "/reference/radio/set-group",
                "prevName": "received packet",
                "prevPath": "/reference/radio/received-packet",
                "nextName": "set transmit power",
                "nextPath": "/reference/radio/set-transmit-power"
              },
              {
                "name": "set transmit power",
                "subitems": [],
                "path": "/reference/radio/set-transmit-power",
                "prevName": "set group",
                "prevPath": "/reference/radio/set-group",
                "nextName": "set transmit serial number",
                "nextPath": "/reference/radio/set-transmit-serial-number"
              },
              {
                "name": "set transmit serial number",
                "subitems": [],
                "path": "/reference/radio/set-transmit-serial-number",
                "prevName": "set transmit power",
                "prevPath": "/reference/radio/set-transmit-power",
                "nextName": "on data packet received",
                "nextPath": "/reference/radio/on-data-packet-received"
              },
              {
                "name": "on data packet received",
                "subitems": [],
                "path": "/reference/radio/on-data-packet-received",
                "prevName": "set transmit serial number",
                "prevPath": "/reference/radio/set-transmit-serial-number",
                "nextName": "write received packet to serial",
                "nextPath": "/reference/radio/write-received-packet-to-serial"
              },
              {
                "name": "write received packet to serial",
                "subitems": [],
                "path": "/reference/radio/write-received-packet-to-serial",
                "prevName": "on data packet received",
                "prevPath": "/reference/radio/on-data-packet-received",
                "nextName": "Game",
                "nextPath": "/reference/game"
              }
            ],
            "path": "/reference/radio",
            "prevName": "enable",
            "prevPath": "/reference/led/enable",
            "nextName": "send number",
            "nextPath": "/reference/radio/send-number"
          },
          {
            "name": "Game",
            "subitems": [
              {
                "name": "create sprite",
                "subitems": [],
                "path": "/reference/game/create-sprite",
                "prevName": "Game",
                "prevPath": "/reference/game",
                "nextName": "delete",
                "nextPath": "/reference/game/delete"
              },
              {
                "name": "delete",
                "subitems": [],
                "path": "/reference/game/delete",
                "prevName": "create sprite",
                "prevPath": "/reference/game/create-sprite",
                "nextName": "move",
                "nextPath": "/reference/game/move"
              },
              {
                "name": "move",
                "subitems": [],
                "path": "/reference/game/move",
                "prevName": "delete",
                "prevPath": "/reference/game/delete",
                "nextName": "turn",
                "nextPath": "/reference/game/turn"
              },
              {
                "name": "turn",
                "subitems": [],
                "path": "/reference/game/turn",
                "prevName": "move",
                "prevPath": "/reference/game/move",
                "nextName": "in on edge bounce",
                "nextPath": "/reference/game/if-on-edge-bounce"
              },
              {
                "name": "in on edge bounce",
                "subitems": [],
                "path": "/reference/game/if-on-edge-bounce",
                "prevName": "turn",
                "prevPath": "/reference/game/turn",
                "nextName": "get",
                "nextPath": "/reference/game/get"
              },
              {
                "name": "get",
                "subitems": [],
                "path": "/reference/game/get",
                "prevName": "in on edge bounce",
                "prevPath": "/reference/game/if-on-edge-bounce",
                "nextName": "set",
                "nextPath": "/reference/game/set"
              },
              {
                "name": "set",
                "subitems": [],
                "path": "/reference/game/set",
                "prevName": "get",
                "prevPath": "/reference/game/get",
                "nextName": "change",
                "nextPath": "/reference/game/change"
              },
              {
                "name": "change",
                "subitems": [],
                "path": "/reference/game/change",
                "prevName": "set",
                "prevPath": "/reference/game/set",
                "nextName": "is touching",
                "nextPath": "/reference/game/is-touching"
              },
              {
                "name": "is touching",
                "subitems": [],
                "path": "/reference/game/is-touching",
                "prevName": "change",
                "prevPath": "/reference/game/change",
                "nextName": "is touching edge",
                "nextPath": "/reference/game/is-touching-edge"
              },
              {
                "name": "is touching edge",
                "subitems": [],
                "path": "/reference/game/is-touching-edge",
                "prevName": "is touching",
                "prevPath": "/reference/game/is-touching",
                "nextName": "add score",
                "nextPath": "/reference/game/add-score"
              },
              {
                "name": "add score",
                "subitems": [],
                "path": "/reference/game/add-score",
                "prevName": "is touching edge",
                "prevPath": "/reference/game/is-touching-edge",
                "nextName": "score",
                "nextPath": "/reference/game/score"
              },
              {
                "name": "score",
                "subitems": [],
                "path": "/reference/game/score",
                "prevName": "add score",
                "prevPath": "/reference/game/add-score",
                "nextName": "set score",
                "nextPath": "/reference/game/set-score"
              },
              {
                "name": "set score",
                "subitems": [],
                "path": "/reference/game/set-score",
                "prevName": "score",
                "prevPath": "/reference/game/score",
                "nextName": "set life",
                "nextPath": "/reference/game/set-life"
              },
              {
                "name": "set life",
                "subitems": [],
                "path": "/reference/game/set-life",
                "prevName": "set score",
                "prevPath": "/reference/game/set-score",
                "nextName": "add life",
                "nextPath": "/reference/game/add-life"
              },
              {
                "name": "add life",
                "subitems": [],
                "path": "/reference/game/add-life",
                "prevName": "set life",
                "prevPath": "/reference/game/set-life",
                "nextName": "remove life",
                "nextPath": "/reference/game/remove-life"
              },
              {
                "name": "remove life",
                "subitems": [],
                "path": "/reference/game/remove-life",
                "prevName": "add life",
                "prevPath": "/reference/game/add-life",
                "nextName": "start countdown",
                "nextPath": "/reference/game/start-countdown"
              },
              {
                "name": "start countdown",
                "subitems": [],
                "path": "/reference/game/start-countdown",
                "prevName": "remove life",
                "prevPath": "/reference/game/remove-life",
                "nextName": "game over",
                "nextPath": "/reference/game/game-over"
              },
              {
                "name": "game over",
                "subitems": [],
                "path": "/reference/game/game-over",
                "prevName": "start countdown",
                "prevPath": "/reference/game/start-countdown",
                "nextName": "pause",
                "nextPath": "/reference/game/pause"
              },
              {
                "name": "pause",
                "subitems": [],
                "path": "/reference/game/pause",
                "prevName": "game over",
                "prevPath": "/reference/game/game-over",
                "nextName": "resume",
                "nextPath": "/reference/game/resume"
              },
              {
                "name": "resume",
                "subitems": [],
                "path": "/reference/game/resume",
                "prevName": "pause",
                "prevPath": "/reference/game/pause",
                "nextName": "Images",
                "nextPath": "/reference/images"
              }
            ],
            "path": "/reference/game",
            "prevName": "write received packet to serial",
            "prevPath": "/reference/radio/write-received-packet-to-serial",
            "nextName": "create sprite",
            "nextPath": "/reference/game/create-sprite"
          },
          {
            "name": "Images",
            "subitems": [
              {
                "name": "create image",
                "subitems": [],
                "path": "/reference/images/create-image",
                "prevName": "Images",
                "prevPath": "/reference/images",
                "nextName": "create big image",
                "nextPath": "/reference/images/create-big-image"
              },
              {
                "name": "create big image",
                "subitems": [],
                "path": "/reference/images/create-big-image",
                "prevName": "create image",
                "prevPath": "/reference/images/create-image",
                "nextName": "show image",
                "nextPath": "/reference/images/show-image"
              },
              {
                "name": "show image",
                "subitems": [],
                "path": "/reference/images/show-image",
                "prevName": "create big image",
                "prevPath": "/reference/images/create-big-image",
                "nextName": "scroll image",
                "nextPath": "/reference/images/scroll-image"
              },
              {
                "name": "scroll image",
                "subitems": [],
                "path": "/reference/images/scroll-image",
                "prevName": "show image",
                "prevPath": "/reference/images/show-image",
                "nextName": "arrow image",
                "nextPath": "/reference/images/arrow-image"
              },
              {
                "name": "arrow image",
                "subitems": [],
                "path": "/reference/images/arrow-image",
                "prevName": "scroll image",
                "prevPath": "/reference/images/scroll-image",
                "nextName": "icon image",
                "nextPath": "/reference/images/icon-image"
              },
              {
                "name": "icon image",
                "subitems": [],
                "path": "/reference/images/icon-image",
                "prevName": "arrow image",
                "prevPath": "/reference/images/arrow-image",
                "nextName": "arrow number",
                "nextPath": "/reference/images/arrow-number"
              },
              {
                "name": "arrow number",
                "subitems": [],
                "path": "/reference/images/arrow-number",
                "prevName": "icon image",
                "prevPath": "/reference/images/icon-image",
                "nextName": "Pins",
                "nextPath": "/reference/pins"
              }
            ],
            "path": "/reference/images",
            "prevName": "resume",
            "prevPath": "/reference/game/resume",
            "nextName": "create image",
            "nextPath": "/reference/images/create-image"
          },
          {
            "name": "Pins",
            "subitems": [
              {
                "name": "digital read pin",
                "subitems": [],
                "path": "/reference/pins/digital-read-pin",
                "prevName": "Pins",
                "prevPath": "/reference/pins",
                "nextName": "digital write pin",
                "nextPath": "/reference/pins/digital-write-pin"
              },
              {
                "name": "digital write pin",
                "subitems": [],
                "path": "/reference/pins/digital-write-pin",
                "prevName": "digital read pin",
                "prevPath": "/reference/pins/digital-read-pin",
                "nextName": "analog read pin",
                "nextPath": "/reference/pins/analog-read-pin"
              },
              {
                "name": "analog read pin",
                "subitems": [],
                "path": "/reference/pins/analog-read-pin",
                "prevName": "digital write pin",
                "prevPath": "/reference/pins/digital-write-pin",
                "nextName": "analog write pin",
                "nextPath": "/reference/pins/analog-write-pin"
              },
              {
                "name": "analog write pin",
                "subitems": [],
                "path": "/reference/pins/analog-write-pin",
                "prevName": "analog read pin",
                "prevPath": "/reference/pins/analog-read-pin",
                "nextName": "analog set period",
                "nextPath": "/reference/pins/analog-set-period"
              },
              {
                "name": "analog set period",
                "subitems": [],
                "path": "/reference/pins/analog-set-period",
                "prevName": "analog write pin",
                "prevPath": "/reference/pins/analog-write-pin",
                "nextName": "map",
                "nextPath": "/reference/pins/map"
              },
              {
                "name": "map",
                "subitems": [],
                "path": "/reference/pins/map",
                "prevName": "analog set period",
                "prevPath": "/reference/pins/analog-set-period",
                "nextName": "on pulsed",
                "nextPath": "/reference/pins/on-pulsed"
              },
              {
                "name": "on pulsed",
                "subitems": [],
                "path": "/reference/pins/on-pulsed",
                "prevName": "map",
                "prevPath": "/reference/pins/map",
                "nextName": "pulse duration",
                "nextPath": "/reference/pins/pulse-duration"
              },
              {
                "name": "pulse duration",
                "subitems": [],
                "path": "/reference/pins/pulse-duration",
                "prevName": "on pulsed",
                "prevPath": "/reference/pins/on-pulsed",
                "nextName": "pulse in",
                "nextPath": "/reference/pins/pulse-in"
              },
              {
                "name": "pulse in",
                "subitems": [],
                "path": "/reference/pins/pulse-in",
                "prevName": "pulse duration",
                "prevPath": "/reference/pins/pulse-duration",
                "nextName": "servo write pin",
                "nextPath": "/reference/pins/servo-write-pin"
              },
              {
                "name": "servo write pin",
                "subitems": [],
                "path": "/reference/pins/servo-write-pin",
                "prevName": "pulse in",
                "prevPath": "/reference/pins/pulse-in",
                "nextName": "servo set pulse",
                "nextPath": "/reference/pins/servo-set-pulse"
              },
              {
                "name": "servo set pulse",
                "subitems": [],
                "path": "/reference/pins/servo-set-pulse",
                "prevName": "servo write pin",
                "prevPath": "/reference/pins/servo-write-pin",
                "nextName": "i2c read number",
                "nextPath": "/reference/pins/i2c-read-number"
              },
              {
                "name": "i2c read number",
                "subitems": [],
                "path": "/reference/pins/i2c-read-number",
                "prevName": "servo set pulse",
                "prevPath": "/reference/pins/servo-set-pulse",
                "nextName": "i2c write number",
                "nextPath": "/reference/pins/i2c-write-number"
              },
              {
                "name": "i2c write number",
                "subitems": [],
                "path": "/reference/pins/i2c-write-number",
                "prevName": "i2c read number",
                "prevPath": "/reference/pins/i2c-read-number",
                "nextName": "set pull",
                "nextPath": "/reference/pins/set-pull"
              },
              {
                "name": "set pull",
                "subitems": [],
                "path": "/reference/pins/set-pull",
                "prevName": "i2c write number",
                "prevPath": "/reference/pins/i2c-write-number",
                "nextName": "analog pitch",
                "nextPath": "/reference/pins/analog-pitch"
              },
              {
                "name": "analog pitch",
                "subitems": [],
                "path": "/reference/pins/analog-pitch",
                "prevName": "set pull",
                "prevPath": "/reference/pins/set-pull",
                "nextName": "analog set pitch pin",
                "nextPath": "/reference/pins/analog-set-pitch-pin"
              },
              {
                "name": "analog set pitch pin",
                "subitems": [],
                "path": "/reference/pins/analog-set-pitch-pin",
                "prevName": "analog pitch",
                "prevPath": "/reference/pins/analog-pitch",
                "nextName": "spi write",
                "nextPath": "/reference/pins/spi-write"
              },
              {
                "name": "spi write",
                "subitems": [],
                "path": "/reference/pins/spi-write",
                "prevName": "analog set pitch pin",
                "prevPath": "/reference/pins/analog-set-pitch-pin",
                "nextName": "spi Pins",
                "nextPath": "/reference/pins/spi-pins"
              },
              {
                "name": "spi Pins",
                "subitems": [],
                "path": "/reference/pins/spi-pins",
                "prevName": "spi write",
                "prevPath": "/reference/pins/spi-write",
                "nextName": "spi format",
                "nextPath": "/reference/pins/spi-format"
              },
              {
                "name": "spi format",
                "subitems": [],
                "path": "/reference/pins/spi-format",
                "prevName": "spi Pins",
                "prevPath": "/reference/pins/spi-pins",
                "nextName": "spi frequency",
                "nextPath": "/reference/pins/spi-frequency"
              },
              {
                "name": "spi frequency",
                "subitems": [],
                "path": "/reference/pins/spi-frequency",
                "prevName": "spi format",
                "prevPath": "/reference/pins/spi-format",
                "nextName": "Serial",
                "nextPath": "/reference/serial"
              }
            ],
            "path": "/reference/pins",
            "prevName": "arrow number",
            "prevPath": "/reference/images/arrow-number",
            "nextName": "digital read pin",
            "nextPath": "/reference/pins/digital-read-pin"
          },
          {
            "name": "Serial",
            "subitems": [
              {
                "name": "write line",
                "subitems": [],
                "path": "/reference/serial/write-line",
                "prevName": "Serial",
                "prevPath": "/reference/serial",
                "nextName": "write number",
                "nextPath": "/reference/serial/write-number"
              },
              {
                "name": "write number",
                "subitems": [],
                "path": "/reference/serial/write-number",
                "prevName": "write line",
                "prevPath": "/reference/serial/write-line",
                "nextName": "write value",
                "nextPath": "/reference/serial/write-value"
              },
              {
                "name": "write value",
                "subitems": [],
                "path": "/reference/serial/write-value",
                "prevName": "write number",
                "prevPath": "/reference/serial/write-number",
                "nextName": "write string",
                "nextPath": "/reference/serial/write-string"
              },
              {
                "name": "write string",
                "subitems": [],
                "path": "/reference/serial/write-string",
                "prevName": "write value",
                "prevPath": "/reference/serial/write-value",
                "nextName": "read until",
                "nextPath": "/reference/serial/read-until"
              },
              {
                "name": "read until",
                "subitems": [],
                "path": "/reference/serial/read-until",
                "prevName": "write string",
                "prevPath": "/reference/serial/write-string",
                "nextName": "read line",
                "nextPath": "/reference/serial/read-line"
              },
              {
                "name": "read line",
                "subitems": [],
                "path": "/reference/serial/read-line",
                "prevName": "read until",
                "prevPath": "/reference/serial/read-until",
                "nextName": "read string",
                "nextPath": "/reference/serial/read-string"
              },
              {
                "name": "read string",
                "subitems": [],
                "path": "/reference/serial/read-string",
                "prevName": "read line",
                "prevPath": "/reference/serial/read-line",
                "nextName": "on data received",
                "nextPath": "/reference/serial/on-data-received"
              },
              {
                "name": "on data received",
                "subitems": [],
                "path": "/reference/serial/on-data-received",
                "prevName": "read string",
                "prevPath": "/reference/serial/read-string",
                "nextName": "redirect",
                "nextPath": "/reference/serial/redirect"
              },
              {
                "name": "redirect",
                "subitems": [],
                "path": "/reference/serial/redirect",
                "prevName": "on data received",
                "prevPath": "/reference/serial/on-data-received",
                "nextName": "redirect to usb",
                "nextPath": "/reference/serial/redirect-to-usb"
              },
              {
                "name": "redirect to usb",
                "subitems": [],
                "path": "/reference/serial/redirect-to-usb",
                "prevName": "redirect",
                "prevPath": "/reference/serial/redirect",
                "nextName": "write buffer",
                "nextPath": "/reference/serial/write-buffer"
              },
              {
                "name": "write buffer",
                "subitems": [],
                "path": "/reference/serial/write-buffer",
                "prevName": "redirect to usb",
                "prevPath": "/reference/serial/redirect-to-usb",
                "nextName": "read buffer",
                "nextPath": "/reference/serial/read-buffer"
              },
              {
                "name": "read buffer",
                "subitems": [],
                "path": "/reference/serial/read-buffer",
                "prevName": "write buffer",
                "prevPath": "/reference/serial/write-buffer",
                "nextName": "Control",
                "nextPath": "/reference/control"
              }
            ],
            "path": "/reference/serial",
            "prevName": "spi frequency",
            "prevPath": "/reference/pins/spi-frequency",
            "nextName": "write line",
            "nextPath": "/reference/serial/write-line"
          },
          {
            "name": "Control",
            "subitems": [
              {
                "name": "in background",
                "subitems": [],
                "path": "/reference/control/in-background",
                "prevName": "Control",
                "prevPath": "/reference/control",
                "nextName": "reset",
                "nextPath": "/reference/control/reset"
              },
              {
                "name": "reset",
                "subitems": [],
                "path": "/reference/control/reset",
                "prevName": "in background",
                "prevPath": "/reference/control/in-background",
                "nextName": "wait micros",
                "nextPath": "/reference/control/wait-micros"
              },
              {
                "name": "wait micros",
                "subitems": [],
                "path": "/reference/control/wait-micros",
                "prevName": "reset",
                "prevPath": "/reference/control/reset",
                "nextName": "on event",
                "nextPath": "/reference/control/on-event"
              },
              {
                "name": "on event",
                "subitems": [],
                "path": "/reference/control/on-event",
                "prevName": "wait micros",
                "prevPath": "/reference/control/wait-micros",
                "nextName": "raise event",
                "nextPath": "/reference/control/raise-event"
              },
              {
                "name": "raise event",
                "subitems": [],
                "path": "/reference/control/raise-event",
                "prevName": "on event",
                "prevPath": "/reference/control/on-event",
                "nextName": "event timestamp",
                "nextPath": "/reference/control/event-timestamp"
              },
              {
                "name": "event timestamp",
                "subitems": [],
                "path": "/reference/control/event-timestamp",
                "prevName": "raise event",
                "prevPath": "/reference/control/raise-event",
                "nextName": "event value",
                "nextPath": "/reference/control/event-value"
              },
              {
                "name": "event value",
                "subitems": [],
                "path": "/reference/control/event-value",
                "prevName": "event timestamp",
                "prevPath": "/reference/control/event-timestamp",
                "nextName": "Bluetooth",
                "nextPath": "/reference/bluetooth"
              }
            ],
            "path": "/reference/control",
            "prevName": "read buffer",
            "prevPath": "/reference/serial/read-buffer",
            "nextName": "in background",
            "nextPath": "/reference/control/in-background"
          },
          {
            "name": "Bluetooth",
            "subitems": [
              {
                "name": "About",
                "subitems": [],
                "path": "/reference/bluetooth/about-bluetooth",
                "prevName": "Bluetooth",
                "prevPath": "/reference/bluetooth",
                "nextName": "Pairing",
                "nextPath": "/reference/bluetooth/bluetooth-pairing"
              },
              {
                "name": "Pairing",
                "subitems": [],
                "path": "/reference/bluetooth/bluetooth-pairing",
                "prevName": "About",
                "prevPath": "/reference/bluetooth/about-bluetooth",
                "nextName": "on bluetooth connected",
                "nextPath": "/reference/bluetooth/on-bluetooth-connected"
              },
              {
                "name": "on bluetooth connected",
                "subitems": [],
                "path": "/reference/bluetooth/on-bluetooth-connected",
                "prevName": "Pairing",
                "prevPath": "/reference/bluetooth/bluetooth-pairing",
                "nextName": "on bluetooth disconnected",
                "nextPath": "/reference/bluetooth/on-bluetooth-disconnected"
              },
              {
                "name": "on bluetooth disconnected",
                "subitems": [],
                "path": "/reference/bluetooth/on-bluetooth-disconnected",
                "prevName": "on bluetooth connected",
                "prevPath": "/reference/bluetooth/on-bluetooth-connected",
                "nextName": "start accelerometer service",
                "nextPath": "/reference/bluetooth/start-accelerometer-service"
              },
              {
                "name": "start accelerometer service",
                "subitems": [],
                "path": "/reference/bluetooth/start-accelerometer-service",
                "prevName": "on bluetooth disconnected",
                "prevPath": "/reference/bluetooth/on-bluetooth-disconnected",
                "nextName": "start button service",
                "nextPath": "/reference/bluetooth/start-button-service"
              },
              {
                "name": "start button service",
                "subitems": [],
                "path": "/reference/bluetooth/start-button-service",
                "prevName": "start accelerometer service",
                "prevPath": "/reference/bluetooth/start-accelerometer-service",
                "nextName": "start io pin service",
                "nextPath": "/reference/bluetooth/start-io-pin-service"
              },
              {
                "name": "start io pin service",
                "subitems": [],
                "path": "/reference/bluetooth/start-io-pin-service",
                "prevName": "start button service",
                "prevPath": "/reference/bluetooth/start-button-service",
                "nextName": "start led service",
                "nextPath": "/reference/bluetooth/start-led-service"
              },
              {
                "name": "start led service",
                "subitems": [],
                "path": "/reference/bluetooth/start-led-service",
                "prevName": "start io pin service",
                "prevPath": "/reference/bluetooth/start-io-pin-service",
                "nextName": "start magnetometer service",
                "nextPath": "/reference/bluetooth/start-magnetometer-service"
              },
              {
                "name": "start magnetometer service",
                "subitems": [],
                "path": "/reference/bluetooth/start-magnetometer-service",
                "prevName": "start led service",
                "prevPath": "/reference/bluetooth/start-led-service",
                "nextName": "start temperature service",
                "nextPath": "/reference/bluetooth/start-temperature-service"
              },
              {
                "name": "start temperature service",
                "subitems": [],
                "path": "/reference/bluetooth/start-temperature-service",
                "prevName": "start magnetometer service",
                "prevPath": "/reference/bluetooth/start-magnetometer-service",
                "nextName": "start uart service",
                "nextPath": "/reference/bluetooth/start-uart-service"
              },
              {
                "name": "start uart service",
                "subitems": [],
                "path": "/reference/bluetooth/start-uart-service",
                "prevName": "start temperature service",
                "prevPath": "/reference/bluetooth/start-temperature-service",
                "nextName": "uart read until",
                "nextPath": "/reference/bluetooth/uart-read-until"
              },
              {
                "name": "uart read until",
                "subitems": [],
                "path": "/reference/bluetooth/uart-read-until",
                "prevName": "start uart service",
                "prevPath": "/reference/bluetooth/start-uart-service",
                "nextName": "uart write string",
                "nextPath": "/reference/bluetooth/uart-write-string"
              },
              {
                "name": "uart write string",
                "subitems": [],
                "path": "/reference/bluetooth/uart-write-string",
                "prevName": "uart read until",
                "prevPath": "/reference/bluetooth/uart-read-until",
                "nextName": "uart write number",
                "nextPath": "/reference/bluetooth/uart-write-number"
              },
              {
                "name": "uart write number",
                "subitems": [],
                "path": "/reference/bluetooth/uart-write-number",
                "prevName": "uart write string",
                "prevPath": "/reference/bluetooth/uart-write-string",
                "nextName": "uart write value",
                "nextPath": "/reference/bluetooth/uart-write-value"
              },
              {
                "name": "uart write value",
                "subitems": [],
                "path": "/reference/bluetooth/uart-write-value",
                "prevName": "uart write number",
                "prevPath": "/reference/bluetooth/uart-write-number",
                "nextName": "advertise url",
                "nextPath": "/reference/bluetooth/advertise-url"
              },
              {
                "name": "advertise url",
                "subitems": [],
                "path": "/reference/bluetooth/advertise-url",
                "prevName": "uart write value",
                "prevPath": "/reference/bluetooth/uart-write-value",
                "nextName": "stop advertising",
                "nextPath": "/reference/bluetooth/stop-advertising"
              },
              {
                "name": "stop advertising",
                "subitems": [],
                "path": "/reference/bluetooth/stop-advertising",
                "prevName": "advertise url",
                "prevPath": "/reference/bluetooth/advertise-url",
                "nextName": "advertise uid",
                "nextPath": "/reference/bluetooth/advertise-uid"
              },
              {
                "name": "advertise uid",
                "subitems": [],
                "path": "/reference/bluetooth/advertise-uid",
                "prevName": "stop advertising",
                "prevPath": "/reference/bluetooth/stop-advertising",
                "nextName": "advertise-uid-buffer",
                "nextPath": "/reference/bluetooth/advertise-uid-buffer"
              },
              {
                "name": "advertise-uid-buffer",
                "subitems": [],
                "path": "/reference/bluetooth/advertise-uid-buffer",
                "prevName": "advertise uid",
                "prevPath": "/reference/bluetooth/advertise-uid",
                "nextName": "Devices",
                "nextPath": "/reference/devices"
              }
            ],
            "path": "/reference/bluetooth",
            "prevName": "event value",
            "prevPath": "/reference/control/event-value",
            "nextName": "About",
            "nextPath": "/reference/bluetooth/about-bluetooth"
          },
          {
            "name": "Devices",
            "subitems": [
              {
                "name": "tell camera to",
                "subitems": [],
                "path": "/reference/devices/tell-camera-to",
                "prevName": "Devices",
                "prevPath": "/reference/devices",
                "nextName": "tell remote control to",
                "nextPath": "/reference/devices/tell-remote-control-to"
              },
              {
                "name": "tell remote control to",
                "subitems": [],
                "path": "/reference/devices/tell-remote-control-to",
                "prevName": "tell camera to",
                "prevPath": "/reference/devices/tell-camera-to",
                "nextName": "raise alert to",
                "nextPath": "/reference/devices/raise-alert-to"
              },
              {
                "name": "raise alert to",
                "subitems": [],
                "path": "/reference/devices/raise-alert-to",
                "prevName": "tell remote control to",
                "prevPath": "/reference/devices/tell-remote-control-to",
                "nextName": "on notified",
                "nextPath": "/reference/devices/on-notified"
              },
              {
                "name": "on notified",
                "subitems": [],
                "path": "/reference/devices/on-notified",
                "prevName": "raise alert to",
                "prevPath": "/reference/devices/raise-alert-to",
                "nextName": "on gamepad button",
                "nextPath": "/reference/devices/on-gamepad-button"
              },
              {
                "name": "on gamepad button",
                "subitems": [],
                "path": "/reference/devices/on-gamepad-button",
                "prevName": "on notified",
                "prevPath": "/reference/devices/on-notified",
                "nextName": "signal strength",
                "nextPath": "/reference/devices/signal-strength"
              },
              {
                "name": "signal strength",
                "subitems": [],
                "path": "/reference/devices/signal-strength",
                "prevName": "on gamepad button",
                "prevPath": "/reference/devices/on-gamepad-button",
                "nextName": "on signal strength changed",
                "nextPath": "/reference/devices/on-signal-strength-changed"
              },
              {
                "name": "on signal strength changed",
                "subitems": [],
                "path": "/reference/devices/on-signal-strength-changed",
                "prevName": "signal strength",
                "prevPath": "/reference/devices/signal-strength",
                "nextName": "Extensions",
                "nextPath": "/extensions"
              }
            ],
            "path": "/reference/devices",
            "prevName": "advertise-uid-buffer",
            "prevPath": "/reference/bluetooth/advertise-uid-buffer",
            "nextName": "tell camera to",
            "nextPath": "/reference/devices/tell-camera-to"
          }
        ],
        "path": "/reference",
        "prevName": "Resources",
        "prevPath": "/courses/ucp-science/rocket-acceleration/resources",
        "nextName": "Basic",
        "nextPath": "/reference/basic"
      },
      {
        "name": "Extensions",
        "subitems": [],
        "path": "/extensions",
        "prevName": "on signal strength changed",
        "prevPath": "/reference/devices/on-signal-strength-changed",
        "nextName": "Blocks",
        "nextPath": "/blocks"
      },
      {
        "name": "Blocks",
        "subitems": [
          {
            "name": "On Start",
            "subitems": [],
            "path": "/blocks/on-start",
            "prevName": "Blocks",
            "prevPath": "/blocks",
            "nextName": "Loops",
            "nextPath": "/blocks/loops"
          },
          {
            "name": "Loops",
            "subitems": [
              {
                "name": "repeat",
                "subitems": [],
                "path": "/blocks/loops/repeat",
                "prevName": "Loops",
                "prevPath": "/blocks/loops",
                "nextName": "for",
                "nextPath": "/blocks/loops/for"
              },
              {
                "name": "for",
                "subitems": [],
                "path": "/blocks/loops/for",
                "prevName": "repeat",
                "prevPath": "/blocks/loops/repeat",
                "nextName": "while",
                "nextPath": "/blocks/loops/while"
              },
              {
                "name": "while",
                "subitems": [],
                "path": "/blocks/loops/while",
                "prevName": "for",
                "prevPath": "/blocks/loops/for",
                "nextName": "Logic",
                "nextPath": "/blocks/logic"
              }
            ],
            "path": "/blocks/loops",
            "prevName": "On Start",
            "prevPath": "/blocks/on-start",
            "nextName": "repeat",
            "nextPath": "/blocks/loops/repeat"
          },
          {
            "name": "Logic",
            "subitems": [
              {
                "name": "if",
                "subitems": [],
                "path": "/blocks/logic/if",
                "prevName": "Logic",
                "prevPath": "/blocks/logic",
                "nextName": "Boolean",
                "nextPath": "/blocks/logic/boolean"
              },
              {
                "name": "Boolean",
                "subitems": [],
                "path": "/blocks/logic/boolean",
                "prevName": "if",
                "prevPath": "/blocks/logic/if",
                "nextName": "Variables",
                "nextPath": "/blocks/variables"
              }
            ],
            "path": "/blocks/logic",
            "prevName": "while",
            "prevPath": "/blocks/loops/while",
            "nextName": "if",
            "nextPath": "/blocks/logic/if"
          },
          {
            "name": "Variables",
            "subitems": [
              {
                "name": "assign",
                "subitems": [],
                "path": "/blocks/variables/assign",
                "prevName": "Variables",
                "prevPath": "/blocks/variables",
                "nextName": "change var",
                "nextPath": "/blocks/variables/change"
              },
              {
                "name": "change var",
                "subitems": [],
                "path": "/blocks/variables/change",
                "prevName": "assign",
                "prevPath": "/blocks/variables/assign",
                "nextName": "var",
                "nextPath": "/blocks/variables/var"
              },
              {
                "name": "var",
                "subitems": [],
                "path": "/blocks/variables/var",
                "prevName": "change var",
                "prevPath": "/blocks/variables/change",
                "nextName": "Math",
                "nextPath": "/blocks/math"
              }
            ],
            "path": "/blocks/variables",
            "prevName": "Boolean",
            "prevPath": "/blocks/logic/boolean",
            "nextName": "assign",
            "nextPath": "/blocks/variables/assign"
          },
          {
            "name": "Math",
            "subitems": [],
            "path": "/blocks/math",
            "prevName": "var",
            "prevPath": "/blocks/variables/var",
            "nextName": "JavaScript blocks",
            "nextPath": "/blocks/javascript-blocks"
          },
          {
            "name": "JavaScript blocks",
            "subitems": [],
            "path": "/blocks/javascript-blocks",
            "prevName": "Math",
            "prevPath": "/blocks/math",
            "nextName": "Custom blocks",
            "nextPath": "/blocks/custom"
          },
          {
            "name": "Custom blocks",
            "subitems": [],
            "path": "/blocks/custom",
            "prevName": "JavaScript blocks",
            "prevPath": "/blocks/javascript-blocks",
            "nextName": "JavaScript",
            "nextPath": "/javascript"
          }
        ],
        "path": "/blocks",
        "prevName": "Extensions",
        "prevPath": "/extensions",
        "nextName": "On Start",
        "nextPath": "/blocks/on-start"
      },
      {
        "name": "JavaScript",
        "subitems": [
          {
            "name": "Calling",
            "subitems": [],
            "path": "/javascript/call",
            "prevName": "JavaScript",
            "prevPath": "/javascript",
            "nextName": "Sequencing",
            "nextPath": "/javascript/sequence"
          },
          {
            "name": "Sequencing",
            "subitems": [],
            "path": "/javascript/sequence",
            "prevName": "Calling",
            "prevPath": "/javascript/call",
            "nextName": "Variables",
            "nextPath": "/javascript/variables"
          },
          {
            "name": "Variables",
            "subitems": [],
            "path": "/javascript/variables",
            "prevName": "Sequencing",
            "prevPath": "/javascript/sequence",
            "nextName": "Operators",
            "nextPath": "/javascript/operators"
          },
          {
            "name": "Operators",
            "subitems": [],
            "path": "/javascript/operators",
            "prevName": "Variables",
            "prevPath": "/javascript/variables",
            "nextName": "Statements",
            "nextPath": "/javascript/statements"
          },
          {
            "name": "Statements",
            "subitems": [],
            "path": "/javascript/statements",
            "prevName": "Operators",
            "prevPath": "/javascript/operators",
            "nextName": "Functions",
            "nextPath": "/javascript/functions"
          },
          {
            "name": "Functions",
            "subitems": [],
            "path": "/javascript/functions",
            "prevName": "Statements",
            "prevPath": "/javascript/statements",
            "nextName": "Types",
            "nextPath": "/javascript/types"
          },
          {
            "name": "Types",
            "subitems": [],
            "path": "/javascript/types",
            "prevName": "Functions",
            "prevPath": "/javascript/functions",
            "nextName": "Classes",
            "nextPath": "/javascript/classes"
          },
          {
            "name": "Classes",
            "subitems": [],
            "path": "/javascript/classes",
            "prevName": "Types",
            "prevPath": "/javascript/types",
            "nextName": "Interfaces",
            "nextPath": "/javascript/interfaces"
          },
          {
            "name": "Interfaces",
            "subitems": [],
            "path": "/javascript/interfaces",
            "prevName": "Classes",
            "prevPath": "/javascript/classes",
            "nextName": "Generics",
            "nextPath": "/javascript/generics"
          },
          {
            "name": "Generics",
            "subitems": [],
            "path": "/javascript/generics",
            "prevName": "Interfaces",
            "prevPath": "/javascript/interfaces",
            "nextName": "Types",
            "nextPath": "/types"
          }
        ],
        "path": "/javascript",
        "prevName": "Custom blocks",
        "prevPath": "/blocks/custom",
        "nextName": "Calling",
        "nextPath": "/javascript/call"
      },
      {
        "name": "Types",
        "subitems": [
          {
            "name": "Number",
            "subitems": [],
            "path": "/types/number",
            "prevName": "Types",
            "prevPath": "/types",
            "nextName": "String",
            "nextPath": "/types/string"
          },
          {
            "name": "String",
            "subitems": [],
            "path": "/types/string",
            "prevName": "Number",
            "prevPath": "/types/number",
            "nextName": "Boolean",
            "nextPath": "/types/boolean"
          },
          {
            "name": "Boolean",
            "subitems": [],
            "path": "/types/boolean",
            "prevName": "String",
            "prevPath": "/types/string",
            "nextName": "Array",
            "nextPath": "/types/array"
          },
          {
            "name": "Array",
            "subitems": [],
            "path": "/types/array",
            "prevName": "Boolean",
            "prevPath": "/types/boolean",
            "nextName": "Function",
            "nextPath": "/types/function"
          },
          {
            "name": "Function",
            "subitems": [],
            "path": "/types/function",
            "prevName": "Array",
            "prevPath": "/types/array",
            "nextName": "Buffer",
            "nextPath": "/types/buffer"
          },
          {
            "name": "Buffer",
            "subitems": [
              {
                "name": "Using buffers",
                "subitems": [],
                "path": "/types/buffer/using-buffers",
                "prevName": "Buffer",
                "prevPath": "/types/buffer",
                "nextName": "Number format",
                "nextPath": "/types/buffer/number-format"
              },
              {
                "name": "Number format",
                "subitems": [],
                "path": "/types/buffer/number-format",
                "prevName": "Using buffers",
                "prevPath": "/types/buffer/using-buffers",
                "nextName": "Hardware",
                "nextPath": "/device"
              }
            ],
            "path": "/types/buffer",
            "prevName": "Function",
            "prevPath": "/types/function",
            "nextName": "Using buffers",
            "nextPath": "/types/buffer/using-buffers"
          }
        ],
        "path": "/types",
        "prevName": "Generics",
        "prevPath": "/javascript/generics",
        "nextName": "Number",
        "nextPath": "/types/number"
      },
      {
        "name": "Hardware",
        "subitems": [
          {
            "name": "Data Analysis",
            "subitems": [
              {
                "name": "Plotting with LEDs",
                "subitems": [],
                "path": "/device/data-analysis/led-plotting",
                "prevName": "Data Analysis",
                "prevPath": "/device/data-analysis",
                "nextName": "Viewing Data",
                "nextPath": "/device/data-analysis/viewing"
              },
              {
                "name": "Viewing Data",
                "subitems": [],
                "path": "/device/data-analysis/viewing",
                "prevName": "Plotting with LEDs",
                "prevPath": "/device/data-analysis/led-plotting",
                "nextName": "Writing Data",
                "nextPath": "/device/data-analysis/writing"
              },
              {
                "name": "Writing Data",
                "subitems": [],
                "path": "/device/data-analysis/writing",
                "prevName": "Viewing Data",
                "prevPath": "/device/data-analysis/viewing",
                "nextName": "Generating Data",
                "nextPath": "/device/data-analysis/generating"
              },
              {
                "name": "Generating Data",
                "subitems": [],
                "path": "/device/data-analysis/generating",
                "prevName": "Writing Data",
                "prevPath": "/device/data-analysis/writing",
                "nextName": "Analyzing Data",
                "nextPath": "/device/data-analysis/analyze"
              },
              {
                "name": "Analyzing Data",
                "subitems": [],
                "path": "/device/data-analysis/analyze",
                "prevName": "Generating Data",
                "prevPath": "/device/data-analysis/generating",
                "nextName": "Remote Data",
                "nextPath": "/device/data-analysis/remote"
              },
              {
                "name": "Remote Data",
                "subitems": [],
                "path": "/device/data-analysis/remote",
                "prevName": "Analyzing Data",
                "prevPath": "/device/data-analysis/analyze",
                "nextName": "Error codes",
                "nextPath": "/device/error-codes"
              }
            ],
            "path": "/device/data-analysis",
            "prevName": "Hardware",
            "prevPath": "/device",
            "nextName": "Plotting with LEDs",
            "nextPath": "/device/data-analysis/led-plotting"
          },
          {
            "name": "Error codes",
            "subitems": [],
            "path": "/device/error-codes",
            "prevName": "Remote Data",
            "prevPath": "/device/data-analysis/remote",
            "nextName": "Foil circuits",
            "nextPath": "/device/foil-circuits"
          },
          {
            "name": "Foil circuits",
            "subitems": [],
            "path": "/device/foil-circuits",
            "prevName": "Error codes",
            "prevPath": "/device/error-codes",
            "nextName": "MES events",
            "nextPath": "/device/mes-events"
          },
          {
            "name": "MES events",
            "subitems": [],
            "path": "/device/mes-events",
            "prevName": "Foil circuits",
            "prevPath": "/device/foil-circuits",
            "nextName": "Pins",
            "nextPath": "/device/pins"
          },
          {
            "name": "Pins",
            "subitems": [],
            "path": "/device/pins",
            "prevName": "MES events",
            "prevPath": "/device/mes-events",
            "nextName": "Reactive",
            "nextPath": "/device/reactive"
          },
          {
            "name": "Reactive",
            "subitems": [],
            "path": "/device/reactive",
            "prevName": "Pins",
            "prevPath": "/device/pins",
            "nextName": "Screen",
            "nextPath": "/device/screen"
          },
          {
            "name": "Screen",
            "subitems": [],
            "path": "/device/screen",
            "prevName": "Reactive",
            "prevPath": "/device/reactive",
            "nextName": "Serial",
            "nextPath": "/device/serial"
          },
          {
            "name": "Serial",
            "subitems": [],
            "path": "/device/serial",
            "prevName": "Screen",
            "prevPath": "/device/screen",
            "nextName": "Servo",
            "nextPath": "/device/servo"
          },
          {
            "name": "Servo",
            "subitems": [],
            "path": "/device/servo",
            "prevName": "Serial",
            "prevPath": "/device/serial",
            "nextName": "Simulator",
            "nextPath": "/device/simulator"
          },
          {
            "name": "Simulator",
            "subitems": [],
            "path": "/device/simulator",
            "prevName": "Servo",
            "prevPath": "/device/servo",
            "nextName": "USB",
            "nextPath": "/device/usb"
          },
          {
            "name": "USB",
            "subitems": [],
            "path": "/device/usb",
            "prevName": "Simulator",
            "prevPath": "/device/simulator",
            "nextName": "WebUSB",
            "nextPath": "/device/usb/webusb"
          },
          {
            "name": "WebUSB",
            "subitems": [
              {
                "name": "WebUSB Troubleshoot",
                "subitems": [],
                "path": "/device/usb/webusb/troubleshoot",
                "prevName": "WebUSB",
                "prevPath": "/device/usb/webusb",
                "nextName": "Flashing via HID (CMSIS-DAP)",
                "nextPath": "/hidflash"
              }
            ],
            "path": "/device/usb/webusb",
            "prevName": "USB",
            "prevPath": "/device/usb",
            "nextName": "WebUSB Troubleshoot",
            "nextPath": "/device/usb/webusb/troubleshoot"
          },
          {
            "name": "Flashing via HID (CMSIS-DAP)",
            "subitems": [],
            "path": "/hidflash",
            "prevName": "WebUSB Troubleshoot",
            "prevPath": "/device/usb/webusb/troubleshoot",
            "nextName": "About",
            "nextPath": "/about"
          }
        ],
        "path": "/device",
        "prevName": "Number format",
        "prevPath": "/types/buffer/number-format",
        "nextName": "Data Analysis",
        "nextPath": "/device/data-analysis"
      },
      {
        "name": "",
        "subitems": [
          {
            "name": "About",
            "subitems": [],
            "path": "/about",
            "prevName": "Flashing via HID (CMSIS-DAP)",
            "prevPath": "/hidflash",
            "nextName": "Support",
            "nextPath": "/support"
          },
          {
            "name": "Support",
            "subitems": [],
            "path": "/support",
            "prevName": "About",
            "prevPath": "/about",
            "nextName": "Translate",
            "nextPath": "/translate"
          },
          {
            "name": "Translate",
            "subitems": [],
            "path": "/translate",
            "prevName": "Support",
            "prevPath": "/support",
            "nextName": "Sharing projects",
            "nextPath": "/share"
          },
          {
            "name": "Sharing projects",
            "subitems": [],
            "path": "/share",
            "prevName": "Translate",
            "prevPath": "/translate",
            "nextName": "Offline support",
            "nextPath": "/offline"
          },
          {
            "name": "Offline support",
            "subitems": [],
            "path": "/offline",
            "prevName": "Sharing projects",
            "prevPath": "/share",
            "nextName": "Save",
            "nextPath": "/save"
          },
          {
            "name": "Save",
            "subitems": [],
            "path": "/save",
            "prevName": "Offline support",
            "prevPath": "/offline",
            "nextName": "Command Line Interface",
            "nextPath": "/cli"
          }
        ],
        "prevName": "Flashing via HID (CMSIS-DAP)",
        "prevPath": "/hidflash"
      },
      {
        "name": "",
        "subitems": [
          {
            "name": "Command Line Interface",
            "subitems": [],
            "path": "/cli",
            "prevName": "Save",
            "prevPath": "/save",
            "nextName": "Visual Studio Code support",
            "nextPath": "/code"
          },
          {
            "name": "Visual Studio Code support",
            "subitems": [],
            "path": "/code",
            "prevName": "Command Line Interface",
            "prevPath": "/cli",
            "nextName": "Blocks Embed",
            "nextPath": "/blocks-embed"
          },
          {
            "name": "Blocks Embed",
            "subitems": [],
            "path": "/blocks-embed",
            "prevName": "Visual Studio Code support",
            "prevPath": "/code"
          }
        ],
        "prevName": "Save",
        "prevPath": "/save"
      }
    ],
    "id": "microbit",
    "title": "Microsoft MakeCode for micro:bit",
    "name": "makecode.microbit.org",
    "description": "A Blocks / JavaScript code editor for the micro:bit powered by Microsoft MakeCode.",
    "htmlDocIncludes": {}
  },
  "versions": {
    "target": "1.2.9",
    "pxt": "4.6.2"
  },
  "blocksprj": {
    "id": "blocksprj",
    "config": {
      "name": "{0} block",
      "dependencies": {
        "core": "*",
        "radio": "*"
      },
      "description": "",
      "files": [
        "main.blocks",
        "main.ts",
        "README.md"
      ],
      "additionalFilePaths": []
    },
    "files": {
      "main.blocks": "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n  <block type=\"pxt-on-start\"></block>\n</xml>\n",
      "main.ts": "\n",
      "README.md": ""
    }
  },
  "tsprj": {
    "id": "tsprj",
    "config": {
      "name": "{0} bit",
      "dependencies": {
        "core": "*",
        "radio": "*"
      },
      "description": "",
      "files": [
        "main.ts",
        "README.md"
      ],
      "additionalFilePaths": []
    },
    "files": {
      "main.ts": "basic.showLeds(`\n    . . . . .\n    . # . # .\n    . . . . .\n    # . . . #\n    . # # # .\n    `);",
      "README.md": ""
    }
  },
  "bundledpkgs": {
    "core": {
      ".travis.yml": "language: node_js\r\nnode_js:\r\n  - \"8.9.4\"\r\nscript:\r\n  - \"npm install -g pxt\"\r\n  - \"pxt target microbit\"\r\n  - \"pxt install\"\r\n  - \"pxt build --cloud\"\r\nsudo: false\r\ncache:\r\n  directories:\r\n    - npm_modules\r\n    - pxt_modules\r\n\r\n",
      "README.md": "# core\r\n\r\nThe core library.\r\n\r\n",
      "basic.cpp": "#include \"pxt.h\"\r\n\r\n\r\n/**\r\n * Provides access to basic micro:bit functionality.\r\n */\r\n//% color=#1E90FF weight=116 icon=\"\\uf00a\"\r\nnamespace basic {\r\n\r\n    /**\r\n     * Draws an image on the LED screen.\r\n     * @param leds the pattern of LED to turn on/off\r\n     * @param interval time in milliseconds to pause after drawing\r\n     */\r\n    //% help=basic/show-leds\r\n    //% weight=95 blockGap=8\r\n    //% imageLiteral=1 async\r\n    //% blockId=device_show_leds\r\n    //% block=\"show leds\" icon=\"\\uf00a\"\r\n    //% parts=\"ledmatrix\"\r\n    //%deprecated=true\r\n    void showLeds(ImageLiteral_ leds, int interval = 400) {\r\n      uBit.display.print(MicroBitImage(imageBytes(leds)), 0, 0, 0, interval);\r\n    }\r\n\r\n    /**\r\n     * Display text on the display, one character at a time. If the string fits on the screen (i.e. is one letter), does not scroll.\r\n     * @param text the text to scroll on the screen, eg: \"Hello!\"\r\n     * @param interval how fast to shift characters; eg: 150, 100, 200, -100\r\n     */\r\n    //% help=basic/show-string\r\n    //% weight=87 blockGap=16\r\n    //% block=\"show|string %text\"\r\n    //% async\r\n    //% blockId=device_print_message\r\n    //% parts=\"ledmatrix\"\r\n    //% text.shadowOptions.toString=true\r\n    //%deprecated=true\r\n    void showString(String text, int interval = 150) {\r\n      if (interval <= 0)\r\n        interval = 1;\r\n      int l = text ? text->length : 0;\r\n      if (l == 0) {\r\n        uBit.display.clear();\r\n        fiber_sleep(interval * 5);\r\n      } else if (l > 1) {\r\n        uBit.display.scroll(MSTR(text), interval);\r\n      } else {\r\n        uBit.display.printChar(text->data[0], interval * 5);\r\n      }\r\n    }\r\n\r\n    /**\r\n     * Turn off all LEDs\r\n     */\r\n    //% help=basic/clear-screen weight=79\r\n    //% blockId=device_clear_display block=\"clear screen\"\r\n    //% parts=\"ledmatrix\"\r\n    //% advanced=true\r\n    //%deprecated=true\r\n    void clearScreen() {\r\n      uBit.display.image.clear();\r\n    }\r\n\r\n    /**\r\n     * Shows a sequence of LED screens as an animation.\r\n     * @param leds pattern of LEDs to turn on/off\r\n     * @param interval time in milliseconds between each redraw\r\n     */\r\n    //% help=basic/show-animation imageLiteral=1 async\r\n    //% parts=\"ledmatrix\"\r\n    //%deprecated=true\r\n    void showAnimation(ImageLiteral_ leds, int interval = 400) {\r\n      uBit.display.animate(MicroBitImage(imageBytes(leds)), interval, 5, 0, 0);\r\n    }\r\n\r\n    /**\r\n     * Draws an image on the LED screen.\r\n     * @param leds pattern of LEDs to turn on/off\r\n     */\r\n    //% help=basic/plot-leds weight=80\r\n    //% parts=\"ledmatrix\"\r\n    //%deprecated=true\r\n    void plotLeds(ImageLiteral_ leds) {\r\n      MicroBitImage i(imageBytes(leds));\r\n      uBit.display.print(i, 0, 0, 0, 0);\r\n    }\r\n\r\n    /**\r\n     * Repeats the code forever in the background. On each iteration, allows other codes to run.\r\n     * @param body code to execute\r\n     */\r\n    //% help=basic/forever weight=55 blockGap=16 blockAllowMultiple=1 afterOnStart=true\r\n    //% blockId=device_forever block=\"forever\" icon=\"\\uf01e\"\r\n    //%deprecated=true\r\n    void forever(Action a) {\r\n      runForever(a);\r\n    }\r\n\r\n    /**\r\n     * Pause for the specified time in milliseconds\r\n     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000\r\n     */\r\n    //% help=basic/pause weight=54\r\n    //% async block=\"pause (ms) %pause\" blockGap=16\r\n    //% blockId=device_pause icon=\"\\uf110\"\r\n    //% pause.shadow=timePicker\r\n    //%deprecated=true\r\n    void pause(int ms) {\r\n      fiber_sleep(ms);\r\n    }\r\n}\r\n",
      "basic.ts": "namespace basic {\r\n\r\n    /**\r\n     * Scroll a number on the screen. If the number fits on the screen (i.e. is a single digit), do not scroll.\r\n     * @param interval speed of scroll; eg: 150, 100, 200, -100\r\n     */\r\n    //% help=basic/show-number\r\n    //% weight=96\r\n    //% blockId=device_show_number block=\"show|number %number\" blockGap=8\r\n    //% async\r\n    //% parts=\"ledmatrix\" interval.defl=150\r\n    //%deprecated=true\r\n    export function showNumber(value: number, interval?: number) {\r\n        showString(Math.roundWithPrecision(value, 2).toString(), interval);\r\n    }\r\n}\r\n",
      "buffer.cpp": "#include \"pxtbase.h\"\r\n#include <limits.h>\r\n\r\nusing namespace std;\r\n\r\n//% indexerGet=BufferMethods::getByte indexerSet=BufferMethods::setByte\r\nnamespace BufferMethods {\r\n//%\r\nuint8_t *getBytes(Buffer buf) {\r\n    return buf->data;\r\n}\r\n\r\n//%\r\nint getByte(Buffer buf, int off) {\r\n    if (buf && 0 <= off && off < buf->length)\r\n        return buf->data[off];\r\n    return 0;\r\n}\r\n\r\n//%\r\nvoid setByte(Buffer buf, int off, int v) {\r\n    if (buf && 0 <= off && off < buf->length)\r\n        buf->data[off] = v;\r\n}\r\n\r\nint writeBuffer(Buffer buf, int dstOffset, Buffer src, int srcOffset = 0, int length = -1) {\r\n    if (length < 0)\r\n        length = src->length;\r\n\r\n    if (srcOffset < 0 || dstOffset < 0 || dstOffset > buf->length)\r\n        return -1;\r\n\r\n    length = min(src->length - srcOffset, buf->length - dstOffset);\r\n\r\n    if (length < 0)\r\n        return -1;\r\n\r\n    if (buf == src) {\r\n        memmove(buf->data + dstOffset, src->data + srcOffset, length);\r\n    } else {\r\n        memcpy(buf->data + dstOffset, src->data + srcOffset, length);\r\n    }\r\n\r\n    return 0;\r\n}\r\n\r\n/**\r\n * Write a number in specified format in the buffer.\r\n */\r\n//%\r\nvoid setNumber(Buffer buf, NumberFormat format, int offset, TNumber value) {\r\n    if (offset < 0)\r\n        return;\r\n    setNumberCore(buf->data + offset, buf->length - offset, format, value);\r\n}\r\n\r\n/**\r\n * Read a number in specified format from the buffer.\r\n */\r\n//%\r\nTNumber getNumber(Buffer buf, NumberFormat format, int offset) {\r\n    if (offset < 0)\r\n        return fromInt(0);\r\n    return getNumberCore(buf->data + offset, buf->length - offset, format);\r\n}\r\n\r\n/** Returns the length of a Buffer object. */\r\n//% property\r\nint length(Buffer s) {\r\n    return s->length;\r\n}\r\n\r\n/**\r\n * Fill (a fragment) of the buffer with given value.\r\n */\r\n//%\r\nvoid fill(Buffer buf, int value, int offset = 0, int length = -1) {\r\n    if (offset < 0 || offset > buf->length)\r\n        return; // DEVICE_INVALID_PARAMETER;\r\n    if (length < 0)\r\n        length = buf->length;\r\n    length = min(length, buf->length - offset);\r\n    memset(buf->data + offset, value, length);\r\n}\r\n\r\n/**\r\n * Return a copy of a fragment of a buffer.\r\n */\r\n//%\r\nBuffer slice(Buffer buf, int offset = 0, int length = -1) {\r\n    offset = min((int)buf->length, offset);\r\n    if (length < 0)\r\n        length = buf->length;\r\n    length = min(length, buf->length - offset);\r\n    return mkBuffer(buf->data + offset, length);\r\n}\r\n\r\n/**\r\n * Shift buffer left in place, with zero padding.\r\n * @param offset number of bytes to shift; use negative value to shift right\r\n * @param start start offset in buffer. Default is 0.\r\n * @param length number of elements in buffer. If negative, length is set as the buffer length minus\r\n * start. eg: -1\r\n */\r\n//%\r\nvoid shift(Buffer buf, int offset, int start = 0, int length = -1) {\r\n    if (length < 0)\r\n        length = buf->length - start;\r\n    if (start < 0 || start + length > buf->length || start + length < start || length == 0 ||\r\n        offset == 0 || offset == INT_MIN)\r\n        return;\r\n    if (offset <= -length || offset >= length) {\r\n        fill(buf, 0);\r\n        return;\r\n    }\r\n\r\n    uint8_t *data = buf->data + start;\r\n    if (offset < 0) {\r\n        offset = -offset;\r\n        memmove(data + offset, data, length - offset);\r\n        memset(data, 0, offset);\r\n    } else {\r\n        length = length - offset;\r\n        memmove(data, data + offset, length);\r\n        memset(data + length, 0, offset);\r\n    }\r\n}\r\n\r\n/**\r\n * Convert a buffer to its hexadecimal representation.\r\n */\r\n//%\r\nString toHex(Buffer buf) {\r\n    const char *hex = \"0123456789abcdef\";\r\n    auto res = mkString(NULL, buf->length * 2);\r\n    for (int i = 0; i < buf->length; ++i) {\r\n        res->data[i << 1] = hex[buf->data[i] >> 4];\r\n        res->data[(i << 1) + 1] = hex[buf->data[i] & 0xf];\r\n    }\r\n    return res;\r\n}\r\n\r\n/**\r\n * Rotate buffer left in place.\r\n * @param offset number of bytes to shift; use negative value to shift right\r\n * @param start start offset in buffer. Default is 0.\r\n * @param length number of elements in buffer. If negative, length is set as the buffer length minus\r\n * start. eg: -1\r\n */\r\n//%\r\nvoid rotate(Buffer buf, int offset, int start = 0, int length = -1) {\r\n    if (length < 0)\r\n        length = buf->length - start;\r\n    if (start < 0 || start + length > buf->length || start + length < start || length == 0 ||\r\n        offset == 0 || offset == INT_MIN)\r\n        return;\r\n\r\n    if (offset < 0)\r\n        offset += length << 8; // try to make it positive\r\n    offset %= length;\r\n    if (offset < 0)\r\n        offset += length;\r\n\r\n    uint8_t *data = buf->data + start;\r\n\r\n    uint8_t *n_first = data + offset;\r\n    uint8_t *first = data;\r\n    uint8_t *next = n_first;\r\n    uint8_t *last = data + length;\r\n\r\n    while (first != next) {\r\n        uint8_t tmp = *first;\r\n        *first++ = *next;\r\n        *next++ = tmp;\r\n        if (next == last) {\r\n            next = n_first;\r\n        } else if (first == n_first) {\r\n            n_first = next;\r\n        }\r\n    }\r\n}\r\n\r\n/**\r\n * Write contents of `src` at `dstOffset` in current buffer.\r\n */\r\n//%\r\nvoid write(Buffer buf, int dstOffset, Buffer src) {\r\n    // srcOff and length not supported, we only do up to 4 args :/\r\n    writeBuffer(buf, dstOffset, src, 0, -1);\r\n}\r\n}\r\n\r\nnamespace control {\r\n/**\r\n * Create a new zero-initialized buffer.\r\n * @param size number of bytes in the buffer\r\n */\r\n//%\r\nBuffer createBuffer(int size) {\r\n    return mkBuffer(NULL, size);\r\n}\r\n}\r\n\r\nnamespace pxt {\r\nstatic int writeBytes(uint8_t *dst, uint8_t *src, int length, bool swapBytes, int szLeft) {\r\n    if (szLeft < length) {\r\n        return -1;\r\n    }\r\n\r\n    if (swapBytes) {\r\n        uint8_t *p = dst + length;\r\n        for (int i = 0; i < length; ++i)\r\n            *--p = src[i];\r\n    } else {\r\n        if (length == 4 && ((uint32_t)dst & 3) == 0)\r\n            *(uint32_t *)dst = *(uint32_t *)src;\r\n        else if (length == 2 && ((uint32_t)dst & 1) == 0)\r\n            *(uint16_t *)dst = *(uint16_t *)src;\r\n        else\r\n            memcpy(dst, src, length);\r\n    }\r\n\r\n    return 0;\r\n}\r\n\r\nstatic int readBytes(uint8_t *src, uint8_t *dst, int length, bool swapBytes, int szLeft) {\r\n    if (szLeft < length) {\r\n        memset(dst, 0, length);\r\n        return -1;\r\n    }\r\n\r\n    if (swapBytes) {\r\n        uint8_t *p = src + length;\r\n        for (int i = 0; i < length; ++i)\r\n            dst[i] = *--p;\r\n    } else {\r\n        if (length == 4 && ((uint32_t)src & 3) == 0)\r\n            *(uint32_t *)dst = *(uint32_t *)src;\r\n        else if (length == 2 && ((uint32_t)src & 1) == 0)\r\n            *(uint16_t *)dst = *(uint16_t *)src;\r\n        else\r\n            memcpy(dst, src, length);\r\n    }\r\n\r\n    return 0;\r\n}\r\n\r\nvoid setNumberCore(uint8_t *buf, int szLeft, NumberFormat format, TNumber value) {\r\n    int8_t i8;\r\n    uint8_t u8;\r\n    int16_t i16;\r\n    uint16_t u16;\r\n    int32_t i32;\r\n    uint32_t u32;\r\n    float f32;\r\n    double f64;\r\n\r\n// Assume little endian\r\n#define WRITEBYTES(isz, swap, toInt)                                                               \\\r\n    isz = toInt(value);                                                                            \\\r\n    writeBytes(buf, (uint8_t *)&isz, sizeof(isz), swap, szLeft);                                   \\\r\n    break\r\n\r\n    switch (format) {\r\n    case NumberFormat::Int8LE:\r\n        WRITEBYTES(i8, false, toInt);\r\n    case NumberFormat::UInt8LE:\r\n        WRITEBYTES(u8, false, toInt);\r\n    case NumberFormat::Int16LE:\r\n        WRITEBYTES(i16, false, toInt);\r\n    case NumberFormat::UInt16LE:\r\n        WRITEBYTES(u16, false, toInt);\r\n    case NumberFormat::Int32LE:\r\n        WRITEBYTES(i32, false, toInt);\r\n    case NumberFormat::UInt32LE:\r\n        WRITEBYTES(u32, false, toUInt);\r\n\r\n    case NumberFormat::Int8BE:\r\n        WRITEBYTES(i8, true, toInt);\r\n    case NumberFormat::UInt8BE:\r\n        WRITEBYTES(u8, true, toInt);\r\n    case NumberFormat::Int16BE:\r\n        WRITEBYTES(i16, true, toInt);\r\n    case NumberFormat::UInt16BE:\r\n        WRITEBYTES(u16, true, toInt);\r\n    case NumberFormat::Int32BE:\r\n        WRITEBYTES(i32, true, toInt);\r\n    case NumberFormat::UInt32BE:\r\n        WRITEBYTES(u32, true, toUInt);\r\n\r\n    case NumberFormat::Float32LE:\r\n        WRITEBYTES(f32, false, toFloat);\r\n    case NumberFormat::Float32BE:\r\n        WRITEBYTES(f32, true, toFloat);\r\n    case NumberFormat::Float64LE:\r\n        WRITEBYTES(f64, false, toDouble);\r\n    case NumberFormat::Float64BE:\r\n        WRITEBYTES(f64, true, toDouble);\r\n    }\r\n}\r\n\r\nTNumber getNumberCore(uint8_t *buf, int szLeft, NumberFormat format) {\r\n    int8_t i8;\r\n    uint8_t u8;\r\n    int16_t i16;\r\n    uint16_t u16;\r\n    int32_t i32;\r\n    uint32_t u32;\r\n    float f32;\r\n    double f64;\r\n\r\n// Assume little endian\r\n#define READBYTES(isz, swap, conv)                                                                 \\\r\n    readBytes(buf, (uint8_t *)&isz, sizeof(isz), swap, szLeft);                                    \\\r\n    return conv(isz)\r\n\r\n    switch (format) {\r\n    case NumberFormat::Int8LE:\r\n        READBYTES(i8, false, fromInt);\r\n    case NumberFormat::UInt8LE:\r\n        READBYTES(u8, false, fromInt);\r\n    case NumberFormat::Int16LE:\r\n        READBYTES(i16, false, fromInt);\r\n    case NumberFormat::UInt16LE:\r\n        READBYTES(u16, false, fromInt);\r\n    case NumberFormat::Int32LE:\r\n        READBYTES(i32, false, fromInt);\r\n    case NumberFormat::UInt32LE:\r\n        READBYTES(u32, false, fromUInt);\r\n\r\n    case NumberFormat::Int8BE:\r\n        READBYTES(i8, true, fromInt);\r\n    case NumberFormat::UInt8BE:\r\n        READBYTES(u8, true, fromInt);\r\n    case NumberFormat::Int16BE:\r\n        READBYTES(i16, true, fromInt);\r\n    case NumberFormat::UInt16BE:\r\n        READBYTES(u16, true, fromInt);\r\n    case NumberFormat::Int32BE:\r\n        READBYTES(i32, true, fromInt);\r\n    case NumberFormat::UInt32BE:\r\n        READBYTES(u32, true, fromUInt);\r\n\r\n    case NumberFormat::Float32LE:\r\n        READBYTES(f32, false, fromFloat);\r\n    case NumberFormat::Float32BE:\r\n        READBYTES(f32, true, fromFloat);\r\n    case NumberFormat::Float64LE:\r\n        READBYTES(f64, false, fromDouble);\r\n    case NumberFormat::Float64BE:\r\n        READBYTES(f64, true, fromDouble);\r\n    }\r\n\r\n    return 0;\r\n}\r\n}",
      "buffer.ts": "namespace pins {\r\n    /**\r\n     * Get the size in bytes of specified number format.\r\n     */\r\n    //%\r\n    export function sizeOf(format: NumberFormat) {\r\n        switch (format) {\r\n            case NumberFormat.Int8LE:\r\n            case NumberFormat.UInt8LE:\r\n            case NumberFormat.Int8BE:\r\n            case NumberFormat.UInt8BE:\r\n                return 1;\r\n            case NumberFormat.Int16LE:\r\n            case NumberFormat.UInt16LE:\r\n            case NumberFormat.Int16BE:\r\n            case NumberFormat.UInt16BE:\r\n                return 2;\r\n            case NumberFormat.Int32LE:\r\n            case NumberFormat.Int32BE:\r\n            case NumberFormat.UInt32BE:\r\n            case NumberFormat.UInt32LE:\r\n            case NumberFormat.Float32BE:\r\n            case NumberFormat.Float32LE:\r\n                return 4;\r\n            case NumberFormat.Float64BE:\r\n            case NumberFormat.Float64LE:\r\n                return 8;\r\n        }\r\n        return 0;\r\n    }\r\n\r\n    /**\r\n     * Create a new buffer initalized to bytes from given array.\r\n     * @param bytes data to initalize with\r\n     */\r\n    //%\r\n    export function createBufferFromArray(bytes: number[]) {\r\n        let buf = control.createBuffer(bytes.length)\r\n        for (let i = 0; i < bytes.length; ++i)\r\n            buf[i] = bytes[i]\r\n        return buf\r\n    }\r\n\r\n    function getFormat(pychar: string, isBig: boolean) {\r\n        switch (pychar) {\r\n            case 'B':\r\n                return NumberFormat.UInt8LE\r\n            case 'b':\r\n                return NumberFormat.Int8LE\r\n            case 'H':\r\n                return isBig ? NumberFormat.UInt16BE : NumberFormat.UInt16LE\r\n            case 'h':\r\n                return isBig ? NumberFormat.Int16BE : NumberFormat.Int16LE\r\n            case 'I':\r\n            case 'L':\r\n                return isBig ? NumberFormat.UInt32BE : NumberFormat.UInt32LE\r\n            case 'i':\r\n            case 'l':\r\n                return isBig ? NumberFormat.Int32BE : NumberFormat.Int32LE\r\n            case 'f':\r\n                return isBig ? NumberFormat.Float32BE : NumberFormat.Float32LE\r\n            case 'd':\r\n                return isBig ? NumberFormat.Float64BE : NumberFormat.Float64LE\r\n            default:\r\n                return null as NumberFormat\r\n        }\r\n    }\r\n\r\n    function packUnpackCore(format: string, nums: number[], buf: Buffer, isPack: boolean, off = 0) {\r\n        let isBig = false\r\n        let idx = 0\r\n        for (let i = 0; i < format.length; ++i) {\r\n            switch (format[i]) {\r\n                case ' ':\r\n                case '<':\r\n                case '=':\r\n                    isBig = false\r\n                    break\r\n                case '>':\r\n                case '!':\r\n                    isBig = true\r\n                    break\r\n                case 'x':\r\n                    off++\r\n                    break\r\n                default:\r\n                    let fmt = getFormat(format[i], isBig)\r\n                    if (fmt === null) {\r\n                        control.fail(\"Not supported format character: \" + format[i])\r\n                    } else {\r\n                        if (buf) {\r\n                            if (isPack)\r\n                                buf.setNumber(fmt, off, nums[idx++])\r\n                            else\r\n                                nums.push(buf.getNumber(fmt, off))\r\n                        }\r\n\r\n                        off += pins.sizeOf(fmt)\r\n                    }\r\n                    break\r\n            }\r\n        }\r\n        return off\r\n    }\r\n\r\n    export function packedSize(format: string) {\r\n        return packUnpackCore(format, null, null, true)\r\n    }\r\n\r\n    export function packBuffer(format: string, nums: number[]) {\r\n        let buf = control.createBuffer(packedSize(format))\r\n        packUnpackCore(format, nums, buf, true)\r\n        return buf\r\n    }\r\n\r\n    export function packIntoBuffer(format: string, buf: Buffer, offset: number, nums: number[]) {\r\n        packUnpackCore(format, nums, buf, true, offset)\r\n    }\r\n\r\n    export function unpackBuffer(format: string, buf: Buffer, offset = 0) {\r\n        let res: number[] = []\r\n        packUnpackCore(format, res, buf, false, offset)\r\n        return res\r\n    }\r\n}\r\n\r\n// see http://msgpack.org/ for the spec\r\n// it currently only implements numbers and their sequances\r\n// once we handle any type and typeof expressions we can do more\r\n\r\nnamespace msgpack {\r\n    function tagFormat(tag: number) {\r\n        switch (tag) {\r\n            case 0xCB: return NumberFormat.Float64BE\r\n            case 0xCC: return NumberFormat.UInt8BE\r\n            case 0xCD: return NumberFormat.UInt16BE\r\n            case 0xCE: return NumberFormat.UInt32BE\r\n            case 0xD0: return NumberFormat.Int8BE\r\n            case 0xD1: return NumberFormat.Int16BE\r\n            case 0xD2: return NumberFormat.Int32BE\r\n            default:\r\n                return null\r\n        }\r\n    }\r\n\r\n    function packNumberCore(buf: Buffer, offset: number, num: number) {\r\n        let tag = 0xCB\r\n        if (num == (num << 0) || num == (num >>> 0)) {\r\n            if (-31 <= num && num <= 127) {\r\n                if (buf) buf[offset] = num\r\n                return 1\r\n            } else if (0 <= num) {\r\n                if (num <= 0xff) {\r\n                    tag = 0xCC\r\n                } else if (num <= 0xffff) {\r\n                    tag = 0xCD\r\n                } else {\r\n                    tag = 0xCE\r\n                }\r\n            } else {\r\n                if (-0x7f <= num) {\r\n                    tag = 0xD0\r\n                } else if (-0x7fff <= num) {\r\n                    tag = 0xD1\r\n                } else {\r\n                    tag = 0xD2\r\n                }\r\n            }\r\n        }\r\n        let fmt = tagFormat(tag)\r\n        if (buf) {\r\n            buf[offset] = tag\r\n            buf.setNumber(fmt, offset + 1, num)\r\n        }\r\n        return pins.sizeOf(fmt) + 1\r\n    }\r\n\r\n    /**\r\n     * Unpacks a buffer into a number array.\r\n     */\r\n    export function unpackNumberArray(buf: Buffer, offset = 0): number[] {\r\n        let res: number[] = []\r\n\r\n        while (offset < buf.length) {\r\n            let fmt = tagFormat(buf[offset++])\r\n            if (fmt === null) {\r\n                let v = buf.getNumber(NumberFormat.Int8BE, offset - 1)\r\n                if (-31 <= v && v <= 127)\r\n                    res.push(v)\r\n                else\r\n                    return null\r\n            } else {\r\n                res.push(buf.getNumber(fmt, offset))\r\n                offset += pins.sizeOf(fmt)\r\n            }\r\n            // padding at the end\r\n            while (buf[offset] === 0xc1) offset++;\r\n        }\r\n\r\n        return res\r\n    }\r\n\r\n    /**\r\n     * Pack a number array into a buffer.\r\n     * @param nums the numbers to be packed\r\n     */\r\n    export function packNumberArray(nums: number[]): Buffer {\r\n        let off = 0\r\n        for (let n of nums) {\r\n            off += packNumberCore(null, off, n)\r\n        }\r\n        let buf = control.createBuffer(off)\r\n        off = 0\r\n        for (let n of nums) {\r\n            off += packNumberCore(buf, off, n)\r\n        }\r\n        return buf\r\n    }\r\n}\r\n\r\ninterface Buffer {\r\n    [index: number]: number;\r\n    // rest defined in buffer.cpp\r\n}",
      "codal.cpp": "#include \"pxt.h\"\r\n#include <stdarg.h>\r\n\r\nPXT_ABI(__aeabi_dadd)\r\nPXT_ABI(__aeabi_dcmplt)\r\nPXT_ABI(__aeabi_dcmpgt)\r\nPXT_ABI(__aeabi_dsub)\r\nPXT_ABI(__aeabi_ddiv)\r\nPXT_ABI(__aeabi_dmul)\r\n\r\nextern \"C\" void target_panic(int error_code)\r\n{\r\n    // wait for serial to flush\r\n    wait_us(300000);\r\n    microbit_panic(error_code);\r\n}\r\n\r\nextern \"C\" void target_reset()\r\n{\r\n    microbit_reset();\r\n}\r\n\r\nnamespace pxt {\r\n\r\nMicroBit uBit;\r\nMicroBitEvent lastEvent;\r\n\r\nvoid platform_init() {\r\n    microbit_seed_random();\r\n    seedRandom(microbit_random(0x7fffffff));\r\n}\r\n\r\nvoid platform_init();\r\nvoid usb_init();\r\n\r\nstruct FreeList {\r\n    FreeList *next;\r\n};\r\n\r\nstatic void initCodal() {\r\n\r\n    uBit.init();\r\n\r\n    // repeat error 4 times and restart as needed\r\n    microbit_panic_timeout(4);\r\n}\r\n\r\nvoid dumpDmesg() {}\r\n\r\n// ---------------------------------------------------------------------------\r\n// An adapter for the API expected by the run-time.\r\n// ---------------------------------------------------------------------------\r\n\r\n// We have the invariant that if [dispatchEvent] is registered against the DAL\r\n// for a given event, then [handlersMap] contains a valid entry for that\r\n// event.\r\nvoid dispatchEvent(MicroBitEvent e) {\r\n    lastEvent = e;\r\n\r\n    auto curr = findBinding(e.source, e.value);\r\n    auto value = fromInt(e.value);\r\n    if (curr)\r\n        runAction1(curr->action, value);\r\n\r\n    curr = findBinding(e.source, DEVICE_EVT_ANY);\r\n    if (curr)\r\n        runAction1(curr->action, value);\r\n}\r\n\r\nvoid registerWithDal(int id, int event, Action a, int flags) {\r\n    // first time?\r\n    if (!findBinding(id, event))\r\n        uBit.messageBus.listen(id, event, dispatchEvent, flags);\r\n    setBinding(id, event, a);\r\n}\r\n\r\nvoid fiberDone(void *a) {\r\n    decr((Action)a);\r\n    release_fiber();\r\n}\r\n\r\nvoid releaseFiber() {\r\n    release_fiber();\r\n}\r\n\r\nvoid sleep_ms(unsigned ms) {\r\n    fiber_sleep(ms);\r\n}\r\n\r\nvoid sleep_us(uint64_t us) {\r\n    wait_us(us);\r\n}\r\n\r\nvoid forever_stub(void *a) {\r\n    while (true) {\r\n        runAction0((Action)a);\r\n        fiber_sleep(20);\r\n    }\r\n}\r\n\r\nvoid runForever(Action a) {\r\n    if (a != 0) {\r\n        incr(a);\r\n        create_fiber(forever_stub, (void *)a);\r\n    }\r\n}\r\n\r\nvoid runInParallel(Action a) {\r\n    if (a != 0) {\r\n        incr(a);\r\n        create_fiber((void (*)(void *))runAction0, (void *)a, fiberDone);\r\n    }\r\n}\r\n\r\nvoid waitForEvent(int id, int event) {\r\n    fiber_wait_for_event(id, event);\r\n}\r\n\r\nvoid initRuntime() {\r\n    initCodal();\r\n    platform_init();\r\n}\r\n\r\n//%\r\nunsigned afterProgramPage() {\r\n    unsigned ptr = (unsigned)&bytecode[0];\r\n    ptr += programSize();\r\n    ptr = (ptr + (PAGE_SIZE - 1)) & ~(PAGE_SIZE - 1);\r\n    return ptr;\r\n}\r\n\r\n\r\nint current_time_ms() {\r\n    return system_timer_current_time();\r\n}\r\n\r\nstatic void logwriten(const char *msg, int l)\r\n{\r\n    uBit.serial.send((uint8_t*)msg, l);\r\n}\r\n\r\nstatic void logwrite(const char *msg)\r\n{\r\n    logwriten(msg, strlen(msg));\r\n}\r\n\r\n\r\nstatic void writeNum(char *buf, uint32_t n, bool full)\r\n{\r\n    int i = 0;\r\n    int sh = 28;\r\n    while (sh >= 0)\r\n    {\r\n        int d = (n >> sh) & 0xf;\r\n        if (full || d || sh == 0 || i)\r\n        {\r\n            buf[i++] = d > 9 ? 'A' + d - 10 : '0' + d;\r\n        }\r\n        sh -= 4;\r\n    }\r\n    buf[i] = 0;\r\n}\r\n\r\nstatic void logwritenum(uint32_t n, bool full, bool hex)\r\n{\r\n    char buff[20];\r\n\r\n    if (hex)\r\n    {\r\n        writeNum(buff, n, full);\r\n        logwrite(\"0x\");\r\n    }\r\n    else\r\n    {\r\n        itoa(n, buff);\r\n    }\r\n\r\n    logwrite(buff);\r\n}\r\n\r\nvoid vdebuglog(const char *format, va_list ap)\r\n{\r\n    const char *end = format;\r\n\r\n    while (*end)\r\n    {\r\n        if (*end++ == '%')\r\n        {\r\n            logwriten(format, end - format - 1);\r\n            uint32_t val = va_arg(ap, uint32_t);\r\n            switch (*end++)\r\n            {\r\n            case 'c':\r\n                logwriten((const char *)&val, 1);\r\n                break;\r\n            case 'd':\r\n                logwritenum(val, false, false);\r\n                break;\r\n            case 'x':\r\n                logwritenum(val, false, true);\r\n                break;\r\n            case 'p':\r\n            case 'X':\r\n                logwritenum(val, true, true);\r\n                break;\r\n            case 's':\r\n                logwrite((char *)(void *)val);\r\n                break;\r\n            case '%':\r\n                logwrite(\"%\");\r\n                break;\r\n            default:\r\n                logwrite(\"???\");\r\n                break;\r\n            }\r\n            format = end;\r\n        }\r\n    }\r\n    logwriten(format, end - format);\r\n    logwrite(\"\\n\");\r\n}\r\n\r\nvoid debuglog(const char *format, ...)\r\n{\r\n    va_list arg;\r\n    va_start(arg, format);\r\n    vdebuglog(format, arg);\r\n    va_end(arg);\r\n}\r\n\r\nvoid sendSerial(const char *data, int len) {\r\n    logwriten(data, len);\r\n}\r\n\r\n} // namespace pxt\r\n\r\n\r\n\r\n",
      "console.ts": "/// <reference no-default-lib=\"true\"/>\r\n\r\n/**\r\n * Reading and writing data to the console output.\r\n */\r\n//% weight=12 color=#002050 icon=\"\\uf120\"\r\n//% advanced=true\r\nnamespace console {\r\n    type Listener = (text: string) => void;\r\n\r\n    //% whenUsed\r\n    let listeners: Listener[] = undefined;\r\n\r\n    /**\r\n     * Write a line of text to the console output.\r\n     * @param value to send\r\n     */\r\n    //% weight=90\r\n    //% help=console/log blockGap=8\r\n    //% text.shadowOptions.toString=true\r\n    export function log(text: string): void {\r\n        // pad text on the 32byte boundar\r\n        text += \"\\r\\n\";\r\n        control.__log(text);\r\n        // send to listeners\r\n        if (listeners)\r\n            for (let i = 0; i < listeners.length; ++i)\r\n                listeners[i](text);\r\n    }\r\n\r\n    /**\r\n     * Write a name:value pair as a line of text to the console output.\r\n     * @param name name of the value stream, eg: \"x\"\r\n     * @param value to write\r\n     */\r\n    //% weight=88 blockGap=8\r\n    //% help=console/log-value\r\n    export function logValue(name: string, value: number): void {\r\n        log(name ? `${name}: ${value}` : `${value}`)\r\n    }\r\n\r\n    /**\r\n     * Adds a listener for the log messages\r\n     * @param listener\r\n     */\r\n    //%\r\n    export function addListener(listener: (text: string) => void) {\r\n        if (!listener) return;\r\n        if (!listeners)\r\n            listeners = [];\r\n        listeners.push(listener);\r\n    }\r\n}",
      "control.cpp": "#include \"pxt.h\"\r\n\r\n/**\r\n * How to create the event.\r\n */\r\nenum class EventCreationMode {\r\n    /**\r\n     * MicroBitEvent is initialised, and no further processing takes place.\r\n     */\r\n    CreateOnly = CREATE_ONLY,\r\n    /**\r\n     * MicroBitEvent is initialised, and its event handlers are immediately fired (not suitable for use in interrupts!).\r\n     */\r\n    CreateAndFire = CREATE_AND_FIRE,\r\n};\r\n\r\n// note the trailing '_' in names - otherwise we get conflict with the pre-processor\r\n// this trailing underscore is removed by enums.d.ts generation process\r\n\r\n// TODO shouldn't these be renamed to something more sensible anyways?\r\n\r\nenum EventBusSource {\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_BUTTON_A_ = MICROBIT_ID_BUTTON_A,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_BUTTON_B_ = MICROBIT_ID_BUTTON_B,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_BUTTON_AB_ = MICROBIT_ID_BUTTON_AB,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_RADIO_ = MICROBIT_ID_RADIO,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_GESTURE_ = MICROBIT_ID_GESTURE,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_ACCELEROMETER_ = MICROBIT_ID_ACCELEROMETER,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_IO_P0_ = MICROBIT_ID_IO_P0,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_IO_P1_ = MICROBIT_ID_IO_P1,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_IO_P2_ = MICROBIT_ID_IO_P2,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_IO_P3_ = MICROBIT_ID_IO_P3,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_IO_P4_ = MICROBIT_ID_IO_P4,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_IO_P5_ = MICROBIT_ID_IO_P5,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_IO_P6_ = MICROBIT_ID_IO_P6,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_IO_P7_ = MICROBIT_ID_IO_P7,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_IO_P8_ = MICROBIT_ID_IO_P8,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_IO_P9_ = MICROBIT_ID_IO_P9,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_IO_P10_ = MICROBIT_ID_IO_P10,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_IO_P11_ = MICROBIT_ID_IO_P11,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_IO_P12_ = MICROBIT_ID_IO_P12,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_IO_P13_ = MICROBIT_ID_IO_P13,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_IO_P14_ = MICROBIT_ID_IO_P14,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_IO_P15_ = MICROBIT_ID_IO_P15,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_IO_P16_ = MICROBIT_ID_IO_P16,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_IO_P19_ = MICROBIT_ID_IO_P19,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MICROBIT_ID_IO_P20_ = MICROBIT_ID_IO_P20,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MES_DEVICE_INFO_ID_ = MES_DEVICE_INFO_ID,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MES_SIGNAL_STRENGTH_ID_ = MES_SIGNAL_STRENGTH_ID,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MES_DPAD_CONTROLLER_ID_ = MES_DPAD_CONTROLLER_ID,\r\n    //% blockIdentity=\"control.eventSourceId\"\r\n    MES_BROADCAST_GENERAL_ID_ = MES_BROADCAST_GENERAL_ID,\r\n};\r\n\r\nenum EventBusValue {\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MICROBIT_EVT_ANY_ = MICROBIT_EVT_ANY,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MICROBIT_BUTTON_EVT_DOWN_ = MICROBIT_BUTTON_EVT_DOWN,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MICROBIT_BUTTON_EVT_UP_ = MICROBIT_BUTTON_EVT_UP,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MICROBIT_BUTTON_EVT_CLICK_ = MICROBIT_BUTTON_EVT_CLICK,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MICROBIT_RADIO_EVT_DATAGRAM_ = MICROBIT_RADIO_EVT_DATAGRAM,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MICROBIT_ACCELEROMETER_EVT_DATA_UPDATE_ = MICROBIT_ACCELEROMETER_EVT_DATA_UPDATE,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MICROBIT_PIN_EVT_RISE_ = MICROBIT_PIN_EVT_RISE,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MICROBIT_PIN_EVT_FALL_ = MICROBIT_PIN_EVT_FALL,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MICROBIT_PIN_EVT_PULSE_HI_ = MICROBIT_PIN_EVT_PULSE_HI,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MICROBIT_PIN_EVT_PULSE_LO_ = MICROBIT_PIN_EVT_PULSE_LO,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_ALERT_EVT_ALARM1_ = MES_ALERT_EVT_ALARM1,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_ALERT_EVT_ALARM2_ = MES_ALERT_EVT_ALARM2,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_ALERT_EVT_ALARM3_ = MES_ALERT_EVT_ALARM3,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_ALERT_EVT_ALARM4_ = MES_ALERT_EVT_ALARM4,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_ALERT_EVT_ALARM5_ = MES_ALERT_EVT_ALARM5,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_ALERT_EVT_ALARM6_ = MES_ALERT_EVT_ALARM6,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_ALERT_EVT_DISPLAY_TOAST_ = MES_ALERT_EVT_DISPLAY_TOAST,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_ALERT_EVT_FIND_MY_PHONE_ = MES_ALERT_EVT_FIND_MY_PHONE,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_ALERT_EVT_PLAY_RINGTONE_ = MES_ALERT_EVT_PLAY_RINGTONE,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_ALERT_EVT_PLAY_SOUND_ = MES_ALERT_EVT_PLAY_SOUND,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_ALERT_EVT_VIBRATE_ = MES_ALERT_EVT_VIBRATE,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_CAMERA_EVT_LAUNCH_PHOTO_MODE_ = MES_CAMERA_EVT_LAUNCH_PHOTO_MODE,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_CAMERA_EVT_LAUNCH_VIDEO_MODE_ = MES_CAMERA_EVT_LAUNCH_VIDEO_MODE,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_CAMERA_EVT_START_VIDEO_CAPTURE_ = MES_CAMERA_EVT_START_VIDEO_CAPTURE,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_CAMERA_EVT_STOP_PHOTO_MODE_ = MES_CAMERA_EVT_STOP_PHOTO_MODE,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_CAMERA_EVT_STOP_VIDEO_CAPTURE_ = MES_CAMERA_EVT_STOP_VIDEO_CAPTURE,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_CAMERA_EVT_STOP_VIDEO_MODE_ = MES_CAMERA_EVT_STOP_VIDEO_MODE,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_CAMERA_EVT_TAKE_PHOTO_ = MES_CAMERA_EVT_TAKE_PHOTO,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_CAMERA_EVT_TOGGLE_FRONT_REAR_ = MES_CAMERA_EVT_TOGGLE_FRONT_REAR,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DEVICE_DISPLAY_OFF_ = MES_DEVICE_DISPLAY_OFF,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DEVICE_DISPLAY_ON_ = MES_DEVICE_DISPLAY_ON,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DEVICE_GESTURE_DEVICE_SHAKEN_ = MES_DEVICE_GESTURE_DEVICE_SHAKEN,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DEVICE_INCOMING_CALL_ = MES_DEVICE_INCOMING_CALL,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DEVICE_INCOMING_MESSAGE_ = MES_DEVICE_INCOMING_MESSAGE,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DEVICE_ORIENTATION_LANDSCAPE_ = MES_DEVICE_ORIENTATION_LANDSCAPE,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DEVICE_ORIENTATION_PORTRAIT_ = MES_DEVICE_ORIENTATION_PORTRAIT,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DPAD_BUTTON_1_DOWN_ = MES_DPAD_BUTTON_1_DOWN,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DPAD_BUTTON_1_UP_ = MES_DPAD_BUTTON_1_UP,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DPAD_BUTTON_2_DOWN_ = MES_DPAD_BUTTON_2_DOWN,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DPAD_BUTTON_2_UP_ = MES_DPAD_BUTTON_2_UP,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DPAD_BUTTON_3_DOWN_ = MES_DPAD_BUTTON_3_DOWN,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DPAD_BUTTON_3_UP_ = MES_DPAD_BUTTON_3_UP,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DPAD_BUTTON_4_DOWN_ = MES_DPAD_BUTTON_4_DOWN,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DPAD_BUTTON_4_UP_ = MES_DPAD_BUTTON_4_UP,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DPAD_BUTTON_A_DOWN_ = MES_DPAD_BUTTON_A_DOWN,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DPAD_BUTTON_A_UP_ = MES_DPAD_BUTTON_A_UP,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DPAD_BUTTON_B_DOWN_ = MES_DPAD_BUTTON_B_DOWN,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DPAD_BUTTON_B_UP_ = MES_DPAD_BUTTON_B_UP,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DPAD_BUTTON_C_DOWN_ = MES_DPAD_BUTTON_C_DOWN,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DPAD_BUTTON_C_UP_ = MES_DPAD_BUTTON_C_UP,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DPAD_BUTTON_D_DOWN_ = MES_DPAD_BUTTON_D_DOWN,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_DPAD_BUTTON_D_UP_ = MES_DPAD_BUTTON_D_UP,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_REMOTE_CONTROL_EVT_FORWARD_ = MES_REMOTE_CONTROL_EVT_FORWARD,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_REMOTE_CONTROL_EVT_NEXTTRACK_ = MES_REMOTE_CONTROL_EVT_NEXTTRACK,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_REMOTE_CONTROL_EVT_PAUSE_ = MES_REMOTE_CONTROL_EVT_PAUSE,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_REMOTE_CONTROL_EVT_PLAY_ = MES_REMOTE_CONTROL_EVT_PLAY,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_REMOTE_CONTROL_EVT_PREVTRACK_ = MES_REMOTE_CONTROL_EVT_PREVTRACK,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_REMOTE_CONTROL_EVT_REWIND_ = MES_REMOTE_CONTROL_EVT_REWIND,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_REMOTE_CONTROL_EVT_STOP_ = MES_REMOTE_CONTROL_EVT_STOP,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_REMOTE_CONTROL_EVT_VOLUMEDOWN_ = MES_REMOTE_CONTROL_EVT_VOLUMEDOWN,\r\n    //% blockIdentity=\"control.eventValueId\"\r\n    MES_REMOTE_CONTROL_EVT_VOLUMEUP_ = MES_REMOTE_CONTROL_EVT_VOLUMEUP,\r\n};\r\n\r\n//% weight=1 color=\"#333333\"\r\n//% advanced=true\r\nnamespace control {\r\n    void fiberDone(void *a)\r\n    {\r\n      decr((Action)a);\r\n      release_fiber();\r\n    }\r\n\r\n    /**\r\n     * Schedules code that run in the background.\r\n     */\r\n    //% help=control/in-background blockAllowMultiple=1 afterOnStart=true\r\n    //% blockId=\"control_in_background\" block=\"run in background\" blockGap=8\r\n    void inBackground(Action a) {\r\n      runInParallel(a);\r\n    }\r\n\r\n    /**\r\n     * Resets the BBC micro:bit.\r\n     */\r\n    //% weight=30 async help=control/reset blockGap=8\r\n    //% blockId=\"control_reset\" block=\"reset\"\r\n    void reset() {\r\n      microbit_reset();\r\n    }\r\n\r\n    /**\r\n    * Blocks the current fiber for the given microseconds\r\n    * @param micros number of micro-seconds to wait. eg: 4\r\n    */\r\n    //% help=control/wait-micros weight=29\r\n    //% blockId=\"control_wait_us\" block=\"wait (µs)%micros\"\r\n    void waitMicros(int micros) {\r\n        wait_us(micros);\r\n    }\r\n\r\n    /**\r\n     * Raises an event in the event bus.\r\n     * @param src ID of the MicroBit Component that generated the event e.g. MICROBIT_ID_BUTTON_A.\r\n     * @param value Component specific code indicating the cause of the event.\r\n     * @param mode optional definition of how the event should be processed after construction (default is CREATE_AND_FIRE).\r\n     */\r\n    //% weight=21 blockGap=12 blockId=\"control_raise_event\" block=\"raise event|from source %src=control_event_source_id|with value %value=control_event_value_id\" blockExternalInputs=1\r\n    //% help=control/raise-event\r\n    //% mode.defl=CREATE_AND_FIRE\r\n    void raiseEvent(int src, int value, EventCreationMode mode) {\r\n        MicroBitEvent evt(src, value, (MicroBitEventLaunchMode)mode);\r\n    }\r\n\r\n    /**\r\n     * Registers an event handler.\r\n     */\r\n    //% weight=20 blockGap=8 blockId=\"control_on_event\" block=\"on event|from %src=control_event_source_id|with value %value=control_event_value_id\"\r\n    //% help=control/on-event\r\n    //% blockExternalInputs=1\r\n    void onEvent(int src, int value, Action handler) {\r\n        registerWithDal(src, value, handler);\r\n    }\r\n\r\n    /**\r\n    * Gets the value of the last event executed on the bus\r\n    */\r\n    //% blockId=control_event_value\" block=\"event value\"\r\n    //% help=control/event-value\r\n    //% weight=18\r\n    int eventValue() {\r\n        return pxt::lastEvent.value;\r\n    }\r\n\r\n    /**\r\n    * Gets the timestamp of the last event executed on the bus\r\n    */\r\n    //% blockId=control_event_timestamp\" block=\"event timestamp\"\r\n    //% help=control/event-timestamp\r\n    //% weight=19 blockGap=8\r\n    int eventTimestamp() {\r\n        return pxt::lastEvent.timestamp;\r\n    }\r\n\r\n    /**\r\n     * Make a friendly name for the device based on its serial number\r\n     */\r\n    //% blockId=\"control_device_name\" block=\"device name\" weight=10 blockGap=8\r\n    //% advanced=true\r\n    String deviceName() {\r\n        return mkString(microbit_friendly_name(), -1);\r\n    }\r\n\r\n    /**\r\n    * Derive a unique, consistent serial number of this device from internal data.\r\n    */\r\n    //% blockId=\"control_device_serial_number\" block=\"device serial number\" weight=9\r\n    //% advanced=true\r\n    int deviceSerialNumber() {\r\n        return microbit_serial_number();\r\n    }\r\n\r\n    /**\r\n    * Informs simulator/runtime of a MIDI message\r\n    * Internal function to support the simulator.\r\n    */\r\n    //% part=midioutput blockHidden=1\r\n    void __midiSend(Buffer buffer) {\r\n        // this is a stub to support the simulator\r\n    }\r\n\r\n    /**\r\n    *\r\n    */\r\n    //%\r\n    void __log(String text) {\r\n        if (NULL == text) return;\r\n        pxt::sendSerial(text->data, text->length);\r\n    }\r\n}\r\n",
      "control.ts": "/**\r\n* Runtime and event utilities.\r\n*/\r\n//% weight=1 color=\"#333333\" icon=\"\\uf233\"\r\n//% advanced=true\r\n//% deprecated=true\r\nnamespace control {\r\n\r\n    /**\r\n     * Returns the value of a C++ runtime constant\r\n     */\r\n    //% weight=2 weight=19 blockId=\"control_event_source_id\" block=\"%id\" blockGap=8\r\n    //% shim=TD_ID advanced=true\r\n    export function eventSourceId(id: EventBusSource): number {\r\n        return id;\r\n    }\r\n    /**\r\n     * Returns the value of a C++ runtime constant\r\n     */\r\n    //% weight=1 weight=19 blockId=\"control_event_value_id\" block=\"%id\"\r\n    //% shim=TD_ID advanced=true\r\n    export function eventValueId(id: EventBusValue): number {\r\n        return id;\r\n    }\r\n\r\n    /**\r\n     * Display specified error code and stop the program.\r\n     */\r\n    //% shim=pxtrt::panic\r\n    export function panic(code: number) { }\r\n\r\n    /**\r\n     * If the condition is false, display msg on serial console, and panic with code 098.\r\n     */\r\n    export function assert(condition: boolean, msg?: string) {\r\n        if (!condition) {\r\n            console.log(\"ASSERTION FAILED\")\r\n            if (msg != null) {\r\n                console.log(msg)\r\n            }\r\n            panic(98)\r\n        }\r\n    }\r\n\r\n    export function fail(message: string) {\r\n        console.log(\"Fatal failure: \")\r\n        console.log(message)\r\n        panic(108)\r\n    }\r\n\r\n    /**\r\n     * Display warning in the simulator.\r\n     */\r\n    //% shim=pxtrt::runtimeWarning\r\n    export function runtimeWarning(message: string) { }\r\n}\r\n",
      "core.cpp": "#include \"pxtbase.h\"\r\n#include <limits.h>\r\n#include <stdlib.h>\r\n\r\nusing namespace std;\r\n\r\n#define p10(v) __builtin_powi(10, v)\r\n\r\nnamespace pxt {\r\n\r\nstatic HandlerBinding *handlerBindings;\r\n\r\nHandlerBinding *findBinding(int source, int value) {\r\n    for (auto p = handlerBindings; p; p = p->next) {\r\n        if (p->source == source && p->value == value) {\r\n            return p;\r\n        }\r\n    }\r\n    return 0;\r\n}\r\n\r\nvoid setBinding(int source, int value, Action act) {\r\n    auto curr = findBinding(source, value);\r\n    incr(act);\r\n    if (curr) {\r\n        decr(curr->action);\r\n        curr->action = act;\r\n        return;\r\n    }\r\n    curr = new HandlerBinding();\r\n    curr->next = handlerBindings;\r\n    curr->source = source;\r\n    curr->value = value;\r\n    curr->action = act;\r\n    handlerBindings = curr;\r\n}\r\n\r\nstatic const uint16_t emptyString[]\r\n    __attribute__((aligned(4))) = {0xffff, PXT_REF_TAG_STRING, 0, 0};\r\n\r\nstatic const uint16_t emptyBuffer[]\r\n    __attribute__((aligned(4))) = {0xffff, PXT_REF_TAG_BUFFER, 0, 0};\r\n\r\nString mkString(const char *data, int len) {\r\n    if (len < 0)\r\n        len = strlen(data);\r\n    if (len == 0)\r\n        return (String)emptyString;\r\n    String r = new (::operator new(sizeof(BoxedString) + len + 1)) BoxedString();\r\n    r->length = len;\r\n    if (data)\r\n        memcpy(r->data, data, len);\r\n    r->data[len] = 0;\r\n    MEMDBG(\"mkString: len=%d => %p\", len, r);\r\n    return r;\r\n}\r\n\r\nBuffer mkBuffer(const uint8_t *data, int len) {\r\n    if (len <= 0)\r\n        return (Buffer)emptyBuffer;\r\n    Buffer r = new (::operator new(sizeof(BoxedBuffer) + len)) BoxedBuffer();\r\n    r->length = len;\r\n    if (data)\r\n        memcpy(r->data, data, len);\r\n    else\r\n        memset(r->data, 0, len);\r\n    MEMDBG(\"mkBuffer: len=%d => %p\", len, r);\r\n    return r;\r\n}\r\n\r\n#ifndef X86_64\r\nTNumber mkNaN() {\r\n    // TODO optimize\r\n    return fromDouble(NAN);\r\n}\r\n#endif\r\n\r\nstatic unsigned random_value = 0xC0DA1;\r\n\r\nvoid seedRandom(unsigned seed) {\r\n    random_value = seed;\r\n}\r\n\r\nunsigned getRandom(unsigned max) {\r\n    unsigned m, result;\r\n\r\n    do {\r\n        m = (unsigned)max;\r\n        result = 0;\r\n\r\n        do {\r\n            // Cycle the LFSR (Linear Feedback Shift Register).\r\n            // We use an optimal sequence with a period of 2^32-1, as defined by Bruce Schneier here\r\n            // (a true legend in the field!),\r\n            // For those interested, it's documented in his paper:\r\n            // \"Pseudo-Random Sequence Generator for 32-Bit CPUs: A fast, machine-independent\r\n            // generator for 32-bit Microprocessors\"\r\n            // https://www.schneier.com/paper-pseudorandom-sequence.html\r\n            unsigned r = random_value;\r\n\r\n            r = ((((r >> 31) ^ (r >> 6) ^ (r >> 4) ^ (r >> 2) ^ (r >> 1) ^ r) & 1) << 31) |\r\n                (r >> 1);\r\n\r\n            random_value = r;\r\n\r\n            result = ((result << 1) | (r & 0x00000001));\r\n        } while (m >>= 1);\r\n    } while (result > (unsigned)max);\r\n\r\n    return result;\r\n}\r\n\r\nPXT_DEF_STRING(sTrue, \"\\x04\\x00true\")\r\nPXT_DEF_STRING(sFalse, \"\\x05\\x00\"\r\n                       \"false\")\r\nPXT_DEF_STRING(sUndefined, \"\\x09\\x00undefined\")\r\nPXT_DEF_STRING(sNull, \"\\x04\\x00null\")\r\nPXT_DEF_STRING(sObject, \"\\x08\\x00[Object]\")\r\nPXT_DEF_STRING(sFunction, \"\\x0A\\x00[Function]\")\r\nPXT_DEF_STRING(sNaN, \"\\x03\\x00NaN\")\r\nPXT_DEF_STRING(sInf, \"\\x08\\x00Infinity\")\r\nPXT_DEF_STRING(sMInf, \"\\x09\\x00-Infinity\")\r\n} // namespace pxt\r\n\r\n#ifndef X86_64\r\n\r\nnamespace String_ {\r\n\r\n//%\r\nString mkEmpty() {\r\n    return mkString(\"\", 0);\r\n}\r\n\r\n//%\r\nString fromCharCode(int code) {\r\n    char buf[] = {(char)code, 0};\r\n    return mkString(buf, 1);\r\n}\r\n\r\n//%\r\nString charAt(String s, int pos) {\r\n    if (s && 0 <= pos && pos < s->length) {\r\n        return fromCharCode(s->data[pos]);\r\n    } else {\r\n        return mkEmpty();\r\n    }\r\n}\r\n\r\n//%\r\nTNumber charCodeAt(String s, int pos) {\r\n    if (s && 0 <= pos && pos < s->length) {\r\n        return fromInt(s->data[pos]);\r\n    } else {\r\n        return mkNaN();\r\n    }\r\n}\r\n\r\n//%\r\nString concat(String s, String other) {\r\n    if (!s)\r\n        s = (String)sNull;\r\n    if (!other)\r\n        other = (String)sNull;\r\n    if (s->length == 0)\r\n        return (String)incrRC(other);\r\n    if (other->length == 0)\r\n        return (String)incrRC(s);\r\n    String r = mkString(NULL, s->length + other->length);\r\n    memcpy(r->data, s->data, s->length);\r\n    memcpy(r->data + s->length, other->data, other->length);\r\n    return r;\r\n}\r\n\r\nint compare(TValue a, TValue b) {\r\n    if (a == b)\r\n        return 0;\r\n\r\n    ValType ta = valType(a);\r\n    ValType tb = valType(b);\r\n\r\n    // TODO we assume here that undefined, null, true, false, etc\r\n    // are all less than strings - this isn't quite JS semantics\r\n    if (ta == ValType::String && isSpecial(b))\r\n        return 1;\r\n\r\n    if (tb == ValType::String && isSpecial(a))\r\n        return -1;\r\n\r\n    // conversions for numbers\r\n    if (ta != ValType::String) {\r\n        auto aa = numops::toString(a);\r\n        auto r = compare((TValue)aa, b);\r\n        decrRC(aa);\r\n        return r;\r\n    }\r\n\r\n    if (tb != ValType::String) {\r\n        auto bb = numops::toString(b);\r\n        auto r = compare(a, (TValue)bb);\r\n        decrRC(bb);\r\n        return r;\r\n    }\r\n\r\n    auto s = (String)a;\r\n    auto that = (String)b;\r\n\r\n    int compareResult = strcmp(s->data, that->data);\r\n    if (compareResult < 0)\r\n        return -1;\r\n    else if (compareResult > 0)\r\n        return 1;\r\n    return 0;\r\n}\r\n\r\n//%\r\nint length(String s) {\r\n    return s->length;\r\n}\r\n\r\n#define isspace(c) ((c) == ' ')\r\n\r\ndouble mystrtod(const char *p, char **endp) {\r\n    while (isspace(*p))\r\n        p++;\r\n    double m = 1;\r\n    double v = 0;\r\n    int dot = 0;\r\n    if (*p == '+')\r\n        p++;\r\n    if (*p == '-') {\r\n        m = -1;\r\n        p++;\r\n    }\r\n    if (*p == '0' && (p[1] | 0x20) == 'x') {\r\n        return m * strtol(p, endp, 16);\r\n    }\r\n    while (*p) {\r\n        int c = *p - '0';\r\n        if (0 <= c && c <= 9) {\r\n            v *= 10;\r\n            v += c;\r\n            if (dot)\r\n                m /= 10;\r\n        } else if (!dot && *p == '.') {\r\n            dot = 1;\r\n        } else if (*p == 'e' || *p == 'E') {\r\n            break;\r\n        } else {\r\n            while (isspace(*p))\r\n                p++;\r\n            if (*p)\r\n                return NAN;\r\n            break;\r\n        }\r\n        p++;\r\n    }\r\n\r\n    v *= m;\r\n\r\n    if (*p) {\r\n        p++;\r\n        int pw = strtol(p, endp, 10);\r\n        v *= p10(pw);\r\n    } else {\r\n        *endp = (char *)p;\r\n    }\r\n\r\n    return v;\r\n}\r\n\r\n//%\r\nTNumber toNumber(String s) {\r\n    // JSCHECK\r\n    char *endptr;\r\n    double v = mystrtod(s->data, &endptr);\r\n    if (endptr != s->data + s->length)\r\n        v = NAN;\r\n    else if (v == 0.0 || v == -0.0)\r\n        v = v;\r\n    else if (!isnormal(v))\r\n        v = NAN;\r\n    return fromDouble(v);\r\n}\r\n\r\n//%\r\nString substr(String s, int start, int length) {\r\n    if (length <= 0)\r\n        return mkEmpty();\r\n    if (start < 0)\r\n        start = max(s->length + start, 0);\r\n    length = min(length, s->length - start);\r\n    return mkString(s->data + start, length);\r\n}\r\n\r\n//%\r\nint indexOf(String s, String searchString, int start) {\r\n    if (!s || !searchString)\r\n        return -1;\r\n    if (start < 0 || start + searchString->length > s->length)\r\n        return -1;\r\n    const char *match = strstr(((const char *)s->data + start), searchString->data);\r\n    if (NULL == match)\r\n        return -1;\r\n    return match - s->data;\r\n}\r\n\r\n//%\r\nint includes(String s, String searchString, int start) {\r\n    return -1 != indexOf(s, searchString, start);\r\n}\r\n\r\n} // namespace String_\r\n\r\nnamespace Boolean_ {\r\n//%\r\nbool bang(int v) {\r\n    return v == 0;\r\n}\r\n} // namespace Boolean_\r\n\r\nnamespace pxt {\r\n\r\n// ES5 9.5, 9.6\r\nunsigned toUInt(TNumber v) {\r\n    if (isNumber(v))\r\n        return numValue(v);\r\n    if (isSpecial(v)) {\r\n        if ((intptr_t)v >> 6)\r\n            return 1;\r\n        else\r\n            return 0;\r\n    }\r\n    if (!v)\r\n        return 0;\r\n\r\n    double num = toDouble(v);\r\n    if (!isnormal(num))\r\n        return 0;\r\n    double rem = fmod(trunc(num), 4294967296.0);\r\n    if (rem < 0.0)\r\n        rem += 4294967296.0;\r\n    return (unsigned)rem;\r\n}\r\nint toInt(TNumber v) {\r\n    return (int)toUInt(v);\r\n}\r\n\r\n// only support double in tagged mode\r\ndouble toDouble(TNumber v) {\r\n    if (isTagged(v))\r\n        return toInt(v);\r\n\r\n    // JSCHECK\r\n    ValType t = valType(v);\r\n    if (t == ValType::Number) {\r\n        BoxedNumber *p = (BoxedNumber *)v;\r\n        return p->num;\r\n    } else if (t == ValType::String) {\r\n        return toDouble(String_::toNumber((String)v));\r\n    } else {\r\n        return NAN;\r\n    }\r\n}\r\n\r\nfloat toFloat(TNumber v) {\r\n    // TODO optimize?\r\n    return (float)toDouble(v);\r\n}\r\n\r\nTNumber fromDouble(double r) {\r\n#ifndef PXT_BOX_DEBUG\r\n    int ri = ((int)r) << 1;\r\n    if ((ri >> 1) == r)\r\n        return (TNumber)(ri | 1);\r\n#endif\r\n    BoxedNumber *p = new BoxedNumber();\r\n    p->num = r;\r\n    MEMDBG(\"mkNum: %d/1000 => %p\", (int)(r * 1000), p);\r\n    return (TNumber)p;\r\n}\r\n\r\nTNumber fromFloat(float r) {\r\n    // TODO optimize\r\n    return fromDouble(r);\r\n}\r\n\r\nTNumber fromInt(int v) {\r\n    if (canBeTagged(v))\r\n        return TAG_NUMBER(v);\r\n    return fromDouble(v);\r\n}\r\n\r\nTNumber fromUInt(unsigned v) {\r\n#ifndef PXT_BOX_DEBUG\r\n    if (v <= 0x3fffffff)\r\n        return TAG_NUMBER(v);\r\n#endif\r\n    return fromDouble(v);\r\n}\r\n\r\nTValue fromBool(bool v) {\r\n    if (v)\r\n        return TAG_TRUE;\r\n    else\r\n        return TAG_FALSE;\r\n}\r\n\r\nTNumber eqFixup(TNumber v) {\r\n    if (v == TAG_NULL)\r\n        return TAG_UNDEFINED;\r\n    if (v == TAG_TRUE)\r\n        return TAG_NUMBER(1);\r\n    if (v == TAG_FALSE)\r\n        return TAG_NUMBER(0);\r\n    return v;\r\n}\r\n\r\nbool eqq_bool(TValue a, TValue b) {\r\n    // TODO improve this\r\n\r\n    if (a == b)\r\n        return true;\r\n\r\n    ValType ta = valType(a);\r\n    ValType tb = valType(b);\r\n\r\n    if (ta == ValType::String || tb == ValType::String)\r\n        return String_::compare(a, b) == 0;\r\n\r\n    if (ta != tb)\r\n        return false;\r\n\r\n#ifndef PXT_BOX_DEBUG\r\n    int aa = (int)a;\r\n    int bb = (int)b;\r\n\r\n    // if at least one of the values is tagged, they are not equal\r\n    if ((aa | bb) & 3)\r\n        return false;\r\n#endif\r\n\r\n    if (ta == ValType::Number)\r\n        return toDouble(a) == toDouble(b);\r\n    else\r\n        return a == b;\r\n}\r\n\r\nbool eq_bool(TValue a, TValue b) {\r\n    return eqq_bool(eqFixup(a), eqFixup(b));\r\n}\r\n\r\n//%\r\nbool switch_eq(TValue a, TValue b) {\r\n    if (eqq_bool(eqFixup(a), eqFixup(b))) {\r\n        decr(b);\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\n\r\n} // namespace pxt\r\n\r\nnamespace langsupp {\r\n//%\r\nTValue ptreq(TValue a, TValue b) {\r\n    return eq_bool(a, b) ? TAG_TRUE : TAG_FALSE;\r\n}\r\n\r\n//%\r\nTValue ptreqq(TValue a, TValue b) {\r\n    return eqq_bool(a, b) ? TAG_TRUE : TAG_FALSE;\r\n}\r\n\r\n//%\r\nTValue ptrneq(TValue a, TValue b) {\r\n    return !eq_bool(a, b) ? TAG_TRUE : TAG_FALSE;\r\n}\r\n\r\n//%\r\nTValue ptrneqq(TValue a, TValue b) {\r\n    return !eqq_bool(a, b) ? TAG_TRUE : TAG_FALSE;\r\n}\r\n} // namespace langsupp\r\n\r\n#define NUMOP(op) return fromDouble(toDouble(a) op toDouble(b));\r\n#define BITOP(op) return fromInt(toInt(a) op toInt(b));\r\nnamespace numops {\r\n\r\n//%\r\nint toBool(TValue v) {\r\n    if (isTagged(v)) {\r\n        if (v == TAG_UNDEFINED || v == TAG_NULL || v == TAG_FALSE || v == TAG_NUMBER(0))\r\n            return 0;\r\n        else\r\n            return 1;\r\n    }\r\n\r\n    ValType t = valType(v);\r\n    if (t == ValType::String) {\r\n        String s = (String)v;\r\n        if (s->length == 0)\r\n            return 0;\r\n    } else if (t == ValType::Number) {\r\n        double x = toDouble(v);\r\n        if (isnan(x) || x == 0.0 || x == -0.0)\r\n            return 0;\r\n        else\r\n            return 1;\r\n    }\r\n\r\n    return 1;\r\n}\r\n\r\n//%\r\nint toBoolDecr(TValue v) {\r\n    if (v == TAG_TRUE)\r\n        return 1;\r\n    if (v == TAG_FALSE)\r\n        return 0;\r\n    int r = toBool(v);\r\n    decr(v);\r\n    return r;\r\n}\r\n\r\n// TODO\r\n// The integer, non-overflow case for add/sub/bit opts is handled in assembly\r\n\r\n//%\r\nTNumber adds(TNumber a, TNumber b){NUMOP(+)}\r\n\r\n//%\r\nTNumber subs(TNumber a, TNumber b){NUMOP(-)}\r\n\r\n//%\r\nTNumber muls(TNumber a, TNumber b) {\r\n    if (bothNumbers(a, b)) {\r\n        int aa = (int)a;\r\n        int bb = (int)b;\r\n        // if both operands fit 15 bits, the result will not overflow int\r\n        if ((aa >> 15 == 0 || aa >> 15 == -1) && (bb >> 15 == 0 || bb >> 15 == -1)) {\r\n            // it may overflow 31 bit int though - use fromInt to convert properly\r\n            return fromInt((aa >> 1) * (bb >> 1));\r\n        }\r\n    }\r\n    NUMOP(*)\r\n}\r\n\r\n//%\r\nTNumber div(TNumber a, TNumber b){NUMOP(/)}\r\n\r\n//%\r\nTNumber mod(TNumber a, TNumber b) {\r\n    if (isNumber(a) && isNumber(b) && numValue(b))\r\n        BITOP(%)\r\n    return fromDouble(fmod(toDouble(a), toDouble(b)));\r\n}\r\n\r\n//%\r\nTNumber lsls(TNumber a, TNumber b){BITOP(<<)}\r\n\r\n//%\r\nTNumber lsrs(TNumber a, TNumber b) {\r\n    return fromUInt(toUInt(a) >> toUInt(b));\r\n}\r\n\r\n//%\r\nTNumber asrs(TNumber a, TNumber b){BITOP(>>)}\r\n\r\n//%\r\nTNumber eors(TNumber a, TNumber b){BITOP (^)}\r\n\r\n//%\r\nTNumber orrs(TNumber a, TNumber b){BITOP(|)}\r\n\r\n//%\r\nTNumber bnot(TNumber a) {\r\n    return fromInt(~toInt(a));\r\n}\r\n\r\n//%\r\nTNumber ands(TNumber a, TNumber b) {\r\n    BITOP(&)\r\n}\r\n\r\n#define CMPOP_RAW(op)                                                                              \\\r\n    if (bothNumbers(a, b))                                                                         \\\r\n        return (int)a op((int)b);                                                                  \\\r\n    return toDouble(a) op toDouble(b);\r\n\r\n#define CMPOP(op)                                                                                  \\\r\n    if (bothNumbers(a, b))                                                                         \\\r\n        return ((int)a op((int)b)) ? TAG_TRUE : TAG_FALSE;                                         \\\r\n    return toDouble(a) op toDouble(b) ? TAG_TRUE : TAG_FALSE;\r\n\r\n//%\r\nbool lt_bool(TNumber a, TNumber b){CMPOP_RAW(<)}\r\n\r\n//%\r\nTNumber le(TNumber a, TNumber b){CMPOP(<=)}\r\n\r\n//%\r\nTNumber lt(TNumber a, TNumber b){CMPOP(<)}\r\n\r\n//%\r\nTNumber ge(TNumber a, TNumber b){CMPOP(>=)}\r\n\r\n//%\r\nTNumber gt(TNumber a, TNumber b){CMPOP(>)}\r\n\r\n//%\r\nTNumber eq(TNumber a, TNumber b) {\r\n    return pxt::eq_bool(a, b) ? TAG_TRUE : TAG_FALSE;\r\n}\r\n\r\n//%\r\nTNumber neq(TNumber a, TNumber b) {\r\n    return !pxt::eq_bool(a, b) ? TAG_TRUE : TAG_FALSE;\r\n}\r\n\r\n//%\r\nTNumber eqq(TNumber a, TNumber b) {\r\n    return pxt::eqq_bool(a, b) ? TAG_TRUE : TAG_FALSE;\r\n}\r\n\r\n//%\r\nTNumber neqq(TNumber a, TNumber b) {\r\n    return !pxt::eqq_bool(a, b) ? TAG_TRUE : TAG_FALSE;\r\n}\r\n\r\nvoid mycvt(double d, char *buf) {\r\n    if (d < 0) {\r\n        *buf++ = '-';\r\n        d = -d;\r\n    }\r\n\r\n    if (!d) {\r\n        *buf++ = '0';\r\n        *buf++ = 0;\r\n        return;\r\n    }\r\n\r\n    int pw = (int)log10(d);\r\n    int e = 1;\r\n    int beforeDot = 1;\r\n\r\n    if (0.000001 <= d && d < 1e21) {\r\n        if (pw > 0) {\r\n            d /= p10(pw);\r\n            beforeDot = 1 + pw;\r\n        }\r\n    } else {\r\n        d /= p10(pw);\r\n        e = pw;\r\n    }\r\n\r\n    int sig = 0;\r\n    while (sig < 17 || beforeDot > 0) {\r\n        // printf(\"%f sig=%d bd=%d\\n\", d, sig, beforeDot);\r\n        int c = (int)d;\r\n        *buf++ = '0' + c;\r\n        d = (d - c) * 10;\r\n        if (--beforeDot == 0)\r\n            *buf++ = '.';\r\n        if (sig || c)\r\n            sig++;\r\n    }\r\n\r\n    buf--;\r\n    while (*buf == '0')\r\n        buf--;\r\n    if (*buf == '.')\r\n        buf--;\r\n    buf++;\r\n\r\n    if (e != 1) {\r\n        *buf++ = 'e';\r\n        itoa(e, buf);\r\n    } else {\r\n        *buf = 0;\r\n    }\r\n}\r\n\r\nString toString(TValue v) {\r\n    ValType t = valType(v);\r\n\r\n    if (t == ValType::String) {\r\n        return (String)(void *)incr(v);\r\n    } else if (t == ValType::Number) {\r\n        char buf[64];\r\n\r\n        if (isNumber(v)) {\r\n            itoa(numValue(v), buf);\r\n            return mkString(buf);\r\n        }\r\n\r\n        double x = toDouble(v);\r\n\r\n#ifdef PXT_BOX_DEBUG\r\n        if (x == (int)x) {\r\n            itoa((int)x, buf);\r\n            return mkString(buf);\r\n        }\r\n#endif\r\n\r\n        if (isnan(x))\r\n            return (String)(void *)sNaN;\r\n        if (isinf(x)) {\r\n            if (x < 0)\r\n                return (String)(void *)sMInf;\r\n            else\r\n                return (String)(void *)sInf;\r\n        }\r\n        mycvt(x, buf);\r\n\r\n        return mkString(buf);\r\n    } else if (t == ValType::Function) {\r\n        return (String)(void *)sFunction;\r\n    } else {\r\n        if (v == TAG_UNDEFINED)\r\n            return (String)(void *)sUndefined;\r\n        else if (v == TAG_FALSE)\r\n            return (String)(void *)sFalse;\r\n        else if (v == TAG_TRUE)\r\n            return (String)(void *)sTrue;\r\n        else if (v == TAG_NULL)\r\n            return (String)(void *)sNull;\r\n\r\n        auto vt = getVTable((RefObject *)v);\r\n        if (vt->methods[2]) {\r\n            // custom toString() method\r\n            // after running action, make sure it's actually a string\r\n            return stringConv(runAction1((Action)vt->methods[2], v));\r\n        }\r\n        return (String)(void *)sObject;\r\n    }\r\n}\r\n\r\nString stringConv(TValue v) {\r\n    ValType t = valType(v);\r\n    if (t == ValType::String) {\r\n        return (String)v;\r\n    } else {\r\n        auto r = toString(v);\r\n        decr(v);\r\n        return r;\r\n    }\r\n}\r\n} // namespace numops\r\n\r\nnamespace Math_ {\r\n//%\r\nTNumber pow(TNumber x, TNumber y) {\r\n#ifdef PXT_POWI\r\n    // regular pow() from math.h is 4k of code\r\n    return fromDouble(__builtin_powi(toDouble(x), toInt(y)));\r\n#else\r\n    return fromDouble(::pow(toDouble(x), toDouble(y)));\r\n#endif\r\n}\r\n\r\n//%\r\nTNumber atan2(TNumber y, TNumber x) {\r\n    return fromDouble(::atan2(toDouble(y), toDouble(x)));\r\n}\r\n\r\ndouble randomDouble() {\r\n    return getRandom(UINT_MAX) / ((double)UINT_MAX + 1) +\r\n           getRandom(0xffffff) / ((double)UINT_MAX * 0xffffff);\r\n}\r\n\r\n//%\r\nTNumber random() {\r\n    return fromDouble(randomDouble());\r\n}\r\n\r\n//%\r\nTNumber randomRange(TNumber min, TNumber max) {\r\n    if (isNumber(min) && isNumber(max)) {\r\n        int mini = numValue(min);\r\n        int maxi = numValue(max);\r\n        if (mini > maxi) {\r\n            int temp = mini;\r\n            mini = maxi;\r\n            maxi = temp;\r\n        }\r\n        if (maxi == mini)\r\n            return fromInt(mini);\r\n        else\r\n            return fromInt(mini + getRandom(maxi - mini));\r\n    } else {\r\n        double mind = toDouble(min);\r\n        double maxd = toDouble(max);\r\n        if (mind > maxd) {\r\n            double temp = mind;\r\n            mind = maxd;\r\n            maxd = temp;\r\n        }\r\n        if (maxd == mind)\r\n            return fromDouble(mind);\r\n        else {\r\n            return fromDouble(mind + randomDouble() * (maxd - mind));\r\n        }\r\n    }\r\n}\r\n\r\n#define SINGLE(op) return fromDouble(::op(toDouble(x)));\r\n\r\n//%\r\nTNumber log(TNumber x){SINGLE(log)}\r\n\r\n//%\r\nTNumber log10(TNumber x){SINGLE(log10)}\r\n\r\n//%\r\nTNumber tan(TNumber x){SINGLE(tan)}\r\n\r\n//%\r\nTNumber sin(TNumber x){SINGLE(sin)}\r\n\r\n//%\r\nTNumber cos(TNumber x){SINGLE(cos)}\r\n\r\n//%\r\nTNumber atan(TNumber x){SINGLE(atan)}\r\n\r\n//%\r\nTNumber asin(TNumber x){SINGLE(asin)}\r\n\r\n//%\r\nTNumber acos(TNumber x){SINGLE(acos)}\r\n\r\n//%\r\nTNumber sqrt(TNumber x){SINGLE(sqrt)}\r\n\r\n//%\r\nTNumber floor(TNumber x){SINGLE(floor)}\r\n\r\n//%\r\nTNumber ceil(TNumber x){SINGLE(ceil)}\r\n\r\n//%\r\nTNumber trunc(TNumber x){SINGLE(trunc)}\r\n\r\n//%\r\nTNumber round(TNumber x) {\r\n    // In C++, round(-1.5) == -2, while in JS, round(-1.5) == -1. Align to the JS convention for\r\n    // consistency between simulator and device. The following does rounding with ties (x.5) going\r\n    // towards positive infinity.\r\n    return fromDouble(::floor(toDouble(x) + 0.5));\r\n}\r\n\r\n//%\r\nint imul(int x, int y) {\r\n    return x * y;\r\n}\r\n\r\n//%\r\nint idiv(int x, int y) {\r\n    return x / y;\r\n}\r\n} // namespace Math_\r\n\r\nnamespace Array_ {\r\n//%\r\nRefCollection *mk(unsigned flags) {\r\n    auto r = new RefCollection();\r\n    MEMDBG(\"mkColl: => %p\", r);\r\n    return r;\r\n}\r\n//%\r\nint length(RefCollection *c) {\r\n    return c->length();\r\n}\r\n//%\r\nvoid setLength(RefCollection *c, int newLength) {\r\n    c->setLength(newLength);\r\n}\r\n//%\r\nvoid push(RefCollection *c, TValue x) {\r\n    c->push(x);\r\n}\r\n//%\r\nTValue pop(RefCollection *c) {\r\n    return c->pop();\r\n}\r\n//%\r\nTValue getAt(RefCollection *c, int x) {\r\n    return c->getAt(x);\r\n}\r\n//%\r\nvoid setAt(RefCollection *c, int x, TValue y) {\r\n    c->setAt(x, y);\r\n}\r\n//%\r\nTValue removeAt(RefCollection *c, int x) {\r\n    return c->removeAt(x);\r\n}\r\n//%\r\nvoid insertAt(RefCollection *c, int x, TValue value) {\r\n    c->insertAt(x, value);\r\n}\r\n//%\r\nint indexOf(RefCollection *c, TValue x, int start) {\r\n    return c->indexOf(x, start);\r\n}\r\n//%\r\nbool removeElement(RefCollection *c, TValue x) {\r\n    return c->removeElement(x);\r\n}\r\n} // namespace Array_\r\n\r\nnamespace pxt {\r\n//%\r\nvoid *ptrOfLiteral(int offset);\r\n\r\n//%\r\nunsigned programSize() {\r\n    return bytecode[17] * 2;\r\n}\r\n\r\n//%\r\nint getConfig(int key, int defl) {\r\n    int *cfgData;\r\n\r\n#ifdef PXT_BOOTLOADER_CFG_ADDR\r\n    cfgData = *(int **)(PXT_BOOTLOADER_CFG_ADDR);\r\n#ifdef PXT_BOOTLOADER_CFG_MAGIC\r\n    cfgData++;\r\n    if ((void*)0x200 <= cfgData && cfgData < (void*)PXT_BOOTLOADER_CFG_ADDR &&\r\n        cfgData[-1] == (int)PXT_BOOTLOADER_CFG_MAGIC)\r\n#endif\r\n        for (int i = 0;; i += 2) {\r\n            if (cfgData[i] == key)\r\n                return cfgData[i + 1];\r\n            if (cfgData[i] == 0)\r\n                break;\r\n        }\r\n#endif\r\n\r\n    cfgData = *(int **)&bytecode[18];\r\n    for (int i = 0;; i += 2) {\r\n        if (cfgData[i] == key)\r\n            return cfgData[i + 1];\r\n        if (cfgData[i] == 0)\r\n            return defl;\r\n    }\r\n}\r\n\r\n} // namespace pxt\r\n\r\nnamespace pxtrt {\r\n//%\r\nTValue ldloc(RefLocal *r) {\r\n    return r->v;\r\n}\r\n\r\n//%\r\nTValue ldlocRef(RefRefLocal *r) {\r\n    TValue tmp = r->v;\r\n    incr(tmp);\r\n    return tmp;\r\n}\r\n\r\n//%\r\nvoid stloc(RefLocal *r, TValue v) {\r\n    r->v = v;\r\n}\r\n\r\n//%\r\nvoid stlocRef(RefRefLocal *r, TValue v) {\r\n    decr(r->v);\r\n    r->v = v;\r\n}\r\n\r\n//%\r\nRefLocal *mkloc() {\r\n    auto r = new RefLocal();\r\n    MEMDBG(\"mkloc: => %p\", r);\r\n    return r;\r\n}\r\n\r\n//%\r\nRefRefLocal *mklocRef() {\r\n    auto r = new RefRefLocal();\r\n    MEMDBG(\"mklocRef: => %p\", r);\r\n    return r;\r\n}\r\n\r\n// All of the functions below unref() self. This is for performance reasons -\r\n// the code emitter will not emit the unrefs for them.\r\n\r\n//%\r\nTValue ldfld(RefRecord *r, int idx) {\r\n    TValue tmp = r->ld(idx);\r\n    r->unref();\r\n    return tmp;\r\n}\r\n\r\n//%\r\nTValue ldfldRef(RefRecord *r, int idx) {\r\n    TValue tmp = r->ldref(idx);\r\n    r->unref();\r\n    return tmp;\r\n}\r\n\r\n//%\r\nvoid stfld(RefRecord *r, int idx, TValue val) {\r\n    r->st(idx, val);\r\n    r->unref();\r\n}\r\n\r\n//%\r\nvoid stfldRef(RefRecord *r, int idx, TValue val) {\r\n    r->stref(idx, val);\r\n    r->unref();\r\n}\r\n\r\n// Store a captured local in a closure. It returns the action, so it can be chained.\r\n//%\r\nRefAction *stclo(RefAction *a, int idx, TValue v) {\r\n    // DBG(\"STCLO \"); a->print(); DBG(\"@%d = %p\\n\", idx, (void*)v);\r\n    a->stCore(idx, v);\r\n    return a;\r\n}\r\n\r\n//%\r\nvoid panic(int code) {\r\n    target_panic(code);\r\n}\r\n\r\n//%\r\nString emptyToNull(String s) {\r\n    if (!s || s->length == 0)\r\n        return NULL;\r\n    return s;\r\n}\r\n\r\n//%\r\nint ptrToBool(TValue p) {\r\n    if (p) {\r\n        decr(p);\r\n        return 1;\r\n    } else {\r\n        return 0;\r\n    }\r\n}\r\n\r\n//%\r\nRefMap *mkMap() {\r\n    auto r = new RefMap();\r\n    MEMDBG(\"mkMap: => %p\", r);\r\n    return r;\r\n}\r\n\r\n//%\r\nTValue mapGet(RefMap *map, unsigned key) {\r\n    int i = map->findIdx(key);\r\n    if (i < 0) {\r\n        map->unref();\r\n        return 0;\r\n    }\r\n    TValue r = incr(map->values.get(i));\r\n    map->unref();\r\n    return r;\r\n}\r\n\r\n//%\r\nTValue mapGetRef(RefMap *map, unsigned key) {\r\n    return mapGet(map, key);\r\n}\r\n\r\n//%\r\nvoid mapSet(RefMap *map, unsigned key, TValue val) {\r\n    int i = map->findIdx(key);\r\n    if (i < 0) {\r\n        map->keys.push((TValue)key);\r\n        map->values.push(val);\r\n    } else {\r\n        map->values.setRef(i, val);\r\n    }\r\n    map->unref();\r\n}\r\n\r\n//%\r\nvoid mapSetRef(RefMap *map, unsigned key, TValue val) {\r\n    mapSet(map, key, val);\r\n}\r\n\r\n//\r\n// Debugger\r\n//\r\n\r\n// This is only to be called once at the beginning of lambda function\r\n//%\r\nvoid *getGlobalsPtr() {\r\n#ifdef DEVICE_GROUP_ID_USER\r\n    fiber_set_group(DEVICE_GROUP_ID_USER);\r\n#endif\r\n\r\n    return globals;\r\n}\r\n\r\n//%\r\nvoid runtimeWarning(String s) {\r\n    // noop for now\r\n}\r\n} // namespace pxtrt\r\n#endif\r\n\r\nnamespace pxt {\r\n\r\n//%\r\nValType valType(TValue v) {\r\n    if (isTagged(v)) {\r\n        if (!v)\r\n            return ValType::Undefined;\r\n\r\n        if (isNumber(v))\r\n            return ValType::Number;\r\n        if (v == TAG_TRUE || v == TAG_FALSE)\r\n            return ValType::Boolean;\r\n        else if (v == TAG_NULL)\r\n            return ValType::Object;\r\n        else {\r\n            oops();\r\n            return ValType::Object;\r\n        }\r\n    } else {\r\n        int tag = ((RefObject *)v)->vtable;\r\n\r\n        if (tag == PXT_REF_TAG_STRING)\r\n            return ValType::String;\r\n        else if (tag == PXT_REF_TAG_NUMBER)\r\n            return ValType::Number;\r\n        else if (tag == PXT_REF_TAG_ACTION || getVTable((RefObject *)v) == &RefAction_vtable)\r\n            return ValType::Function;\r\n\r\n        return ValType::Object;\r\n    }\r\n}\r\n\r\nPXT_DEF_STRING(sObjectTp, \"\\x06\\x00object\")\r\nPXT_DEF_STRING(sBooleanTp, \"\\x07\\x00boolean\")\r\nPXT_DEF_STRING(sStringTp, \"\\x06\\x00string\")\r\nPXT_DEF_STRING(sNumberTp, \"\\x06\\x00number\")\r\nPXT_DEF_STRING(sFunctionTp, \"\\x08\\x00function\")\r\nPXT_DEF_STRING(sUndefinedTp, \"\\x09\\x00undefined\")\r\n\r\n//%\r\nString typeOf(TValue v) {\r\n    switch (valType(v)) {\r\n    case ValType::Undefined:\r\n        return (String)sUndefinedTp;\r\n    case ValType::Boolean:\r\n        return (String)sBooleanTp;\r\n    case ValType::Number:\r\n        return (String)sNumberTp;\r\n    case ValType::String:\r\n        return (String)sStringTp;\r\n    case ValType::Object:\r\n        return (String)sObjectTp;\r\n    case ValType::Function:\r\n        return (String)sFunctionTp;\r\n    default:\r\n        oops();\r\n        return 0;\r\n    }\r\n}\r\n\r\n// Maybe in future we will want separate print methods; for now ignore\r\nvoid anyPrint(TValue v) {\r\n    if (valType(v) == ValType::Object) {\r\n        if (isRefCounted(v)) {\r\n            auto o = (RefObject *)v;\r\n            auto meth = ((RefObjectMethod)getVTable(o)->methods[1]);\r\n            if ((void *)meth == (void *)&anyPrint)\r\n                DMESG(\"[RefObject refs=%d vt=%p]\", o->refcnt, o->vtable);\r\n            else\r\n                meth(o);\r\n        } else {\r\n            DMESG(\"[Native %p]\", v);\r\n        }\r\n    } else {\r\n#ifndef X86_64\r\n        String s = numops::toString(v);\r\n        DMESG(\"[%s %p = %s]\", pxt::typeOf(v)->data, v, s->data);\r\n        decr((TValue)s);\r\n#endif\r\n    }\r\n}\r\n\r\nvoid dtorDoNothing() {}\r\n\r\n#define PRIM_VTABLE(name, sz)                                                                      \\\r\n    const VTable name = {sz,                                                                       \\\r\n                         0,                                                                        \\\r\n                         0,                                                                        \\\r\n                         {                                                                         \\\r\n                             (void *)&dtorDoNothing,                                               \\\r\n                             (void *)&anyPrint,                                                    \\\r\n                         }};\r\nPRIM_VTABLE(string_vt, 0)\r\nPRIM_VTABLE(image_vt, 0)\r\nPRIM_VTABLE(buffer_vt, 0)\r\nPRIM_VTABLE(number_vt, 12)\r\nPRIM_VTABLE(action_vt, 0)\r\n\r\nstatic const VTable *primVtables[] = {0,          // 0\r\n                                      &string_vt, // 1\r\n                                      &buffer_vt, // 2\r\n                                      &image_vt,  // 3\r\n                                      // filler:\r\n                                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\r\n                                      0, 0, 0, 0, 0, 0, 0,\r\n                                      &number_vt, // 32\r\n                                      &action_vt, // 33\r\n                                      0};\r\n\r\nVTable *getVTable(RefObject *r) {\r\n    if (r->vtable >= 34)\r\n        return (VTable *)((uintptr_t)r->vtable << vtableShift);\r\n    if (r->vtable == 0)\r\n        target_panic(100);\r\n    return (VTable *)primVtables[r->vtable];\r\n}\r\n} // namespace pxt\r\n",
      "dal.d.ts": "// Auto-generated. Do not edit.\r\ndeclare const enum DAL {\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/bluetooth/ExternalEvents.h\r\n    MICROBIT_ID_BLE = 1000,\r\n    MICROBIT_ID_BLE_UART = 1200,\r\n    MICROBIT_BLE_EVT_CONNECTED = 1,\r\n    MICROBIT_BLE_EVT_DISCONNECTED = 2,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/bluetooth/MESEvents.h\r\n    MES_REMOTE_CONTROL_ID = 1001,\r\n    MES_REMOTE_CONTROL_EVT_PLAY = 1,\r\n    MES_REMOTE_CONTROL_EVT_PAUSE = 2,\r\n    MES_REMOTE_CONTROL_EVT_STOP = 3,\r\n    MES_REMOTE_CONTROL_EVT_NEXTTRACK = 4,\r\n    MES_REMOTE_CONTROL_EVT_PREVTRACK = 5,\r\n    MES_REMOTE_CONTROL_EVT_FORWARD = 6,\r\n    MES_REMOTE_CONTROL_EVT_REWIND = 7,\r\n    MES_REMOTE_CONTROL_EVT_VOLUMEUP = 8,\r\n    MES_REMOTE_CONTROL_EVT_VOLUMEDOWN = 9,\r\n    MES_CAMERA_ID = 1002,\r\n    MES_CAMERA_EVT_LAUNCH_PHOTO_MODE = 1,\r\n    MES_CAMERA_EVT_LAUNCH_VIDEO_MODE = 2,\r\n    MES_CAMERA_EVT_TAKE_PHOTO = 3,\r\n    MES_CAMERA_EVT_START_VIDEO_CAPTURE = 4,\r\n    MES_CAMERA_EVT_STOP_VIDEO_CAPTURE = 5,\r\n    MES_CAMERA_EVT_STOP_PHOTO_MODE = 6,\r\n    MES_CAMERA_EVT_STOP_VIDEO_MODE = 7,\r\n    MES_CAMERA_EVT_TOGGLE_FRONT_REAR = 8,\r\n    MES_ALERTS_ID = 1004,\r\n    MES_ALERT_EVT_DISPLAY_TOAST = 1,\r\n    MES_ALERT_EVT_VIBRATE = 2,\r\n    MES_ALERT_EVT_PLAY_SOUND = 3,\r\n    MES_ALERT_EVT_PLAY_RINGTONE = 4,\r\n    MES_ALERT_EVT_FIND_MY_PHONE = 5,\r\n    MES_ALERT_EVT_ALARM1 = 6,\r\n    MES_ALERT_EVT_ALARM2 = 7,\r\n    MES_ALERT_EVT_ALARM3 = 8,\r\n    MES_ALERT_EVT_ALARM4 = 9,\r\n    MES_ALERT_EVT_ALARM5 = 10,\r\n    MES_ALERT_EVT_ALARM6 = 11,\r\n    MES_SIGNAL_STRENGTH_ID = 1101,\r\n    MES_SIGNAL_STRENGTH_EVT_NO_BAR = 1,\r\n    MES_SIGNAL_STRENGTH_EVT_ONE_BAR = 2,\r\n    MES_SIGNAL_STRENGTH_EVT_TWO_BAR = 3,\r\n    MES_SIGNAL_STRENGTH_EVT_THREE_BAR = 4,\r\n    MES_SIGNAL_STRENGTH_EVT_FOUR_BAR = 5,\r\n    MES_DEVICE_INFO_ID = 1103,\r\n    MES_DEVICE_ORIENTATION_LANDSCAPE = 1,\r\n    MES_DEVICE_ORIENTATION_PORTRAIT = 2,\r\n    MES_DEVICE_GESTURE_NONE = 3,\r\n    MES_DEVICE_GESTURE_DEVICE_SHAKEN = 4,\r\n    MES_DEVICE_DISPLAY_OFF = 5,\r\n    MES_DEVICE_DISPLAY_ON = 6,\r\n    MES_DEVICE_INCOMING_CALL = 7,\r\n    MES_DEVICE_INCOMING_MESSAGE = 8,\r\n    MES_DPAD_CONTROLLER_ID = 1104,\r\n    MES_DPAD_BUTTON_A_DOWN = 1,\r\n    MES_DPAD_BUTTON_A_UP = 2,\r\n    MES_DPAD_BUTTON_B_DOWN = 3,\r\n    MES_DPAD_BUTTON_B_UP = 4,\r\n    MES_DPAD_BUTTON_C_DOWN = 5,\r\n    MES_DPAD_BUTTON_C_UP = 6,\r\n    MES_DPAD_BUTTON_D_DOWN = 7,\r\n    MES_DPAD_BUTTON_D_UP = 8,\r\n    MES_DPAD_BUTTON_1_DOWN = 9,\r\n    MES_DPAD_BUTTON_1_UP = 10,\r\n    MES_DPAD_BUTTON_2_DOWN = 11,\r\n    MES_DPAD_BUTTON_2_UP = 12,\r\n    MES_DPAD_BUTTON_3_DOWN = 13,\r\n    MES_DPAD_BUTTON_3_UP = 14,\r\n    MES_DPAD_BUTTON_4_DOWN = 15,\r\n    MES_DPAD_BUTTON_4_UP = 16,\r\n    MES_BROADCAST_GENERAL_ID = 2000,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitBLEManager.h\r\n    MICROBIT_BLE_PAIR_REQUEST = 1,\r\n    MICROBIT_BLE_PAIR_COMPLETE = 2,\r\n    MICROBIT_BLE_PAIR_PASSCODE = 4,\r\n    MICROBIT_BLE_PAIR_SUCCESSFUL = 8,\r\n    MICROBIT_BLE_PAIRING_TIMEOUT = 90,\r\n    MICROBIT_BLE_POWER_LEVELS = 8,\r\n    MICROBIT_BLE_MAXIMUM_BONDS = 4,\r\n    MICROBIT_BLE_EDDYSTONE_ADV_INTERVAL = 400,\r\n    MICROBIT_BLE_EDDYSTONE_DEFAULT_POWER = 240,\r\n    MICROBIT_BLE_STATUS_STORE_SYSATTR = 2,\r\n    MICROBIT_BLE_STATUS_DISCONNECT = 4,\r\n    MICROBIT_BLE_DISCONNECT_AFTER_PAIRING_DELAY = 500,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitDFUService.h\r\n    MICROBIT_DFU_OPCODE_START_DFU = 1,\r\n    MICROBIT_DFU_HISTOGRAM_WIDTH = 5,\r\n    MICROBIT_DFU_HISTOGRAM_HEIGHT = 5,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitIOPinService.h\r\n    MICROBIT_IO_PIN_SERVICE_PINCOUNT = 19,\r\n    MICROBIT_IO_PIN_SERVICE_DATA_SIZE = 10,\r\n    MICROBIT_PWM_PIN_SERVICE_DATA_SIZE = 2,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitLEDService.h\r\n    MICROBIT_BLE_MAXIMUM_SCROLLTEXT = 20,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitMagnetometerService.h\r\n    COMPASS_CALIBRATION_STATUS_UNKNOWN = 0,\r\n    COMPASS_CALIBRATION_REQUESTED = 1,\r\n    COMPASS_CALIBRATION_COMPLETED_OK = 2,\r\n    COMPASS_CALIBRATION_COMPLETED_ERR = 3,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitPartialFlashingService.h\r\n    PARTIAL_FLASHING_VERSION = 1,\r\n    REGION_INFO = 0,\r\n    FLASH_DATA = 1,\r\n    END_OF_TRANSMISSION = 2,\r\n    MICROBIT_STATUS = 238,\r\n    MICROBIT_RESET = 255,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitUARTService.h\r\n    MICROBIT_UART_S_DEFAULT_BUF_SIZE = 20,\r\n    MICROBIT_UART_S_EVT_DELIM_MATCH = 1,\r\n    MICROBIT_UART_S_EVT_HEAD_MATCH = 2,\r\n    MICROBIT_UART_S_EVT_RX_FULL = 3,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/core/ErrorNo.h\r\n    MICROBIT_OK = 0,\r\n    MICROBIT_INVALID_PARAMETER = -1001,\r\n    MICROBIT_NOT_SUPPORTED = -1002,\r\n    MICROBIT_CALIBRATION_IN_PROGRESS = -1003,\r\n    MICROBIT_CALIBRATION_REQUIRED = -1004,\r\n    MICROBIT_NO_RESOURCES = -1005,\r\n    MICROBIT_BUSY = -1006,\r\n    MICROBIT_CANCELLED = -1007,\r\n    MICROBIT_I2C_ERROR = -1010,\r\n    MICROBIT_SERIAL_IN_USE = -1011,\r\n    MICROBIT_NO_DATA = -1012,\r\n    MICROBIT_OOM = 20,\r\n    MICROBIT_HEAP_ERROR = 30,\r\n    MICROBIT_NULL_DEREFERENCE = 40,\r\n    MICROBIT_HARDWARE_UNAVAILABLE_ACC = 50,\r\n    MICROBIT_HARDWARE_UNAVAILABLE_MAG = 51,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/core/MicroBitComponent.h\r\n    MICROBIT_ID_BUTTON_A = 1,\r\n    MICROBIT_ID_BUTTON_B = 2,\r\n    MICROBIT_ID_BUTTON_RESET = 3,\r\n    MICROBIT_ID_ACCELEROMETER = 4,\r\n    MICROBIT_ID_COMPASS = 5,\r\n    MICROBIT_ID_DISPLAY = 6,\r\n    MICROBIT_IO_PINS = 20,\r\n    MICROBIT_ID_IO_P0 = 7,\r\n    MICROBIT_ID_IO_P1 = 8,\r\n    MICROBIT_ID_IO_P2 = 9,\r\n    MICROBIT_ID_IO_P3 = 10,\r\n    MICROBIT_ID_IO_P4 = 11,\r\n    MICROBIT_ID_IO_P5 = 12,\r\n    MICROBIT_ID_IO_P6 = 13,\r\n    MICROBIT_ID_IO_P7 = 14,\r\n    MICROBIT_ID_IO_P8 = 15,\r\n    MICROBIT_ID_IO_P9 = 16,\r\n    MICROBIT_ID_IO_P10 = 17,\r\n    MICROBIT_ID_IO_P11 = 18,\r\n    MICROBIT_ID_IO_P12 = 19,\r\n    MICROBIT_ID_IO_P13 = 20,\r\n    MICROBIT_ID_IO_P14 = 21,\r\n    MICROBIT_ID_IO_P15 = 22,\r\n    MICROBIT_ID_IO_P16 = 23,\r\n    MICROBIT_ID_IO_P19 = 24,\r\n    MICROBIT_ID_IO_P20 = 25,\r\n    MICROBIT_ID_BUTTON_AB = 26,\r\n    MICROBIT_ID_GESTURE = 27,\r\n    MICROBIT_ID_THERMOMETER = 28,\r\n    MICROBIT_ID_RADIO = 29,\r\n    MICROBIT_ID_RADIO_DATA_READY = 30,\r\n    MICROBIT_ID_MULTIBUTTON_ATTACH = 31,\r\n    MICROBIT_ID_SERIAL = 32,\r\n    MICROBIT_ID_IO_INT1 = 33,\r\n    MICROBIT_ID_IO_INT2 = 34,\r\n    MICROBIT_ID_IO_INT3 = 35,\r\n    MICROBIT_ID_PARTIAL_FLASHING = 36,\r\n    MICROBIT_ID_MESSAGE_BUS_LISTENER = 1021,\r\n    MICROBIT_ID_NOTIFY_ONE = 1022,\r\n    MICROBIT_ID_NOTIFY = 1023,\r\n    MICROBIT_COMPONENT_RUNNING = 1,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/core/MicroBitDevice.h\r\n    MICROBIT_NAME_LENGTH = 5,\r\n    MICROBIT_NAME_CODE_LETTERS = 5,\r\n    MICROBIT_PANIC_ERROR_CHARS = 4,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/core/MicroBitFiber.h\r\n    MICROBIT_SCHEDULER_RUNNING = 1,\r\n    MICROBIT_FIBER_FLAG_FOB = 1,\r\n    MICROBIT_FIBER_FLAG_PARENT = 2,\r\n    MICROBIT_FIBER_FLAG_CHILD = 4,\r\n    MICROBIT_FIBER_FLAG_DO_NOT_PAGE = 8,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/core/MicroBitFont.h\r\n    MICROBIT_FONT_WIDTH = 5,\r\n    MICROBIT_FONT_HEIGHT = 5,\r\n    MICROBIT_FONT_ASCII_START = 32,\r\n    MICROBIT_FONT_ASCII_END = 126,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/core/MicroBitHeapAllocator.h\r\n    MICROBIT_MAXIMUM_HEAPS = 2,\r\n    MICROBIT_HEAP_BLOCK_FREE = 2147483648,\r\n    MICROBIT_HEAP_BLOCK_SIZE = 4,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/core/MicroBitListener.h\r\n    MESSAGE_BUS_LISTENER_PARAMETERISED = 1,\r\n    MESSAGE_BUS_LISTENER_METHOD = 2,\r\n    MESSAGE_BUS_LISTENER_BUSY = 4,\r\n    MESSAGE_BUS_LISTENER_REENTRANT = 8,\r\n    MESSAGE_BUS_LISTENER_QUEUE_IF_BUSY = 16,\r\n    MESSAGE_BUS_LISTENER_DROP_IF_BUSY = 32,\r\n    MESSAGE_BUS_LISTENER_NONBLOCKING = 64,\r\n    MESSAGE_BUS_LISTENER_URGENT = 128,\r\n    MESSAGE_BUS_LISTENER_DELETING = 32768,\r\n    MESSAGE_BUS_LISTENER_IMMEDIATE = 192,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/core/NotifyEvents.h\r\n    MICROBIT_DISPLAY_EVT_FREE = 1,\r\n    MICROBIT_SERIAL_EVT_TX_EMPTY = 2,\r\n    MICROBIT_UART_S_EVT_TX_EMPTY = 3,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/DynamicPwm.h\r\n    MICROBIT_DEFAULT_PWM_PERIOD = 20000,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/FXOS8700.h\r\n    FXOS8700_DEFAULT_ADDR = 60,\r\n    FXOS8700_STATUS_REG = 0,\r\n    FXOS8700_OUT_X_MSB = 1,\r\n    FXOS8700_OUT_X_LSB = 2,\r\n    FXOS8700_OUT_Y_MSB = 3,\r\n    FXOS8700_OUT_Y_LSB = 4,\r\n    FXOS8700_OUT_Z_MSB = 5,\r\n    FXOS8700_OUT_Z_LSB = 6,\r\n    FXOS8700_F_SETUP = 9,\r\n    FXOS8700_TRIG_CFG = 10,\r\n    FXOS8700_SYSMOD = 11,\r\n    FXOS8700_INT_SOURCE = 12,\r\n    FXOS8700_WHO_AM_I = 13,\r\n    FXOS8700_XYZ_DATA_CFG = 14,\r\n    FXOS8700_HP_FILTER_CUTOFF = 15,\r\n    FXOS8700_PL_STATUS = 16,\r\n    FXOS8700_PL_CFG = 17,\r\n    FXOS8700_PL_COUNT = 18,\r\n    FXOS8700_PL_BF_ZCOMP = 19,\r\n    FXOS8700_PL_THS_REG = 20,\r\n    FXOS8700_A_FFMT_CFG = 21,\r\n    FXOS8700_A_FFMT_SRC = 22,\r\n    FXOS8700_A_FFMT_THS = 23,\r\n    FXOS8700_A_FFMT_COUNT = 24,\r\n    FXOS8700_TRANSIENT_CFG = 29,\r\n    FXOS8700_TRANSIENT_SRC = 30,\r\n    FXOS8700_TRANSIENT_THS = 31,\r\n    FXOS8700_TRANSIENT_COUNT = 32,\r\n    FXOS8700_PULSE_CFG = 33,\r\n    FXOS8700_PULSE_SRC = 34,\r\n    FXOS8700_PULSE_THSX = 35,\r\n    FXOS8700_PULSE_THSY = 36,\r\n    FXOS8700_PULSE_THSZ = 37,\r\n    FXOS8700_PULSE_TMLT = 38,\r\n    FXOS8700_PULSE_LTCY = 39,\r\n    FXOS8700_PULSE_WIND = 40,\r\n    FXOS8700_ASLP_COUNT = 41,\r\n    FXOS8700_CTRL_REG1 = 42,\r\n    FXOS8700_CTRL_REG2 = 43,\r\n    FXOS8700_CTRL_REG3 = 44,\r\n    FXOS8700_CTRL_REG4 = 45,\r\n    FXOS8700_CTRL_REG5 = 46,\r\n    FXOS8700_OFF_X = 47,\r\n    FXOS8700_OFF_Y = 48,\r\n    FXOS8700_OFF_Z = 49,\r\n    FXOS8700_M_DR_STATUS = 50,\r\n    FXOS8700_M_OUT_X_MSB = 51,\r\n    FXOS8700_M_OUT_X_LSB = 52,\r\n    FXOS8700_M_OUT_Y_MSB = 53,\r\n    FXOS8700_M_OUT_Y_LSB = 54,\r\n    FXOS8700_M_OUT_Z_MSB = 55,\r\n    FXOS8700_M_OUT_Z_LSB = 56,\r\n    FXOS8700_CMP_X_MSB = 57,\r\n    FXOS8700_CMP_X_LSB = 58,\r\n    FXOS8700_CMP_Y_MSB = 59,\r\n    FXOS8700_CMP_Y_LSB = 60,\r\n    FXOS8700_CMP_Z_MSB = 61,\r\n    FXOS8700_CMP_Z_LSB = 62,\r\n    FXOS8700_M_OFF_X_MSB = 63,\r\n    FXOS8700_M_OFF_X_LSB = 64,\r\n    FXOS8700_M_OFF_Y_MSB = 65,\r\n    FXOS8700_M_OFF_Y_LSB = 66,\r\n    FXOS8700_M_OFF_Z_MSB = 67,\r\n    FXOS8700_M_OFF_Z_LSB = 68,\r\n    FXOS8700_MAX_X_MSB = 69,\r\n    FXOS8700_MAX_X_LSB = 70,\r\n    FXOS8700_MAX_Y_MSB = 71,\r\n    FXOS8700_MAX_Y_LSB = 72,\r\n    FXOS8700_MAX_Z_MSB = 73,\r\n    FXOS8700_MAX_Z_LSB = 74,\r\n    FXOS8700_MIN_X_MSB = 75,\r\n    FXOS8700_MIN_X_LSB = 76,\r\n    FXOS8700_MIN_Y_MSB = 77,\r\n    FXOS8700_MIN_Y_LSB = 78,\r\n    FXOS8700_MIN_Z_MSB = 79,\r\n    FXOS8700_MIN_Z_LSB = 80,\r\n    FXOS8700_TEMP = 81,\r\n    FXOS8700_M_THS_CFG = 82,\r\n    FXOS8700_M_THS_SRC = 83,\r\n    FXOS8700_M_THS_X_MSB = 84,\r\n    FXOS8700_M_THS_X_LSB = 85,\r\n    FXOS8700_M_THS_Y_MSB = 86,\r\n    FXOS8700_M_THS_Y_LSB = 87,\r\n    FXOS8700_M_THS_Z_MSB = 88,\r\n    FXOS8700_M_THS_Z_LSB = 89,\r\n    FXOS8700_M_THS_COUNT = 90,\r\n    FXOS8700_M_CTRL_REG1 = 91,\r\n    FXOS8700_M_CTRL_REG2 = 92,\r\n    FXOS8700_M_CTRL_REG3 = 93,\r\n    FXOS8700_M_INT_SRC = 94,\r\n    FXOS8700_A_VECM_CFG = 95,\r\n    FXOS8700_A_VECM_THS_MSB = 96,\r\n    FXOS8700_A_VECM_THS_LSB = 97,\r\n    FXOS8700_A_VECM_CNT = 98,\r\n    FXOS8700_A_VECM_INITX_MSB = 99,\r\n    FXOS8700_A_VECM_INITX_LSB = 100,\r\n    FXOS8700_A_VECM_INITY_MSB = 101,\r\n    FXOS8700_A_VECM_INITY_LSB = 102,\r\n    FXOS8700_A_VECM_INITZ_MSB = 103,\r\n    FXOS8700_A_VECM_INITZ_LSB = 104,\r\n    FXOS8700_M_VECM_CFG = 105,\r\n    FXOS8700_M_VECM_THS_MSB = 106,\r\n    FXOS8700_M_VECM_THS_LSB = 107,\r\n    FXOS8700_M_VECM_CNT = 108,\r\n    FXOS8700_M_VECM_INITX_MSB = 109,\r\n    FXOS8700_M_VECM_INITX_LSB = 110,\r\n    FXOS8700_M_VECM_INITY_MSB = 111,\r\n    FXOS8700_M_VECM_INITY_LSB = 112,\r\n    FXOS8700_M_VECM_INITZ_MSB = 113,\r\n    FXOS8700_M_VECM_INITZ_LSB = 114,\r\n    FXOS8700_A_FFMT_THS_X_MSB = 115,\r\n    FXOS8700_A_FFMT_THS_X_LSB = 116,\r\n    FXOS8700_A_FFMT_THS_Y_MSB = 117,\r\n    FXOS8700_A_FFMT_THS_Y_LSB = 118,\r\n    FXOS8700_A_FFMT_THS_Z_MSB = 119,\r\n    FXOS8700_A_FFMT_THS_Z_LSB = 120,\r\n    FXOS8700_WHOAMI_VAL = 199,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/LSM303Accelerometer.h\r\n    LSM303_A_DEFAULT_ADDR = 50,\r\n    LSM303_STATUS_REG_AUX_A = 7,\r\n    LSM303_OUT_TEMP_L_A = 12,\r\n    LSM303_OUT_TEMP_H_A = 13,\r\n    LSM303_INT_COUNTER_REG_A = 14,\r\n    LSM303_WHO_AM_I_A = 15,\r\n    LSM303_TEMP_CFG_REG_A = 31,\r\n    LSM303_CTRL_REG1_A = 32,\r\n    LSM303_CTRL_REG2_A = 33,\r\n    LSM303_CTRL_REG3_A = 34,\r\n    LSM303_CTRL_REG4_A = 35,\r\n    LSM303_CTRL_REG5_A = 36,\r\n    LSM303_CTRL_REG6_A = 37,\r\n    LSM303_DATACAPTURE_A = 38,\r\n    LSM303_STATUS_REG_A = 39,\r\n    LSM303_OUT_X_L_A = 40,\r\n    LSM303_OUT_X_H_A = 41,\r\n    LSM303_OUT_Y_L_A = 42,\r\n    LSM303_OUT_Y_H_A = 43,\r\n    LSM303_OUT_Z_L_A = 44,\r\n    LSM303_OUT_Z_H_A = 45,\r\n    LSM303_FIFO_CTRL_REG_A = 46,\r\n    LSM303_FIFO_SRC_REG_A = 47,\r\n    LSM303_INT1_CFG_A = 48,\r\n    LSM303_INT1_SRC_A = 49,\r\n    LSM303_INT1_THS_A = 50,\r\n    LSM303_INT1_DURATION_A = 51,\r\n    LSM303_INT2_CFG_A = 52,\r\n    LSM303_INT2_SRC_A = 53,\r\n    LSM303_INT2_THS_A = 54,\r\n    LSM303_INT2_DURATION_A = 55,\r\n    LSM303_CLICK_CFG_A = 56,\r\n    LSM303_CLICK_SRC_A = 57,\r\n    LSM303_CLICK_THS_A = 58,\r\n    LSM303_TIME_LIMIT_A = 59,\r\n    LSM303_TIME_LATENCY_A = 60,\r\n    LSM303_TIME_WINDOW_A = 61,\r\n    LSM303_ACT_THS_A = 62,\r\n    LSM303_ACT_DUR_A = 63,\r\n    LSM303_A_WHOAMI_VAL = 51,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/LSM303Magnetometer.h\r\n    LSM303_M_WHOAMI_VAL = 64,\r\n    LSM303_M_DEFAULT_ADDR = 60,\r\n    LSM303_OFFSET_X_REG_L_M = 69,\r\n    LSM303_OFFSET_X_REG_H_M = 70,\r\n    LSM303_OFFSET_Y_REG_L_M = 71,\r\n    LSM303_OFFSET_Y_REG_H_M = 72,\r\n    LSM303_OFFSET_Z_REG_L_M = 73,\r\n    LSM303_OFFSET_Z_REG_H_M = 74,\r\n    LSM303_WHO_AM_I_M = 79,\r\n    LSM303_CFG_REG_A_M = 96,\r\n    LSM303_CFG_REG_B_M = 97,\r\n    LSM303_CFG_REG_C_M = 98,\r\n    LSM303_INT_CRTL_REG_M = 99,\r\n    LSM303_INT_SOURCE_REG_M = 100,\r\n    LSM303_INT_THS_L_REG_M = 101,\r\n    LSM303_INT_THS_H_REG_M = 102,\r\n    LSM303_STATUS_REG_M = 103,\r\n    LSM303_OUTX_L_REG_M = 104,\r\n    LSM303_OUTX_H_REG_M = 105,\r\n    LSM303_OUTY_L_REG_M = 106,\r\n    LSM303_OUTY_H_REG_M = 107,\r\n    LSM303_OUTZ_L_REG_M = 108,\r\n    LSM303_OUTZ_H_REG_M = 109,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/MAG3110.h\r\n    MAG3110_WHOAMI_VAL = 196,\r\n    MAG3110_DEFAULT_ADDR = 29,\r\n    MAG_DR_STATUS = 0,\r\n    MAG_OUT_X_MSB = 1,\r\n    MAG_OUT_X_LSB = 2,\r\n    MAG_OUT_Y_MSB = 3,\r\n    MAG_OUT_Y_LSB = 4,\r\n    MAG_OUT_Z_MSB = 5,\r\n    MAG_OUT_Z_LSB = 6,\r\n    MAG_WHOAMI = 7,\r\n    MAG_SYSMOD = 8,\r\n    MAG_OFF_X_MSB = 9,\r\n    MAG_OFF_X_LSB = 10,\r\n    MAG_OFF_Y_MSB = 11,\r\n    MAG_OFF_Y_LSB = 12,\r\n    MAG_OFF_Z_MSB = 13,\r\n    MAG_OFF_Z_LSB = 14,\r\n    MAG_DIE_TEMP = 15,\r\n    MAG_CTRL_REG1 = 16,\r\n    MAG_CTRL_REG2 = 17,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/MMA8653.h\r\n    MMA8653_DEFAULT_ADDR = 58,\r\n    MMA8653_STATUS = 0,\r\n    MMA8653_OUT_X_MSB = 1,\r\n    MMA8653_WHOAMI = 13,\r\n    MMA8653_XYZ_DATA_CFG = 14,\r\n    MMA8653_CTRL_REG1 = 42,\r\n    MMA8653_CTRL_REG2 = 43,\r\n    MMA8653_CTRL_REG3 = 44,\r\n    MMA8653_CTRL_REG4 = 45,\r\n    MMA8653_CTRL_REG5 = 46,\r\n    MMA8653_WHOAMI_VAL = 90,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/MicroBitAccelerometer.h\r\n    MICROBIT_ACCELEROMETER_IMU_DATA_VALID = 2,\r\n    MICROBIT_ACCEL_ADDED_TO_IDLE = 4,\r\n    MICROBIT_ACCELEROMETER_EVT_DATA_UPDATE = 1,\r\n    MICROBIT_ACCELEROMETER_EVT_NONE = 0,\r\n    MICROBIT_ACCELEROMETER_EVT_TILT_UP = 1,\r\n    MICROBIT_ACCELEROMETER_EVT_TILT_DOWN = 2,\r\n    MICROBIT_ACCELEROMETER_EVT_TILT_LEFT = 3,\r\n    MICROBIT_ACCELEROMETER_EVT_TILT_RIGHT = 4,\r\n    MICROBIT_ACCELEROMETER_EVT_FACE_UP = 5,\r\n    MICROBIT_ACCELEROMETER_EVT_FACE_DOWN = 6,\r\n    MICROBIT_ACCELEROMETER_EVT_FREEFALL = 7,\r\n    MICROBIT_ACCELEROMETER_EVT_3G = 8,\r\n    MICROBIT_ACCELEROMETER_EVT_6G = 9,\r\n    MICROBIT_ACCELEROMETER_EVT_8G = 10,\r\n    MICROBIT_ACCELEROMETER_EVT_SHAKE = 11,\r\n    MICROBIT_ACCELEROMETER_REST_TOLERANCE = 200,\r\n    MICROBIT_ACCELEROMETER_TILT_TOLERANCE = 200,\r\n    MICROBIT_ACCELEROMETER_FREEFALL_TOLERANCE = 400,\r\n    MICROBIT_ACCELEROMETER_SHAKE_TOLERANCE = 400,\r\n    MICROBIT_ACCELEROMETER_3G_TOLERANCE = 3072,\r\n    MICROBIT_ACCELEROMETER_6G_TOLERANCE = 6144,\r\n    MICROBIT_ACCELEROMETER_8G_TOLERANCE = 8192,\r\n    MICROBIT_ACCELEROMETER_GESTURE_DAMPING = 5,\r\n    MICROBIT_ACCELEROMETER_SHAKE_DAMPING = 10,\r\n    MICROBIT_ACCELEROMETER_SHAKE_RTX = 30,\r\n    MICROBIT_ACCELEROMETER_SHAKE_COUNT_THRESHOLD = 4,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/MicroBitButton.h\r\n    MICROBIT_BUTTON_EVT_DOWN = 1,\r\n    MICROBIT_BUTTON_EVT_UP = 2,\r\n    MICROBIT_BUTTON_EVT_CLICK = 3,\r\n    MICROBIT_BUTTON_EVT_LONG_CLICK = 4,\r\n    MICROBIT_BUTTON_EVT_HOLD = 5,\r\n    MICROBIT_BUTTON_EVT_DOUBLE_CLICK = 6,\r\n    MICROBIT_BUTTON_LONG_CLICK_TIME = 1000,\r\n    MICROBIT_BUTTON_HOLD_TIME = 1500,\r\n    MICROBIT_BUTTON_STATE = 1,\r\n    MICROBIT_BUTTON_STATE_HOLD_TRIGGERED = 2,\r\n    MICROBIT_BUTTON_STATE_CLICK = 4,\r\n    MICROBIT_BUTTON_STATE_LONG_CLICK = 8,\r\n    MICROBIT_BUTTON_SIGMA_MIN = 0,\r\n    MICROBIT_BUTTON_SIGMA_MAX = 12,\r\n    MICROBIT_BUTTON_SIGMA_THRESH_HI = 8,\r\n    MICROBIT_BUTTON_SIGMA_THRESH_LO = 2,\r\n    MICROBIT_BUTTON_DOUBLE_CLICK_THRESH = 50,\r\n    MICROBIT_BUTTON_SIMPLE_EVENTS = 0,\r\n    MICROBIT_BUTTON_ALL_EVENTS = 1,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/MicroBitCompass.h\r\n    MICROBIT_COMPASS_STATUS_RUNNING = 1,\r\n    MICROBIT_COMPASS_STATUS_CALIBRATED = 2,\r\n    MICROBIT_COMPASS_STATUS_CALIBRATING = 4,\r\n    MICROBIT_COMPASS_STATUS_ADDED_TO_IDLE = 8,\r\n    MICROBIT_COMPASS_EVT_DATA_UPDATE = 1,\r\n    MICROBIT_COMPASS_EVT_CONFIG_NEEDED = 2,\r\n    MICROBIT_COMPASS_EVT_CALIBRATE = 3,\r\n    MICROBIT_COMPASS_EVT_CALIBRATION_NEEDED = 4,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/MicroBitDisplay.h\r\n    MICROBIT_DISPLAY_EVT_ANIMATION_COMPLETE = 1,\r\n    MICROBIT_DISPLAY_EVT_LIGHT_SENSE = 2,\r\n    MICROBIT_DISPLAY_DEFAULT_AUTOCLEAR = 1,\r\n    MICROBIT_DISPLAY_SPACING = 1,\r\n    MICROBIT_DISPLAY_GREYSCALE_BIT_DEPTH = 8,\r\n    MICROBIT_DISPLAY_ANIMATE_DEFAULT_POS = -255,\r\n    ANIMATION_MODE_NONE = 0,\r\n    ANIMATION_MODE_STOPPED = 1,\r\n    ANIMATION_MODE_SCROLL_TEXT = 2,\r\n    ANIMATION_MODE_PRINT_TEXT = 3,\r\n    ANIMATION_MODE_SCROLL_IMAGE = 4,\r\n    ANIMATION_MODE_ANIMATE_IMAGE = 5,\r\n    ANIMATION_MODE_ANIMATE_IMAGE_WITH_CLEAR = 6,\r\n    ANIMATION_MODE_PRINT_CHARACTER = 7,\r\n    DISPLAY_MODE_BLACK_AND_WHITE = 0,\r\n    DISPLAY_MODE_GREYSCALE = 1,\r\n    DISPLAY_MODE_BLACK_AND_WHITE_LIGHT_SENSE = 2,\r\n    MICROBIT_DISPLAY_ROTATION_0 = 0,\r\n    MICROBIT_DISPLAY_ROTATION_90 = 1,\r\n    MICROBIT_DISPLAY_ROTATION_180 = 2,\r\n    MICROBIT_DISPLAY_ROTATION_270 = 3,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/MicroBitFile.h\r\n    READ = 1,\r\n    WRITE = 2,\r\n    READ_AND_WRITE = 3,\r\n    CREATE = 4,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/MicroBitFileSystem.h\r\n    MBFS_FILENAME_LENGTH = 16,\r\n    MB_READ = 1,\r\n    MB_WRITE = 2,\r\n    MB_CREAT = 4,\r\n    MB_APPEND = 8,\r\n    MB_SEEK_SET = 1,\r\n    MB_SEEK_END = 2,\r\n    MB_SEEK_CUR = 4,\r\n    MBFS_STATUS_INITIALISED = 1,\r\n    MBFS_UNUSED = 65535,\r\n    MBFS_EOF = 61439,\r\n    MBFS_DELETED = 0,\r\n    MBFS_DIRECTORY_ENTRY_FREE = 32768,\r\n    MBFS_DIRECTORY_ENTRY_VALID = 16384,\r\n    MBFS_DIRECTORY_ENTRY_DIRECTORY = 8192,\r\n    MBFS_DIRECTORY_ENTRY_NEW = 65535,\r\n    MBFS_DIRECTORY_ENTRY_DELETED = 0,\r\n    MBFS_BLOCK_TYPE_FILE = 1,\r\n    MBFS_BLOCK_TYPE_DIRECTORY = 2,\r\n    MBFS_BLOCK_TYPE_FILETABLE = 3,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/MicroBitFlash.h\r\n    PAGE_SIZE = 1024,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/MicroBitI2C.h\r\n    MICROBIT_I2C_MAX_RETRIES = 9,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/MicroBitLightSensor.h\r\n    MICROBIT_LIGHT_SENSOR_CHAN_NUM = 3,\r\n    MICROBIT_LIGHT_SENSOR_AN_SET_TIME = 4000,\r\n    MICROBIT_LIGHT_SENSOR_TICK_PERIOD = 5,\r\n    MICROBIT_LIGHT_SENSOR_MAX_VALUE = 338,\r\n    MICROBIT_LIGHT_SENSOR_MIN_VALUE = 75,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/MicroBitMatrixMaps.h\r\n    NO_CONN = 0,\r\n    MICROBIT_DISPLAY_WIDTH = 5,\r\n    MICROBIT_DISPLAY_HEIGHT = 5,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/MicroBitMemoryMap.h\r\n    NUMBER_OF_REGIONS = 3,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/MicroBitMultiButton.h\r\n    MICROBIT_MULTI_BUTTON_STATE_1 = 1,\r\n    MICROBIT_MULTI_BUTTON_STATE_2 = 2,\r\n    MICROBIT_MULTI_BUTTON_HOLD_TRIGGERED_1 = 4,\r\n    MICROBIT_MULTI_BUTTON_HOLD_TRIGGERED_2 = 8,\r\n    MICROBIT_MULTI_BUTTON_SUPRESSED_1 = 16,\r\n    MICROBIT_MULTI_BUTTON_SUPRESSED_2 = 32,\r\n    MICROBIT_MULTI_BUTTON_ATTACHED = 64,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/MicroBitPin.h\r\n    IO_STATUS_DIGITAL_IN = 1,\r\n    IO_STATUS_DIGITAL_OUT = 2,\r\n    IO_STATUS_ANALOG_IN = 4,\r\n    IO_STATUS_ANALOG_OUT = 8,\r\n    IO_STATUS_TOUCH_IN = 16,\r\n    IO_STATUS_EVENT_ON_EDGE = 32,\r\n    IO_STATUS_EVENT_PULSE_ON_EDGE = 64,\r\n    MICROBIT_PIN_MAX_OUTPUT = 1023,\r\n    MICROBIT_PIN_MAX_SERVO_RANGE = 180,\r\n    MICROBIT_PIN_DEFAULT_SERVO_RANGE = 2000,\r\n    MICROBIT_PIN_DEFAULT_SERVO_CENTER = 1500,\r\n    MICROBIT_PIN_EVENT_NONE = 0,\r\n    MICROBIT_PIN_EVENT_ON_EDGE = 1,\r\n    MICROBIT_PIN_EVENT_ON_PULSE = 2,\r\n    MICROBIT_PIN_EVENT_ON_TOUCH = 3,\r\n    MICROBIT_PIN_EVT_RISE = 2,\r\n    MICROBIT_PIN_EVT_FALL = 3,\r\n    MICROBIT_PIN_EVT_PULSE_HI = 4,\r\n    MICROBIT_PIN_EVT_PULSE_LO = 5,\r\n    PIN_CAPABILITY_DIGITAL_IN = 1,\r\n    PIN_CAPABILITY_DIGITAL_OUT = 2,\r\n    PIN_CAPABILITY_DIGITAL = 3,\r\n    PIN_CAPABILITY_ANALOG_IN = 4,\r\n    PIN_CAPABILITY_ANALOG_OUT = 8,\r\n    PIN_CAPABILITY_ANALOG = 12,\r\n    PIN_CAPABILITY_STANDARD = 11,\r\n    PIN_CAPABILITY_ALL = 15,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/MicroBitQuadratureDecoder.h\r\n    QDEC_USE_SYSTEM_TICK = 1,\r\n    QDEC_USE_DEBOUNCE = 2,\r\n    QDEC_LED_ACTIVE_LOW = 4,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/MicroBitRadio.h\r\n    MICROBIT_RADIO_STATUS_INITIALISED = 1,\r\n    MICROBIT_RADIO_BASE_ADDRESS = 1969383796,\r\n    MICROBIT_RADIO_DEFAULT_GROUP = 0,\r\n    MICROBIT_RADIO_DEFAULT_TX_POWER = 6,\r\n    MICROBIT_RADIO_DEFAULT_FREQUENCY = 7,\r\n    MICROBIT_RADIO_MAX_PACKET_SIZE = 32,\r\n    MICROBIT_RADIO_HEADER_SIZE = 4,\r\n    MICROBIT_RADIO_MAXIMUM_RX_BUFFERS = 4,\r\n    MICROBIT_RADIO_PROTOCOL_DATAGRAM = 1,\r\n    MICROBIT_RADIO_PROTOCOL_EVENTBUS = 2,\r\n    MICROBIT_RADIO_EVT_DATAGRAM = 1,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/MicroBitSerial.h\r\n    MICROBIT_SERIAL_DEFAULT_BAUD_RATE = 115200,\r\n    MICROBIT_SERIAL_DEFAULT_BUFFER_SIZE = 20,\r\n    MICROBIT_SERIAL_EVT_DELIM_MATCH = 1,\r\n    MICROBIT_SERIAL_EVT_HEAD_MATCH = 2,\r\n    MICROBIT_SERIAL_EVT_RX_FULL = 3,\r\n    MICROBIT_SERIAL_RX_IN_USE = 1,\r\n    MICROBIT_SERIAL_TX_IN_USE = 2,\r\n    MICROBIT_SERIAL_RX_BUFF_INIT = 4,\r\n    MICROBIT_SERIAL_TX_BUFF_INIT = 8,\r\n    ASYNC = 0,\r\n    SYNC_SPINWAIT = 1,\r\n    SYNC_SLEEP = 2,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/MicroBitStorage.h\r\n    MICROBIT_STORAGE_MAGIC = 51966,\r\n    MICROBIT_STORAGE_BLOCK_SIZE = 48,\r\n    MICROBIT_STORAGE_KEY_SIZE = 16,\r\n    MICROBIT_STORAGE_STORE_PAGE_OFFSET = 17,\r\n    MICROBIT_STORAGE_SCRATCH_PAGE_OFFSET = 19,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/drivers/MicroBitThermometer.h\r\n    MICROBIT_THERMOMETER_PERIOD = 1000,\r\n    MAG3110_SAMPLE_RATES = 11,\r\n    MICROBIT_THERMOMETER_EVT_UPDATE = 1,\r\n    MICROBIT_THERMOMETER_ADDED_TO_IDLE = 2,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/types/CoordinateSystem.h\r\n    COORDINATE_SPACE_ROTATED_0 = 0,\r\n    COORDINATE_SPACE_ROTATED_90 = 1,\r\n    COORDINATE_SPACE_ROTATED_180 = 2,\r\n    COORDINATE_SPACE_ROTATED_270 = 3,\r\n    RAW = 0,\r\n    SIMPLE_CARTESIAN = 1,\r\n    NORTH_EAST_DOWN = 2,\r\n    EAST_NORTH_UP = 3,\r\n    // built/dockeryt/yotta_modules/microbit-dal/inc/types/MicroBitEvent.h\r\n    MICROBIT_ID_ANY = 0,\r\n    MICROBIT_EVT_ANY = 0,\r\n    CREATE_ONLY = 0,\r\n    CREATE_AND_FIRE = 1,\r\n    MICROBIT_EVENT_DEFAULT_LAUNCH_MODE = 1,\r\n}\r\n",
      "enums.d.ts": "// Auto-generated. Do not edit.\n\n\n    declare const enum NumberFormat {\n    Int8LE = 1,\n    UInt8LE = 2,\n    Int16LE = 3,\n    UInt16LE = 4,\n    Int32LE = 5,\n    Int8BE = 6,\n    UInt8BE = 7,\n    Int16BE = 8,\n    UInt16BE = 9,\n    Int32BE = 10,\n\n    UInt32LE = 11,\n    UInt32BE = 12,\n    Float32LE = 13,\n    Float64LE = 14,\n    Float32BE = 15,\n    Float64BE = 16,\n    }\n\n\n    declare const enum ValType {\n    Undefined = 0,\n    Boolean = 1,\n    Number = 2,\n    String = 3,\n    Object = 4,\n    Function = 5,\n    }\ndeclare namespace images {\n}\ndeclare namespace basic {\n}\n\n\n    declare const enum Button {\n    A = 1,  // MICROBIT_ID_BUTTON_A\n    B = 2,  // MICROBIT_ID_BUTTON_B\n    //% block=\"A+B\"\n    AB = 26,  // MICROBIT_ID_BUTTON_AB\n    }\n\n\n    declare const enum Dimension {\n    //% block=x\n    X = 0,\n    //% block=y\n    Y = 1,\n    //% block=z\n    Z = 2,\n    //% block=strength\n    Strength = 3,\n    }\n\n\n    declare const enum Rotation {\n    //% block=pitch\n    Pitch = 0,\n    //% block=roll\n    Roll = 1,\n    }\n\n\n    declare const enum TouchPin {\n    P0 = 7,  // MICROBIT_ID_IO_P0\n    P1 = 8,  // MICROBIT_ID_IO_P1\n    P2 = 9,  // MICROBIT_ID_IO_P2\n    }\n\n\n    declare const enum AcceleratorRange {\n    /**\n     * The accelerator measures forces up to 1 gravity\n     */\n    //%  block=\"1g\"\n    OneG = 1,\n    /**\n     * The accelerator measures forces up to 2 gravity\n     */\n    //%  block=\"2g\"\n    TwoG = 2,\n    /**\n     * The accelerator measures forces up to 4 gravity\n     */\n    //% block=\"4g\"\n    FourG = 4,\n    /**\n     * The accelerator measures forces up to 8 gravity\n     */\n    //% block=\"8g\"\n    EightG = 8,\n    }\n\n\n    declare const enum Gesture {\n    /**\n     * Raised when shaken\n     */\n    //% block=shake\n    //% jres=gestures.shake\n    Shake = 11,  // MICROBIT_ACCELEROMETER_EVT_SHAKE\n    /**\n     * Raised when the logo is upward and the screen is vertical\n     */\n    //% block=\"logo up\"\n    //% jres=gestures.tiltforward\n    LogoUp = 1,  // MICROBIT_ACCELEROMETER_EVT_TILT_UP\n    /**\n     * Raised when the logo is downward and the screen is vertical\n     */\n    //% block=\"logo down\"\n    //% jres=gestures.tiltbackwards\n    LogoDown = 2,  // MICROBIT_ACCELEROMETER_EVT_TILT_DOWN\n    /**\n     * Raised when the screen is pointing down and the board is horizontal\n     */\n    //% block=\"screen up\"\n    //% jres=gestures.frontsideup\n    ScreenUp = 5,  // MICROBIT_ACCELEROMETER_EVT_FACE_UP\n    /**\n     * Raised when the screen is pointing up and the board is horizontal\n     */\n    //% block=\"screen down\"\n    //% jres=gestures.backsideup\n    ScreenDown = 6,  // MICROBIT_ACCELEROMETER_EVT_FACE_DOWN\n    /**\n     * Raised when the screen is pointing left\n     */\n    //% block=\"tilt left\"\n    //% jres=gestures.tiltleft\n    TiltLeft = 3,  // MICROBIT_ACCELEROMETER_EVT_TILT_LEFT\n    /**\n     * Raised when the screen is pointing right\n     */\n    //% block=\"tilt right\"\n    //% jres=gestures.tiltright\n    TiltRight = 4,  // MICROBIT_ACCELEROMETER_EVT_TILT_RIGHT\n    /**\n     * Raised when the board is falling!\n     */\n    //% block=\"free fall\"\n    //% jres=gestures.freefall\n    FreeFall = 7,  // MICROBIT_ACCELEROMETER_EVT_FREEFALL\n    /**\n     * Raised when a 3G shock is detected\n     */\n    //% block=\"3g\"\n    //% jres=gestures.impact3g\n    ThreeG = 8,  // MICROBIT_ACCELEROMETER_EVT_3G\n    /**\n     * Raised when a 6G shock is detected\n     */\n    //% block=\"6g\"\n    //% jres=gestures.impact6g\n    SixG = 9,  // MICROBIT_ACCELEROMETER_EVT_6G\n    /**\n     * Raised when a 8G shock is detected\n     */\n    //% block=\"8g\"\n    //% jres=gestures.impact8g\n    EightG = 10,  // MICROBIT_ACCELEROMETER_EVT_8G\n    }\n\n\n    declare const enum MesDpadButtonInfo {\n    //% block=\"A down\"\n    ADown = 1,  // MES_DPAD_BUTTON_A_DOWN\n    //% block=\"A up\"\n    AUp = 2,  // MES_DPAD_BUTTON_A_UP\n    //% block=\"B down\"\n    BDown = 3,  // MES_DPAD_BUTTON_B_DOWN\n    //% block=\"B up\"\n    BUp = 4,  // MES_DPAD_BUTTON_B_UP\n    //% block=\"C down\"\n    CDown = 5,  // MES_DPAD_BUTTON_C_DOWN\n    //% block=\"C up\"\n    CUp = 6,  // MES_DPAD_BUTTON_C_UP\n    //% block=\"D down\"\n    DDown = 7,  // MES_DPAD_BUTTON_D_DOWN\n    //% block=\"D up\"\n    DUp = 8,  // MES_DPAD_BUTTON_D_UP\n    //% block=\"1 down\"\n    _1Down = 9,  // MES_DPAD_BUTTON_1_DOWN\n    //% block=\"1 up\"\n    _1Up = 10,  // MES_DPAD_BUTTON_1_UP\n    //% block=\"2 down\"\n    _2Down = 11,  // MES_DPAD_BUTTON_2_DOWN\n    //% block=\"2 up\"\n    _2Up = 12,  // MES_DPAD_BUTTON_2_UP\n    //% block=\"3 down\"\n    _3Down = 13,  // MES_DPAD_BUTTON_3_DOWN\n    //% block=\"3 up\"\n    _3Up = 14,  // MES_DPAD_BUTTON_3_UP\n    //% block=\"4 down\"\n    _4Down = 15,  // MES_DPAD_BUTTON_4_DOWN\n    //% block=\"4 up\"\n    _4Up = 16,  // MES_DPAD_BUTTON_4_UP\n    }\ndeclare namespace input {\n}\n\n\n    /**\n     * How to create the event.\n     */\n\n    declare const enum EventCreationMode {\n    /**\n     * MicroBitEvent is initialised, and no further processing takes place.\n     */\n    CreateOnly = 0,  // CREATE_ONLY\n    /**\n     * MicroBitEvent is initialised, and its event handlers are immediately fired (not suitable for use in interrupts!).\n     */\n    CreateAndFire = 1,  // CREATE_AND_FIRE\n    }\n\n\n    declare const enum EventBusSource {\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_BUTTON_A = 1,  // MICROBIT_ID_BUTTON_A\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_BUTTON_B = 2,  // MICROBIT_ID_BUTTON_B\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_BUTTON_AB = 26,  // MICROBIT_ID_BUTTON_AB\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_RADIO = 29,  // MICROBIT_ID_RADIO\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_GESTURE = 27,  // MICROBIT_ID_GESTURE\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_ACCELEROMETER = 4,  // MICROBIT_ID_ACCELEROMETER\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P0 = 7,  // MICROBIT_ID_IO_P0\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P1 = 8,  // MICROBIT_ID_IO_P1\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P2 = 9,  // MICROBIT_ID_IO_P2\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P3 = 10,  // MICROBIT_ID_IO_P3\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P4 = 11,  // MICROBIT_ID_IO_P4\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P5 = 12,  // MICROBIT_ID_IO_P5\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P6 = 13,  // MICROBIT_ID_IO_P6\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P7 = 14,  // MICROBIT_ID_IO_P7\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P8 = 15,  // MICROBIT_ID_IO_P8\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P9 = 16,  // MICROBIT_ID_IO_P9\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P10 = 17,  // MICROBIT_ID_IO_P10\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P11 = 18,  // MICROBIT_ID_IO_P11\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P12 = 19,  // MICROBIT_ID_IO_P12\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P13 = 20,  // MICROBIT_ID_IO_P13\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P14 = 21,  // MICROBIT_ID_IO_P14\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P15 = 22,  // MICROBIT_ID_IO_P15\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P16 = 23,  // MICROBIT_ID_IO_P16\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P19 = 24,  // MICROBIT_ID_IO_P19\n    //% blockIdentity=\"control.eventSourceId\"\n    MICROBIT_ID_IO_P20 = 25,  // MICROBIT_ID_IO_P20\n    //% blockIdentity=\"control.eventSourceId\"\n    MES_DEVICE_INFO_ID = 1103,  // MES_DEVICE_INFO_ID\n    //% blockIdentity=\"control.eventSourceId\"\n    MES_SIGNAL_STRENGTH_ID = 1101,  // MES_SIGNAL_STRENGTH_ID\n    //% blockIdentity=\"control.eventSourceId\"\n    MES_DPAD_CONTROLLER_ID = 1104,  // MES_DPAD_CONTROLLER_ID\n    //% blockIdentity=\"control.eventSourceId\"\n    MES_BROADCAST_GENERAL_ID = 2000,  // MES_BROADCAST_GENERAL_ID\n    }\n\n\n    declare const enum EventBusValue {\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_EVT_ANY = 0,  // MICROBIT_EVT_ANY\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_BUTTON_EVT_DOWN = 1,  // MICROBIT_BUTTON_EVT_DOWN\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_BUTTON_EVT_UP = 2,  // MICROBIT_BUTTON_EVT_UP\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_BUTTON_EVT_CLICK = 3,  // MICROBIT_BUTTON_EVT_CLICK\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_RADIO_EVT_DATAGRAM = 1,  // MICROBIT_RADIO_EVT_DATAGRAM\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_ACCELEROMETER_EVT_DATA_UPDATE = 1,  // MICROBIT_ACCELEROMETER_EVT_DATA_UPDATE\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_PIN_EVT_RISE = 2,  // MICROBIT_PIN_EVT_RISE\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_PIN_EVT_FALL = 3,  // MICROBIT_PIN_EVT_FALL\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_PIN_EVT_PULSE_HI = 4,  // MICROBIT_PIN_EVT_PULSE_HI\n    //% blockIdentity=\"control.eventValueId\"\n    MICROBIT_PIN_EVT_PULSE_LO = 5,  // MICROBIT_PIN_EVT_PULSE_LO\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_ALARM1 = 6,  // MES_ALERT_EVT_ALARM1\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_ALARM2 = 7,  // MES_ALERT_EVT_ALARM2\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_ALARM3 = 8,  // MES_ALERT_EVT_ALARM3\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_ALARM4 = 9,  // MES_ALERT_EVT_ALARM4\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_ALARM5 = 10,  // MES_ALERT_EVT_ALARM5\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_ALARM6 = 11,  // MES_ALERT_EVT_ALARM6\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_DISPLAY_TOAST = 1,  // MES_ALERT_EVT_DISPLAY_TOAST\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_FIND_MY_PHONE = 5,  // MES_ALERT_EVT_FIND_MY_PHONE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_PLAY_RINGTONE = 4,  // MES_ALERT_EVT_PLAY_RINGTONE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_PLAY_SOUND = 3,  // MES_ALERT_EVT_PLAY_SOUND\n    //% blockIdentity=\"control.eventValueId\"\n    MES_ALERT_EVT_VIBRATE = 2,  // MES_ALERT_EVT_VIBRATE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_LAUNCH_PHOTO_MODE = 1,  // MES_CAMERA_EVT_LAUNCH_PHOTO_MODE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_LAUNCH_VIDEO_MODE = 2,  // MES_CAMERA_EVT_LAUNCH_VIDEO_MODE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_START_VIDEO_CAPTURE = 4,  // MES_CAMERA_EVT_START_VIDEO_CAPTURE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_STOP_PHOTO_MODE = 6,  // MES_CAMERA_EVT_STOP_PHOTO_MODE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_STOP_VIDEO_CAPTURE = 5,  // MES_CAMERA_EVT_STOP_VIDEO_CAPTURE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_STOP_VIDEO_MODE = 7,  // MES_CAMERA_EVT_STOP_VIDEO_MODE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_TAKE_PHOTO = 3,  // MES_CAMERA_EVT_TAKE_PHOTO\n    //% blockIdentity=\"control.eventValueId\"\n    MES_CAMERA_EVT_TOGGLE_FRONT_REAR = 8,  // MES_CAMERA_EVT_TOGGLE_FRONT_REAR\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DEVICE_DISPLAY_OFF = 5,  // MES_DEVICE_DISPLAY_OFF\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DEVICE_DISPLAY_ON = 6,  // MES_DEVICE_DISPLAY_ON\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DEVICE_GESTURE_DEVICE_SHAKEN = 4,  // MES_DEVICE_GESTURE_DEVICE_SHAKEN\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DEVICE_INCOMING_CALL = 7,  // MES_DEVICE_INCOMING_CALL\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DEVICE_INCOMING_MESSAGE = 8,  // MES_DEVICE_INCOMING_MESSAGE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DEVICE_ORIENTATION_LANDSCAPE = 1,  // MES_DEVICE_ORIENTATION_LANDSCAPE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DEVICE_ORIENTATION_PORTRAIT = 2,  // MES_DEVICE_ORIENTATION_PORTRAIT\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_1_DOWN = 9,  // MES_DPAD_BUTTON_1_DOWN\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_1_UP = 10,  // MES_DPAD_BUTTON_1_UP\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_2_DOWN = 11,  // MES_DPAD_BUTTON_2_DOWN\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_2_UP = 12,  // MES_DPAD_BUTTON_2_UP\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_3_DOWN = 13,  // MES_DPAD_BUTTON_3_DOWN\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_3_UP = 14,  // MES_DPAD_BUTTON_3_UP\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_4_DOWN = 15,  // MES_DPAD_BUTTON_4_DOWN\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_4_UP = 16,  // MES_DPAD_BUTTON_4_UP\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_A_DOWN = 1,  // MES_DPAD_BUTTON_A_DOWN\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_A_UP = 2,  // MES_DPAD_BUTTON_A_UP\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_B_DOWN = 3,  // MES_DPAD_BUTTON_B_DOWN\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_B_UP = 4,  // MES_DPAD_BUTTON_B_UP\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_C_DOWN = 5,  // MES_DPAD_BUTTON_C_DOWN\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_C_UP = 6,  // MES_DPAD_BUTTON_C_UP\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_D_DOWN = 7,  // MES_DPAD_BUTTON_D_DOWN\n    //% blockIdentity=\"control.eventValueId\"\n    MES_DPAD_BUTTON_D_UP = 8,  // MES_DPAD_BUTTON_D_UP\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_FORWARD = 6,  // MES_REMOTE_CONTROL_EVT_FORWARD\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_NEXTTRACK = 4,  // MES_REMOTE_CONTROL_EVT_NEXTTRACK\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_PAUSE = 2,  // MES_REMOTE_CONTROL_EVT_PAUSE\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_PLAY = 1,  // MES_REMOTE_CONTROL_EVT_PLAY\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_PREVTRACK = 5,  // MES_REMOTE_CONTROL_EVT_PREVTRACK\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_REWIND = 7,  // MES_REMOTE_CONTROL_EVT_REWIND\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_STOP = 3,  // MES_REMOTE_CONTROL_EVT_STOP\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_VOLUMEDOWN = 9,  // MES_REMOTE_CONTROL_EVT_VOLUMEDOWN\n    //% blockIdentity=\"control.eventValueId\"\n    MES_REMOTE_CONTROL_EVT_VOLUMEUP = 8,  // MES_REMOTE_CONTROL_EVT_VOLUMEUP\n    }\ndeclare namespace control {\n}\n\n\n    declare const enum DisplayMode {\n    //% block=\"black and white\"\n    BackAndWhite = 0,  // DISPLAY_MODE_BLACK_AND_WHITE\n    //% block=\"greyscale\"\n    Greyscale = 1,  // DISPLAY_MODE_GREYSCALE\n    // TODO DISPLAY_MODE_BLACK_AND_WHITE_LIGHT_SENSE\n    }\ndeclare namespace led {\n}\n\n\n    declare const enum DigitalPin {\n    P0 = 7,  // MICROBIT_ID_IO_P0\n    P1 = 8,  // MICROBIT_ID_IO_P1\n    P2 = 9,  // MICROBIT_ID_IO_P2\n    P3 = 10,  // MICROBIT_ID_IO_P3\n    P4 = 11,  // MICROBIT_ID_IO_P4\n    P5 = 12,  // MICROBIT_ID_IO_P5\n    P6 = 13,  // MICROBIT_ID_IO_P6\n    P7 = 14,  // MICROBIT_ID_IO_P7\n    P8 = 15,  // MICROBIT_ID_IO_P8\n    P9 = 16,  // MICROBIT_ID_IO_P9\n    P10 = 17,  // MICROBIT_ID_IO_P10\n    P11 = 18,  // MICROBIT_ID_IO_P11\n    P12 = 19,  // MICROBIT_ID_IO_P12\n    P13 = 20,  // MICROBIT_ID_IO_P13\n    P14 = 21,  // MICROBIT_ID_IO_P14\n    P15 = 22,  // MICROBIT_ID_IO_P15\n    P16 = 23,  // MICROBIT_ID_IO_P16\n    P19 = 24,  // MICROBIT_ID_IO_P19\n    P20 = 25,  // MICROBIT_ID_IO_P20\n    }\n\n\n    declare const enum AnalogPin {\n    P0 = 7,  // MICROBIT_ID_IO_P0\n    P1 = 8,  // MICROBIT_ID_IO_P1\n    P2 = 9,  // MICROBIT_ID_IO_P2\n    P3 = 10,  // MICROBIT_ID_IO_P3\n    P4 = 11,  // MICROBIT_ID_IO_P4\n    P10 = 17,  // MICROBIT_ID_IO_P10\n    //% block=\"P5 (write only)\"\n    P5 = 12,  // MICROBIT_ID_IO_P5\n    //% block=\"P6 (write only)\"\n    P6 = 13,  // MICROBIT_ID_IO_P6\n    //% block=\"P7 (write only)\"\n    P7 = 14,  // MICROBIT_ID_IO_P7\n    //% block=\"P8 (write only)\"\n    P8 = 15,  // MICROBIT_ID_IO_P8\n    //% block=\"P9 (write only)\"\n    P9 = 16,  // MICROBIT_ID_IO_P9\n    //% block=\"P11 (write only)\"\n    P11 = 18,  // MICROBIT_ID_IO_P11\n    //% block=\"P12 (write only)\"\n    P12 = 19,  // MICROBIT_ID_IO_P12\n    //% block=\"P13 (write only)\"\n    P13 = 20,  // MICROBIT_ID_IO_P13\n    //% block=\"P14 (write only)\"\n    P14 = 21,  // MICROBIT_ID_IO_P14\n    //% block=\"P15 (write only)\"\n    P15 = 22,  // MICROBIT_ID_IO_P15\n    //% block=\"P16 (write only)\"\n    P16 = 23,  // MICROBIT_ID_IO_P16\n    //% block=\"P19 (write only)\"\n    P19 = 24,  // MICROBIT_ID_IO_P19\n    //% block=\"P20 (write only)\"\n    P20 = 25,  // MICROBIT_ID_IO_P20\n    }\n\n\n    declare const enum PulseValue {\n    //% block=high\n    High = 4,  // MICROBIT_PIN_EVT_PULSE_HI\n    //% block=low\n    Low = 5,  // MICROBIT_PIN_EVT_PULSE_LO\n    }\n\n\n    declare const enum PinPullMode {\n    //% block=\"down\"\n    PullDown = 0,\n    //% block=\"up\"\n    PullUp = 1,\n    //% block=\"none\"\n    PullNone = 2,\n    }\n\n\n    declare const enum PinEventType {\n    //% block=\"edge\"\n    Edge = 1,  // MICROBIT_PIN_EVENT_ON_EDGE\n    //% block=\"pulse\"\n    Pulse = 2,  // MICROBIT_PIN_EVENT_ON_PULSE\n    //% block=\"touch\"\n    Touch = 3,  // MICROBIT_PIN_EVENT_ON_TOUCH\n    //% block=\"none\"\n    None = 0,  // MICROBIT_PIN_EVENT_NONE\n    }\n\n\n    declare const enum SerialPin {\n    P0 = 7,  // MICROBIT_ID_IO_P0\n    P1 = 8,  // MICROBIT_ID_IO_P1\n    P2 = 9,  // MICROBIT_ID_IO_P2\n    P8 = 15,  // MICROBIT_ID_IO_P8\n    P12 = 19,  // MICROBIT_ID_IO_P12\n    P13 = 20,  // MICROBIT_ID_IO_P13\n    P14 = 21,  // MICROBIT_ID_IO_P14\n    P15 = 22,  // MICROBIT_ID_IO_P15\n    P16 = 23,  // MICROBIT_ID_IO_P16\n    USB_TX = 1001,\n    USB_RX = 1002,\n    }\n\n\n    declare const enum BaudRate {\n    //% block=115200\n    BaudRate115200 = 115200,\n    //% block=57600\n    BaudRate57600 = 57600,\n    //% block=38400\n    BaudRate38400 = 38400,\n    //% block=31250\n    BaudRate31250 = 31250,\n    //% block=28800\n    BaudRate28800 = 28800,\n    //% block=19200\n    BaudRate19200 = 19200,\n    //% block=14400\n    BaudRate14400 = 14400,\n    //% block=9600\n    BaudRate9600 = 9600,\n    //% block=4800\n    BaudRate4800 = 4800,\n    //% block=2400\n    BaudRate2400 = 2400,\n    //% block=1200\n    BaudRate1200 = 1200,\n    //% block=300\n    BaudRate300 = 300,\n    }\n\n\n    declare const enum Delimiters {\n    //% block=\"new line\"\n    NewLine = 1,\n    //% block=\",\"\n    Comma = 2,\n    //% block=\"$\"\n    Dollar = 3,\n    //% block=\":\"\n    Colon = 4,\n    //% block=\".\"\n    Fullstop = 5,\n    //% block=\"#\"\n    Hash = 6,\n    }\ndeclare namespace serial {\n}\n\n// Auto-generated. Do not edit. Really.\n",
      "game.ts": "enum Direction {\r\n    //% block=right\r\n    Right,\r\n    //% block=left\r\n    Left\r\n}\r\n\r\nenum LedSpriteProperty {\r\n    //% block=x\r\n    X,\r\n    //% block=y\r\n    Y,\r\n    //% block=direction\r\n    Direction,\r\n    //% block=brightness\r\n    Brightness,\r\n    //% block=blink\r\n    Blink\r\n}\r\n\r\n/**\r\n * A single-LED sprite game engine\r\n */\r\n//% color=#007A4B weight=32 icon=\"\\uf11b\"\r\n//% advanced=true\r\n//% deprecated=true\r\nnamespace game {\r\n    let _score: number = 0;\r\n    let _life: number = 3;\r\n    let _startTime: number = 0;\r\n    let _endTime: number = 0;\r\n    let _isGameOver: boolean = false;\r\n    let _countdownPause: number = 0;\r\n    let _level: number = 1;\r\n    let _gameId: number = 0;\r\n    let _img: Image;\r\n    let _sprites: LedSprite[];\r\n    let _paused: boolean = false;\r\n    let _backgroundAnimation = false; // indicates if an auxiliary animation (and fiber) is already running\r\n\r\n    /**\r\n     * Creates a new LED sprite pointing to the right.\r\n     * @param x sprite horizontal coordinate, eg: 2\r\n     * @param y sprite vertical coordinate, eg: 2\r\n     */\r\n    //% weight=60 blockGap=8 help=game/create-sprite\r\n    //% blockId=game_create_sprite block=\"create sprite at|x: %x|y: %y\"\r\n    //% parts=\"ledmatrix\"\r\n    export function createSprite(x: number, y: number): LedSprite {\r\n        init();\r\n        let p = new LedSprite(x, y);\r\n        return p;\r\n    }\r\n\r\n    /**\r\n     * Gets the current score\r\n     */\r\n    //% weight=9 help=game/score\r\n    //% blockId=game_score block=\"score\" blockGap=8\r\n    export function score(): number {\r\n        return _score;\r\n    }\r\n\r\n    /**\r\n     * Adds points to the current score and shows an animation\r\n     * @param points amount of points to change, eg: 1\r\n     */\r\n    //% weight=10 help=game/add-score\r\n    //% blockId=game_add_score block=\"change score by|%points\" blockGap=8\r\n    //% parts=\"ledmatrix\"\r\n    export function addScore(points: number): void {\r\n        setScore(_score + points);\r\n        if (!_paused && !_backgroundAnimation) {\r\n            _backgroundAnimation = true;\r\n            control.inBackground(() => {\r\n                led.stopAnimation();\r\n                basic.showAnimation(`0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 0 1 0 0 0 0 0\r\n    0 0 0 0 0 0 0 1 0 0 0 1 1 1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 0 1 0 0 0 0 0 0 0 0 0 0\r\n    0 0 1 0 0 0 1 1 1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\r\n    0 0 0 0 0 0 0 1 0 0 0 1 1 1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 0 1 0 0 0 0 0 0 0 0 0 0\r\n    0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 0 1 0 0 0 0 0`, 20);\r\n                _backgroundAnimation = false;\r\n            });\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Shows an animation, then starts a game countdown timer, which causes Game Over when it reaches 0\r\n     * @param ms countdown duration in milliseconds, eg: 10000\r\n     */\r\n    //% weight=9 help=game/start-countdown\r\n    //% blockId=game_start_countdown block=\"start countdown|(ms) %duration\" blockGap=8\r\n    //% parts=\"ledmatrix\"\r\n    export function startCountdown(ms: number): void {\r\n        if (checkStart()) {\r\n            basic.showAnimation(`1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0\r\n0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0\r\n1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0\r\n0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0\r\n1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0`, 400);\r\n            _countdownPause = Math.max(500, ms);\r\n            _startTime = -1;\r\n            _endTime = input.runningTime() + _countdownPause;\r\n            _paused = false;\r\n            control.inBackground(() => {\r\n                basic.pause(_countdownPause);\r\n                gameOver();\r\n            });\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Displays a game over animation and the score.\r\n     */\r\n    //% weight=8 help=game/game-over\r\n    //% blockId=game_game_over block=\"game over\"\r\n    //% parts=\"ledmatrix\"\r\n    export function gameOver(): void {\r\n        if (!_isGameOver) {\r\n            _isGameOver = true;\r\n            unplugEvents();\r\n            led.stopAnimation();\r\n            led.setBrightness(255);\r\n            while (true) {\r\n                for (let i = 0; i < 8; i++) {\r\n                    basic.clearScreen();\r\n                    basic.pause(100);\r\n                    basic.showLeds(`1 1 1 1 1\r\n1 1 1 1 1\r\n1 1 1 1 1\r\n1 1 1 1 1\r\n1 1 1 1 1`, 300);\r\n                }\r\n                basic.showAnimation(`1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 1 1 0 0 0 1 0 0 0 0 0 0 0 0 0\r\n1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 1 1 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\r\n1 1 0 1 1 1 0 0 0 1 1 0 0 0 1 1 0 0 0 1 1 0 0 0 1 1 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\r\n1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 1 0 0 1 1 1 0 0 0 1 1 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\r\n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 1 0 0 1 1 1 0 0 0 1 1 0 0 0 0 1 0 0 0 0 0`, 100);\r\n                for (let j = 0; j < 3; j++) {\r\n                    basic.showString(\" GAMEOVER \", 100);\r\n                    showScore();\r\n                }\r\n            }\r\n        } else {\r\n            // already in game over mode in another fiber\r\n            while (true) {\r\n                basic.pause(10000);\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Sets the current score value\r\n     * @param value new score value.\r\n     */\r\n    //% blockId=game_set_score block=\"set score %points\" blockGap=8\r\n    //% weight=10 help=game/set-score\r\n    export function setScore(value: number): void {\r\n        _score = Math.max(0, value);\r\n    }\r\n\r\n    /**\r\n     * Gets the current life\r\n     */\r\n    //% weight=10\r\n    export function life(): number {\r\n        return _life;\r\n    }\r\n\r\n    /**\r\n     * Sets the current life value\r\n     * @param value current life value\r\n     */\r\n    //% weight=10 help=game/set-life\r\n    //% blockId=game_set_life block=\"set life %value\" blockGap=8\r\n    export function setLife(value: number): void {\r\n        _life = Math.max(0, value);\r\n        if (_life <= 0) {\r\n            gameOver();\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Add life points to the current life amount\r\n     * @param lives amount of lives to add\r\n     */\r\n    //% weight=10 help=game/add-life\r\n    //% blockId=game_add_life block=\"add life %lives\" blockGap=8\r\n    export function addLife(lives: number): void {\r\n        setLife(_life + lives);\r\n    }\r\n\r\n    /**\r\n     * Gets the remaining time (since `start countdown`) or current time (since the device started or `start stopwatch`) in milliseconds.\r\n     */\r\n    //% weight=10\r\n    export function currentTime(): number {\r\n        if (_endTime > 0) {\r\n            return Math.max(0, _endTime - input.runningTime());\r\n        } else {\r\n            return input.runningTime() - _startTime;\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Remove some life\r\n     * @param life amount of life to remove\r\n     */\r\n    //% weight=10 help=game/remove-life\r\n    //% parts=\"ledmatrix\"\r\n    //% blockId=game_remove_life block=\"remove life %life\" blockGap=8\r\n    export function removeLife(life: number): void {\r\n        setLife(_life - life);\r\n        if (!_paused)\r\n            control.inBackground(() => {\r\n                led.stopAnimation();\r\n                basic.showAnimation(`1 0 0 0 1 0 0 0 0 0 1 0 0 0 1 0 0 0 0 0\r\n0 1 0 1 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0\r\n0 0 1 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0\r\n0 1 0 1 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0\r\n1 0 0 0 1 0 0 0 0 0 1 0 0 0 1 0 0 0 0 0`, 40);\r\n            });\r\n    }\r\n\r\n    /**\r\n     * Increments the level and display a message.\r\n     */\r\n    //% weight=10\r\n    //% parts=\"ledmatrix\"\r\n    export function levelUp(): void {\r\n        _level = _level + 1;\r\n        basic.showString(\"LEVEL:\", 150);\r\n        basic.showNumber(_level, 150);\r\n    }\r\n\r\n    /**\r\n     * Gets the current level\r\n     */\r\n    //% weight=10\r\n    export function level(): number {\r\n        return _level;\r\n    }\r\n\r\n    /**\r\n     * Starts a stopwatch timer. `current time` will return the elapsed time.\r\n     */\r\n    //% weight=10\r\n    export function startStopwatch(): void {\r\n        _startTime = input.runningTime();\r\n        _endTime = -1;\r\n    }\r\n\r\n    /**\r\n     * Gets a value indicating if the game is still running. Returns `false` if game over.\r\n     */\r\n    //% weight=10\r\n    export function isRunning(): boolean {\r\n        let running: boolean;\r\n        return !_isGameOver;\r\n    }\r\n\r\n    /**\r\n     * Displays the score on the screen.\r\n     */\r\n    //%  weight=60\r\n    //% parts=\"ledmatrix\"\r\n    export function showScore(): void {\r\n        basic.showString(\" SCORE \", 100);\r\n        basic.showNumber(_score, 150);\r\n        basic.showString(\" \", 150);\r\n    }\r\n\r\n    /**\r\n     * Indicates if the game is display the game over sequence.\r\n     */\r\n    export function isGameOver(): boolean {\r\n        return _isGameOver;\r\n    }\r\n\r\n    /**\r\n     * Indicates if the game rendering is paused to allow other animations\r\n     */\r\n    //%\r\n    export function isPaused(): boolean {\r\n        return _paused;\r\n    }\r\n\r\n    /**\r\n     * Pauses the game rendering engine to allow other animations\r\n     */\r\n    //% blockId=game_pause block=\"pause\"\r\n    //% advanced=true blockGap=8 help=game/pause\r\n    export function pause(): void {\r\n        plot()\r\n        _paused = true;\r\n    }\r\n\r\n\r\n    /**\r\n     * Resumes the game rendering engine\r\n     */\r\n    //% blockId=game_resume block=\"resume\"\r\n    //% advanced=true blockGap=8 help=game/resumeP\r\n    export function resume(): void {\r\n        _paused = false;\r\n        plot();\r\n    }\r\n\r\n    /**\r\n     * returns false if game can't start\r\n     */\r\n    function checkStart(): boolean {\r\n        if (_countdownPause > 0 || _startTime > 0) {\r\n            return false;\r\n        } else {\r\n            return true;\r\n        }\r\n    }\r\n\r\n    function unplugEvents(): void {\r\n        input.onButtonPressed(Button.A, () => { });\r\n        input.onButtonPressed(Button.B, () => { });\r\n        input.onButtonPressed(Button.AB, () => {\r\n            control.reset();\r\n        });\r\n    }\r\n\r\n    /**\r\n     * A game sprite rendered as a single LED\r\n     */\r\n    //%\r\n    export class LedSprite {\r\n        private _x: number;\r\n        private _y: number;\r\n        private _dir: number;\r\n        private _brightness: number;\r\n        private _blink: number;\r\n        private _enabled: boolean;\r\n\r\n        constructor(x: number, y: number) {\r\n            this._x = Math.clamp(0, 4, x);\r\n            this._y = Math.clamp(0, 4, y);\r\n            this._dir = 90;\r\n            this._brightness = 255;\r\n            this._enabled = true;\r\n            init();\r\n            _sprites.push(this);\r\n            plot();\r\n        }\r\n\r\n        /**\r\n         * Move a certain number of LEDs in the current direction\r\n         * @param this the sprite to move\r\n         * @param leds number of leds to move, eg: 1, -1\r\n         */\r\n        //% weight=50 help=game/move\r\n        //% blockId=game_move_sprite block=\"%sprite|move by %leds\" blockGap=8\r\n        //% parts=\"ledmatrix\"\r\n        public move(leds: number): void {\r\n            if (this._dir == 0) {\r\n                this._y = this._y - leds;\r\n            } else if (this._dir == 45) {\r\n                this._x = this._x + leds;\r\n                this._y = this._y - leds;\r\n            } else if (this._dir == 90) {\r\n                this._x = this._x + leds;\r\n            } else if (this._dir == 135) {\r\n                this._x = this._x + leds;\r\n                this._y = this._y + leds;\r\n            } else if (this._dir == 180) {\r\n                this._y = this._y + leds;\r\n            } else if (this._dir == -45) {\r\n                this._x = this._x - leds;\r\n                this._y = this._y - leds;\r\n            } else if (this._dir == -90) {\r\n                this._x = this._x - leds;\r\n            } else {\r\n                this._x = this._x - leds;\r\n                this._y = this._y + leds;\r\n            }\r\n            this._x = Math.clamp(0, 4, this._x);\r\n            this._y = Math.clamp(0, 4, this._y);\r\n            plot();\r\n        }\r\n\r\n        /**\r\n         * Go to this position on the screen\r\n         * @param this TODO\r\n         * @param x TODO\r\n         * @param y TODO\r\n         */\r\n        //% parts=\"ledmatrix\"\r\n        public goTo(x: number, y: number): void {\r\n            this._x = x;\r\n            this._y = y;\r\n            this._x = Math.clamp(0, 4, this._x);\r\n            this._y = Math.clamp(0, 4, this._y);\r\n            plot();\r\n        }\r\n\r\n        /**\r\n         * If touching the edge of the stage and facing towards it, then turn away.\r\n         * @param this TODO\r\n         */\r\n        //% weight=18 help=game/if-on-edge-bounce\r\n        //% blockId=game_sprite_bounce block=\"%sprite|if on edge, bounce\"\r\n        //% parts=\"ledmatrix\"\r\n        public ifOnEdgeBounce(): void {\r\n            if (this._dir == 0 && this._y == 0) {\r\n                this._dir = 180;\r\n            } else if (this._dir == 45 && (this._x == 4 || this._y == 0)) {\r\n                if (this._x == 0 && this._y == 0) {\r\n                    this._dir = -135;\r\n                } else if (this._y == 0) {\r\n                    this._dir = 135;\r\n                } else {\r\n                    this._dir = -45;\r\n                }\r\n            } else if (this._dir == 90 && this._x == 4) {\r\n                this._dir = -90;\r\n            } else if (this._dir == 135 && (this._x == 4 || this._y == 4)) {\r\n                if (this.x() == 4 && this.y() == 4) {\r\n                    this._dir = -45;\r\n                } else if (this._y == 4) {\r\n                    this._dir = 45;\r\n                } else {\r\n                    this._dir = -135;\r\n                }\r\n            } else if (this._dir == 180 && this._y == 4) {\r\n                this._dir = 0;\r\n            } else if (this._dir == -45 && (this._x == 0 || this._y == 0)) {\r\n                if (this.x() == 0 && this.y() == 0) {\r\n                    this._dir = 135;\r\n                } else if (this._y == 0) {\r\n                    this._dir = -135;\r\n                } else {\r\n                    this._dir = 45;\r\n                }\r\n            } else if (this._dir == -90 && this._x == 0) {\r\n                this._dir = 90;\r\n            } else if (this._dir == -135 && (this._x == 0 || this._y == 4)) {\r\n                if (this._x == 0 && this._y == 4) {\r\n                    this._dir = 45;\r\n                } else if (this._y == 4) {\r\n                    this._dir = -45;\r\n                } else {\r\n                    this._dir = 135;\r\n                }\r\n            }\r\n            plot();\r\n        }\r\n\r\n        /**\r\n         * Turn the sprite\r\n         * @param this TODO\r\n         * @param direction left or right\r\n         * @param degrees angle in degrees to turn, eg: 45, 90, 180, 135\r\n         */\r\n        //% weight=49 help=game/turn\r\n        //% blockId=game_turn_sprite block=\"%sprite|turn %direction|by (°) %degrees\"\r\n        public turn(direction: Direction, degrees: number) {\r\n            if (direction == Direction.Right)\r\n                this.setDirection(this._dir + degrees);\r\n            else\r\n                this.setDirection(this._dir - degrees);\r\n        }\r\n\r\n        /**\r\n         * Turn to the right (clockwise)\r\n         * @param this TODO\r\n         * @param degrees TODO\r\n         */\r\n        public turnRight(degrees: number): void {\r\n            this.turn(Direction.Right, degrees);\r\n        }\r\n\r\n        /**\r\n         * Turn to the left (counter-clockwise)\r\n         * @param this TODO\r\n         * @param degrees TODO\r\n         */\r\n        public turnLeft(degrees: number): void {\r\n            this.turn(Direction.Left, degrees);\r\n        }\r\n\r\n        /**\r\n         * Sets a property of the sprite\r\n         * @param property the name of the property to change\r\n         * @param the updated value\r\n         */\r\n        //% weight=29 help=game/set\r\n        //% blockId=game_sprite_set_property block=\"%sprite|set %property|to %value\" blockGap=8\r\n        public set(property: LedSpriteProperty, value: number) {\r\n            switch (property) {\r\n                case LedSpriteProperty.X: this.setX(value); break;\r\n                case LedSpriteProperty.Y: this.setY(value); break;\r\n                case LedSpriteProperty.Direction: this.setDirection(value); break;\r\n                case LedSpriteProperty.Brightness: this.setBrightness(value); break;\r\n                case LedSpriteProperty.Blink: this.setBlink(value); break;\r\n            }\r\n        }\r\n\r\n        /**\r\n         * Changes a property of the sprite\r\n         * @param property the name of the property to change\r\n         * @param value amount of change, eg: 1\r\n         */\r\n        //% weight=30 help=game/change\r\n        //% blockId=game_sprite_change_xy block=\"%sprite|change %property|by %value\" blockGap=8\r\n        public change(property: LedSpriteProperty, value: number) {\r\n            switch (property) {\r\n                case LedSpriteProperty.X: this.changeXBy(value); break;\r\n                case LedSpriteProperty.Y: this.changeYBy(value); break;\r\n                case LedSpriteProperty.Direction: this.changeDirectionBy(value); break;\r\n                case LedSpriteProperty.Brightness: this.changeBrightnessBy(value); break;\r\n                case LedSpriteProperty.Blink: this.changeBlinkBy(value); break;\r\n            }\r\n        }\r\n\r\n        /**\r\n         * Gets a property of the sprite\r\n         * @param property the name of the property to change\r\n         */\r\n        //% weight=28 help=game/get\r\n        //% blockId=game_sprite_property block=\"%sprite|%property\"\r\n        public get(property: LedSpriteProperty) {\r\n            switch (property) {\r\n                case LedSpriteProperty.X: return this.x();\r\n                case LedSpriteProperty.Y: return this.y();\r\n                case LedSpriteProperty.Direction: return this.direction()\r\n                case LedSpriteProperty.Brightness: return this.brightness();\r\n                case LedSpriteProperty.Blink: return this.blink();\r\n                default: return 0;\r\n            }\r\n        }\r\n\r\n        /**\r\n         * Set the direction of the current sprite, rounded to the nearest multiple of 45\r\n         * @param this TODO\r\n         * @param degrees TODO\r\n         */\r\n        //% parts=\"ledmatrix\"\r\n        public setDirection(degrees: number): void {\r\n            this._dir = (Math.floor(degrees / 45) % 8) * 45;\r\n            if (this._dir <= -180) {\r\n                this._dir = this._dir + 360;\r\n            } else if (this._dir > 180) {\r\n                this._dir = this._dir - 360;\r\n            }\r\n            plot();\r\n        }\r\n\r\n        /**\r\n         * Reports the ``x`` position of a sprite on the LED screen\r\n         * @param this TODO\r\n         */\r\n        public x(): number {\r\n            return this._x;\r\n        }\r\n\r\n        /**\r\n         * Reports the ``y`` position of a sprite on the LED screen\r\n         * @param this TODO\r\n         */\r\n        public y(): number {\r\n            return this._y;\r\n        }\r\n\r\n        /**\r\n         * Reports the current direction of a sprite\r\n         * @param this TODO\r\n         */\r\n        public direction(): number {\r\n            return this._dir;\r\n        }\r\n\r\n        /**\r\n         * Set the ``x`` position of a sprite\r\n         * @param this TODO\r\n         * @param x TODO\r\n         */\r\n        public setX(x: number): void {\r\n            this.goTo(x, this._y);\r\n        }\r\n\r\n        /**\r\n         * Set the ``y`` position of a sprite\r\n         * @param this TODO\r\n         * @param y TODO\r\n         */\r\n        public setY(y: number): void {\r\n            this.goTo(this._x, y);\r\n        }\r\n\r\n        /**\r\n         * Changes the ``y`` position by the given amount\r\n         * @param this TODO\r\n         * @param y TODO\r\n         */\r\n        public changeYBy(y: number): void {\r\n            this.goTo(this._x, this._y + y);\r\n        }\r\n\r\n        /**\r\n         * Changes the ``x`` position by the given amount\r\n         * @param this TODO\r\n         * @param x TODO\r\n         */\r\n        public changeXBy(x: number): void {\r\n            this.goTo(this._x + x, this._y);\r\n        }\r\n\r\n        /**\r\n         * Reports true if sprite has the same position as specified sprite\r\n         * @param this TODO\r\n         * @param other TODO\r\n         */\r\n        //% weight=20 help=game/is-touching\r\n        //% blockId=game_sprite_touching_sprite block=\"%sprite|touching %other|?\" blockGap=8\r\n        public isTouching(other: LedSprite): boolean {\r\n            return this._enabled && other._enabled && this._x == other._x && this._y == other._y;\r\n        }\r\n\r\n        /**\r\n         * Reports true if sprite is touching an edge\r\n         * @param this TODO\r\n         */\r\n        //% weight=19 help=game/is-touching-edge\r\n        //% blockId=game_sprite_touching_edge block=\"%sprite|touching edge?\" blockGap=8\r\n        public isTouchingEdge(): boolean {\r\n            return this._x == 0 || this._x == 4 || this._y == 0 || this._y == 4;\r\n        }\r\n\r\n        /**\r\n         * Turns on the sprite (on by default)\r\n         * @param this the sprite\r\n         */\r\n        public on(): void {\r\n            this.setBrightness(255);\r\n        }\r\n\r\n        /**\r\n         * Turns off the sprite (on by default)\r\n         * @param this the sprite\r\n         */\r\n        public off(): void {\r\n            this.setBrightness(0);\r\n        }\r\n\r\n        /**\r\n         * Set the ``brightness`` of a sprite\r\n         * @param this the sprite\r\n         * @param brightness the brightness from 0 (off) to 255 (on), eg: 255.\r\n         */\r\n        //% parts=\"ledmatrix\"\r\n        public setBrightness(brightness: number): void {\r\n            this._brightness = Math.clamp(0, 255, brightness);\r\n            plot();\r\n        }\r\n\r\n        /**\r\n         * Reports the ``brightness` of a sprite on the LED screen\r\n         * @param this the sprite\r\n         */\r\n        //% parts=\"ledmatrix\"\r\n        public brightness(): number {\r\n            let r: number;\r\n            return this._brightness;\r\n        }\r\n\r\n        /**\r\n         * Changes the ``y`` position by the given amount\r\n         * @param this the sprite\r\n         * @param value the value to change brightness\r\n         */\r\n        public changeBrightnessBy(value: number): void {\r\n            this.setBrightness(this._brightness + value);\r\n        }\r\n\r\n        /**\r\n         * Changes the ``direction`` position by the given amount by turning right\r\n         * @param this TODO\r\n         * @param angle TODO\r\n         */\r\n        public changeDirectionBy(angle: number): void {\r\n            this.turnRight(angle);\r\n        }\r\n\r\n        /**\r\n         * Deletes the sprite from the game engine. The sprite will no longer appear on the screen or interact with other sprites.\r\n         * @param this sprite to delete\r\n         */\r\n        //% weight=59 help=game/delete\r\n        //% blockId=\"game_delete_sprite\" block=\"delete %this(sprite)\"\r\n        public delete(): void {\r\n            this._enabled = false;\r\n            if (_sprites.removeElement(this))\r\n                plot();\r\n        }\r\n\r\n        /**\r\n         * Sets the blink duration interval in millisecond.\r\n         * @param sprite TODO\r\n         * @param ms TODO\r\n         */\r\n        public setBlink(ms: number): void {\r\n            this._blink = Math.clamp(0, 10000, ms);\r\n        }\r\n\r\n        /**\r\n         * Changes the ``blink`` duration by the given amount of millisecons\r\n         * @param this TODO\r\n         * @param ms TODO\r\n         */\r\n        public changeBlinkBy(ms: number): void {\r\n            this.setBlink(this._blink + ms);\r\n        }\r\n\r\n        /**\r\n         * Reports the ``blink`` duration of a sprite\r\n         * @param this TODO\r\n         */\r\n        public blink(): number {\r\n            return this._blink;\r\n        }\r\n\r\n        //% weight=-1\r\n        //% parts=\"ledmatrix\"\r\n        public _plot(now: number) {\r\n            let ps = this\r\n            if (ps._brightness > 0) {\r\n                let r = 0;\r\n                if (ps._blink > 0) {\r\n                    r = Math.floor(now / ps._blink) % 2;\r\n                }\r\n                if (r == 0) {\r\n                    _img.setPixelBrightness(ps._x, ps._y, _img.pixelBrightness(ps._x, ps._y) + ps._brightness);\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    function init(): void {\r\n        if (_img) return;\r\n        const img = images.createImage(\r\n`0 0 0 0 0\r\n0 0 0 0 0\r\n0 0 0 0 0\r\n0 0 0 0 0\r\n0 0 0 0 0`);\r\n        _sprites = (<LedSprite[]>[]);\r\n        basic.forever(() => {\r\n            basic.pause(30);\r\n            plot();\r\n            if (game.isGameOver()) {\r\n                basic.pause(600);\r\n            }\r\n        });\r\n        _img = img;\r\n    }\r\n\r\n    /**\r\n     * Plots the current sprites on the screen\r\n     */\r\n    //% parts=\"ledmatrix\"\r\n    function plot(): void {\r\n        if (game.isGameOver() || game.isPaused() || !_img || _backgroundAnimation) {\r\n            return;\r\n        }\r\n        // ensure greyscale mode\r\n        const dm = led.displayMode();\r\n        if (dm != DisplayMode.Greyscale)\r\n            led.setDisplayMode(DisplayMode.Greyscale);\r\n        // render sprites\r\n        const now = input.runningTime();\r\n        _img.clear();\r\n        for (let i = 0; i < _sprites.length; i++) {\r\n            _sprites[i]._plot(now);\r\n        }\r\n        _img.plotImage(0);\r\n    }\r\n\r\n    /**\r\n     * Gets an invalid sprite; used to initialize locals.\r\n     */\r\n    //% weight=0\r\n    export function invalidSprite(): LedSprite {\r\n        return null;\r\n    }\r\n\r\n}\r\n\r\n",
      "gestures.jres": "{\r\n  \"*\": {\r\n    \"namespace\": \"gestures\",\r\n    \"dataEncoding\": \"base64\"\r\n  },\r\n  \"shake\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAEe0lEQVR4nO2a0XHjNhCGP2bybnZgpgLzKjBTwTkVRKkgSgXhVRC5Assd+CoIXUHkCkJXELmCzQMWIQSREgjSB4/CfwYDAlgSi5/A7gJkJiL8n/FdagVSYyEgtQKpsRCQWoHUWAhIrUBqLASkViA1FgJSKzA3MigzKELlL4qADFZAAzyF3nNRBCiugJsM6hDh7NJ2gxlsgZ+1+INAe1J+JgIqTMfXWn7BdLzTZK/fHRnk2t8V8ChmWQzLz0BAgRncFfCqnd8OyD5re4tZq/Z6VmSwBv7Q4sEsyKA4mBUiMjWtxWDr1RciUolIrW2tDKNRmVrvKabqhcheC1stV4jsENl7cpMJ2OoghpTOReRJB+kSs48gJh9BwEYLey0XjkA1JwE7HURfW+UMsHYIsPeslIgx2CsxGzGzr5cYREp/wIi0Wq5lJgJyVeqpp23jKV5FDjgUjXhE+ANGZKtlOxsnxwGl5juvbgf86snWwAPGWL4HbjkOgBrNK81bzQsrMJUA+2Db0Rr4C7jpkbWe4QXjDV4n9t0H3/u0mheaN5pbd833Ezu0M6DVhw+5P4CvGIJar77CKFjodUn8LHnzyg3wO86AfUwloNJObRwwhEe6gKTEBCtWwaZHPseQtT7zXB99z3LRAl/ciimBUAH8HSD3qrI5Zo36s8QGTw3HUWOJWVKh+IKzB9Bd4QpAhvYGZ6z8qXQXaJ1XKl87dad8v20veu47h//8e2iaYgSrQLnWk78HNmfuuXZktiN0Gr3fmGIDyvMivfDdo4tHzFJ4AD5rXRv43BdgP1aZKTPglMV3YYk699YB7hw56yaLwH6idpuxBPhv/yvwG+Yt+KjpDOCPmLfcJwfG4lurb4moAnWK226PNRqa7A5QxMT1tr4cME476d8slWKMaS3dhqmRznDmct5gWpQxY4m1Ae4MaJzrnH7cYFzmI90hiZv6zvByffZgEOMhagbExgE7DsPdXzAGaEO4wtAFUb7/v8P479Ag6JnwpXKAGAJy4J+YzmbCC8d7jXtM1DgaMUYw1v1NxRvwSfv/yWtrYh8aQ0AV29lE2KUCxzYj+sB1kIAMGk3+G081A0q6mKB26t+YcrBq3QEijaZSDo+KVp7reK8TnVDsvHLfaVTUXuBWk33Dz5oXjkzB+53ohMI3gJO+N7gE9A3YL/ttHwHNlJv7bIB7WAHp1nwoZpsBjeaV9+Cb7JCUoTg+BaJ2gC5cAvwBN07bnXNdYQKPZ47P4L41pn9vlM4L5L7lR+TJP0fvSbmYk5i1mG8BjXw7T7EOsfSn0kEonJkAYw9sBHb6w8GDNp/91OyhoDvptdehZwih+MTEWXB2L5AZQoI+NQeiYB5i3hjefYbj3BRBpHYqRh86jkiFHH5N9gMeH/Uc/QbtBjMz9a8xx1SlTLS8I2FD4JLOJW8Z8R/QKYQSUAF/avFeIreeHxFBu0ExLvEes+5mYf6jYNSByNHvJReAi/tLbCwu8T/BUVgISK1AaiwEpFYgNRYCUiuQGgsBqRVIjYWA1Aqkxr8PLUpMvtN12gAAAABJRU5ErkJggg==\"\r\n  },\r\n  \"freefall\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAADqElEQVR4nO2b4XWbMBSFP3r6P2wQOkGcCUonqDtB0wnqbuBO0GSCJhvYG5AJiiconaD2BK8/JGpZAVtIYJGEew7HRAi9x0W670kiiYjwmvEmtgOxMREQ24HYmAiI7YCJBMoEVme1OaYokIAACCTnsjmqHtCEBIoEloO1P/YeMHSvGH0PGBoTAbEMJyAJlLHs//cjlga4jvdJAwbGREBsB2JjIiC2A7ExERDR9hr441DvDngcyonRzwWGxqsfAm9jO2DhOzA7p8G+hkAO3AOX+u8NUKFy/dI4Hx36ICBDPdwFStQq4H1L3Ud9vQIK4zwa+iBgAfwAHoAbozzTR278XtKMaMT0QcA98Bl4R7PTqa6TsicjQy1+ruhGTAlsQx0+gIiEHqWIVC3Xcn1NRGSpyzLjnhsR2Uo3bEWkEJFbEVloG6mv/6EPn2qnVg3Xbi3Hc88HdkUhHkSEEpBr40ujbCbqDTc5ODSKBh+PHqGJUK5/C/27AH4BVw1168iwQY1tlzS4K9qiTytCE6E6aalQJBxzYI0iqLLKcw4jxgwVUn2w63pDaBQwFfmY02aInKEiAux7jo0URdbiRLs21sC8Q/0gDcgcx2UdIVJp1oFKly9FZC5KQ0w96QJTiwYXwbmjUze6/tJ66GOoRBFs33cK+RF/exfB3LFeZdW/A25P3HNp1Lnv4FPn+UaICPrO2r4eufaA0oWfwEddVjm2u8EjSwzpAa4hpybq1FsHJWB1vTpMZo52vGabvgTYb38NfEO9BRtLlKqvgA+ot9xUD5Ti16pfE5E7+uQ33e4qGvpYGMJTGuVtql0aooZVf66FbiUqGhSyF85UTgtmDTN6OB++GmD2gMI4T2nGFfAb9fbLhqPps5hUt902U7Th1QN8E6GSw3T3C0qAbnF3GFTm1rRqNEclTq5J0CPuQ+UAPgSkwF8fYz1hw9O5xh0qa+wMHxE866KlgR1wre1/sq4Vvo36EJD7GgtEPVTgqWZ4L7g+px4wY58TLI3yHQHrhz5RIPc1FogLVCSxNaAIabRrD8jwn6v3BVsAg/YbfAgYG4qQm1/C3uBZe0BBex4fA14zQBO+YbDes++8BtczgvcbfaLAlsOsK0WFqDpM1efnEMtgAob8QCLjcG8ww2PZ+gSuCSQhxhciGf0Qs6N99umMGB9IVOz3EUxkHBIzo3mDpYbLCtNJjOoboRbY2gJqobSXf615DgQMipeQCAVhIiC2A7ExERDbgdh49QT8A9YP5MUcc2wYAAAAAElFTkSuQmCC\"\r\n  },\r\n  \"frontsideup\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAADSUlEQVR4nO2a63XaQBCFP+Xkv9WB1QG4AquD0EFwBy6BElwC7oBUEFxBoAKLDnAFkx+jjVZCbyQNOeieswehx+7cuzOzDykQEe4Z36wNsMYsgLUB1pgFsDbAGqYCBLAJYGNqg9UwGMAS+JP+fRI4WNhh6QHbiuNJYSJA6vYL79TCKhQmD4EAIuCz4vLkoWDhAduaa29TGeEwqQABvALPNbc8p/dMBrNRACAAARAIrGy4+4nQd8vGLXve4e49wHoqLC4PWOHuPWDOAdYGWGPOAZaN3wLmHGBtgDXmHGDZ+C3g7nPAWAKE6Lp+DTym577Q3R5XEmA/UvutMcZ+wBIl9gC8k5GMgDj9ffTuP5GJkZAJNAmGFsCRByVbR+QV3QjdoaIsUdEcjuQFcV4zKIYUoIl8mJ5fpeUBeCHbI1yhIXNOy5q8IA4fqBAJmdckfY0eSoAq8hFKLAZ+FJ75hfb+qnDtRD5E2sDPL4l3fG56cAgBiuRDMtKL0iemgxNm75UcrhXAT3hHtMfL3LZo1I7MfR2itD5Xmurpg4th9xoBfPJt8IUmvi35EQHyrusQkokRoV7VNTSK7YcXZ0WkT1mKyFna4yAiYVq2Le7dichGRFYiEnntvnZo08dZ1OYLLlOQT0SJIyJ77/y68L8OK6/9Q4e2RWrISw8Bysg3ibHxnm+LveR729URtmivaFsleekoQJH8oVB5Vc/svHtW6f+kheEOiWRh0BQ+xTpqyUsHAcp6PvauN8XmTvJu7EosGgpvor1eJL4R7fVI2oeLSEvyItJqFKjL9h90H7JOXE5vq6bMS3Tk+Nmh/i+ap+H/0CRA16HuGhzJz9z6zAU6kYd6AaYk3xZuZgflr9mf6LiSrNoPCNHZ2i2Rf0cXSA5n8va90GMZXbYlFqI9f82sawy4r0eWXHaOv6rshLIQiIHffSozQm/yUO4BBzS7/w+4ijw0jwIxuhCJ0uOxVml9cDV56LcaLK7Sxly+VmEQ8jDsllhEfpkbUf9FWF8MRh6m+UosIr/REdF/p2hQ8mD7mZwfQjGX2+U+TugcYD+0EabfCVYgJgsh0DF/tPcEtyjApLj7l6OzANYGWGMWwNoAa8wCWBtgjVkAawOs8ReItTjrXj7vnAAAAABJRU5ErkJggg==\"\r\n  },\r\n  \"backsideup\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAACbUlEQVR4nO2a75GbMBDFf2TyPXRwdHCkgqOEdJCkg5TgElyCS0gJTgVxKojdwV0Fmw9CA7H5Zwx6HOjNMCNAg/Y97a6EpMTM2DI+qA1QIwqgNkCNKIDaADWkAiSwS2AntUE1DCaQA7/L288GJ4UdSg84tJSDQiJA6fbPtUfPqlAIHgIJZMDfltfBQ0HhAYeOd/tQRngEFSCBH8BLR5WXsk4wyEYBgAQMwCBR2bD5idBHZePKnvfYvAeop8Lm84AKm/eAmAPUBqgRc4Cy8SUg5gC1AWrEHKBsfAnYfA6YS4AU91//DXgqn73hVnv8dQaOM7U/GHOsB+Q4Yp8G1r9QiXGmEigIphbgXvJd+MP/gvjypJhSgCnJX+MN+MJtyKTldR774alGgbnJFzSTP+JWmA34OerrZvbolZvZq82HfUObqZmdanVeSzua7EvNbGdmRdP7R0Ngzp6v40KVCzJcOPg2vYc05QfvJX4T5nbY7eldZc8PQVfPY2aHq7o3dcbmgFA934c97SPDAfhalr2X3GBMCCyFvEd9gnXGhUhB5fZdIXK3AEsj34dO8nDfMLg68jBcgFWSh2ECrJY89AuwavLQLcDqyUO7ACluHH0v5MGtP9z9t9gkwPX08T3gOyMPWjUJkLMR8tAswAn4NfaDgfEQeeifCRa4qWVWlnOWkxceJg/j/gVSnBA5ThhfDinMJORh2iWxjMpTfLnrRNhYTEYewpwSy6i8xHvN2CQ7KXnQHpOrh1BRlp9a6l5wewzHqY2QnhNsQUEVQuAWO2fbJ1iiAEGx+c3RKIDaADWiAGoD1IgCqA1QIwqgNkCNf+aBYPgHiIEjAAAAAElFTkSuQmCC\"\r\n  },\r\n  \"impact3g\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAEWklEQVR4nO2a/5XiNhDHP87L/0sqWKeCdQdxB6GDkArCVXCkA0rwdcBWcN4Kju3A2wFUMPljpEMI/5AtEXMc3/f8hKVhNJoZjWYEmYjwM+OXuQWYGw8FzC3A3HgoYG4B5sZDAXMLMDceCphbgGsig0UGVR/Nr/+TLHOhAhZ9BHfrARksgT+H6O5SARnkDLi+xV0qAF38Uwjh3SkggzXwRyj9XSkggwLYjPnOXSmAEa5vcdMKyGCZwSqQdgO8tAzlvV8UkZt9ECnMS41I0UNX9jHqmyO79SuxDFwB/wW2AgdnfAHsgecuHgJZ5wRzWznAC2qvs0GkdMa3Q0z6hm86BhjsTXs07TPwNYOdyfb+8ehfR3Gf28IBHrA0L4Wxft8XGkQWd+kBom0BvHfQHYGlGx9CkEoBOVCjAetgPm/RrKxkoCLrg0CDcX+zuJJ2N1/L5XYJmCCNq+7V06QRkVpEDnKJgxnbishanEAWsA12LX2V07H1xs4CZx/vFPcBBZqAvKJByWJhxuxTmtbP0z9QK9emtZ9dVP6kAqtMaUtRT5uGBNZfGQt3WXRprL8077mIVKJWrVs8xcJ608bMMcZj/KOzL4mKVsDWCLzw+hfOmJiFL8zCxYy1bZUhuIpZGr7+ovzc4IBuu6soYG8et68wglocRC3o9qXEylvUpkPYHZ6hUihARF3avm9aBJxi6TFofLnQ+qBqEfiAs51ia4ES+Ap8AnbmaavIQI+mCj2qcs6D5KgStgOt+X6mMu68OY5o8NzHngKFaXN0YV0LeUXL2q4kxT8xlj282vDhd5giaQ18Nl1HjJFEW6WL9IAdwzev76gVQGt2q7SGy+PPIqffm3x8wbk3MFavHBl3cnm0Ki63yKgnJKjZ468OoLXR3Z4iobHje4RHZG1Ogc6jz31iFr8IFM6nLQMWZpWwHaBzeU5aR0wtUI6gdWuBivb9/YZeeLi8dy10bahHyHKGGAUUwyTf6Rp0gdB9c2ODn4uQIuptmKQbqTzgiFqvrVTdmHaJBquucvaJU9CrTLsKkGM/TNKNmFPgwMmVfzPvBfCthfYsShsUaLS3R5+1dmWeLl4+/ibwZ7A2TFWAK9yRk/B9Qn+ge7pBrVYP8K8JywV+5/wIHYWpiZC7/584ZYGbnu88c3l/55bCNkkqgL8C5TgSsXiY7gFbLhdzbbyhnvbi9ZUxTKcGwahJJ+ALpwsVN+rXsYynKiA0RU0FNx9w64k6lvGUGFDGTjoBG04Xom7tEXUEwjQFhCZAKfGClt0uPhh5Bd6GKVugjJ00EeoUTKYoYPIdf2JEuz9MU0CdYuIESKKAmDxgRZqrrKno/sl7DJOIWgA0l8/RuGA/B/9BKQLRCZBF7J1gQ/svOTnXVUwS94fr/VW2oVsx7uVnzrSkKpkCbuUvMn5pnNOtmHcS5iK3ooAuuIoBTXwqEiRAFreugKvjR/iHyFXxUMDcAsyNhwLmFmBuPBQwtwBz4z9jSdC1TZEC4AAAAABJRU5ErkJggg==\"\r\n  },\r\n  \"impact6g\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAEjElEQVR4nO2a0ZGkNhCGP1x+XxzBkcGNI7AcgdcR3GRgQsAReJwBm8FkYDYDLgKzEdxMBO0HtQotIwZGaI6hvH8VBUhNq/UjtboRmYjwf8YPaxuwNj4IWNuAtfFBwNoGrI3NEZBBmVLf5ggAygx2qZRtigDt+CfApNK5KQKAvZ5NKoXZliLBDE7AE3AWyFPo3MwIyOAZ23mAp1R+YDMEYAnwYVIo3TIBw/sobIKAzDq/p0HxLyl0b4IARt52lmAaPDwBmfX2v41Um6X6VyMggyKbt5Rdm+tmqR1rjoAc+JZBPTGU91fqZvuBDEwwjxCR1Q5EGq+gQ2SPSO7VF4OHuoAiE9BrECkRqRFpvcpDQHZVAkyg4qSG77QTft1e6/2yWssPg86G9OYBG9YjQA3otBPHCeFO5afkxo4qVPwIq0AF5GKd3a/A24hcrecmoo03se1cYu0RoG+18a5zRKqx4YudGrc28nyl7SSdyEWklh6N3ldindTF3BsYUTGQwTpA5yQPg7qhHzjp1Cix/sCva661nSodroEvwBlogQL74cKHq2uBzrs+uXhAbLr7DpoFtmKfcWUH7DON1rVenbPF4We//kJ/IgIEO3d39J3I9d4dLqAZxvSjxNxqRGaJ/9crepHrcUSSKWB02Jcj9TsRaaX3wrleu2kyhpPKHERkL4H1PjCVDiG/MfHMYgJKNThkYOV1yNUf9L4Wu7Tdik6JqZSYndcZP1D6bgS4t+iXFWqkDyN2JNwDpXZmx3sH2UzZn4IA90bc/V7s8B0iVJYS/jLpk3AR/vrHj7c6mgFyrLc/6nXNeOoK8IL13IXeG8IrRgx2QCPQqjNsgM/AH5ldKergU9fYmXEYZb+eeMOt2GkxpasU+8ZiRstwaOf0ucEJz1cM5BYRUM0w7CS9M6rETpdGRI56/yyXxg0Dqym0I53L6XOHjjskQ80M4yqVPUwJSr9cOkPnOs1QmltgI0x/ZTgG5BYRMGeomoHs84yO1dI71DnYex3KsSHxUQnYY9Pu4JK4pPPFTOMcAQ7diFw36PAtbQTn95xjSTpsZsoVen7R85jH/0Qftp71POeboQulo7CEAH9r6gz8DXwNyJXe+U/g9YpO942v1vOczY/ozgOLpoDvAN0wz0eGeC2Xc7DQ5yqxzqmRPsR1uub4GCcfdSzJBv0Hf6LP3sYUnrEBU8t0xleo7OcZdvyuslGIJcAA/3j3r9hhWzLPaIdhKnxS3f5O8BR88m9GLAEl8Fdso5H4iu2ovxfwRu9koxDrBJP9ozMTr9qmoV9NYKkDJJ4As7ThG9F4191IeRRiskGXAX5PlPTfGv3trcUjIMYHGN47wDWRLVUQMwXM0kYTIRR03YxH2BmKRZNCSQwBXYqGE2Dx/Ic4AmpsTH+ekLs3khCwdGPE3/wovOu5UVwsziT6UfJef4o6YgyWmIJEf3UpXknkjJd+FR7DCeukmkF5oYdhGTFDvdF4lH+FC+YTc9b66ATIx6MQMIaCnhiHA4k6D49PwN2x5UAoCT4IWNuAtfFBwNoGrI0PAtY2YG38B6VuuBeejFXUAAAAAElFTkSuQmCC\"\r\n  },\r\n  \"impact8g\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAFVUlEQVR4nO2a7XHjNhCGH2Tuv5kKzFQgXgXHVHDq4HQVxCUoHSgVRK4gcgWhK4hUwUkVhK5g8wOABYMACRHUUTfxO4ORjY8F8AJY7C6hRIT/CxSUAkc376eZxhKFgkJBcwW5W2Dl598cAUANfFKwnEKYIXQPfAF2fvmtEgCwVVDkCFJQobf8AjiJJuINbpmAO/S2HQWlt/s/Rg7EjpWI3ExCpAgU1CPkbAMFy0jd+SfuDGYZKDgiUiS2LxHZhwpjbW7tCNSBvHtgPdRQ6bZ79Hn38RRtOPeqeysYXD2Tqp52DwPCVz1t55+4s337Ku0DbQrC591P5Y9wBOqB8oVyjoKCEq3Zvwy0O/jWn4sfiQCABwXlwHn30TF+XCiR2/AFlF6l+4Sqp8R6Fh9DBtBrv7dAgNnO37zsF85GzFicRMuO4kNmB70wE+sdgEEVyFsBGy5bbR+92x+uTAB68n+PaHcS2Blf4M+M/pvBGt/heku5pvz04LQ/juy8TRzf1QkoEGlNxhKRNSLNQMPCaV/3TbJH1i5lfFe/BgVazvd3IbAWqAUU8BH4CvwBHEydR9PGtm+A54DoA2HdYTF4/nUHV94BzkruEWkS6pWBvMqruLW7JGUXzXoEAlu5M8HE9laXrBKOR8dsnp0AZxKbkW1LPIcIrU9CDVrTVzAGMCcBxSWrkyBvSJkK+hbZENl5390SNKGqVlKVVL+sSwd/QBtXO6top7oFSrS2FrTgxnT0gHZcXoObkhHnc6H6b4AYFmjD6l8bdZ5qB1jP7IR2aiq6dvyLqbc3dfZMEP83nqFNnxKbPcmEBFTo6OsTb2P5hSmzqTZ5PjGWtMb82r9HwaxsbVLIXT6g7RBta0ygjFaiUUfKl6LNUquRSxHZirbUGonjaMrXpo+Y/JiC3AQK9nj2wRQEbMyAfcOjcMrETLwwExdT1vYQkELMUsKGU8g+aEM3wRQE7KV7tVVmoBat6BV086bEyplQQdeBaokEVacgQERvafv/OjDAMSt9CY5ynlBo60cjyrnxgNr87tFX4S6ieO7Qt8DWqesqydzIjxs0WXllh76QWC4B9i4u0Z3EJvJkBtZGyv0bY9kjK4ST83eJvkXsQiyU9kDXwZaxrZGYrELrw1608rNKsTFpK/q41NJVTqVplwr3CL6a3CnHIJeAFKVmr78moW4jmhREE5aqO14jSBInIfiNMWfyReLg/Lp1wsQsCZuBeq7M4Dh5G5LrRIlyfIH6grruQ4ct4fP9DPzuyU51mJqesh1aAQN8Vp6SzCEg1RmxrzRsWCsW5rbKz0XKC5FOuEzBUukXJi3wF2fCn/0+ptoBL+jVOwTqrc3vEniM1AE9SKu5t+Z3lTCO1ytOQa20F1qZ/CXwq4AyqRaPgBxnqOXM7M/mf+sY+XikO5kKfWXZq8+u9takmCwfX8l5SjOSAHdwL5wH3zfoE/o8Hhl2hStTnmIL/ELP198hjDWE3PN/h57Yjv6XHPfAb16e6wpbI6li+JO3xQsZk4fxO2BDdzLXxjN6py28vDpH6FglmNXpCDyaPiveav0mV/BYAlIeJkwJ1x5w/YkmV/AYHVDndjoCa/TEa+Czkx/18lIxhoAx0dhcLOh+Zj8R9y6TMeYI1LmdToRmCiFjCMh6wDwhsrc/jCOgmaLjCTAJATl2wIr8UFYO1CRCMnwBOD+Cqp2/U7/O5CDbALLIjQkeCX/JKbkuMZNsf7jeK7EjcWLc4GfJOKNqMgJu4qEkXde4JE7M0Nugi3ArBMTgEgPa8NkygQFkcesEXB239Fp8FrwTMPcA5sY7AXMPYG68EzD3AObGf4L8LJx8Ylq2AAAAAElFTkSuQmCC\"\r\n  },\r\n  \"tiltleft\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAD5ElEQVR4nO1b7XWbMBS99PR/2CBM0HiDsEG9QckG3qDqBu4EpRt4g+AN6AZ4AzLB7Q89HTA1BiEJuYnvORwsIYn3rt6HJJKEJD4yPsUWIDbuBMQWIDbuBIQcPAFUAlQJsJFyKeVtyPdagaS3C2QOsgK5lXIrDwspc1BuQB5AbnzKYXN99sxnCeARQAPgIOVUygDwQ+7GKh7lKgHUCbAhUHuW6To8zPoO5EF+FyBrYwET/VJpb/pu5aFa0wJcOxe9ikmlJ8aqpFCDTP8XAlIRuHIVWsYqIfEAEidukgCQKuRMCREEuQ9NgHUalOD1HcATAOU7Jg2wCTz+YgvYBbaAdC0XSMj5u8EEyAGAQBVoPlaHrQsoAK8JsA8gSxTMJiDRCxrjk1UQaSLAygUA7QbvyQVmL4UToIBe0jaBZIkCmxhQAHiV+5pIoYNvkJQ46gLi84de1bPcT+isYM/zNj6RA9gB+NqrO0JvpVtvb5mx4htrUAfKzTnJiuOo6XH7PKdBPfLQ9x6+INlcUbyPlo6bLxsC8gsPlCelU0vFh3CWY26jfa+igfsSOBXh24WK93GggzxzG6WiOKF9dKniGfUOz4fifSyOCzYNcyzfnmYkywklKjcOlsUFFzOec+XUJjomsKImp9+n4HULqaTf2Li7WyAgZzejQ0EbUfILtVU0Ul/3yNjPVG6MqJIz44Lv7wIF9CJJoVss5XI/AXiBXsjkAP7Ib7OQesL09wIzZgZ9kvww0u4b9H4lm5TYw2ynMjNmJgvqgGRmpxKL6FuFQdvr14oFpFdm1hYtJ4K2q+JKXlKK4qQ235pdULqk+BAVNWmZ9PWNgp4J2LFTPOP5jFN+b9j58phSB3YzZMYMhYsZYqny7Ame8l8FjcmTWqlhIDTEGStqGB6KnghoeW5SQ+XNJqkY1LfUFpHJZdxnLVx0gyXfBh8kAkPuT4Pnbe9ZKlfbKyuJ0mviJzqZz3GJlYmLcldX2B7625bTK0Hf6MeoUX2szwQBEDqf/5poZw5Onifa+cYb9Kn1HjMOTpYScIs4QStdwuLEyPffB8TACTqulEs62xKQXqg7yn1tUz9Cz7jTmaQtAcOT2Rd0zK/lGkfoGa98DObiAr/RKa+cJZn3PgXP3yVcCDDn9QXC5fU3aBNXCPRBxjYL5NAfR0LDKpW54NaywKJU5oJbIcAplbkgNgFeUpkLbAnIPb3XaypzwdoWECSVuWANAoKnMheEJGC1VOaCEASsnspc4JOAaKnMBbYENBfqoqcyF9gSUELvAbbQf9d/wA2kMhcsORF6V7j/01RsAWLjTkBsAWLjTkBsAWLjwxPwF0Pxx3Dj8Xp5AAAAAElFTkSuQmCC\"\r\n  },\r\n  \"tiltright\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAEIElEQVR4nO2a77WbRhDFf+Tk+6MD4wqsDowriFKBeRVE7oB0oFRg3IHSAelAr4KQDpQKbj7M7gHLgFj+CEnRPYejB+wuM5fZubPLiyTxf8ZPaxuwNp4ErG3A2ngSsLYBHhEUEZQRZO58765lSz53NQIiyCOoIti5Swnw0f0CbIDP/twRso/q+/NA0lUPpMT9lu5i6c4zpBwpbZwfkFKkuDFIPrM913Mc6YhUOYdSpAJpM6BvjLRv9PVjXex7SwRsGxeyiWP56DnhIupmCUDaUIf1bqrzbpzUOT/HWIs6H2NhK6TtQs/I3DOSMf2XVoENELu/Tws9Yw+8Aw6jel9hCsRLvf1GBJSMTIiR9DirwQgyQRHS5+eFbLk6IptiLxEQQsLNlMIz4Oh+NyGdHmYK+BJZUIX0e5gIcI4nEWQh64WHIcChAL4C26EdliBgiyUkuaNkwSVtYxldUtccO38tgrx3gJl1OZd00veavJWt+CrNULq21AFpT4OLa4W5DImdk0d1PzBtEJG7PnORsO+4ubtGIbTBytB3wBv9JW+JJagUC9e9OyaVyZGNdXQ2eLxpiCROZD9zIR8CP0USSYU7L3oiZ+xUGFQaT3G+CHS8SUCpesrojIjRmxzYDpII2DUaMwUSLOQ/BPb7F5MpH+4JphgvLW3/wrJ3GfIANxUOsik2DIEsp/ox5DN3L5F06HnrPultZMlp6/pkssTYhlILKMdZ1AxunHcYmZ61a8sJhWqS2u6lztGy4xnVUkQMaRSr+802nch72lUtBOSqc4Cc86lquewaJ9e8EtrbYHNm5BT4KMgutDu6Nht1E3HSTET03cwULnGXcHBGp7qsIpWMhEuEFZogoV030jC/gtB8e4naichlBPia4RIJcuMER0TXjXyUa2E4SdrLSEhUryPOkTubuqZDE0cFEtC1GgzS35F4AX4D/sY0v8Bqg9+Bfxrt/E7PEJs+EFID0L0cLoFXrHi5Bj5jRBTU64XIHX67O2irayguVYIx9vV2R3vFthTeMMdLZ0MG/DKw7yshO8MD50qs/ortluBzxqQccI4T9Rx95fs5etcYsyVWYER8whYtd40pe4IllnE/AX/OYUwAvgC/MsMLmGNTtMSWte+BbzOMNwRHLEmmWMIcjTl3hSssW78H/mBZCT1Q7/3vetpdxBLb4hVmVIIVNUsQ8YLVDSVjP4s7LPlh5IRVeAnLKcdHJtYn1/gydNMSeu1PYwU3JqFrfRssqSX0WsrRirU/jpbUyrEKEWsT4FFREzFVOZKQxrdCgEdFrRxjiUhCGt8aAR5eQmMWVo5bJaCJglpCJ5W9bbgHAjwKbFdoVgm9JwI8SvolNKg0foT/EkswBUmwVeI+pPMjEDAJ9zgFZsWTgLUNWBtPAtY2YG08CVjbgLXxH2loFxEWi9ZNAAAAAElFTkSuQmCC\"\r\n  },\r\n  \"tiltbackwards\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAACyUlEQVR4nO2Z7W3bMBCGXxX9H21gbVBngmgEb1BlgqIb2BtkgzobpBNUmaDyBHE2kCe4/iAJEQo/JRKX2nwAQbJM8o6vT8czVRERbpkv3A5wUwTgdoCbIgC3A9wUAbgd4KYIwO0AN0UAbge4KQJwO8BNEYDbAW6+BrZr5PFZGACMKQYKEaAD8CuFsYRcALQQQqyi8uwINQDe1hrJxDsSRKUvB6w2kJFNikFuPglerQAVQBXg3fG9WgFCCV0G/zsIqELa3XwEXK0AJQcEskSAVwCn1I54OMXaJKAKyQOxAjxClKBbAL8j+y7lWdrbyuukxApw1K5X1+ELbB4tbT4QmgNil8FOOlED2HnanhD2j62Bu6ztAPTadVqIyHW09JGeiM6G+4oXImo845rsDI4xB8v3MTaMh+/fYAvgT4SePwE8yesa4rn10WvtewDfIuwFFTtOFkSAjV7r9xTRbySiTvar5edQrL6rC1cbIkpaB6hffgfgR0S/O4gNlwYiZ7wk9MlLSgHO8txp93zL1qt2rZJqn8KZXHWAi3F2fgewl2cT6vs59RLjFdCopc9xNPN+KQVo5fkozxuI7TTbErfBlGAvmELflziNVSGJCDw4+h1oilKtY54kuI/oNxLRjsKS4CDb9PKzKfkNhokMpraUYRk8YArr1MvgSfozynYPMDzjlbD5d3b7nmyVq00Zio8ARa5CqNbaWyNARsFeu7F32U4dATpLSuELxLI4H6edjdXDEgGKSj7v5NnZzrklFlPRAdPLDj18TZMPpQtp9Fn2BE1vetZMHhRYT3DuCKnlbMnkG3kOSbJOfAIkeQFpQE3wjLjJbyHqhQ2EcNnfDQKisPm+1lAGHhGxQWIjRABAJJQdFpapiTlDTLxPMVioAFdL2RbndoCbIgC3A9wUAbgd4KYIwO0AN0UAbge4KQJwO8BNEYDbAW5uXoB/c4v7pl/dd2gAAAAASUVORK5CYII=\"\r\n  },\r\n  \"tiltforward\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAC2klEQVR4nO2Y3ZHaMBRGjzN5hw5CB0sqiNMBqSCUQDogHZAKQjqgg7AVLFtB2ApiKrh5kDxoja0fY+9liM6MByMk67ufpCuZQkT4n3mnLUCbbIC2AG2yAdoCtMkGaAvQJhugLUCbbIC2AG2yAdoCtMkGaAvQJmTAFNgDckPXEZhfFbVDEfhDZA98svePnnpz4NBRNgcmPfV1cQJmQHX1k0TEd9XMPXWWto5bthWRvfPbGJQB7VFXjAF7z+9ugG7wIiLVsPFeMIgB1yTBJfCzUbYFvtr7oaf9KPQ1YIk/eHUKKAsoQ/Xe93j2ksvg4Rz8I7DjMim2McOIHMO4rdNHN4E1IvI6B/iSWiUii55rcS7pOaMzByCydgrWvr5D26BgRrSke+RrvmBGHlt3gTlH+NhhRqrCbJd74nPHZ1v/FYV5zlOj+KN0zcjIGRDaztxZsg3UbXIQkaltu0lo1zoDEDm0BHJoqyuR22DM1FzZ+gunbB9o4xpVty8j+qq5MKAx9ZtX61KIMSBFzLpRduyofxSRmfN7PYOmPfqsA5lHJJuLA12fXaCNev266+y3p/4H4I/zvW7X+4xv13iR2m6ot8GF/dwBz4ltT8DG3pcD6aEAKUwS99eT8C4QS52Vp8CKuGCOwNp+zjCjeNUuUFMHL6FZEVg2KVTNdZlwzcRk6hT69tU7B5ww+zuYvbs5UhPMuv+FWQqxr6oL+9yukf+GmRkb4CFWbDQBh1zcU95C3oaN02dzh/DOACcAb4wpSbDquB+T0ftMMWCDSXBTzll7bFact8ZtSkOBIpgASXsbfAD+pogYgAmX5/pBudt/hWPPAXdrQCxDHYVvjpj1D3kG3K8BOQdEknPA2EJunZABP95ERTrPeF6FUwgZsAK+Ay9DdDYAL5i3zXKoB4b+ELl7cg7QFqBNNkBbgDbZAG0B2mQDtAVokw3QFqBNNkBbgDbZAG0B2mQDtAVo8w/leGQvtJ6OAwAAAABJRU5ErkJggg==\"\r\n  }\r\n}",
      "helpers.ts": "namespace Math {\r\n    /**\r\n     * Generates a `true` or `false` value randomly, just like flipping a coin.\r\n     */\r\n    //% blockId=logic_random block=\"pick random true or false\"\r\n    //% help=math/random-boolean weight=0\r\n    export function randomBoolean(): boolean {\r\n        return Math.randomRange(0, 1) === 1;\r\n    }\r\n}",
      "icons.jres": "{\r\n  \"*\": {\r\n    \"namespace\": \"icons\",\r\n    \"dataEncoding\": \"base64\"\r\n  },\r\n  \"heart\": {\r\n    \"icon\": \"data:image/png;base64,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\"\r\n  },\r\n  \"smallheart\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE5ElEQVR4nO3dMY5URxQF0NdGTtAQY3sB3gALsNgTJBapneA9WXbOBryAARIiRABBO5i2Ru2hLv9P9W9V9ZyT8nveVfXcgZGaelUAAADAEHbf+POrqnpaVY+r6vsTz/5SVZ+q6n1Vfbzn15BPvvtalC8V5Ieq+unEoVquq+rdytfId0u+Ps183zVecFXnC1eHWVcrnpfvmHx9mvlaBXm6XZamNTPl65sp38KZrYI83jBIy5qZ8vXNlG/hzFZBTv0L0RJrZsrXN1O+hTNbBQFKQSBSEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCFoF+XLWFOtnytc3U76FM1sF+bRhkJY1M+XrmynfwpmtgrzfMEjLmpny9c2Ub+HMR42HP1fVvqqebBbn2HVVfVjxvHzH5OvTzOfy6jb5+jyEfAAAAAAAAADwwEz9UZP9fv9LVb2sqmd1szb4lN5V1Zuqer3b7f6659dwfpOf37R70vf7/a9V9ds2cY5HVdWr3W73+8rXOb/DqJr4/FoFuaqqnzeL83X/1MKfhIeffH/Wt/8GPJV9VT1f8ZPQ+f1vZE16frPuSX9Z53tz6zDrxYrnnd+xac9v1j3pzzZLcZqZzq9v5jDnN+ue9FP/QrnEjyuedX53TXl+bjWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAhm3ZO+6g6oE3m74lnnd9eU5zfrnvQ3m6U4zUzn1zdzmPObdU/667q5jOxc9oeZSzm/Y9OeX6sgH+vmOsZzua4V98sebuh7Ved5k/+7OvPvFa9xfremPr9LuLz6Rd1cSrbm3qUl3tbNPwv+mPny5cT52ZMOAAAAAAAAAOtcwkdNht3zLZ896adycXu+5bsdVfakn8TF7PmW7+7Isie92yXt+ZbvmD3pJ3BJe77l65s5zPefPenLrfn/EvLdZU86XBoFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgsCd9uTV7vuW7y570Tpe051u+vpnDfP/Zk77M2j3f8h2zJ73TRe35lu+IPen3dPF7vuWzJx0AAAAAAAAALsvUHzWpwfPZQz7/+zvtnvQaPJ895EemfX+n3JNeg+ezh/yrpnx/Z92TPno+e8j7Zg6Tb9Y96aPns4e8b+Yw+Wbdkz56PnvI+2YOk8+tJhAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCwax70kfPZw9538xh8s26J330fPaQ980cJt+se9JHz2cPed/MYfJNuSe9Bs9nD/kd076/Lq9uu/g97jX4+dX4+QAAAAAAAADggfFRkzb5+lxEPnvSl5Gvz7T5Wp/mvarzhavDrKsVz8t3TL4+zXz2pG8zU76+mcPksyd9m5ny9c0cJp896dvMlK9v5jD53GoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBDYk77NTPn6Zg6Tz570bWbK1zdzmHz2pG8zU76+mcPke9R4+HPd7N9+slmcY9dV9WHF8/Idk69PM5/Lq9vk6/MQ8gEAAADn8i9uSXT/dv6GSgAAAABJRU5ErkJggg==\"\r\n  },\r\n  \"yes\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHUlEQVR4nO3dQY5UZRQF4FsaJ6Qdoy7ADbAA455gYpjqBPdkdM4GXADCxBFhIINy0G2k0u+efsVfr/ir+L4h3e09eckRiOU7VQAAAMAUdg98/aaqHlfVo6r66sS331fVu6p6U1VvP/KfIZ98H2tVvlSQb6rquxOH6ryqqtdH/ox8/5NvTJvvi+YHbup84eru1s0R3y/fIfnGtPm6gjzeLkvrmJvyjd2Ub+XNriCPNgzSOeamfGM35Vt5syvIqf9CtMYxN+UbuynfyptdQYBSEIgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEgq4g78+a4vib8o3dlG/lza4g7zYM0jnmpnxjN+VbebMryJsNg3SOuSnf2E35Vt78svnmf6pqX1Vfbxbn0Kuq+vuI75fvkHxj2nxeXt2Tb8znkA8AAAAAAAAAPjM+atKTb8xwvv1+/0NVPauqJ3U7C31Kr6vqZVW92O12v3ffZCd9HfnGHJ1vv9//VFU/bxPn8FRVPd/tdr8sfbEryE1Vfb9ZpGV/1vp/08h339Xku/ud47d6+E84p7Kvqh+Xfiexk77NTfnGbj6r85Wj7m49XfqCnfRtbso3dvPJZimOvGknfZub8o3dPPVfyNf4dukXvdUEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSCwk77NTfnGbh77jq9T+GvpF+2kb3NTvrGbLzdLceRNO+nb3JRv7OaLun2Z27ns727e0xXkbd2+LvJcXtVx72+V79BV5bt7w+HzOk9J/nv16B+LWR744alfblzyXXW+u1eQPq3bl7otvrdqwF91+8eqX9PLqwEAAAAAAACAD/moSe/q882wQ/6AT/787KSvc3X5ZtkhD6Z4fnbS17uafDPtkDemeX520re5OXu+aXbIG9M8Pzvp29ycPd80O+SNaZ6fnfRtbs6eb5od8sY0z89bTSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAjvp29ycPd80O+SNaZ6fnfRtbs6eb5od8sY0z89O+jY3Z883zQ55Y5rnZyd9navKN9MOeWOa5+fl1b2rz3cBO+RTPz8AAAAAAAAA+PzEj5rY0bZDPuAqPqrTFsSO9gE75GMudmd+sSB2tBfZIR9zkTvz3cfd7WiP3fT8xm5Ok68riB3tsZue39jNafJ1BbGjPXbT8xu7OU0+bzWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAi6gtjRHrvp+Y3dnCZfVxA72mM3Pb+xm9Pk6wpiR3vspuc3dnOafIsFsaN9jx3yMRe7M7/m5dV2tO2Qf4yreHk1AAAAAAAAAPChh4Ymp/5P/XbIr/6jHJ88XyrIFDvVHTvkBy52hzyYIl9XkGl2qpfYIV90kTvkjWnydf8/yDQ71Q075GM35Vt5syvINDvVDTvkYzflW3mzK8g0O9UNO+RjN+VbedNbTSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEgq4g0+xUN+yQj92Ub+XNriDT7FQ37JCP3ZRv5c2uINPsVDfskI/dlG/lza4g0+xUL7FDfs/F7pA3psl3DS+vtkN+wS+HfsDs+QAAAIBz+RdDw2v5jDe3GQAAAABJRU5ErkJggg==\"\r\n  },\r\n  \"no\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFCElEQVR4nO3dMY5URxQF0NeWnCBysBfgDbAAy3uCxCK1E7wny87ZgBcAJkckBO1g2sJN/7r+f6p7VPXnnJQZ3lNNXRBSU7cKAAAAGMIh/eLxePyxql5V1Yuqen7l2X9X1duqenM4HP645+/xtKqeVdWTqvr2WoudfK6qT1X1oao+3vP3sF/HfiPcv2ZAjsfjz1X1y5WXWhxVVa8Ph8OvG7/veVV9f4N9lryruwPdwn5fbN5vlPu3GJBTcn9v/foNHKvqpw1/kzytqh9uuM+Sv2r9n4T2u7R6v5Hu3zeNb3hVD7dcnWa93PD1z261yJVm2q9v5jD3rxWQF7fbpWnLzCc32+I6M+3XN3OY+9cKyLX/QbTGdxu+9tr/oLz2TPv1zRzm/rUCApSAQCQgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQtAKy9Y2la3i/4Ws/32yL68y0X9/MYe5fKyBvb7hIy5aZn262xXVm2q9v5jD3rxWQN3X3mNZDOZ5mrvXhVotcaab9+mYOc/8WA3J6Ye51PcyS/z79+OeG7/lYd89ZPpR3te19Wfud27TfSPdvzePVL+vuUa0t71at8b7u/lr7zePV97L7/Sa4fwAAAAAAAADwyPxfUeIMH0XQ4+787mPV+aWA6NE+jaod9rg7vzPN82sFRI/2VyNrRz3uzm/R4vm1/j+IHu1ze+txd34rZ7YCoke7b6bz65s5zPm1AqJH+9Keetyd38qZXjWBQEAgEBAIBAQCAYFAQCAQEAgEBAIBgUBAIBAQCAQEAgGBQEAgEBAIBAQCAYFAQCAQEAhaAdGjfWlPPe7Ob+XMVkD0aPfNdH59M4c5v1ZA9Gif21uPu/NbObMVED3aX+yux935XWie3x4erx65R9v57fj8AAAAAAAAAODxmfqjJjX4fnrI5//5TtuTXoPvp4f8zLQ/3yl70mvw/fSQL5ry5ztrT/ro++kh75s5zH6z9qSPvp8e8r6Zw+w3a0/66PvpIe+bOcx+XjWBQEAgEBAIBAQCAYFAQCAQEAgEBAIBgUBAIBAQCAQEAgGBQEAgEBAIBAQCAYFAQCAQEAhm7UkffT895H0zh9lv1p700ffTQ943c5j9Zu1JH30/PeR9M4fZb8qe9Bp8Pz3kF6b9+Xq8uk0PeZ/d/3wBAAAAAAAA4PGZ+qMmesidX4d996TrIT/j/PrsqyddD/ki59dnVz3pesj7Zjq/lTNn7UnXQ9430/mtnDlrT7oe8r6Zzm/lTK+aQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEs/ak6yHvm+n8Vs6ctSddD3nfTOe3cuasPel6yPtmOr+VM6fsSddDfsH59dlnT7oecufXQU86AAAAAAAAAGwWP2qiR7v7owj2m7zHvRkQPdpnNveQl/3+a9oe98WA6NFetLqHvOy3ZMoe99bH3fVo9820X9/MYe5fKyB6tPtm2q9v5jD3rxUQPdp9M+3XN3OY++dVEwgEBAIBgUBAIBAQCAQEAgGBQEAgEBAIBAQCAYFAQCAQEAgEBAIBgUBAIBAQCAQEAgGBoBUQPdp9M+3XN3OY+9cKiB7tvpn265s5zP1rBUSPdt9M+/XNHOb+LQZEj/aFTT3kZb+vTdvjvubxaj3aO30cugbfb4L7BwAAADyUfwDmcbblze7mOAAAAABJRU5ErkJggg==\"\r\n  },\r\n  \"happy\": {\r\n    \"icon\": \"data:image/png;base64,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\"\r\n  },\r\n  \"sad\": {\r\n    \"icon\": \"data:image/png;base64,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\"\r\n  },\r\n  \"confused\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFd0lEQVR4nO3dMW5TWxAG4N8PvQaFmsdbABvIAhB7ShqUFpqwJwR9NsACAjRUiAKK+wob8UxyhntzbMuHfF/LdWY01u8QyZpJAAAAgKOw+s2/nyR5nORhkr93XPt7kq9JPiX5csefoT/93dWs/qqA/JPk3x031XKd5OPC1+jvJ/31afb3V+MFJzlcc9nUOlnwvP626a9Ps79WQB7vr5emJTX111dTfzNrtgLycI+NtCypqb++mvqbWbMVkF3/QTTHkpr666upv5k1WwEBIiBQEhAoCAgUBAQKAgIFAYGCgEBBQKAgIFAQECgICBQEBAoCAgUBgYKAQEFAoCAgUBAQKLQC8v2gXSyvqb++mvqbWbMVkK97bKRlSU399dXU38yarYB82mMjLUtq6q+vpv5m1nzQePhbkinJo721s+06yecFz+tvm/76NPuzvLpNf33uQ38AAAAAAAAAcM8M/VWTaZqeJTlPcpr12eBd+pjkKsnlarV6e8efYX6Dz2/YO+nTNL1I8nI/7WyXSnKxWq1eLXyd+W1KZeD5tQJykuTp3tq53fvM/CTcfPK9ye9/A+7KlOT5gk9C8/ulZAad36h30s9zuDc3m1pnC543v23Dzm/UO+mne+tiNzXNr6/m0cxv1Dvpu/6Dco4nC541v5uGnJ+tJlAQECgICBQEBAoCAgUBgYKAQEFAoCAgUBAQKAgIFAQECgICBQGBgoBAQUCgICBQEBAoCAgURr2TvmgH1I58WPCs+d005PxGvZN+tbcudlPT/PpqHs38Rr2Tfpn1MrJDmTY15zK/bcPOrxWQL1mvYzyU6yzYL7vZ0HeRw7zJP1ZnvlvwGvP7aej5/QnLq8+yXkq2ZO/SHB+y/m/B65GXL1fMz510AAAAAAAAAFhm6K+aRH/6u7s/+0569Pd/+uvT7K/1bd6THK65bGqdLHhef9v016fZ36h30vXXV1N/M2uOeiddf3019Tez5qh30vXXV1N/M2vaagIFAYGCgEBBQKAgIFAQECgICBQEBAoCAgUBgYKAQEFAoCAgUBAQKAgIFAQECgICBQGBgoBAYdQ76frrq6m/mTVHvZOuv76a+ptZc9Q76frrq6m/mTUfNB7+lvV960d7a2fbdZLPC57X3zb99Wn2Z3l1m/763If+AAAAAAAAAOCeGfqrJtM0PUtynuQ067PBu/QxyVWSy9Vq9faOP8P8Bp/fsHfSp2l6keTlftrZLpXkYrVavVr4OvPblMrA82sF5CTJ0721c7v3mflJuPnke5Pf/wbclSnJ8wWfhOb3S8kMOr9R76Sf53Bvbja1zhY8b37bhp3fqHfST/fWxW5qml9fzaOZ36h30nf9B+UcTxY8a343DTk/W02gICBQEBAoCAgUBAQKAgIFAYGCgEBBQKAgIFAQECgICBQEBAoCAgUBgYKAQEFAoCAgUBAQKIx6J33RDqgd+bDgWfO7acj5jXon/WpvXeympvn11Tya+Y16J/0y62VkhzJtas5lftuGnV8rIF+yXsd4KNdZsF92s6HvIod5k3+szny34DXm99PQ8/sTllefZb2UbMnepTk+ZP3fgtcjL1+umJ876QAAAAAAAACwTPlVE3e03SHv8EfMrxkQd7S3uEPeZ9j53RoQd7Rv5Q55nyHn1/q6uzvafTXNr6/m0cyvFRB3tPtqml9fzaOZXysg7mj31TS/vppHMz9bTaAgIFAQECgICBQEBAoCAgUBgYKAQEFAoCAgUBAQKAgIFAQECgICBQGBgoBAQUCgICBQEBAotALijnZfTfPrq3k082sFxB3tvprm11fzaObXCog72n01za+v5tHM79aAuKN9gzvkfYad35zl1e5ou0N+F/dhfgAAAMCh/AecHIXJK5h09QAAAABJRU5ErkJggg==\"\r\n  },\r\n  \"angry\": {\r\n    \"icon\": \"data:image/png;base64,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\"\r\n  },\r\n  \"asleep\": {\r\n    \"icon\": \"data:image/png;base64,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\"\r\n  },\r\n  \"surprised\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFc0lEQVR4nO3dP25UVxQG8G8SpUFODWQBbMALiNiT3SC30Jg9Iei9ARbAnyYVogjFpJhBycR+h/d8543uNb9fmzHn07E+EyTrngQAAADowuYH//0syeMkj5L8duTZ35J8TfI5yZf7/AHb7fbPJJdJzpM8OV60JMmnJDdJrjebzdt7/hn2N/j+qoI8SfLHkUNN+ZDdQmfbbrcvkrxcJ87hqCRXm83m1cKvs7/9qAy8v6mCnCV5tlqcu73PzJ+E+598b/LjvwGPZZvk+YKfhPb3v5EZdH+/THz48bpZmmde5nTf3OxnXSz4vP0dGnZ/UwV5tGKQKUtmnq+W4jgz7a9tZjf7myrIsf9BNMeSmcf+B+UcTxd81v5uG3J/UwUBoiBQUhAoKAgUFAQKCgIFBYGCgkBBQaCgIFBQECgoCBQUBAoKAgUFgYKCQEFBoKAgUFAQKEwV5NtJUyyfuegNqCP5uOCz9nfbkPubKsjXFYNMWTLzZrUUx5lpf20zu9nfVEE+rxhkypKZ19k9RnYq2/3Muezv0LD7myrIl+yeYzyVD1nwvuz+hb6rnOab/P3pzHcLvsb+/jX0/h7C49UX2T1KtuTdpTk+Zve/Ba9Hfny5Yn9t+wMAAAAAAACAn8/Qv2oS+eS7v4d9Jz3y/Zd8bSbzTf0271lOFy77WWcLPi/fIfnaTOYb9U66fG0z5Zs5c9Q76fK1zZRv5sxR76TL1zZTvpkzvWoCBQWBgoJAQUGgoCBQUBAoKAgUFAQKCgIFBYGCgkBBQaCgIFBQECgoCBQUBAoKAgUFgYKCQGHUO+nytc2Ub+bMUe+ky9c2U76ZM0e9ky5f20z5Zs78deLDf2d33/r31eIc+pDkrwWfl++QfG0m83m8epp8bX6GfAAAAAAAAADwk/GrJtOa82232z+TXCY5z+6s8TF9SnKT5Hqz2by955/R9f7SQT530udZnG+73b5I8nKdOIejklxtNptXC7+u6/2lk3xTBTlL8my1OHd7n/k/abrOt/+b401+/Df0sWyTPF/wN0nX+0tH+dxJX2fmZU5XjuxnXSz4fO/76yafO+nrzDxfLcVxZva+v27yuZO+zsxj/4N8jqcLPtv7/rrJ51UTKCgIFBQECgoCBQWBgoJAQUGgoCBQUBAoKAgUFAQKCgIFBYGCgkBBQaCgIFBQECgoCBQUBArupK8zc+kbUMfwccFne99fN/ncSV9n5s1qKY4zs/f9dZPPnfR1Zl5n95jbqWz3M+fqfX/d5JsqyJfsnmM8lQ9Z9n5r1/n2Lxxe5TQl+f706LsFX9P1/tJRPo9XTzvW49UX2T3qtuTdqjk+Zve/Va89Xn0v7qQDAAAAAAAAwGJD/6qJO+T21+Bh30l3h/yA/bV5WHfS3SG/k/21eVB30t0hb5tpfzNnjnon3R3ytpn2N3PmqHfS3SFvm2l/M2d61QQKCgIFBYGCgkBBQaCgIFBQECgoCBQUBAoKAgUFgYKCQEFBoKAgUFAQKCgIFBQECgoCBQWBwqh30t0hb5tpfzNnjnon3R3ytpn2N3PmqHfS3SFvm2l/M2cOeSfdHfJb7K/Nw7yT7g65/TVwJx0AAAAAAAAAFhv6V03SeT53yMf//g57Jz2d53OH/MCw398h76Sn83zukN9pyO/vqHfSe8/nDnnbzG7yjXonvfd87pC3zewm36h30nvP5w5528xu8nnVBAoKAgUFgYKCQEFBoKAgUFAQKCgIFBQECgoCBQWBgoJAQUGgoCBQUBAoKAgUFAQKCgIFBYHCqHfSe8/nDnnbzG7yjXonvfd87pC3zewm36h30nvP5w5528xu8g15Jz2d53OH/JZhv78er57mDnmbB//9BQAAAE7oHzt4fMP9uDtRAAAAAElFTkSuQmCC\"\r\n  },\r\n  \"silly\": {\r\n    \"icon\": \"data:image/png;base64,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\"\r\n  },\r\n  \"fabulous\": {\r\n    \"icon\": \"data:image/png;base64,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\"\r\n  },\r\n  \"meh\": {\r\n    \"icon\": \"data:image/png;base64,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\"\r\n  },\r\n  \"tshirt\": {\r\n    \"icon\": \"data:image/png;base64,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\"\r\n  },\r\n  \"rollerskate\": {\r\n    \"icon\": \"data:image/png;base64,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\"\r\n  },\r\n  \"duck\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFW0lEQVR4nO3dMXIcVRQF0DdQJC4R27AAFoAXQLEnO6GcQmL2REFuFsACZJwQuRzgYAhGYKZm/tP/+t1Tr0fnpG7p36ruK1tlqW8EAAAAUMLunj+/iYinEfEkIr5Y+OyPEfEhIt5FxPuHfIL9fv9dRLyMiOcR8Wy5aBER8WdEvImI17vd7teHfILq+aL4/Y0C+bKCPIuIrxcO1XIbhxvebb/f/xARP64T5/ioiHi12+1+Gvqg4vmi+P2NIvlaBbmJiG9Wi3PeH9H5lebuK/Mvcf/fgEvZR8T3vV+pq+eL4vc3CuX7rHHx03WzTJ/5Mi738MXdWS8Grq+er/r9LZOvVZAnKwZpGTnz+Wopljmzer7q97dMvlZBlv6GqMfImUt/w9vjq4Frq+erfn/L5GsVBAgFgZSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkCiVZCPF00xfuboO5aW8Hbg2ur5qt/fMvlaBfmwYpCWkTPfrJZimTOr56t+f8vkaxXk3YpBWkbOfB2Hl6Vdyv7uzF7V81W/v2XytQryPg6vY7yU2xh4f+vdGwRfxWUewn9f7flb7wdUzxfF728UyncNL69+EYeXpo28F6rH2zj8s+XnyZdXl80Xxe9v1M8HAAAAAAAAAI9M+qMm1Xe+5bOTPmFuJ736zrd8n44KO+mzxnbSq+98y3d6ZNhJnzW0k15951u+Y3bS5w3tpFff+ZZv7swyO+QLXLuUoZ306jvf8p2ykz7HTjqMUhBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJFoFqb7zLd8pO+lzhnbSq+98yzd3Zpkd8gWuXcrQTnr1nW/5jtlJn9e/k15951u+I3bS5z1sJ736zrd8dtIn2EkHAAAAAAAAgGH3DU2W/q/+6jvk8m0/X1aQEjvVLdV3yOX7dFRsOF+rIGV2qs+pvkMu3+mRsdF8rd8HKbNT3VB9h1y+Y5vN1ypImZ3qhuo75PLNnVkmX6ul364YJPN7z0X7/f6Sv633n91u1/VVTb7ztpjPW00goSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSLQKUmanuqH6Drl8pzaZr1WQMjvVDdV3yOWbO7NMvlZByuxUN1TfIZfv2GbztQpSZqf6nOo75PId2XS+a3h5ddkdcvmuOx8AAAAAAAAAPD7X8KMmdr6vNF8UeP7spHccFRve+W5+UPF8UeT5s5PeZ7M732cvLp4vCj1/dtL7bHbnu6F6vjLPn530dc6Ub+7MMs9fqyBLf0PUY+TMpb+h7DHy+wjynRrJV+b581YTSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBJ20vttcue7oXq+Ms+fnfR1zpRv7swyz5+d9D6b3fluqJ6vzPNnJ/1+m975Pqd6vij0/F3Dy6vL7mjLN71DXvr5AwAAAAAAAIDHZ9M/ahLyyfdw172THvL9n3xzmvlaP817E5cLF3dn3QxcL98x+eY08211J12+uTPl6zxzqzvp8s2dKV/nmVvdSZdv7kz5Os/0VhNIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJBQEElvdSZdv7kz5Os/c6k66fHNnytd55lZ30uWbO1O+zjM/b1z8dxz2rb9cLc6x24j4a+B6+Y7JN6eZz8ur2+Sb8xjyAQAAAJfyD92s8bBtlgWFAAAAAElFTkSuQmCC\"\r\n  },\r\n  \"house\": {\r\n    \"icon\": \"data:image/png;base64,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\"\r\n  },\r\n  \"tortoise\": {\r\n    \"icon\": \"data:image/png;base64,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\"\r\n  },\r\n  \"butterfly\": {\r\n    \"icon\": \"data:image/png;base64,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\"\r\n  },\r\n  \"stickfigure\": {\r\n    \"icon\": \"data:image/png;base64,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\"\r\n  },\r\n  \"ghost\": {\r\n    \"icon\": \"data:image/png;base64,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\"\r\n  },\r\n  \"sword\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE40lEQVR4nO3dMY4UVxQF0NeWnCBysBfgDbAAy3uCBJHaCd6TZedswAsAkyMSgnYwY1mjoS5V86ta7/eckzLwrrq4HiON6lYBAAAALZy+8etPq+pZVT2pqu93vv2lqj5X1ceq+vTAP6N1vvP5/HNVvaqqF1X1fL9oVVX1T1W9q6q3p9Ppzwf+Ga0/v2qQLxXkeVX9uHOoJe/r5oFv0Trf+Xx+XVW/HhPn7qmqenM6nX7b+Ptaf37VJN9SQZ5W1U+Hxfm6v2v9f2la57v9zvFHffs79F7OVfXLhu8krT+/apTvu4UvfnZsluGb3fO9qsuVo25vvdzw9d0/vzb5lgry5MAgS7bc7J7vxWEp9rnZ/fNrk2+pIHv/g2iNLTe759v7H+Rr/LDha7t/fm3yLRUEKAWBSEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBYKsiXi6bYfrN7vq3vgNrDhw1f2/3za5NvqSCfDwyyZMvN7vneHZZin5vdP782+ZYK8vHAIEu23Oye723dvMztUs63N9fq/vm1ybdUkE918zrGS3lf297f2jrf7RsO39RlSvLfq0f/2vB7Wn9+1Sifl1cv2+vl1S/r5qVuW95btcaHuvnfqt+9vPpB9sgHAAAAAAAAAI+MHzVZZid9zFU8Xzvp69hJHzPt87WTvp6d9DFTPl876cfctJM+drNNPjvpx9y0kz52s00+O+nH3LSTPnazTT5vNYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCOykH3PTTvrYzTb57KQfc9NO+tjNNvnspB9z00762M02+eykr2Mnfcy0z9fLq5fZSR9z9c8XAAAAAAAAAB4fP2qyzE76mKt4vnbS17GTPmba52snfT076WOmfL520o+5aSd97GabfHbSj7lpJ33sZpt8dtKPuWknfexmm3zeagKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgENhJP+amnfSxm23y2Uk/5qad9LGbbfLZST/mpp30sZtt8tlJX8dO+phpn6+XVy+zkz7m6p8vAAAAAAAAADw+U/+oSfcdcvnm33Gfdie9+w65fP+fqol33KfcSe++Qy7f/ZM16Y77rDvp3XfI5btr2h33WXfSu++Qyzd2s83fv1l30rvvkMt335Q77t5qAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQzLqT3n2HXL77ptxxn3UnvfsOuXxjN9v8/Zt1J737Drl8d0274z7lTnr3HXL57ph6x/0aXl7ddodcvqvfcQcAAAAAAACAR2bqHzWp5vnskM//fKfdSa/m+eyQ3zHt851yJ72a57ND/lVTPt9Zd9K757NDPnazTb5Zd9K757NDPnazTb5Zd9K757NDPnazTT5vNYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCGbdSe+ezw752M02+WbdSe+ezw752M02+WbdSe+ezw752M02+abcSa/m+eyQ3zPt8/Xy6mVXv+NezT+/6p8PAAAAuJR/ATEXlVHvyECcAAAAAElFTkSuQmCC\"\r\n  },\r\n  \"giraffe\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE+UlEQVR4nO3dPY4cVRQF4NtIJBY5PwtgA14AYk92gpxCYvaEIPcGWICNc+TEQRP0IGs09U6/mqqy3+v5vtRj36PSnBEW7TpVAAAAwBBO6RfP5/NPVfWyqp5X1Xc73/6nqt5U1evT6fTnY/6A0fNV1TdV9W1VPauqr/cKdudjVX2oqvdV9e8j/wz5ruRrFuR8Pv9SVb/uHGrxVFW9Op1Ov636TYPnq0thfzggz5K3dSn0GvJ90sy3WJC7n8x/tH79AOeq+rn3J/Xo+eryk+/HA/Ms+bv6f1LL99Bivq8aX/yyPt83X93derHi60fP9+1RQXa6KV/nzVZBnh8YpGXNzdHzPTssxT435eu82SrI3n/h7fH9iq8dPd/ef6Hc+6Z8nTdbBQFKQSBSEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCFoFWfsOoz28W/G1o+f7eFiKfW7K13mzVZA3BwZpWXNz9HwfDkuxz035Om+2CvK6Li9L+1zOdzd7jZ7v/VFBdropX+fNxYLcvUHwVX2eb8L/X+35V+9vGD1fXd7Q9/agPEve1rr338p3XzNfz8urX9TlpWlr3gvV411d/rPl940vrx42Xw3w8uUr5NuWDwAAAAAAAACemGtDmEP/r3476Tf/UY4vni8VZIid6hY76fdMu0MeDJGvVZBhdqqX2ElfNOUOecMw+Vr/HmSYneoGO+nbbsrXebNVkGF2qhvspG+7KV/nzVZBhtmpbrCTvu2mfJ03vdUEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBoFWSYneoGO+nbbsrXebNVkGF2qhvspG+7KV/nzVZBhtmpbrCTvu2mfJ03WwUZZqd6iZ30B6bdIW8YJt8tvLzaTvrEL4e+YvR8AAAAAAAAAPDE3MJHTeyk3+5HOb54PjvpHafKTvpW0+azk97HTvp2U+azk97HTvp2U+azk37MzdGfn3ydN+2k97OTvs2U+bzVBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgsJPez076NlPms5N+zM3Rn598nTftpPexk77dlPnspF9nJ327afPdwsur7aRP/HLoK0bPBwAAAAAAAABPzC181GTYnXT55t+Zt5PecaoesZMu36dTNfHOvJ30Pqt20uV7eLIm3Zm3k95n7U66fPdNuzNvJ/2Ym/JtuznM95+d9H5r/r2JfA9NuTPvrSYQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGd9H5rdtLle2jKnXk76cfclG/bzWG+/+yk91m7ky7ffdPuzNtJv271Trp890y9M38LL68ediddvpvfmQcAAAAAAACAJ+YWPmpi59vzeww76TuZeue7xfO7x076RtPufC/x/BbZSd9g2p3vBs+v86ad9GNuen7bbg7z/Oyk95ty57vB8+u86a0mECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBnfR+U+58N3h+nTftpB9z0/PbdnOY52cnvc+0O98Nnl/nTTvp1029873E83vATvoj3PzOt+dnJx0AAACm8R/nWLbllDXkpAAAAABJRU5ErkJggg==\"\r\n  },\r\n  \"skull\": {\r\n    \"icon\": \"data:image/png;base64,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\"\r\n  },\r\n  \"umbrella\": {\r\n    \"icon\": \"data:image/png;base64,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\"\r\n  },\r\n  \"snake\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFE0lEQVR4nO3dMY5bVRQG4GMQTTTUARbAAsgCIvaUNCgtNGFPCPqwABYwIQ1VlCIpTGHDYOx75r6571nnvfm+djxzfl35t8aSfU8EAAAAUMIu++F+v38eES8j4llEfDXz7D8j4k1EvN7tdr8+5A9UzxcRNxHxNCKeRMQXcwU7+hQRHyLiXUS8f+DfkO+efM2C7Pf7HyLix5lDXRwVEa92u91Pk36peL44FPabBfJcchuHQk8h351mvosFOb4y/9L6+QL2EfF97yt19XxxeOX7dsE8l/wR/a/U8p27mO+zxoNfxvWefHGc9WLC46vne7pUkJlmytc5s1WQZwsGaZkys3q+J4ulmGemfJ0zWwWZ+w1vj68nPLZ6vrnfUM49U77Oma2CAKEgkFIQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEi0CjL1DqM5vJ3w2Or5Pi2WYp6Z8nXObBXkzYJBWqbMrJ7vw2Ip5pkpX+fMVkFex+GytGvZH2f2qp7v3VJBZpopX+fMiwU53iD4Kq7zJPznas/fen+her443NB3u1CeS25j2v238p1q5uu5vPpFHC5Nm3IvVI+3cfi35efBy6vL5osCly/fQ76xfAAAAAAAAADwyNiT3rb5PenVz69CPnvSO0bFBvekVz+/KvnsSe+zqT3p1c+vUj570vtsbU969fMrk8+e9GVmltnz3VD9/Mrka/2Ldc1v6/1rt9t1vWpUzxcR3y0apO33ngdVP79K+dxqAgkFgYSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkDCnvR+W9qTXv38yuSzJ32ZmWX2fDdUP78y+exJ77O1PenVz69MPnvS77e5PenVz69SPnvS2za/J736+VXPBwAAAAAAAACPz30rsdbwUYmye77D+a3+/LKC2PN9HBX2pI9Y9fm1CmLP9/9Ghj3pI1Z7fq3vg9jzfcqe9DGrPb9WQez5Hpvp/MZmljm/VkHmfkPUY8rMud9Q9pjyfQTnd26V5+dWE0goCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSrYLY833OnvQxqzy/VkHs+R6b6fzGZpY5v1ZB7Pk+ZU/6mNWeX6sg9nzfsSd9zKrPbwuXV1feo+38Nnx+AAAAAAAAAPD4bOGjJmX3fMtnT/pcNrfnW767UWFP+iw2s+dbvvORYU/6sC3t+ZbvlD3pM9jSnm/5xmaWef7Zk95vyvcl5DtnTzpsjYJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIGFPer8pe77lO2dP+qAt7fmWb2xmmeefPel9pu75lu+UPemDNrXnW74T9qQ/0Ob3fMtnTzoAAAAAAAAAbMuqP2oS8sn3cNvekx7y/Zd8Y5r5Wp/mvYnrhYvjrJsJj5fvlHxjmvnWuiddvrGZ8nXOXOuedPnGZsrXOXOte9LlG5spX+dMt5pAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFjrnnT5xmbK1zlzrXvS5RubKV/nzLXuSZdvbKZ8nTM/bzz4Yxz2W3+5WJxTtxHx14THy3dKvjHNfC6vbpNvzGPIBwAAAFzL3/Yj4OZvgj/VAAAAAElFTkSuQmCC\"\r\n  },\r\n  \"rabbit\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE50lEQVR4nO3dTW4UVxQF4FuRMkHMIVlAFgALiLInmERMkwnZU5TMYQFZAD9zxIRBZ2AH3O5+J1V+Va3Xpe8bGtv36prTsiW7ThUAAAAwhCn94+Fw+LmqXlbV86p6uvLsD1X1pqpeT9P01wM/x+OqelJVj6rq+7UWu/Wlqj5X1ceq+vSQT+B+fferAfZrBuRwOPxaVb+tvNTZUVX1apqm3xd+3NOq+nGDfc55Vzf/IWdzvyOL71eD7Hc2ILevfH+2/n0Dh6r6ZcEr4eOq+mnDfc75p2a+ErrfWbPvVwPt913jnV/W5b64dTvrxYL3f7LVIivNdL++mcPs1wrI8w0XaVky89FmW6wz0/36Zg6zXysga/9AOccPC9537R/Y1p7pfn0zh9mvFRCgBAQiAYFAQCAQEAgEBAIBgUBAIBAQCAQEAgGBQEAgEBAIBAQCAYFAQCAQEAgEBAIBgaAVkKXPMFrD+wXv+2WzLdaZ6X59M4fZrxWQNxsu0rJk5ufNtlhnpvv1zRxmv1ZAXtfNw8gu5XA7c66PWy2y0kz365s5zH5nA3L7hL5XdZkv8n+Pzvx7wcd8qpvHRV7Ku1rwfFn3O7HofjXQfnMeXv2ibh5KtuS5S3O8r5tvC/7Y68OX3e/6H14NAAAAAAAAANylJ71NT3qfXfyqiZ70efSk99GT3mlXPd/ud5ae9A576/l2v76Zw+ynJ32bme7XN3OY/fSkbzPT/fpmDrOfp5pAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAR60reZ6X59M4fZT0/6NjPdr2/mMPvpSd9mpvv1zRxmPz3p8+hJ76Mn/QF23/Ptftf/8GoAAAAAAAAA4K6r7km33773qwF+1eRqe9Lt921U7XC/0pN+PLIW9Hzb73Rk7Wi/0pN+YmnPt/2O7W0/PemdM+3XN3P0/YbpSW99i3XJv4b7apqmWa9q9jtvL/tV1bNNF2l7e/8NnmoCgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBBca0+6/U7taT896Z0z7dc3c/T99KTfs7Tn237H9rafnvQ7Fvd82+/I7vYrPelVtULPt/32vV8N8PBqAAAAAAAAAOAuPeltu+j5TtxPT/oarrrnu8X9juhJ73S1Pd/nuN9ZetI7XG3Pd4P7zZypJ32bmcP0fDe438yZrYCs/QPbHEv+HmH0/db+gXLtme43c6anmkAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBHrS57vKnu8G95s5U0/6NjOH6flucL+ZM/Wkz3O1Pd8N7jdzpp70/3fVPd/nuN8JPekPsPueb/fTkw4AAAAAAAAAy+hJb7NfHz3pK9llT7r9vo0qPenddtWTbr/TkaUnvcveetLtd0xP+gr21JNuv76Zw/Skt77FuuRfm301TdOsVzX7nbeX/arq2aaLtL29/wZPNYFAQCAQEAgEBAIBgUBAIBAQCAQEAgGBQEAgEBAIBAQCAYFAQCAQEAgEBAIBgUBAIBAQCPSkz2e/PnrSO+2pJ91+fTP1pN+zt550+x3Tk95hdz3p9juiJ/2Bdt+Tbj896QAAAMBK/gVsdTwSu+HRwQAAAABJRU5ErkJggg==\"\r\n  },\r\n  \"cow\": {\r\n    \"icon\": \"data:image/png;base64,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\"\r\n  },\r\n  \"quarternote\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE8ElEQVR4nO3dQY4VZRQF4PtMnBDmoAtwAyzAuCeYEKY6wT0ZnbMBFwAyJ0wYPAfdxnTaOl3V/1/P+4rvm1pwT97LAUk6daoAAACAFk4P/PenVfWsqp5U1beTb3+pqs9V9bGqPj3y92id73w+/1hVr6rqRVU9nxetqqr+qqp3VfX2dDr9/sjfo/XnVw3ypYI8r6rvJ4da8r5uvvAtWuc7n8+vq+rnfeLcPVVVb06n0y8bf13rz6+a5FsqyNOq+mG3OP/tz1r/J03rfLd/c/xWD/8NPcu5qn7a8DdJ68+vGuX7ZuHhZ/tmGb7ZPd+rulw56vbWyw3Pd//82uRbKsiTHYMs2XKze74Xu6WYc7P759cm31JBZv+DaI0tN7vnm/0P8jW+2/Bs98+vTb6lggClIBApCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBEsF+XLRFNtvds+39R1QM3zY8Gz3z69NvqWCfN4xyJItN7vne7dbijk3u39+bfItFeTjjkGWbLnZPd/bunmZ26Wcb2+u1f3za5NvqSCf6uZ1jJfyvra9v7V1vts3HL6py5Tkn1eP/rHh17T+/KpRPi+vXjbr5dUv6+alblveW7XGh7r536pfvbz6UWbkAwAAAAAAAICvjB81WWYnfcwhvl876evYSR9ztd+vnfT17KSPucrv1076PjftpI/dbJPPTvo+N+2kj91sk89O+j437aSP3WyTz1tNIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCO+n73LSTPnazTT476fvctJM+drNNPjvp+9y0kz52s00+O+nr2Ekfc7Xfr5dXL7OTPubw3y8AAAAAAAAAfH38qMkyO+ljDvH92klfx076mKv9fu2kr2cnfcxVfr920ve5aSd97GabfHbS97lpJ33sZpt8dtL3uWknfexmm3zeagKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgENhJ3+emnfSxm23y2Unf56ad9LGbbfLZSd/npp30sZtt8tlJX8dO+pir/X69vHqZnfQxh/9+AQAAAAAAAODrE3/UpPvOt3x20geM7aR33/mW799TZSd91Lad9O473/LdP1l20kdt2knvvvMt31120sdt2knvvvMt39jNNjvkE56dZdNOevedb/nus5M+xk46bKUgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgESwXpvvMt33120sds2knvvvMt39jNNjvkE56dZdNOevedb/nuspM+bv1Oevedb/nusJM+7nE76d13vuWzkz7ATjoAAAAAAAAAbGYnfdnh81X/H+X43/PZSV9xqg6Yr5rskAct8tlJX+dQ+arRDvmCNvnspK9ztHxtdsgnPDuLnfRBR8rXZod8wrOz2EkfdKR8bXbIJzw7i5102EpBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAI7KSvd6R8bXbIJzw7i530QUfK12aHfMKzs9hJH3C0fG12yCc8O4ud9Ec6XL5qtEO+oE0+O+nLDp+vGrwc+gHd8wEAAACX8jdzZLbl0C/0iwAAAABJRU5ErkJggg==\"\r\n  },\r\n  \"eigthnote\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFM0lEQVR4nO3dQY4VVRgF4P+ZOCHMQRfgBliAcU8wMUx1gnsyOmcDLgBkTpgweA66JXa6799V/W61J5fvm1pwT27lgCSdOlUAAABAhNM9//1pVT2rqidV9e3ksz9X1aeq+lBVHx/4e0TnO5/PP1bVq6p6UVXP50Wrqqq/q+ptVb05nU5/PPD3iL6/CsjXFeR5VX0/OdTIu7p64XtE5zufzz9X1S/HxLl5VFW9Pp1Ov+78ddH3VyH5RgV5WlU/HBbnbn/V9j9povNd/83xe93/N/Qs56r6acffJNH3V0H5vhk8/OzYLBefmZ7vVT1eOer6rJc7nk+/v5h8o4I8OTDIyJ4z0/O9OCzFnDPT7y8m36ggs/9BtMWeM9Pzzf4H+Rbf7Xg2/f5i8o0KApSCQEtBoKEg0FAQaCgINBQEGgoCDQWBhoJAQ0GgoSDQUBBoKAg0FAQaCgINBYGGgkBDQaAxKsjnR02x/8z0fHu/ATXD+x3Ppt9fTL5RQT4dGGRkz5np+d4elmLOmen3F5NvVJAPBwYZ2XNmer43dfUxt8dyvj5zq/T7i8k3KsjHuvoc42N5V/u+3xqd7/oLh6/rcUry76dH/9zxa6Lvr4Ly+Xj12KyPV7+sq4+67flu1Rbv6+p/q37z8eoHmZEPAAAAAAAAAL4yftRkbPmd9PR8FfB+7aRvs9xOenq+Cnm/dtK3W2YnPT1fBb1fO+nHnJm+k56eL+b92kk/5sz0nfT0fDHv1076MWem76Sn54t5v75qAg0FgYaCQENBoKEg0FAQaCgINBQEGgoCDQWBhoJAQ0GgoSDQUBBoKAg0FAQaCgINBYGGgkDDTvoxZ6bvpKfni3m/dtKPOTN9Jz09X8z7tZN+zJnpO+np+WLer530bZbaSU/PV0Hv18erx5bfSU/PV+HvFwAAAAAAAAC+Pn7UZGz5nfRyf/fen530bZbbSS/39+Woau7PTvp2y+ykl/u7dWQN7s9O+jFn2iG/7MyY+7OTfsyZdsgvOzPm/uykH3OmHfLLzoy5P181gYaCQENBoKEg0FAQaCgINBQEGgoCDQWBhoJAQ0GgoSDQUBBoKAg0FAQaCgINBYGGgkBDQaBhJ/2YM+2QX3ZmzP3ZST/mTDvkl50Zc3920o850w75ZWfG3J+d9G2W2kkv9/df7f35ePXY8jvp5f4uvT8AAAAAAAAA+Mq0P2qSsFPdkW/tnfQKyDcsSMpO9fAXyfflqFpwJ71C8t1ZkKSd6jsflu/WkbXQTnoF5Rv9uHvMTvWAfDettpMek29UkJid6gnPzrJSvvSd9Jh8o4LE7FQPyHfbSjvpMfl81QQaCgINBYGGgkBDQaChINBQEGgoCDQUBBoKAg0FgYaCQENBoKEg0FAQaCgINBQEGgoCDQWBxqggMTvVA/LdttJOeky+UUFidqonPDvLSvnSd9Jj8o0KErNTPSDfTavtpMfku7MgSTvVd5HvhuV20iso35aPV8fuVMu39k565ecDAAAAAAAAgK+MnfSx5fNV/o9y/O/57KRvOKoWzFchO+SNiHx20rdZKl8F7ZAPxOSzk77NavlidsgnPDuLnfQLrZQvZod8wrOz2Em/0Er5YnbIJzw7i5102EtBoKEg0FAQaCgINBQEGgoCDQWBhoJAQ0GgoSDQUBBoKAg0FAQaCgINBYGGgkBDQaChINCwk77dSvlidsgnPDuLnfQLrZQvZod8wrOz2Em/wGr5YnbIJzw7i530B1ouXwXtkA/E5LOTPrZ8vgr4OPQ90vMBAAAAj+Uf73PYeRwCFc4AAAAASUVORK5CYII=\"\r\n  },\r\n  \"pitchfork\": {\r\n    \"icon\": \"data:image/png;base64,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\"\r\n  },\r\n  \"target\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFeElEQVR4nO3dMY5bVRgF4N9INFH6BBbAAsgCEHtKGpQWmrAnBH1YAAtISB+lSWGKGYiMff/xm/dsnTvzfW08uUfP72QykuedKgAAACDC7o4/f1pVz6rqSVV9vfHZn6vqU1V9qKqP9/w7ovPt9/sfqupVVb2oqufbRauqqr+r6m1Vvdntdr/f8++Ivn4VkK8ryPOq+nbjUCPv6uYNXyI6336//6mqfr5MnMOjqur1brf7ZeHXRV+/Csk3KsjTqvruYnFO+6vO/5cmOt/td47f6u7v0FvZV9WPC76TRF+/Csr31eDFzy6bZfWZ6fle1fXKUbdnvVzw+vTrF5NvVJAnFwwysuTM9HwvLpZimzPTr19MvlFBtv6B6BxLzkzPt/UP5Of4ZsFr069fTL5RQYBSEGgpCDQUBBoKAg0FgYaCQENBoKEg0FAQaCgINBQEGgoCDQWBhoJAQ0GgoSDQUBBoKAg0RgX5fNUUy89Mz7f0GVBbeL/gtenXLybfqCCfLhhkZMmZ6fneXizFNmemX7+YfKOCfLhgkJElZ6bne1M3D3O7lv3tmedKv34x+UYF+Vg3j2O8lne17Pmt0flun3D4uq5Tkn8fPfrHgq+Jvn4VlM/Dq8e2enj1y7p5qNuS51ad433d/LfqVw+vvpct8gEAAAAAAADAIzP1R03Sd8jlm3/Hfdqd9PQdcvm+HFUT77hPuZOevkMu3/GRNemO+6w76ek75PIdmnbHfdad9PQdcvnWnRlz/826k56+Qy7fsSl33D3VBBoKAg0FgYaCQENBoKEg0FAQaCgINBQEGgoCDQWBhoJAQ0GgoSDQUBBoKAg0FAQaCgINBYHGrDvp6Tvk8h2bcsd91p309B1y+dadGXP/zbqTnr5DLt+haXfcp9xJT98hl+/A1DvuD+Hh1bE75PI9+B13AAAAAAAAAHhk2o+apO9op+er8I9KpF+/hHzDgqTvaKfnq5Cd75H065eS72RB0ne00/NV0M73KenXLynf6OPu6Tva6flidr4H0q9fTL5RQdJ3tNPzxex8D6Rfv5h8o/9iXfO3zf6z2+3O+lcjPV9VfX/RIGN/nvOi9OuXlM9TTaChINBQEGgoCDQUBBoKAg0FgYaCQENBoKEg0FAQaCgINBQEGgoCDQWBhoJAQ0GgoSDQUBBojAqSvqOdni9m53sg/frF5BsVJH1HOz1fzM73QPr1i8k3Kkj6jnZ6vpid74H06xeT72RB0ne00/NV0M73KenXLynfOQ+vjt3RTs9Xczy8Ovb6pecDAAAAAAAAgMfnrkmsGT4qYef7geargPuvK4id79ujauKd7+EXheerkPtvVBA73/87sibd+T754vB8FXT/jX4fxM73oWl3vgfS88Xcf6OC2Pled6Z8686Muf9GBdn6B6JzLDlz6x8oz7Hk9xHkO7YkX8z956km0FAQaCgINBQEGgoCDQWBhoJAQ0GgoSDQUBBoKAg0FAQaCgINBYGGgkBDQaChINBQEGgoCDRGBbHzfWzKne+B9Hwx99+oIHa+150p37ozY+6/UUHsfB+adud7ID1fzP03Koid7y+m3vk+JT1fBd1/D+Hh1bE72vI97J15AAAAAAAAAHh8pv6oSYXns0M+//s77U56heezQ35g2vd3yp30Cs9nh/ykKd/fWXfS0/PZIV93Zky+WXfS0/PZIV93Zky+WXfS0/PZIV93Zkw+TzWBhoJAQ0GgoSDQUBBoKAg0FAQaCgINBYGGgkBDQaChINBQEGgoCDQUBBoKAg0FgYaCQENBoDHrTnp6Pjvk686MyTfrTnp6Pjvk686MyTfrTnp6Pjvk686MyTflTnqF57NDfmTa99fDq8ce/I57hV+/ys8HAAAAXMs/4tr5dC58svsAAAAASUVORK5CYII=\"\r\n  },\r\n  \"triangle\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFX0lEQVR4nO3dsW5URxQG4LNBNJapTXiAvAAPYOWdoEG0SUPeJumjpOcF8gA2bqiQCywxKXYBrfAcZjz3LrP297Xc3fNrpN+LpfWcCAAAAGAKm+/8+2lEnEXESUQ8Xnj2TURcR8RVRHy443vIJ99dNeXLCvI0Ip4tHKrmIiLedb5Gvq/kG1PN91PlBadxuHCxm3Xa8bx8++QbU81XK8jZelmqembKNzZTvsaZtYKcrBikpmemfGMz5WucWSvI0r8QteiZKd/YTPkaZ9YKAoSCQEpBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSBRK8jNQVP0z5RvbKZ8jTNrBbleMUhNz0z5xmbK1zizVpCrFYPU9MyUb2ymfI0zH1Ue/hgRJSKerBZn30VEvO94Xr598o2p5nN5dZ18Yx5CPgAAAAAAAAB4YHzVpG44XynlPCJeRsTz2K41XtK7iHgbEW82m80/d3yPqc8vJshnT3qb7nyllFcR8ds6cfZHRcTrzWbze+frpj6/mCRfrSCnEfHLanFu91+0/6SZOt/uk+Pv+P4n9FJKRPza8Uky9fnFRPnsSV9n5ss4XDliN+tFx/Ozn980+exJX2fm89VSLDNz9vObJp896evMXPoX8hY/dzw7+/lNk8+tJpBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgk7ElfZ2bvHVBLuOx4dvbzmyafPenrzHy7WoplZs5+ftPksyd9nZlvYnuZ26GU3cxWs5/fNPlqBfkQ2+sYD+Ui+u5vnTrf7obD13GYkny+evTfjtdMfX4xUT6XV9ctdXn1i9he6tZzb1WLy9j+t+oPl1ffiT3pAAAAAAAAANDtqL9qYg+58xtwv/ek20O+x/mNuV970u0hv5XzG3Ov9qTbQz420/k1zjzWPen2kI/NdH6NM491T7o95GMznV/jTLeaQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJA41j3p9pCPzXR+jTOPdU+6PeRjM51f48xj3ZNuD/nYTOfXOPMo96TbQ/4N5zfmfu5Jt4fc+Q2wJx0AAAAAAAAAllVKOS+l/FVKuSzLu9y997l88h1dvlLKqxVC3eZT2e7slk++48hXts39dKCAn0M2N1k++Q6Vr/Z199n3aMu3T74x1Xy1gsy+R1u+sZnyNc68taWllEP+tdkXm82m6aeGfLeTb8xt+dxqAgkFgYSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkCiVpDZ92jL9y35xtyar1aQ2fdoyzc2U77GmbWCzL5HW7598o3pzffl6sdD3G43cjWlfPL9kHyfQ56XUv4spVysEOxi996jlxvLJ98PyQcAAAAAAAAAD8/3VmKdRsRZRJxExOOFZ99ExHVEXEXEhzu+h3zy3VVTvqwgTyPi2cKhai6i/28A5PtKvjHVfLWvu5/G4cLFbtZpx/Py7ZNvTDVfrSBn62Wp6pkp39hM+Rpn1gpysmKQmp6Z8o3NlK9xZq0gS/9C1KJnpnxjM+VrnOlWE0goCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQStYLcHDRF/0z5xmbK1zizVpDrFYPU9MyUb2ymfI0zawW5WjFITc9M+cZmytc481Hl4Y+xXa7+ZLU4+y4i4n3H8/Ltk29MNZ/Lq+vkG/MQ8gEAAACH8j9qsKYdhQgxPgAAAABJRU5ErkJggg==\"\r\n  },\r\n  \"lefttriangle\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGklEQVR4nO3dPY4UVxQG0NuWnCBysBfgDbCAkfcECSK1E7wbO7fsnA14ATOQIxIknoPuAY+m6rpq6lVzX3NOOtV9P1Xpmx+p590IAAAAoIRD9sXW2lVEvIiIZxHxtPPstxHxJiJeHw6Hvx74Ho8j4klEPIqI73sFO/kYER8i4l1EvH/ge8g3eL7ZgrTWXkbEL51DTY6KiFeHw+HXla97GhE/7pBnynUcC72GfF8Mm2+yIKefHH/OfX0HLSJ+XvGT5HFE/LRjnin/xPLvhPLdN2S+72YufhHnK0ecZj1fcf2TvYJ0minftpll8s0V5NmOQeasmflotxR9Zsq3bWaZfHMF6f0H+RI/rLi29x9svWfKt21mmXxzBQFCQSClIJBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQmCvI2jOMerhZce3H3VL0mSnftpll8s0V5M2OQeasmflhtxR9Zsq3bWaZfHMFeR3Hw9zOpZ1mLvVuryCdZsq3bWaZfJMFOZ1w+CrOU5Lbo0f/XvGa93E8LvJcrmPd+bLy3TVsviWHVz+P46Fua86tWuImjr9W/ebw6geRb5se+QAAAAAAAADgGzP0nvTq+aL+RyXku9Q96dXzRZE93wn5vrisPenV80WhPd8z5LvvovakV89XZs93h2t7GTLfqHvSq+crs+e7w7W9DJlv1D3p1fOV2fPd4dpehsznVBNIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJBQEEqPuSa+er8ye7w7X9jJkvlH3pFfPV2bPd4drexky36h70qvnK7Pnu8O1vQyZb8g96dXzRaE93zPku+sy96RXzxcFDl/+H/LZkw4AAAAAAAAAKwy9Jz2KfxTB/Rv/oybD7kmPInu057h/d9iTvtFF7SF3/ybZk77Bpe0hd/+2zSyTb9Q96WX2aM9w/7bNLJNv1D3pZfZoz3D/ts0sk8+pJpBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkRt2TXmaP9gz3b9vMMvlG3ZNeZo/2DPdv28wy+Ubdk15mj/YM92/bzDL5htyTHoX2aE9x/+6xJ/0BLn4Pufs3/uHVAAAAAAAAAMB/2ZM+7+I/KuH52pPey7B7vud4vnfYk97BkHu+p3i+k+xJ32jIPd8zPN+FM+1J32dm9Xye78KZ9qTvM7N6Ps934UynmkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQsCd9n5nV83m+C2fak77PzOr5PN+FM+1J32dm9Xye78KZ9qQvM+ye7yme7z32pD/At3J4tedrTzoAAAAAAAAA9NBau2qt/dFau2n93Zze+0o++YbL11p7uUOoKZ/acWe3fPKNka8dm/vpTAFvQy5usnzynSvfqHvS5btLvm1m8426J12+bTPlWzhzsqWttXP+t9lnh8Nh0XcN+abJt81UPqeaQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJAYdU+6fPfJt81kvlH3pMu3baZ8C2eOuiddvrvk22Ztvs9HP57jdLstR1PKJ99XyXcb8qq19ntr7XqHYNen9956uLF88n2VfAAAAMAZ/QsAIPjNRI6mtwAAAABJRU5ErkJggg==\"\r\n  },\r\n  \"chessboard\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7klEQVR4nO3dMY5TZxQF4OtIaRA9JAvIBlhAlD1BE9EmDdlTlPRsIAuA0CMaCqcYRyNj/2f85trW+z3f1zJwnw46A0jmnSoAAABgFTYP/PjzqnpRVc+q6vsz3/5aVV+q6lNVfX7ML7Ddbn+uqjdV9aqqXp7v0aqq6t+qel9V7zabzV+P/DXkN3l+qSAvq+rHMz/UyIe6C/Rk2+3216r67TKPs3+qqt5uNpvfF/48+e1O1cT5jQryvKp+utjjHPdPnfidcPed7896+E/Ac9lW1S8LvhPK75uTNWl+3w2++MVln6V9801d7ze3drdeL/h6+e2bNr9RQZ5d8EFGltx8dbGnOM9N+fVuria/UUHO/Q+iUyy5ee5/UJ7ihwVfK79DU+Y3KghQCgKRgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQDAqyNerPsXym4veAXUmHxd8rfwOTZnfqCBfLvggI0tuvr/YU5znpvx6N1eT36ggny74ICNLbr6ru5eRXct2d/NU8ts3bX6jgnyuu9cxXsuHWvB+2d0b+t7WdX6T/3915t8Lfo787k2d3y28vPp13b2UbMl7l07xse7+WvDHzC9fTuTXyw8AAAAAAAAAnp74URM72nbIG24iv2FB7GjvsUPeM21+RwtiR/soO+Q9U+Y3+ri7He3eTfn1bq4mv1FB7Gj3bsqvd3M1+Y0KYke7d1N+vZuryc9bTSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEglFB7Gj3bsqvd3M1+Y0KYke7d1N+vZuryW9UEDvavZvy691cTX5HC2JH+4Ad8p5p8zvl5dV2tO2QP8ZTyA8AAAAAAAAAnpiHhhJn+CiCHXL5PcZJ+aWC2NHenSo75B1T5zcqiB3tb06WHfKOafMb/X8QO9r77JD3TJvfqCB2tHs35de7uZr8RgWxo33IDnnPlPl5qwkECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQDAqiB3tQ3bIe6bMb1QQO9q9m/Lr3VxNfqOC2NHeZ4e8Z9r8RgWxo33PDnnP1Pndwsur17yjLb8bzg8AAAAAAAAAnp74URM72nbIG24iv2FB7GjvsUPeM21+RwtiR/soO+Q9U+Y3+ri7He3eTfn1bq4mv1FB7Gj3bsqvd3M1+Y0KYke7d1N+vZuryc9bTSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEglFB7Gj3bsqvd3M1+Y0KYke7d1N+vZuryW9UEDvavZvy691cTX5HC2JH+4Ad8p5p8zvl5dV2tO2QP8ZTyA8AAAAAAAAAnpiHhhJn+CiCHXL5PcZJ+aWC2NHenSo75B1T5zcqiB3tb06WHfKOafMb/X8QO9r77JD3TJvfqCB2tHs35de7uZr8RgWxo33IDnnPlPl5qwkECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQDAqiB3tQ3bIe6bMb1QQO9q9m/Lr3VxNfqOC2NHeZ4e8Z9r8RgWxo33PDnnP1Pndwsur17yjLb8bzg8AAAC4ov8AwGjpQ+5xFXQAAAAASUVORK5CYII=\"\r\n  },\r\n  \"diamond\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFF0lEQVR4nO3dMY4UZxAF4BpLThA52AfwBTiA5TtBYpHaCb6TZedcwAcAkyMSgnGwa9nDzv+2e/+ZVXXzfSm7VKlmHgvS0K8KAAAAaOFwz68/rapnVfWkqr698OzPVfWpqj5U1ccH/h6t9zsejz9W1auqelFVzy+3WlVV/V1Vb6vqzeFw+OOBv0fr+1WD/VJAnlfV9xdeauRd3bzga7Te73g8/lxVv1xnndNRVfX6cDj8uvL7Wt+vmuw3CsjTqvrhauuc91ct/5Om9X63Pzl+r/t/Ql/Ksap+WvGTpPX9qtF+3wy++Nl1d5me2X2/V/V44ajbWS9XfH33+7XZbxSQJ1dcZGTNzO77vbjaFpeZ2f1+bfYbBeTS/yBaYs3M7vtd+h/kS3y34mu736/NfqOAACUgEAkIBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEo4B8ftQt1s/svt/aZ0BdwvsVX9v9fm32GwXk0xUXGVkzs/t+b6+2xWVmdr9fm/1GAflwxUVG1szsvt+bunmY22M53s5cqvv92uw3CsjHunkc42N5V+ue39p6v9snHL6uxwnJv48e/XPF97S+XzXaz8Orxy718OqXdfNQtzXPrVrifd38teo3D69+kEvsBwAAAAAAAABfmU1/1EQPuftN2HdPuh7yE+43Z1896XrIz3K/ObvqSddDPjfT/RbO3GpPuh7yuZnut3DmVnvS9ZDPzXS/hTM91QQCAYFAQCAQEAgEBAIBgUBAIBAQCAQEAgGBQEAgEBAIBAQCAYFAQCAQEAgEBAIBgUBAINhqT7oe8rmZ7rdw5lZ70vWQz810v4Uzt9qTrod8bqb7LZy5yZ50PeR3uN+cffak6yF3vwl60gEAAAAAAABgtfhREz3a0x9FsN/Ge9yHAdGjfWJ1D3nZ7/822+N+NiB6tM9a3ENe9jtnkz3uo4+769Gem2m/uZlt3n+jgOjRnptpv7mZbd5/o4Do0Z6bab+5mW3ef55qAoGAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQjAKiR3tupv3mZrZ5/40Cokd7bqb95ma2ef+NAqJHe26m/eZmtnn/nQ2IHu07VvWQl/2+tNke9yUPr9ajvdOHQ1fz/Tbw/gMAAAAAAACAr8x9RYlb+CiCHnf3e4hF90sB0aN9O6p22OPufieG9xsFRI/2FyNrRz3u7nfW2fuN/j+IHu1Te+txd7+FM0cB0aM9N9P95ma2ud8oIHq079pTj7v7LZzpqSYQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAsEoIHq079pTj7v7LZw5Coge7bmZ7jc3s839RgHRo31qbz3u7rdw5iggerT/s7sed/e7Y3i/PTy8unOPtvvt+H4AAAAAAAAA8PXZ9EdNqvl+esi3//putie9mu+nh/zEZl/fTfakV/P99JCftcnXd6s96d3300M+N7PNflvtSe++nx7yuZlt9ttqT3r3/fSQz81ss5+nmkAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBFvtSe++nx7yuZlt9ttqT3r3/fSQz81ss99We9K776eHfG5mm/022ZNezffTQ37HZl9fD68e00M+Z/evLwAAAPCI/gFIfqYbRE+aDAAAAABJRU5ErkJggg==\"\r\n  },\r\n  \"smalldiamond\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7ElEQVR4nO3dMY5TVxQG4OOgNGioSbKAbIAFROwJmog2acieoqRnA1nAAA0VooDCKewospj78+5cP+s+z/e1PM/5da1/zEjWPVUAAADAFHbf+PebqnpaVY+r6vszz/5SVZ+q6n1Vfbznz5BPvvtalC8V5Ieq+unMoVpuq+pd52vk+598Y5r5vmu84KYuF66Os246npfvlHxjmvlaBXm6Xpamnpnyjc2Ub+HMVkEerxikpWemfGMz5Vs4s1WQc/9BtETPTPnGZsq3cGarIEApCEQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCQasgXy6aon+mfGMz5Vs4s1WQTysGaemZKd/YTPkWzmwV5P2KQVp6Zso3NlO+hTMfNR7+XFX7qnqyWpxTt1X1oeN5+U7JN6aZz+XVbfKNeQj5AAAAAAAAAOCB8VWTtuF8+/3+l6p6WVXP6rDW+JzeVdWbqnq92+3+uufPmPr8aoJ89qQv051vv9//WlW/rRPndFRVvdrtdr93vm7q86tJ8rUKclNVP68W527/1PLfNFPnO35y/Fnf/oQ+l31VPe/4JJn6/GqifPakrzPzZV2uHHWc9aLj+dnPb5p89qSvM/PZainOM3P285smnz3p68w89x/kS/zY8ezs5zdNPreaQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgE9qSvM7P3DqhzeNvx7OznN00+e9LXmflmtRTnmTn7+U2Tz570dWa+rsNlbpeyP85cavbzmyZfqyAf63Ad46XcVt/9rVPnO95w+KouU5L/rh79u+M1U59fTZTP5dVt57q8+kUdLnXrubdqibd1+G/VHy6vvhd70gEAAAAAAACg26a/amIPufMbcN170u0hP+H8xlzXnnR7yO/k/MZc1Z50e8jHZjq/hTO3uifdHvKxmc5v4cyt7km3h3xspvNbONOtJhAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCwVb3pNtDPjbT+S2cudU96faQj810fgtnbnVPuj3kYzOd38KZm9yTbg/5V5zfmOvck24PufMbYE86AAAAAAAAAHTb9FdNavJ89pBv//3d7J70mjyfPeQnNvv+bnJPek2ezx7yO23y/d3qnvTZ89lDPjZzmnxb3ZM+ez57yMdmTpNvq3vSZ89nD/nYzGnyudUEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSDY6p702fPZQz42c5p8W92TPns+e8jHZk6Tb6t70mfPZw/52Mxp8m1yT3pNns8e8q9s9v11eXWbPeRjrv79BQAAAAAAAICHx1dN2uQbcxX57ElfRr4xm83X+jbvTV0uXB1n3XQ8L98p+cY089mTvs5M+cZmTpPPnvR1Zso3NnOafPakrzNTvrGZ0+RzqwkECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQGBP+joz5RubOU0+e9LXmSnf2Mxp8tmTvs5M+cZmTpPvUePhz3XYv/1ktTinbqvqQ8fz8p2Sb0wzn8ur2+Qb8xDyAQAAAJfyL3WaU2vK5kXFAAAAAElFTkSuQmCC\"\r\n  },\r\n  \"square\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFJElEQVR4nO3dQW4UVxAG4OpI2SD2kBwgF8gBRrkTbCy2yYbcBvZRss8FcgAb9ogNkiuLGRtZ7i5187rHr4fv2wamfqT6baGYVxEAAABA/zLzkJnvM/Mm13dz+uyDfPLtLl9mXm0QasxtZl7JJ99u8uWxubdnCngXcnaT5ZPvXPl+mMj4OiKGuX+gFQwR8WrBr5fvIfnaTOabKsiv22WZtGSmfG0z5Zs5c7SlmZnbZhk3DMOsrxryjZOvzVi+qe8gQCgIlBQECgoCBQWBgoJAQUGgoCBQUBAoKAgUFAQKCgIFBYGCgkBBQaCgIFBQECgoCBQUBApTBflw1hRHNwt+rXyPyddmNN9UQf7dMMiUJTPla5sp38yZUwV5GxHnfFkiTzPnku8h+doszXf/9OM5XrdreZpSPvmeJN9dyENmvsvM6w2CXZ8+u/VxY/nke5J8AAAAAAAAAPD9KU9inf43/Os43m97ufLsD3H8Ccq3wzD8/Y2f8TwiXkTEs4j4ca1gJ18i4nNEfIyIT9/4GfI15Oth/yYLkscf4Pp95VCjoyLizTAMfyz8fS8j4ucN8oy5juX/RkG+rxbn62X/po54HiLir6n/voGMiN8WfCd5HhG/bJhnzH8x/yuhfI/NztfT/u31TvqLrYKsNFO+tpnd7N9e76Q/2yzFOjPla5vZzf5NFWTtvxDN8dOCX7v2XyjXnilf28xu9s+rJlBQECgoCBQUBAoKAgUFgYKCQEFBoKAgUFAQKCgIFBQECgoCBQWBgoJAQUGgoCBQUBAoKAgU9non/ctmKdaZKV/bzG72b6930j9vlmKdmfK1zexm//Z6J/3jVkFWmilf28xu9m+0IKcX5t7EeULePf34z4Lf8ymOz1mey3Use19WvocW5etp/+Y8Xv0qjo9qLXm3ao6bOH5b+9Pj1d/k4vPtYP8AAAAAAAAA4DvjTvq0i/9Rjug8Xw/75076PBd3hzw6z9fL/rmTPt/F3CGPzvP1tH/upG8zU762md3snzvp28yUr21mN/vnTvo2M+Vrm9nN/nnVBAoKAgUFgYKCQEFBoKAgUFAQKCgIFBQECgoCBQWBgoJAQUGgoCBQUBAoKAgUFAQKCgIFBYGCO+nbzJSvbWY3++dO+jYz5Wub2c3+uZO+zUz52mZ2s3/upM9zUXfIo/N8Pe2fO+nTLv5x6Og83w72DwAAAAAAAAC+M+6kT7v4H+WIzvP1sH/upM9zcXfIo/N8veyfO+nzXcwd8ug8X0/75076NjPla5vZzf65k77NTPnaZnazf+6kbzNTvraZ3eyfV02goCBQUBAoKAgUFAQKCgIFBYGCgkBBQaCgIFBQECgoCBQUBAoKAgUFgYKCQEFBoKAgUFAQKLiTvs1M+dpmdrN/7qRvM1O+tpnd7J876dvMlK9tZjf75076PBd1hzw6z9fT/rmTPu3iH4eOzvPtYP8AAAAAAAAAgK8y85CZ7zPzJtd3c/rsg3zy7S5fZl5tEGrMbR5vYssn3z7y5bG5t2cKeBdydpPlk+9c+fZ6J12+h+Rrc3F30uVrmynfzJmjLc3Mc/5rrnvDMMz6qiHfOPnajOXzqgkUFAQKCgIFBYGCgkBBQaCgIFBQECgoCBQUBAoKAgUFgYKCQEFBoKAgUFAQKCgIFBQECgoChb3eSZfvMfnaXNSddPnaZso3c+Ze76TL95B8bZbmu3/68Ryv27U8TSmffE+S7y7kITPfZeb1BsGuT5/d+rixfPI9ST4AAADgjP4Hm2pLjkVf1VMAAAAASUVORK5CYII=\"\r\n  },\r\n  \"smallsquare\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE6ElEQVR4nO3dP44URxQH4DdGTtAQY3wAX4ADWNwJEkRqEnwny865gA+wQEKECCAYghkbWrP1tmqqe9TV+33p9uz7qbd/+0earRcBAAAArMLujo/vI+JxRDyMiJ9nnv01Ij5HxIeI+HTh55BPvktV5csK8ktE/DpzqJKbiHjf+Br5vpOvTzHfT4UX7ON64eI0a99wvXxT8vUp5isV5PFyWYpaZsrXN1O+ypmlgjxcMEhJy0z5+mbKVzmzVJC5/yCq0TJTvr6Z8lXOLBUECAWBlIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQKJUkK9XTdE+U76+mfJVziwV5POCQUpaZsrXN1O+ypmlgnxYMEhJy0z5+mbKVznzQeHiLxFxiIhHi8WZuomIjw3XyzclX59iPodXl8nX5z7kAwAAAAAAAIB7Zui3mhwOh98j4kVEPI3j2uA5vY+ItxHxZrfb/X3JJ5CvL1+s4Pkbdk/64XB4GRF/LBNnOioiXu12u9dNL5Lv/1FxQb5YyfNXKsg+In5bLM7t/o3KnySn73x/xd0/AedyiIhntd8J5TsfGQ35YkXP36h70l/E9b64cZr1vOF6+aZa863m+Rt1T/rTxVLMM1O+vpmref5G3ZM+9x+UNZ40XCvfuZZ8q3n+nGoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQGLUPelNZ2jN5F3DtfKda8m3mudv1D3pbxdLMc9M+fpmrub5G3VP+ps4HkZ2LYfTzFryTbXmW83zVyrIpzgex3gtN9FwPu/phL5XcZ0v8n9HZ/5T+wL5JprzxYqevy0cXv08joeStZy7VONdHH8t+LPzcGj5Bj68GgAAAAAAAAD40RbeamLPt/t3CXvSZzL0nu8S92/CnvROw+75vo37dyt70jsMu+e7wP2rnGlP+jIz3b++mau5f/ak1xtyz3eB+1c506kmkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCTsSa835J7vAvevcqY96cvMdP/6Zq7m/tmTXmfYPd8F7l/lTHvS7zb0nu/buH9n7Em/wOb3fLt/9qQDAAAAAAAAQJstvNVktXu+5bMnfS6b2/Mt3/dRYU/6LDaz51u+85FhT3q3Le35lm/KnvQZbGnPt3x9M1fz/NmTXq/l/yXkO2dPOmyNgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgYU96vZY93/Kdsye905b2fMvXN3M1z5896XVa93zLN2VPeqdN7fmWb8Ke9Attfs+3fPakAwAAAAAAAMC2DP1Wk5BPvstte096yPcj+foU85XezbuP64WL06x9w/XyTcnXp5hv1D3p8vXNlK9y5qh70uXrmylf5cxR96TL1zdTvsqZTjWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIDHqnnT5+mbKVzlz1D3p8vXNlK9y5qh70uXrmylf5cwHhYu/xHG/9aPF4kzdRMTHhuvlm5KvTzGfw6vL5OtzH/IBAAAA1/IN7YSWk669SX0AAAAASUVORK5CYII=\"\r\n  },\r\n  \"scissors\": {\r\n    \"icon\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFUUlEQVR4nO3dMW6cRRgG4G+RaCL6AAfgAjkA4k5Jg9JCE+6EoM8FOEBC+ihNiqVYU0TZeT3rnd/6/vXztB57Ps3odWTFnrcKAAAAaOGQPng8Hn+uqldV9aKqvl+8979V9baq3hwOh78e8gW6z1dV31XV86p6VlXfrhrszueq+lRVH6rq4wO/Ruv5OtzvMCDH4/HXqvpt8VBnt6qq14fD4feLPqn5fHW60B83mOecd3W68Eu0nq/L/Z4NyF1y/xx9fAPHqvpl9jt19/nq9J35pw3nOeefmv9O3Xq+Tvf7zeATXtXjDVd3e728YH33+Z5vNciiPbvP1+Z+RwF5sd0sQ5fs2X2+Z5tNsWbP7vO1ud9RQFb/QDTjhwvWdp9v9Q+8q/fsPl+b+x0FBCgBgUhAIBAQCAQEAgGBQEAgEBAIBAQCAYFAQCAQEAgEBAIBgUBAIBAQCAQEAgGBQEAgGAXk0jeWVnh/wdru833ebIo1e3afr839jgLydsNBRi7Zs/t8nzabYs2e3edrc7+jgLyp02Naj+V4t+es7vN92GqQRXt2n6/N/Z4NyN0Lc6/rcYb8/+nHv2c/oft8dXpB8N1G85zzri57/7b1fJ3ud+bx6pd1elTrknehZryv0z9rf1z5eHXb+ar549DVfL4d3C8AAAAAAAAAPDF60sduvifd+d1/fnrSJ7aqG+xJd35fGJ6fnvQ5N9WT7vzOOnt+etLn3FpPuvOb3FNP+jZ76iG/bs8256cnfd4t9aQ7v8k9vWoCgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBDoSZ93Sz3pzm9yTz3p2+yph/y6Pducn570ObfWk+78JvfUk36/m+tJd35fGZ6fnvSxm+9Jd35X98wDAAAAAAAAwBNzX5Fj9//qbz2fHvL9328KSIue6qD1fHrIv7Db+x0FpE1P9UDr+fSQn7XL+x39PUibnuoFa1fRQ36dXd7vKCBteqoXrF1FD/l1dnm/o4C06alesHYVPeTX2eX9etUEAgGBQEAgEBAIBAQCAYFAQCAQEAgEBAIBgUBAIBAQCAQEAgGBQEAgEBAIBAQCAYFAQCAYBaRNT/WCtavoIb/OLu93FJA2PdUL1q6ih/w6u7zfUUDa9FQvWLuKHvLr7PJ+RwFp01M90Ho+PeRf2e39erx6TA/5dW7+fgEAAAAAAADg6Ym/atK957v7fNX8VyWc3xU96d17vrvPV016vkec3xcu60nv3vPdfb5q1PN9jvM766Ke9O49393na9PzPeD8JvccBaR7z3f3+dr0fA84v8k9RwHp3vPdfb42Pd8Dzm9yT6+aQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEo4B07/nuPl+bnu8B5ze55ygg3Xu+u8/Xpud7wPlN7jkKSPee7+7zten5HnB+k3ueDUj3nu/u81Wjnu9znN9XHtaT3r3nu/t81eDx5cT56UkHAAAAAAAAgMvoSR+7iZ7ve7Ser8P96kmf2Kp23PMdtJ6vy/3qSZ+z257vgdbzdbpfPelzdtvzvWDtKrvscdeTvs2ebXq+F6xdZZc97nrS5+2y53vB2lV22ePuVRMIBAQCAYFAQCAQEAgEBAIBgUBAIBAQCAQEAgGBQEAgEBAIBAQCAYFAQCAQEAgEBAIBgUBP+rxd9nwvWLvKLnvc9aRvs2ebnu8Fa1fZZY+7nvQ5u+35XrB2lV32uOtJv9+ue74HWs/X6X71pI89hZ7v1vPt4H4BAACAx/IfV5v6DSxvZ+4AAAAASUVORK5CYII=\"\r\n  },\r\n  \"90R\": {\r\n    \"icon\": \"data:image/png;base64,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\"\r\n  }\r\n}\r\n",
      "icons.ts": "/*\r\nThe MIT License (MIT)\r\n\r\nCopyright (c) 2013-2016 The MicroPython-on-micro:bit Developers, as listed\r\nin the accompanying AUTHORS file\r\n\r\nPermission is hereby granted, free of charge, to any person obtaining a copy\r\nof this software and associated documentation files (the \"Software\"), to deal\r\nin the Software without restriction, including without limitation the rights\r\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\r\ncopies of the Software, and to permit persons to whom the Software is\r\nfurnished to do so, subject to the following conditions:\r\n\r\nThe above copyright notice and this permission notice shall be included in\r\nall copies or substantial portions of the Software.\r\n\r\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\r\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\r\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\r\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\r\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\r\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\r\nTHE SOFTWARE.\r\n*/\r\n\r\n// Images from file microbitconstimage.cpp https://github.com/bbcmicrobit/micropython\r\n\r\nenum IconNames {\r\n    //% block=\"heart\"\r\n    //% jres=icons.heart\r\n    Heart = 0,\r\n    //% block=\"small heart\"\r\n    //% jres=icons.smallheart\r\n    SmallHeart,\r\n    //% block=\"yes\"\r\n    //% jres=icons.yes\r\n    Yes,\r\n    //% block=\"no\"\r\n    //% jres=icons.no\r\n    No,\r\n    //% block=\"happy\"\r\n    //% jres=icons.happy\r\n    Happy,\r\n    //% block=\"sad\"\r\n    //% jres=icons.sad\r\n    Sad,\r\n    //% block=\"confused\"\r\n    //% jres=icons.confused\r\n    Confused,\r\n    //% block=\"angry\"\r\n    //% jres=icons.angry\r\n    Angry,\r\n    //% block=\"asleep\"\r\n    //% jres=icons.asleep\r\n    Asleep,\r\n    //% block=\"surprised\"\r\n    //% jres=icons.surprised\r\n    Surprised,\r\n    //% block=\"silly\"\r\n    //% jres=icons.silly\r\n    Silly,\r\n    //% block=\"fabulous\"\r\n    //% jres=icons.fabulous\r\n    Fabulous,\r\n    //% block=\"meh\"\r\n    //% jres=icons.meh\r\n    Meh,\r\n    //% block=\"t-shirt\"\r\n    //% jres=icons.tshirt\r\n    TShirt,\r\n    //% block=\"roller skate\"\r\n    //% jres=icons.rollerskate\r\n    Rollerskate,\r\n    //% block=\"duck\"\r\n    //% jres=icons.duck\r\n    Duck,\r\n    //% block=\"house\"\r\n    //% jres=icons.house\r\n    House,\r\n    //% block=\"tortoise\"\r\n    //% jres=icons.tortoise\r\n    Tortoise,\r\n    //% block=\"butterfly\"\r\n    //% jres=icons.butterfly\r\n    Butterfly,\r\n    //% block=\"stick figure\"\r\n    //% jres=icons.stickfigure\r\n    StickFigure,\r\n    //% block=\"ghost\"\r\n    //% jres=icons.ghost\r\n    Ghost,\r\n    //% block=\"sword\"\r\n    //% jres=icons.sword\r\n    Sword,\r\n    //% block=\"giraffe\"\r\n    //% jres=icons.giraffe\r\n    Giraffe,\r\n    //% block=\"skull\"\r\n    //% jres=icons.skull\r\n    Skull,\r\n    //% block=\"umbrella\"\r\n    //% jres=icons.umbrella\r\n    Umbrella,\r\n    //% block=\"snake\"\r\n    //% jres=icons.snake\r\n    Snake,\r\n    //% block=\"rabbit\"\r\n    //% jres=icons.rabbit\r\n    Rabbit,\r\n    //% block=\"cow\"\r\n    //% jres=icons.cow\r\n    Cow,\r\n    //% block=\"quarter note\"\r\n    //% jres=icons.quarternote\r\n    QuarterNote,\r\n    //% block=\"eigth note\"\r\n    //% jres=icons.eigthnote\r\n    EigthNote,\r\n    //% block=\"pitchfork\"\r\n    //% jres=icons.pitchfork\r\n    Pitchfork,\r\n    //% block=\"target\"\r\n    //% jres=icons.target\r\n    Target,\r\n    //% block=\"triangle\"\r\n    //% jres=icons.triangle\r\n    Triangle,\r\n    //% block=\"left triangle\"\r\n    //% jres=icons.lefttriangle\r\n    LeftTriangle,\r\n    //% block=\"chess board\"\r\n    //% jres=icons.chessboard\r\n    Chessboard,\r\n    //% block=\"diamond\"\r\n    //% jres=icons.diamond\r\n    Diamond,\r\n    //% block=\"small diamond\"\r\n    //% jres=icons.smalldiamond\r\n    SmallDiamond,\r\n    //% block=\"square\"\r\n    //% jres=icons.square\r\n    Square,\r\n    //% block=\"small square\"\r\n    //% jres=icons.smallsquare\r\n    SmallSquare,\r\n    //% block=\"scissors\"\r\n    //% jres=icons.scissors\r\n    Scissors\r\n}\r\n\r\nenum ArrowNames {\r\n    //% blockIdentity=images.arrowNumber block=\"North\"\r\n    North = 0,\r\n    //% blockIdentity=images.arrowNumber block=\"North East\"\r\n    NorthEast,\r\n    //% blockIdentity=images.arrowNumber block=\"East\"\r\n    East,\r\n    //% blockIdentity=images.arrowNumber block=\"South East\"\r\n    SouthEast,\r\n    //% blockIdentity=images.arrowNumber block=\"South\"\r\n    South,\r\n    //% blockIdentity=images.arrowNumber block=\"South West\"\r\n    SouthWest,\r\n    //% blockIdentity=images.arrowNumber block=\"West\"\r\n    West,\r\n    //% blockIdentity=images.arrowNumber block=\"North West\"\r\n    NorthWest,\r\n}\r\n\r\nnamespace basic {\r\n\r\n    /**\r\n     * Draws the selected icon on the LED screen\r\n     * @param icon the predifined icon id\r\n     * @param interval the amount of time (milliseconds) to show the icon. Default is 600.\r\n     */\r\n    //% weight=90 blockGap=8\r\n    //% blockId=basic_show_icon\r\n    //% block=\"show icon %i\" icon=\"\\uf00a\"\r\n    //% parts=\"ledmatrix\"\r\n    //% help=basic/show-icon\r\n    //% icon.fieldEditor=\"imagedropdown\"\r\n    //% icon.fieldOptions.columns=\"5\"\r\n    //% icon.fieldOptions.width=\"380\"\r\n    //% icon.fieldOptions.maxRows=4\r\n    //% deprecated=true\r\n    export function showIcon(icon: IconNames, interval = 600) {\r\n        let res = images.iconImage(icon)\r\n        res.showImage(0, interval)\r\n    }\r\n\r\n    /**\r\n     * Draws an arrow on the LED screen\r\n     * @param direction the direction of the arrow\r\n     * @param interval the amount of time (milliseconds) to show the icon. Default is 600.\r\n     */\r\n    //% weight=50 blockGap=8\r\n    //% blockId=basic_show_arrow\r\n    //% block=\"show arrow %i=device_arrow\"\r\n    //% parts=\"ledmatrix\"\r\n    //% advanced=true\r\n    //% help=basic/show-arrow\r\n    //% deprecated=true\r\n    export function showArrow(direction: number, interval = 600) {\r\n        let res = images.arrowImage(direction)\r\n        res.showImage(0, interval)\r\n    }\r\n}\r\n\r\n\r\nnamespace images {\r\n\r\n    //% weight=50 blockGap=8\r\n    //% help=images/arrow-image\r\n    //% blockId=builtin_arrow_image block=\"arrow image %i=device_arrow\"\r\n    export function arrowImage(i: ArrowNames): Image {\r\n        switch (i) {\r\n            // compass directions\r\n            case ArrowNames.North: return images.createImage(`\r\n                                        . . # . .\r\n                                        . # # # .\r\n                                        # . # . #\r\n                                        . . # . .\r\n                                        . . # . .`);\r\n            case ArrowNames.NorthEast: return images.createImage(`\r\n                                        . . # # #\r\n                                        . . . # #\r\n                                        . . # . #\r\n                                        . # . . .\r\n                                        # . . . .`);\r\n            case ArrowNames.East: return images.createImage(`\r\n                                        . . # . .\r\n                                        . . . # .\r\n                                        # # # # #\r\n                                        . . . # .\r\n                                        . . # . .`);\r\n            case ArrowNames.SouthEast: return images.createImage(`\r\n                                        # . . . .\r\n                                        . # . . .\r\n                                        . . # . #\r\n                                        . . . # #\r\n                                        . . # # #`);\r\n            case ArrowNames.South: return images.createImage(`\r\n                                        . . # . .\r\n                                        . . # . .\r\n                                        # . # . #\r\n                                        . # # # .\r\n                                        . . # . .`);\r\n            case ArrowNames.SouthWest: return images.createImage(`\r\n                                        . . . . #\r\n                                        . . . # .\r\n                                        # . # . .\r\n                                        # # . . .\r\n                                        # # # . .`);\r\n            case ArrowNames.West: return images.createImage(`\r\n                                        . . # . .\r\n                                        . # . . .\r\n                                        # # # # #\r\n                                        . # . . .\r\n                                        . . # . .`);\r\n            case ArrowNames.NorthWest: return images.createImage(`\r\n                                        # # # . .\r\n                                        # # . . .\r\n                                        # . # . .\r\n                                        . . . # .\r\n                                        . . . . #`);\r\n            default: return images.createImage(`\r\n                                        . . . . .\r\n                                        . . . . .\r\n                                        . . . . .\r\n                                        . . . . .\r\n                                        . . . . .\r\n                                        `);\r\n        }\r\n    }\r\n\r\n    //% weight=50 blockGap=8\r\n    //% help=images/icon-image\r\n    //% blockId=builtin_image block=\"icon image %i\"\r\n    //% i.fieldEditor=\"imagedropdown\"\r\n    //% i.fieldOptions.columns=\"5\"\r\n    //% i.fieldOptions.width=\"380\"\r\n    //% i.fieldOptions.maxRows=4\r\n    export function iconImage(i: IconNames): Image {\r\n        switch (i) {\r\n            case IconNames.Heart: return images.createImage(`\r\n                                        . # . # .\r\n                                        # # # # #\r\n                                        # # # # #\r\n                                        . # # # .\r\n                                        . . # . .`);\r\n\r\n            case IconNames.SmallHeart: return images.createImage(`\r\n                                        . . . . .\r\n                                        . # . # .\r\n                                        . # # # .\r\n                                        . . # . .\r\n                                        . . . . .`);\r\n            //faces\r\n            case IconNames.Happy: return images.createImage(`\r\n                                        . . . . .\r\n                                        . # . # .\r\n                                        . . . . .\r\n                                        # . . . #\r\n                                        . # # # .`);\r\n            case IconNames.Sad: return images.createImage(`\r\n                                        . . . . .\r\n                                        . # . # .\r\n                                        . . . . .\r\n                                        . # # # .\r\n                                        # . . . #`);\r\n            case IconNames.Confused: return images.createImage(`\r\n                                        . . . . .\r\n                                        . # . # .\r\n                                        . . . . .\r\n                                        . # . # .\r\n                                        # . # . #`);\r\n            case IconNames.Angry: return images.createImage(`\r\n                                        # . . . #\r\n                                        . # . # .\r\n                                        . . . . .\r\n                                        # # # # #\r\n                                        # . # . #`);\r\n            case IconNames.Asleep: return images.createImage(`\r\n                                        . . . . .\r\n                                        # # . # #\r\n                                        . . . . .\r\n                                        . # # # .\r\n                                        . . . . .`);\r\n            case IconNames.Surprised: return images.createImage(`\r\n                                        . # . # .\r\n                                        . . . . .\r\n                                        . . # . .\r\n                                        . # . # .\r\n                                        . . # . .`);\r\n            case IconNames.Silly: return images.createImage(`\r\n                                        # . . . #\r\n                                        . . . . .\r\n                                        # # # # #\r\n                                        . . . # #\r\n                                        . . . # #`);\r\n            case IconNames.Fabulous: return images.createImage(`\r\n                                        # # # # #\r\n                                        # # . # #\r\n                                        . . . . .\r\n                                        . # . # .\r\n                                        . # # # .`);\r\n            case IconNames.Meh: return images.createImage(`\r\n                                        # # . # #\r\n                                        . . . . .\r\n                                        . . . # .\r\n                                        . . # . .\r\n                                        . # . . .`);\r\n            case IconNames.Yes: return images.createImage(`\r\n                                        . . . . .\r\n                                        . . . . #\r\n                                        . . . # .\r\n                                        # . # . .\r\n                                        . # . . .`);\r\n            case IconNames.No: return images.createImage(`\r\n                                        # . . . #\r\n                                        . # . # .\r\n                                        . . # . .\r\n                                        . # . # .\r\n                                        # . . . #`);\r\n            case IconNames.Triangle: return images.createImage(`\r\n                                        . . . . .\r\n                                        . . # . .\r\n                                        . # . # .\r\n                                        # # # # #\r\n                                        . . . . .`);\r\n            case IconNames.LeftTriangle: return images.createImage(`\r\n                                        # . . . .\r\n                                        # # . . .\r\n                                        # . # . .\r\n                                        # . . # .\r\n                                        # # # # #`);\r\n            case IconNames.Chessboard: return images.createImage(`\r\n                                        . # . # .\r\n                                        # . # . #\r\n                                        . # . # .\r\n                                        # . # . #\r\n                                        . # . # .`);\r\n            case IconNames.Diamond: return images.createImage(`\r\n                                        . . # . .\r\n                                        . # . # .\r\n                                        # . . . #\r\n                                        . # . # .\r\n                                        . . # . .`);\r\n            case IconNames.SmallDiamond: return images.createImage(`\r\n                                        . . . . .\r\n                                        . . # . .\r\n                                        . # . # .\r\n                                        . . # . .\r\n                                        . . . . .`);\r\n            case IconNames.Square: return images.createImage(`\r\n                                        # # # # #\r\n                                        # . . . #\r\n                                        # . . . #\r\n                                        # . . . #\r\n                                        # # # # #`);\r\n            case IconNames.SmallSquare: return images.createImage(`\r\n                                        . . . . .\r\n                                        . # # # .\r\n                                        . # . # .\r\n                                        . # # # .\r\n                                        . . . . .`);\r\n\r\n            case IconNames.Scissors: return images.createImage(`\r\n                                        # # . . #\r\n                                        # # . # .\r\n                                        . . # . .\r\n                                        # # . # .\r\n                                        # # . . #`);\r\n            // The following images were designed by Abbie Brooks.\r\n            case IconNames.TShirt: return images.createImage(`\r\n                                        # # . # #\r\n                                        # # # # #\r\n                                        . # # # .\r\n                                        . # # # .\r\n                                        . # # # .`);\r\n            case IconNames.Rollerskate: return images.createImage(`\r\n                                        . . . # #\r\n                                        . . . # #\r\n                                        # # # # #\r\n                                        # # # # #\r\n                                        . # . # .`);\r\n            case IconNames.Duck: return images.createImage(`\r\n                                        . # # . .\r\n                                        # # # . .\r\n                                        . # # # #\r\n                                        . # # # .\r\n                                        . . . . .`);\r\n            case IconNames.House: return images.createImage(`\r\n                                        . . # . .\r\n                                        . # # # .\r\n                                        # # # # #\r\n                                        . # # # .\r\n                                        . # . # .`);\r\n            case IconNames.Tortoise: return images.createImage(`\r\n                                        . . . . .\r\n                                        . # # # .\r\n                                        # # # # #\r\n                                        . # . # .\r\n                                        . . . . .`);\r\n            case IconNames.Butterfly: return images.createImage(`\r\n                                        # # . # #\r\n                                        # # # # #\r\n                                        . . # . .\r\n                                        # # # # #\r\n                                        # # . # #`);\r\n            case IconNames.StickFigure: return images.createImage(`\r\n                                        . . # . .\r\n                                        # # # # #\r\n                                        . . # . .\r\n                                        . # . # .\r\n                                        # . . . #`);\r\n            case IconNames.Ghost: return images.createImage(`\r\n                                        . # # # .\r\n                                        # . # . #\r\n                                        # # # # #\r\n                                        # # # # #\r\n                                        # . # . #`);\r\n            case IconNames.Sword: return images.createImage(`\r\n                                        . . # . .\r\n                                        . . # . .\r\n                                        . . # . .\r\n                                        . # # # .\r\n                                        . . # . .`);\r\n            case IconNames.Giraffe: return images.createImage(`\r\n                                        # # . . .\r\n                                        . # . . .\r\n                                        . # . . .\r\n                                        . # # # .\r\n                                        . # . # .`);\r\n            case IconNames.Skull: return images.createImage(`\r\n                                        . # # # .\r\n                                        # . # . #\r\n                                        # # # # #\r\n                                        . # # # .\r\n                                        . # # # .`);\r\n            case IconNames.Umbrella: return images.createImage(`\r\n                                        . # # # .\r\n                                        # # # # #\r\n                                        . . # . .\r\n                                        # . # . .\r\n                                        # # # . .`);\r\n            case IconNames.Snake: return images.createImage(`\r\n                                        # # . . .\r\n                                        # # . # #\r\n                                        . # . # .\r\n                                        . # # # .\r\n                                        . . . . .`);\r\n            // animals\r\n            case IconNames.Rabbit: return images.createImage(`\r\n                                        # . # . .\r\n                                        # . # . .\r\n                                        # # # # .\r\n                                        # # . # .\r\n                                        # # # # .`);\r\n            case IconNames.Cow: return images.createImage(`\r\n                                        # . . . #\r\n                                        # . . . #\r\n                                        # # # # #\r\n                                        . # # # .\r\n                                        . . # . .`);\r\n            // musical notes\r\n            case IconNames.QuarterNote: return images.createImage(`\r\n                                        . . # . .\r\n                                        . . # . .\r\n                                        . . # . .\r\n                                        # # # . .\r\n                                        # # # . .`);\r\n            case IconNames.EigthNote: return images.createImage(`\r\n                                        . . # . .\r\n                                        . . # # .\r\n                                        . . # . #\r\n                                        # # # . .\r\n                                        # # # . .`);\r\n            // other icons\r\n            case IconNames.Pitchfork: return images.createImage(`\r\n                                        # . # . #\r\n                                        # . # . #\r\n                                        # # # # #\r\n                                        . . # . .\r\n                                        . . # . .`);\r\n            case IconNames.Target: return images.createImage(`\r\n                                        . . # . .\r\n                                        . # # # .\r\n                                        # # . # #\r\n                                        . # # # .\r\n                                        . . # . .`);\r\n            default: return images.createImage(`\r\n                                        . . . . .\r\n                                        . . . . .\r\n                                        . . . . .\r\n                                        . . . . .\r\n                                        . . . . .\r\n                                        `);\r\n        }\r\n    }\r\n\r\n    //% weight=50 blockGap=8\r\n    //% help=images/arrow-number\r\n    //% blockId=device_arrow block=\"%arrow\"\r\n    //% shim=TD_ID\r\n    export function arrowNumber(arrow: ArrowNames): number {\r\n        return arrow;\r\n    }\r\n}\r\n",
      "images.cpp": "#include \"pxt.h\"\r\n\r\nPXT_VTABLE_BEGIN(RefMImage, 0, 0)\r\nPXT_VTABLE_END\r\n\r\nRefMImage::RefMImage(ImageData *d) : PXT_VTABLE_INIT(RefMImage), img(d) {\r\n    img->incr();\r\n}\r\n\r\nvoid RefMImage::destroy(RefMImage *t) {\r\n    t->img->decr();\r\n}\r\n\r\nvoid RefMImage::print(RefMImage *t) {\r\n    DMESG(\"RefMImage %p r=%d size=%d x %d\", t, t->refcnt, img->width, img->height);\r\n}\r\n\r\nvoid RefMImage::makeWritable() {\r\n    if (img->isReadOnly()) {\r\n        MicroBitImage i(img);\r\n        img = i.clone().leakData();\r\n    }\r\n}\r\n\r\n/**\r\n * Creation, manipulation and display of LED images.\r\n */\r\n//% color=#7600A8 weight=31 icon=\"\\uf03e\"\r\n//% advanced=true\r\n//% deprecated=true\r\nnamespace images {\r\n/**\r\n * Creates an image that fits on the LED screen.\r\n */\r\n//% weight=75 help=images/create-image\r\n//% blockId=device_build_image block=\"create image\"\r\n//% parts=\"ledmatrix\"\r\nImage createImage(ImageLiteral_ leds) {\r\n    return new RefMImage(imageBytes(leds));\r\n}\r\n\r\n/**\r\n * Creates an image with 2 frames.\r\n */\r\n//% weight=74 help=images/create-big-image\r\n//% blockId=device_build_big_image block=\"create big image\" imageLiteral=2\r\n//% parts=\"ledmatrix\"\r\nImage createBigImage(ImageLiteral_ leds) {\r\n    return createImage(leds);\r\n}\r\n} // namespace images\r\n\r\nnamespace ImageMethods {\r\n/**\r\n * Plots the image at a given column to the screen\r\n */\r\n//% help=images/plot-image\r\n//% parts=\"ledmatrix\"\r\nvoid plotImage(Image i, int xOffset = 0) {\r\n    uBit.display.print(MicroBitImage(i->img), -xOffset, 0, 0, 0);\r\n}\r\n\r\n/**\r\n * Shows an frame from the image at offset ``x offset``.\r\n * @param xOffset column index to start displaying the image\r\n */\r\n//% help=images/show-image weight=80 blockNamespace=images\r\n//% blockId=device_show_image_offset block=\"show image %sprite(myImage)|at offset %offset\" blockGap=8\r\n//% parts=\"ledmatrix\" async\r\nvoid showImage(Image sprite, int xOffset, int interval = 400) {\r\n    uBit.display.print(MicroBitImage(sprite->img), -xOffset, 0, 0, interval);\r\n}\r\n\r\n/**\r\n * Draws the ``index``-th frame of the image on the screen.\r\n * @param xOffset column index to start displaying the image\r\n */\r\n//% help=images/plot-frame weight=80\r\n//% parts=\"ledmatrix\"\r\nvoid plotFrame(Image i, int xOffset) {\r\n    // TODO showImage() used in original implementation\r\n    plotImage(i, xOffset * 5);\r\n}\r\n\r\n/**\r\n * Scrolls an image .\r\n * @param frameOffset x offset moved on each animation step, eg: 1, 2, 5\r\n * @param interval time between each animation step in milli seconds, eg: 200\r\n */\r\n//% help=images/scroll-image weight=79 async blockNamespace=images\r\n//% blockId=device_scroll_image\r\n//% block=\"scroll image %sprite(myImage)|with offset %frameoffset|and interval (ms) %delay\"\r\n//% blockGap=8 parts=\"ledmatrix\"\r\nvoid scrollImage(Image id, int frameOffset, int interval) {\r\n    MicroBitImage i(id->img);\r\n    uBit.display.animate(i, interval, frameOffset, MICROBIT_DISPLAY_ANIMATE_DEFAULT_POS, 0);\r\n}\r\n\r\n/**\r\n * Sets all pixels off.\r\n */\r\n//% help=images/clear\r\n//% parts=\"ledmatrix\"\r\nvoid clear(Image i) {\r\n    i->makeWritable();\r\n    MicroBitImage(i->img).clear();\r\n}\r\n\r\n/**\r\n * Sets a specific pixel brightness at a given position\r\n */\r\n//%\r\n//% parts=\"ledmatrix\"\r\nvoid setPixelBrightness(Image i, int x, int y, int value) {\r\n    i->makeWritable();\r\n    MicroBitImage(i->img).setPixelValue(x, y, value);\r\n}\r\n\r\n/**\r\n * Gets the pixel brightness ([0..255]) at a given position\r\n */\r\n//%\r\n//% parts=\"ledmatrix\"\r\nint pixelBrightness(Image i, int x, int y) {\r\n    int pix = MicroBitImage(i->img).getPixelValue(x, y);\r\n    if (pix < 0)\r\n        return 0;\r\n    return pix;\r\n}\r\n\r\n/**\r\n * Gets the width in columns\r\n */\r\n//% help=functions/width\r\nint width(Image i) {\r\n    return i->img->width;\r\n}\r\n\r\n/**\r\n * Gets the height in rows (always 5)\r\n */\r\n//%\r\nint height(Image i) {\r\n    return i->img->height;\r\n}\r\n\r\n/**\r\n * Set a pixel state at position ``(x,y)``\r\n * @param x TODO\r\n * @param y TODO\r\n * @param value TODO\r\n */\r\n//% help=images/set-pixel\r\n//% parts=\"ledmatrix\"\r\nvoid setPixel(Image i, int x, int y, bool value) {\r\n    setPixelBrightness(i, x, y, value ? 255 : 0);\r\n}\r\n\r\n/**\r\n * Get the pixel state at position ``(x,y)``\r\n * @param x TODO\r\n * @param y TODO\r\n */\r\n//% help=images/pixel\r\n//% parts=\"ledmatrix\"\r\nbool pixel(Image i, int x, int y) {\r\n    return pixelBrightness(i, x, y) > 0;\r\n}\r\n\r\n/**\r\n * Shows a particular frame of the image strip.\r\n * @param frame TODO\r\n */\r\n//% weight=70 help=images/show-frame\r\n//% parts=\"ledmatrix\"\r\nvoid showFrame(Image i, int frame, int interval = 400) {\r\n    showImage(i, frame * 5, interval);\r\n}\r\n} // namespace ImageMethods",
      "input.cpp": "#include \"pxt.h\"\r\n\r\nenum class Button {\r\n    A = MICROBIT_ID_BUTTON_A,\r\n    B = MICROBIT_ID_BUTTON_B,\r\n    //% block=\"A+B\"\r\n    AB = MICROBIT_ID_BUTTON_AB,\r\n};\r\n\r\nenum class Dimension {\r\n    //% block=x\r\n    X = 0,\r\n    //% block=y\r\n    Y = 1,\r\n    //% block=z\r\n    Z = 2,\r\n    //% block=strength\r\n    Strength = 3,\r\n};\r\n\r\nenum class Rotation {\r\n    //% block=pitch\r\n    Pitch = 0,\r\n    //% block=roll\r\n    Roll = 1,\r\n};\r\n\r\nenum class TouchPin {\r\n    P0 = MICROBIT_ID_IO_P0,\r\n    P1 = MICROBIT_ID_IO_P1,\r\n    P2 = MICROBIT_ID_IO_P2,\r\n};\r\n\r\nenum class AcceleratorRange {\r\n    /**\r\n     * The accelerator measures forces up to 1 gravity\r\n     */\r\n    //%  block=\"1g\"\r\n    OneG = 1,\r\n    /**\r\n     * The accelerator measures forces up to 2 gravity\r\n     */\r\n    //%  block=\"2g\"\r\n    TwoG = 2,\r\n    /**\r\n     * The accelerator measures forces up to 4 gravity\r\n     */\r\n    //% block=\"4g\"\r\n    FourG = 4,\r\n    /**\r\n     * The accelerator measures forces up to 8 gravity\r\n     */\r\n    //% block=\"8g\"\r\n    EightG = 8\r\n};\r\n\r\nenum class Gesture {\r\n    /**\r\n     * Raised when shaken\r\n     */\r\n    //% block=shake\r\n    //% jres=gestures.shake\r\n    Shake = MICROBIT_ACCELEROMETER_EVT_SHAKE,\r\n    /**\r\n     * Raised when the logo is upward and the screen is vertical\r\n     */\r\n    //% block=\"logo up\"\r\n    //% jres=gestures.tiltforward\r\n    LogoUp = MICROBIT_ACCELEROMETER_EVT_TILT_UP,\r\n    /**\r\n     * Raised when the logo is downward and the screen is vertical\r\n     */\r\n    //% block=\"logo down\"\r\n    //% jres=gestures.tiltbackwards\r\n    LogoDown = MICROBIT_ACCELEROMETER_EVT_TILT_DOWN,\r\n    /**\r\n     * Raised when the screen is pointing down and the board is horizontal\r\n     */\r\n    //% block=\"screen up\"\r\n    //% jres=gestures.frontsideup\r\n    ScreenUp = MICROBIT_ACCELEROMETER_EVT_FACE_UP,\r\n    /**\r\n     * Raised when the screen is pointing up and the board is horizontal\r\n     */\r\n    //% block=\"screen down\"\r\n    //% jres=gestures.backsideup\r\n    ScreenDown = MICROBIT_ACCELEROMETER_EVT_FACE_DOWN,\r\n    /**\r\n     * Raised when the screen is pointing left\r\n     */\r\n    //% block=\"tilt left\"\r\n    //% jres=gestures.tiltleft\r\n    TiltLeft = MICROBIT_ACCELEROMETER_EVT_TILT_LEFT,\r\n    /**\r\n     * Raised when the screen is pointing right\r\n     */\r\n    //% block=\"tilt right\"\r\n    //% jres=gestures.tiltright\r\n    TiltRight = MICROBIT_ACCELEROMETER_EVT_TILT_RIGHT,\r\n    /**\r\n     * Raised when the board is falling!\r\n     */\r\n    //% block=\"free fall\"\r\n    //% jres=gestures.freefall\r\n    FreeFall = MICROBIT_ACCELEROMETER_EVT_FREEFALL,\r\n    /**\r\n    * Raised when a 3G shock is detected\r\n    */\r\n    //% block=\"3g\"\r\n    //% jres=gestures.impact3g\r\n    ThreeG = MICROBIT_ACCELEROMETER_EVT_3G,\r\n    /**\r\n    * Raised when a 6G shock is detected\r\n    */\r\n    //% block=\"6g\"\r\n    //% jres=gestures.impact6g\r\n    SixG = MICROBIT_ACCELEROMETER_EVT_6G,\r\n    /**\r\n    * Raised when a 8G shock is detected\r\n    */\r\n    //% block=\"8g\"\r\n    //% jres=gestures.impact8g\r\n    EightG = MICROBIT_ACCELEROMETER_EVT_8G\r\n};\r\n\r\nenum class MesDpadButtonInfo {\r\n    //% block=\"A down\"\r\n    ADown = MES_DPAD_BUTTON_A_DOWN,\r\n    //% block=\"A up\"\r\n    AUp = MES_DPAD_BUTTON_A_UP,\r\n    //% block=\"B down\"\r\n    BDown = MES_DPAD_BUTTON_B_DOWN,\r\n    //% block=\"B up\"\r\n    BUp = MES_DPAD_BUTTON_B_UP,\r\n    //% block=\"C down\"\r\n    CDown = MES_DPAD_BUTTON_C_DOWN,\r\n    //% block=\"C up\"\r\n    CUp = MES_DPAD_BUTTON_C_UP,\r\n    //% block=\"D down\"\r\n    DDown = MES_DPAD_BUTTON_D_DOWN,\r\n    //% block=\"D up\"\r\n    DUp = MES_DPAD_BUTTON_D_UP,\r\n    //% block=\"1 down\"\r\n    _1Down = MES_DPAD_BUTTON_1_DOWN,\r\n    //% block=\"1 up\"\r\n    _1Up = MES_DPAD_BUTTON_1_UP,\r\n    //% block=\"2 down\"\r\n    _2Down = MES_DPAD_BUTTON_2_DOWN,\r\n    //% block=\"2 up\"\r\n    _2Up = MES_DPAD_BUTTON_2_UP,\r\n    //% block=\"3 down\"\r\n    _3Down = MES_DPAD_BUTTON_3_DOWN,\r\n    //% block=\"3 up\"\r\n    _3Up = MES_DPAD_BUTTON_3_UP,\r\n    //% block=\"4 down\"\r\n    _4Down = MES_DPAD_BUTTON_4_DOWN,\r\n    //% block=\"4 up\"\r\n    _4Up = MES_DPAD_BUTTON_4_UP,\r\n};\r\n\r\n//% color=#D400D4 weight=111 icon=\"\\uf192\"\r\nnamespace input {\r\n    /**\r\n     * Do something when a button (A, B or both A+B) is pushed down and released again.\r\n     * @param button the button that needs to be pressed\r\n     * @param body code to run when event is raised\r\n     */\r\n    //% help=input/on-button-pressed weight=85 blockGap=16\r\n    //% blockId=device_button_event block=\"on button|%NAME|pressed\"\r\n    //% parts=\"buttonpair\"\r\n    void onButtonPressed(Button button, Action body) {\r\n        registerWithDal((int)button, MICROBIT_BUTTON_EVT_CLICK, body);\r\n    }\r\n\r\n    /**\r\n     * Do something when when a gesture is done (like shaking the micro:bit).\r\n     * @param gesture the type of gesture to track, eg: Gesture.Shake\r\n     * @param body code to run when gesture is raised\r\n     */\r\n    //% help=input/on-gesture weight=84 blockGap=16\r\n    //% blockId=device_gesture_event block=\"on |%NAME\"\r\n    //% parts=\"accelerometer\"\r\n    //% NAME.fieldEditor=\"gestures\" NAME.fieldOptions.columns=4\r\n    void onGesture(Gesture gesture, Action body) {\r\n        int gi = (int)gesture;\r\n        if (gi == MICROBIT_ACCELEROMETER_EVT_3G && uBit.accelerometer.getRange() < 3)\r\n            uBit.accelerometer.setRange(4);\r\n        else if ((gi == MICROBIT_ACCELEROMETER_EVT_6G || gi == MICROBIT_ACCELEROMETER_EVT_8G) && uBit.accelerometer.getRange() < 6)\r\n            uBit.accelerometer.setRange(8);\r\n        registerWithDal(MICROBIT_ID_GESTURE, gi, body);\r\n    }\r\n\r\n     /**\r\n     * Do something when a pin is touched and released again (while also touching the GND pin).\r\n     * @param name the pin that needs to be pressed, eg: TouchPin.P0\r\n     * @param body the code to run when the pin is pressed\r\n     */\r\n    //% help=input/on-pin-pressed weight=83 blockGap=32\r\n    //% blockId=device_pin_event block=\"on pin %name|pressed\"\r\n    void onPinPressed(TouchPin name, Action body) {\r\n        auto pin = getPin((int)name);\r\n        if (!pin) return;\r\n\r\n        // Forces the PIN to switch to makey-makey style detection.\r\n        pin->isTouched();\r\n        registerWithDal((int)name, MICROBIT_BUTTON_EVT_CLICK, body);\r\n    }\r\n\r\n    /**\r\n     * Do something when a pin is released.\r\n     * @param name the pin that needs to be released, eg: TouchPin.P0\r\n     * @param body the code to run when the pin is released\r\n     */\r\n    //% help=input/on-pin-released weight=6 blockGap=16\r\n    //% blockId=device_pin_released block=\"on pin %NAME|released\"\r\n    //% advanced=true\r\n    void onPinReleased(TouchPin name, Action body) {\r\n        auto pin = getPin((int)name);\r\n        if (!pin) return;\r\n\r\n        // Forces the PIN to switch to makey-makey style detection.\r\n        pin->isTouched();\r\n        registerWithDal((int)name, MICROBIT_BUTTON_EVT_UP, body);\r\n    }\r\n\r\n    /**\r\n     * Get the button state (pressed or not) for ``A`` and ``B``.\r\n     * @param button the button to query the request, eg: Button.A\r\n     */\r\n    //% help=input/button-is-pressed weight=60\r\n    //% block=\"button|%NAME|is pressed\"\r\n    //% blockId=device_get_button2\r\n    //% icon=\"\\uf192\" blockGap=8\r\n    //% parts=\"buttonpair\"\r\n    bool buttonIsPressed(Button button) {\r\n      if (button == Button::A)\r\n        return uBit.buttonA.isPressed();\r\n      else if (button == Button::B)\r\n        return uBit.buttonB.isPressed();\r\n      else if (button == Button::AB)\r\n        return uBit.buttonAB.isPressed();\r\n      return false;\r\n    }\r\n\r\n    /**\r\n     * Get the pin state (pressed or not). Requires to hold the ground to close the circuit.\r\n     * @param name pin used to detect the touch, eg: TouchPin.P0\r\n     */\r\n    //% help=input/pin-is-pressed weight=58\r\n    //% blockId=\"device_pin_is_pressed\" block=\"pin %NAME|is pressed\"\r\n    //% blockGap=8\r\n    bool pinIsPressed(TouchPin name) {\r\n        auto pin = getPin((int)name);\r\n        return pin && pin->isTouched();\r\n    }\r\n\r\n    int getAccelerationStrength() {\r\n        double x = uBit.accelerometer.getX();\r\n        double y = uBit.accelerometer.getY();\r\n        double z = uBit.accelerometer.getZ();\r\n        return (int)sqrt(x*x+y*y+z*z);\r\n    }\r\n\r\n    /**\r\n     * Get the acceleration value in milli-gravitys (when the board is laying flat with the screen up, x=0, y=0 and z=-1024)\r\n     * @param dimension TODO\r\n     */\r\n    //% help=input/acceleration weight=58\r\n    //% blockId=device_acceleration block=\"acceleration (mg)|%NAME\" blockGap=8\r\n    //% parts=\"accelerometer\"\r\n    int acceleration(Dimension dimension) {\r\n      switch (dimension) {\r\n      case Dimension::X: return uBit.accelerometer.getX();\r\n      case Dimension::Y: return uBit.accelerometer.getY();\r\n      case Dimension::Z: return uBit.accelerometer.getZ();\r\n      case Dimension::Strength: return getAccelerationStrength();\r\n      }\r\n      return 0;\r\n    }\r\n\r\n    /**\r\n     * Reads the light level applied to the LED screen in a range from ``0`` (dark) to ``255`` bright.\r\n     */\r\n    //% help=input/light-level weight=57\r\n    //% blockId=device_get_light_level block=\"light level\" blockGap=8\r\n    //% parts=\"ledmatrix\"\r\n    int lightLevel() {\r\n        return uBit.display.readLightLevel();\r\n    }\r\n\r\n    /**\r\n     * Get the current compass heading in degrees.\r\n     */\r\n    //% help=input/compass-heading\r\n    //% weight=56\r\n    //% blockId=device_heading block=\"compass heading (°)\" blockGap=8\r\n    //% parts=\"compass\"\r\n    int compassHeading() {\r\n        return uBit.compass.heading();\r\n    }\r\n\r\n\r\n    /**\r\n     * Gets the temperature in Celsius degrees (°C).\r\n     */\r\n    //% weight=55\r\n    //% help=input/temperature\r\n    //% blockId=device_temperature block=\"temperature (°C)\" blockGap=8\r\n    //% parts=\"thermometer\"\r\n    int temperature() {\r\n        return uBit.thermometer.getTemperature();\r\n    }\r\n\r\n    /**\r\n     * The pitch or roll of the device, rotation along the ``x-axis`` or ``y-axis``, in degrees.\r\n     * @param kind TODO\r\n     */\r\n    //% help=input/rotation weight=52\r\n    //% blockId=device_get_rotation block=\"rotation (°)|%NAME\" blockGap=8\r\n    //% parts=\"accelerometer\" advanced=true\r\n    int rotation(Rotation kind) {\r\n      switch (kind) {\r\n      case Rotation::Pitch: return uBit.accelerometer.getPitch();\r\n      case Rotation::Roll: return uBit.accelerometer.getRoll();\r\n      }\r\n      return 0;\r\n    }\r\n\r\n    /**\r\n     * Get the magnetic force value in ``micro-Teslas`` (``µT``). This function is not supported in the simulator.\r\n     * @param dimension TODO\r\n     */\r\n    //% help=input/magnetic-force weight=51\r\n    //% blockId=device_get_magnetic_force block=\"magnetic force (µT)|%NAME\" blockGap=8\r\n    //% parts=\"compass\"\r\n    //% advanced=true\r\n    int magneticForce(Dimension dimension) {\r\n      if (!uBit.compass.isCalibrated())\r\n        uBit.compass.calibrate();\r\n\r\n      switch (dimension) {\r\n      case Dimension::X: return uBit.compass.getX() / 1000;\r\n      case Dimension::Y: return uBit.compass.getY() / 1000;\r\n      case Dimension::Z: return uBit.compass.getZ() / 1000;\r\n      case Dimension::Strength: return uBit.compass.getFieldStrength() / 1000;\r\n      }\r\n      return 0;\r\n    }\r\n\r\n    /**\r\n     * Gets the number of milliseconds elapsed since power on.\r\n     */\r\n    //% help=input/running-time weight=50 blockGap=8\r\n    //% blockId=device_get_running_time block=\"running time (ms)\"\r\n    //% advanced=true\r\n    int runningTime() {\r\n        return system_timer_current_time();\r\n    }\r\n\r\n    /**\r\n     * Gets the number of microseconds elapsed since power on.\r\n     */\r\n    //% help=input/running-time-micros weight=49\r\n    //% blockId=device_get_running_time_micros block=\"running time (micros)\"\r\n    //% advanced=true\r\n    int runningTimeMicros() {\r\n        return system_timer_current_time_us();\r\n    }\r\n\r\n    /**\r\n     * Obsolete, compass calibration is automatic.\r\n     */\r\n    //% help=input/calibrate-compass advanced=true\r\n    //% blockId=\"input_compass_calibrate\" block=\"calibrate compass\"\r\n    //% weight=45\r\n    void calibrateCompass() {\r\n        uBit.compass.calibrate();\r\n    }\r\n\r\n    /**\r\n     * Sets the accelerometer sample range in gravities.\r\n     * @param range a value describe the maximum strengh of acceleration measured\r\n     */\r\n    //% help=input/set-accelerometer-range\r\n    //% blockId=device_set_accelerometer_range block=\"set accelerometer|range %range\"\r\n    //% weight=5\r\n    //% parts=\"accelerometer\"\r\n    //% advanced=true\r\n    void setAccelerometerRange(AcceleratorRange range) {\r\n        uBit.accelerometer.setRange((int)range);\r\n    }\r\n}\r\n",
      "input.ts": "/**\r\n * Events and data from sensors\r\n */\r\n//% color=#D400D4 weight=111 icon=\"\\uf192\"\r\n//%deprecated =true\r\nnamespace input {\r\n    /**\r\n     * Attaches code to run when the screen is facing up.\r\n     * @param body TODO\r\n     */\r\n    //% help=input/on-screen-up\r\n    export function onScreenUp(body: () => void): void {\r\n        onGesture(Gesture.ScreenUp, body);\r\n    }\r\n\r\n    /**\r\n     * Attaches code to run when the screen is facing down.\r\n     * @param body TODO\r\n     */\r\n    //% help=input/on-screen-down\r\n    export function onScreenDown(body: () => void): void {\r\n        onGesture(Gesture.ScreenDown, body);\r\n    }\r\n\r\n    /**\r\n     * Attaches code to run when the device is shaken.\r\n     * @param body TODO\r\n     */\r\n    //% help=input/on-shake\r\n    export function onShake(body: () => void): void {\r\n        onGesture(Gesture.Shake, body);\r\n    }\r\n\r\n    /**\r\n     * Attaches code to run when the logo is oriented upwards and the board is vertical.\r\n     * @param body TODO\r\n     */\r\n    //% help=input/on-logo-up\r\n    export function onLogoUp(body: () => void): void {\r\n        onGesture(Gesture.LogoUp, body);\r\n    }\r\n\r\n    /**\r\n     * Attaches code to run when the logo is oriented downwards and the board is vertical.\r\n     * @param body TODO\r\n     */\r\n    //% help=input/on-logo-down\r\n    export function onLogoDown(body: () => void): void {\r\n        onGesture(Gesture.LogoDown, body);\r\n    }\r\n\r\n    /**\r\n     * Obsolete, use input.calibrateCompass instead.\r\n     */\r\n    //% weight=0 help=input/calibrate-compass\r\n    export function calibrate() {\r\n        input.calibrateCompass();\r\n    }\r\n}\r\n",
      "led.cpp": "#include \"pxt.h\"\r\n\r\nenum class DisplayMode_ {\r\n    //% block=\"black and white\"\r\n    BackAndWhite = DISPLAY_MODE_BLACK_AND_WHITE,\r\n    //% block=\"greyscale\"\r\n    Greyscale = DISPLAY_MODE_GREYSCALE,\r\n    // TODO DISPLAY_MODE_BLACK_AND_WHITE_LIGHT_SENSE\r\n};\r\n\r\n//% color=#7600A8 weight=101 icon=\"\\uf205\"\r\nnamespace led {\r\n\r\n    /**\r\n     * Turn on the specified LED using x, y coordinates (x is horizontal, y is vertical). (0,0) is upper left.\r\n     * @param x the horizontal coordinate of the LED starting at 0\r\n     * @param y the vertical coordinate of the LED starting at 0\r\n     */\r\n    //% help=led/plot weight=78\r\n    //% blockId=device_plot block=\"plot|x %x|y %y\" blockGap=8\r\n    //% parts=\"ledmatrix\"\r\n    //% x.min=0 x.max=4 y.min=0 y.max=4\r\n    //% x.fieldOptions.precision=1 y.fieldOptions.precision=1\r\n    void plot(int x, int y) {\r\n      uBit.display.image.setPixelValue(x, y, 0xff);\r\n    }\r\n\r\n    /**\r\n     * Turn on the specified LED with specific brightness using x, y coordinates (x is horizontal, y is vertical). (0,0) is upper left.\r\n     * @param x the horizontal coordinate of the LED starting at 0\r\n     * @param y the vertical coordinate of the LED starting at 0\r\n     * @param brightness the brightness from 0 (off) to 255 (bright), eg:255\r\n     */\r\n    //% help=led/plot-brightness weight=78\r\n    //% blockId=device_plot_brightness block=\"plot|x %x|y %y|brightness %brightness\" blockGap=8\r\n    //% parts=\"ledmatrix\"\r\n    //% x.min=0 x.max=4 y.min=0 y.max=4 brightness.min=0 brightness.max=255\r\n    //% x.fieldOptions.precision=1 y.fieldOptions.precision=1\r\n    //% advanced=true\r\n    void plotBrightness(int x, int y, int brightness) {\r\n        brightness = max(0, min(0xff, brightness));\r\n        // enable greyscale as needed\r\n        if (brightness != 0 && brightness != 0xff && uBit.display.getDisplayMode() != DISPLAY_MODE_GREYSCALE)\r\n            uBit.display.setDisplayMode(DISPLAY_MODE_GREYSCALE);\r\n        uBit.display.image.setPixelValue(x, y, brightness);\r\n    }\r\n\r\n    /**\r\n     * Turn off the specified LED using x, y coordinates (x is horizontal, y is vertical). (0,0) is upper left.\r\n     * @param x TODO\r\n     * @param y TODO\r\n     */\r\n    //% help=led/unplot weight=77\r\n    //% blockId=device_unplot block=\"unplot|x %x|y %y\" blockGap=8\r\n    //% parts=\"ledmatrix\"\r\n    //% x.min=0 x.max=4 y.min=0 y.max=4\r\n    //% x.fieldOptions.precision=1 y.fieldOptions.precision=1\r\n    void unplot(int x, int y) {\r\n      uBit.display.image.setPixelValue(x, y, 0);\r\n    }\r\n\r\n    /**\r\n     * Get the on/off state of the specified LED using x, y coordinates. (0,0) is upper left.\r\n     * @param x TODO\r\n     * @param y TODO\r\n     */\r\n    //% help=led/point weight=76\r\n    //% blockId=device_point block=\"point|x %x|y %y\"\r\n    //% parts=\"ledmatrix\"\r\n    //% x.min=0 x.max=4 y.min=0 y.max=4\r\n    //% x.fieldOptions.precision=1 y.fieldOptions.precision=1\r\n    bool point(int x, int y) {\r\n      int pix = uBit.display.image.getPixelValue(x, y);\r\n      return pix > 0;\r\n    }\r\n\r\n    /**\r\n     * Get the screen brightness from 0 (off) to 255 (full bright).\r\n     */\r\n    //% help=led/brightness weight=60\r\n    //% blockId=device_get_brightness block=\"brightness\" blockGap=8\r\n    //% parts=\"ledmatrix\"\r\n    //% advanced=true\r\n    int brightness() {\r\n      return uBit.display.getBrightness();\r\n    }\r\n\r\n    /**\r\n     * Set the screen brightness from 0 (off) to 255 (full bright).\r\n     * @param value the brightness value, eg:255, 127, 0\r\n     */\r\n    //% help=led/set-brightness weight=59\r\n    //% blockId=device_set_brightness block=\"set brightness %value\"\r\n    //% parts=\"ledmatrix\"\r\n    //% advanced=true\r\n    //% value.min=0 value.max=255\r\n    void setBrightness(int value) {\r\n       uBit.display.setBrightness(value);\r\n    }\r\n\r\n    /**\r\n     * Cancels the current animation and clears other pending animations.\r\n     */\r\n    //% weight=50 help=led/stop-animation\r\n    //% blockId=device_stop_animation block=\"stop animation\"\r\n    //% parts=\"ledmatrix\"\r\n    //% advanced=true\r\n    void stopAnimation() {\r\n       uBit.display.stopAnimation();\r\n    }\r\n\r\n    /**\r\n     * Sets the display mode between black and white and greyscale for rendering LEDs.\r\n     * @param mode mode the display mode in which the screen operates\r\n     */\r\n    //% weight=1 help=led/set-display-mode\r\n    //% parts=\"ledmatrix\" advanced=true weight=1\r\n    //% blockId=\"led_set_display_mode\" block=\"set display mode $mode\"\r\n    void setDisplayMode(DisplayMode_ mode) {\r\n        uBit.display.setDisplayMode((DisplayMode)mode);\r\n    }\r\n\r\n    /**\r\n    * Gets the current display mode\r\n    */\r\n    //% weight=1 parts=\"ledmatrix\" advanced=true\r\n    DisplayMode_ displayMode() {\r\n        return (DisplayMode_)uBit.display.getDisplayMode();\r\n    }\r\n\r\n    /**\r\n    * Turns on or off the display\r\n    */\r\n    //% help=led/enable blockId=device_led_enable block=\"led enable %on\"\r\n    //% advanced=true parts=\"ledmatrix\"\r\n    void enable(bool on) {\r\n        if (on) uBit.display.enable();\r\n        else uBit.display.disable();\r\n    }\r\n\r\n    /**\r\n     * Takes a screenshot of the LED screen and returns an image.\r\n     */\r\n    //% help=led/screenshot\r\n    //% parts=\"ledmatrix\"\r\n    Image screenshot() {\r\n        auto d = uBit.display.screenShot().leakData();\r\n        auto r = new RefMImage(d);\r\n        d->decr();\r\n        return r;\r\n        /*\r\n        let Image img;\r\n        img = image.createImage(\"\");\r\n        for (let i = 0; i < 5; i++) {\r\n            for (let j = 0; j < 5; j++) {\r\n                if (led.point(i, j)) {\r\n                    img.setPixel(i, j, true);\r\n                }\r\n            }\r\n        }\r\n        return img;\r\n        */\r\n    }\r\n}\r\n",
      "led.ts": "/**\r\n * Control of the LED screen.\r\n */\r\n//% color=#5C2D91 weight=101 icon=\"\\uf205\"\r\n//% deprecated=true\r\n    namespace led {\r\n\r\n    // what's the current high value\r\n    let barGraphHigh = 0;\r\n    // when was the current high value recorded\r\n    let barGraphHighLast = 0;\r\n\r\n    /**\r\n     * Displays a vertical bar graph based on the `value` and `high` value.\r\n     * If `high` is 0, the chart gets adjusted automatically.\r\n     * @param value current value to plot\r\n     * @param high maximum value. If 0, maximum value adjusted automatically, eg: 0\r\n     */\r\n    //% help=led/plot-bar-graph weight=20\r\n    //% blockId=device_plot_bar_graph block=\"plot bar graph of %value up to %high\" icon=\"\\uf080\" blockExternalInputs=true\r\n    //% parts=\"ledmatrix\"\r\n    export function plotBarGraph(value: number, high: number): void {\r\n        const now = input.runningTime();\r\n        console.logValue(\"\", value);\r\n        value = Math.abs(value);\r\n\r\n        // auto-scale \"high\" is not provided\r\n        if (high > 0) {\r\n            barGraphHigh = high;\r\n        } else if (value > barGraphHigh || now - barGraphHighLast > 10000) {\r\n            barGraphHigh = value;\r\n            barGraphHighLast = now;\r\n        }\r\n\r\n        // normalize lack of data to 0..1\r\n        if (barGraphHigh < 16 * Number.EPSILON)\r\n            barGraphHigh = 1;\r\n\r\n        // normalize value to 0..1\r\n        const v = value / barGraphHigh;\r\n        const dv = 1 / 16;\r\n        let k = 0;\r\n        for (let y = 4; y >= 0; --y) {\r\n            for (let x = 0; x < 3; ++x) {\r\n                if (k > v) {\r\n                    unplot(2 - x, y);\r\n                    unplot(2 + x, y);\r\n                } else {\r\n                    plot(2 - x, y);\r\n                    plot(2 + x, y);\r\n                }\r\n                k += dv;\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Toggles a particular pixel\r\n     * @param x TODO\r\n     * @param y TODO\r\n     */\r\n    //% help=led/toggle weight=77\r\n    //% blockId=device_led_toggle block=\"toggle|x %x|y %y\" icon=\"\\uf204\" blockGap=8\r\n    //% parts=\"ledmatrix\"\r\n    //% x.min=0 x.max=4 y.min=0 y.max=4\r\n    //% x.fieldOptions.precision=1 y.fieldOptions.precision=1\r\n    export function toggle(x: number, y: number): void {\r\n        if (led.point(x, y)) {\r\n            led.unplot(x, y);\r\n        } else {\r\n            led.plot(x, y);\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Turns all LEDS on\r\n     */\r\n    //% help=led/plot-all\r\n    //% parts=\"ledmatrix\"\r\n    export function plotAll(): void {\r\n        for (let i = 0; i < 5; i++) {\r\n            for (let j = 0; j < 5; j++) {\r\n                led.plot(i, j);\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Inverts the current LED display\r\n     */\r\n    //% help=led/toggle-all\r\n    //% parts=\"ledmatrix\"\r\n    export function toggleAll(): void {\r\n        for (let i = 0; i < 5; i++) {\r\n            for (let j = 0; j < 5; j++) {\r\n                led.toggle(i, j);\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Fades in the screen display.\r\n     * @param ms TODO\r\n     */\r\n    //% help=led/fade-in\r\n    //% parts=\"ledmatrix\"\r\n    export function fadeIn(ms: number = 700): void {\r\n        if (ms < 20) {\r\n            led.setBrightness(255);\r\n            return;\r\n        }\r\n        let dt = 50;\r\n        let brightness = led.brightness();\r\n        let start = input.runningTime();\r\n        let elapsed = 0;\r\n        while (elapsed < ms) {\r\n            led.setBrightness(brightness + ((255 - brightness) * elapsed) / ms);\r\n            basic.pause(dt);\r\n            elapsed = input.runningTime() - start;\r\n        }\r\n        led.setBrightness(255);\r\n    }\r\n\r\n    /**\r\n     * Fades out the screen brightness.\r\n     * @param ms TODO\r\n     */\r\n    //% help=led/fade-out\r\n    //% parts=\"ledmatrix\"\r\n    export function fadeOut(ms: number = 700): void {\r\n        if (ms < 20) {\r\n            led.setBrightness(0);\r\n            return;\r\n        }\r\n        let brightness = led.brightness();\r\n        let dt = 50;\r\n        let start = input.runningTime();\r\n        let elapsed = 0;\r\n        while (elapsed < ms) {\r\n            led.setBrightness(brightness - (brightness * elapsed) / ms);\r\n            basic.pause(dt);\r\n            elapsed = input.runningTime() - start;\r\n        }\r\n        led.setBrightness(0);\r\n    }\r\n\r\n\r\n}\r\n",
      "main.ts": "namespace ws2812b {\r\n    //% shim=sendBufferAsm\r\n    export function sendBuffer(buf: Buffer, pin: DigitalPin) {\r\n    }\r\n}\r\n",
      "math.ts": "namespace Math {\r\n\r\n    export const E = 2.718281828459045;\r\n    export const LN2 = 0.6931471805599453;\r\n    export const LN10 = 2.302585092994046;\r\n    export const LOG2E = 1.4426950408889634;\r\n    export const LOG10E = 0.4342944819032518;\r\n    export const PI = 3.141592653589793;\r\n    export const SQRT1_2 = 0.7071067811865476;\r\n    export const SQRT2 = 1.4142135623730951;\r\n\r\n    /**\r\n     * Re-maps a number from one range to another. That is, a value of ``from low`` would get mapped to ``to low``, a value of ``from high`` to ``to high``, values in-between to values in-between, etc.\r\n     * @param value value to map in ranges\r\n     * @param fromLow the lower bound of the value's current range\r\n     * @param fromHigh the upper bound of the value's current range, eg: 1023\r\n     * @param toLow the lower bound of the value's target range\r\n     * @param toHigh the upper bound of the value's target range, eg: 4\r\n     */\r\n    //% help=math/map weight=10 blockGap=8\r\n    //% blockId=math_map block=\"map %value|from low %fromLow|high %fromHigh|to low %toLow|high %toHigh\"\r\n    //% inlineInputMode=inline\r\n    export function map(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number {\r\n        return ((value - fromLow) * (toHigh - toLow)) / (fromHigh - fromLow) + toLow;\r\n    }    \r\n\r\n    /**\r\n     * Constrains a number to be within a range\r\n     * @param x the number to constrain, all data types\r\n     * @param y the lower end of the range, all data types\r\n     * @param z the upper end of the range, all data types\r\n     */\r\n    //% help=math/constrain weight=11 blockGap=8\r\n    //% blockId=\"math_constrain_value\" block=\"constrain %value|between %low|and %high\"\r\n    export function constrain(value: number, low: number, high: number): number {\r\n        return value < low ? low : value > high ? high : value;\r\n    }\r\n\r\n    const b_m16: number[] = [0, 49, 49, 41, 90, 27, 117, 10]\r\n    /**\r\n     * Returns the sine of an input angle. This is an 8-bit approximation.\r\n     * @param theta input angle from 0-255\r\n     */\r\n    //% help=math/isin weight=11 advanced=true blockGap=8\r\n    export function isin(theta: number) {\r\n        //reference: based on FASTLed's sin approximation method: [https://github.com/FastLED/FastLED](MIT)\r\n        let offset = theta;\r\n        if( theta & 0x40 ) {\r\n            offset = 255 - offset;\r\n        }\r\n        offset &= 0x3F; // 0..63\r\n\r\n        let secoffset  = offset & 0x0F; // 0..15\r\n        if( theta & 0x40) secoffset++;\r\n\r\n        let section = offset >> 4; // 0..3\r\n        let s2 = section * 2;\r\n\r\n        let b = b_m16[s2];\r\n        let m16 = b_m16[s2+1];\r\n        let mx = (m16 * secoffset) >> 4;\r\n        \r\n        let y = mx + b;\r\n        if( theta & 0x80 ) y = -y;\r\n\r\n        y += 128;\r\n\r\n        return y;\r\n    }\r\n\r\n    /**\r\n     * Returns the cosine of an input angle. This is an 8-bit approximation. \r\n     * @param theta input angle from 0-255\r\n     */\r\n    //% help=math/icos weight=10 advanced=true blockGap=8\r\n    export function icos(theta: number) {\r\n        return isin(theta + 16384);\r\n    }\r\n}\r\n\r\nnamespace Number {\r\n    export const EPSILON = 2.220446049250313e-16;\r\n}",
      "melodies.ts": "/*\r\nThe MIT License (MIT)\r\n\r\nCopyright (c) 2013-2016 The MicroPython-on-micro:bit Developers, as listed\r\nin the accompanying AUTHORS file\r\n\r\nPermission is hereby granted, free of charge, to any person obtaining a copy\r\nof this software and associated documentation files (the \"Software\"), to deal\r\nin the Software without restriction, including without limitation the rights\r\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\r\ncopies of the Software, and to permit persons to whom the Software is\r\nfurnished to do so, subject to the following conditions:\r\n\r\nThe above copyright notice and this permission notice shall be included in\r\nall copies or substantial portions of the Software.\r\n\r\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\r\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\r\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\r\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\r\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\r\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\r\nTHE SOFTWARE.\r\n*/\r\n\r\n// Melodies from file microbitmusictunes.c https://github.com/bbcmicrobit/MicroPython\r\n\r\nenum Melodies {\r\n    //% block=\"dadadum\" blockIdentity=music.builtInMelody\r\n    Dadadadum = 0,\r\n    //% block=\"entertainer\" blockIdentity=music.builtInMelody\r\n    Entertainer,\r\n    //% block=\"prelude\" blockIdentity=music.builtInMelody\r\n    Prelude,\r\n    //% block=\"ode\" blockIdentity=music.builtInMelody\r\n    Ode,\r\n    //% block=\"nyan\" blockIdentity=music.builtInMelody\r\n    Nyan,\r\n    //% block=\"ringtone\" blockIdentity=music.builtInMelody\r\n    Ringtone,\r\n    //% block=\"funk\" blockIdentity=music.builtInMelody\r\n    Funk,\r\n    //% block=\"blues\" blockIdentity=music.builtInMelody\r\n    Blues,\r\n    //% block=\"birthday\" blockIdentity=music.builtInMelody\r\n    Birthday,\r\n    //% block=\"wedding\" blockIdentity=music.builtInMelody\r\n    Wedding,\r\n    //% block=\"funereal\" blockIdentity=music.builtInMelody\r\n    Funeral,\r\n    //% block=\"punchline\" blockIdentity=music.builtInMelody\r\n    Punchline,\r\n    //% block=\"baddy\" blockIdentity=music.builtInMelody\r\n    Baddy,\r\n    //% block=\"chase\" blockIdentity=music.builtInMelody\r\n    Chase,\r\n    //% block=\"ba ding\" blockIdentity=music.builtInMelody\r\n    BaDing,\r\n    //% block=\"wawawawaa\" blockIdentity=music.builtInMelody\r\n    Wawawawaa,\r\n    //% block=\"jump up\" blockIdentity=music.builtInMelody\r\n    JumpUp,\r\n    //% block=\"jump down\" blockIdentity=music.builtInMelody\r\n    JumpDown,\r\n    //% block=\"power up\" blockIdentity=music.builtInMelody\r\n    PowerUp,\r\n    //% block=\"power down\" blockIdentity=music.builtInMelody\r\n    PowerDown,\r\n}\r\n\r\nnamespace music {\r\n\r\n    export function getMelody(melody: Melodies): string[] {\r\n        switch (melody) {\r\n            case Melodies.Dadadadum:\r\n                return ['r4:2', 'g', 'g', 'g', 'eb:8', 'r:2', 'f', 'f', 'f', 'd:8'];\r\n            case Melodies.Entertainer:\r\n                return ['d4:1', 'd#', 'e', 'c5:2', 'e4:1', 'c5:2', 'e4:1', 'c5:3', 'c:1', 'd', 'd#', 'e', 'c', 'd', 'e:2', 'b4:1', 'd5:2', 'c:4'];\r\n            case Melodies.Prelude:\r\n                return ['c4:1', 'e', 'g', 'c5', 'e', 'g4', 'c5', 'e', 'c4', 'e', 'g', 'c5', 'e', 'g4', 'c5', 'e', 'c4', 'd', 'g', 'd5', 'f', 'g4', 'd5', 'f', 'c4', 'd', 'g', 'd5', 'f', 'g4', 'd5', 'f', 'b3', 'd4', 'g', 'd5', 'f', 'g4', 'd5', 'f', 'b3', 'd4', 'g', 'd5', 'f', 'g4', 'd5', 'f', 'c4', 'e', 'g', 'c5', 'e', 'g4', 'c5', 'e', 'c4', 'e', 'g', 'c5', 'e', 'g4', 'c5', 'e'];\r\n            case Melodies.Ode:\r\n                return ['e4', 'e', 'f', 'g', 'g', 'f', 'e', 'd', 'c', 'c', 'd', 'e', 'e:6', 'd:2', 'd:8', 'e:4', 'e', 'f', 'g', 'g', 'f', 'e', 'd', 'c', 'c', 'd', 'e', 'd:6', 'c:2', 'c:8'];\r\n            case Melodies.Nyan:\r\n                return ['f#5:2', 'g#', 'c#:1', 'd#:2', 'b4:1', 'd5:1', 'c#', 'b4:2', 'b', 'c#5', 'd', 'd:1', 'c#', 'b4:1', 'c#5:1', 'd#', 'f#', 'g#', 'd#', 'f#', 'c#', 'd', 'b4', 'c#5', 'b4', 'd#5:2', 'f#', 'g#:1', 'd#', 'f#', 'c#', 'd#', 'b4', 'd5', 'd#', 'd', 'c#', 'b4', 'c#5', 'd:2', 'b4:1', 'c#5', 'd#', 'f#', 'c#', 'd', 'c#', 'b4', 'c#5:2', 'b4', 'c#5', 'b4', 'f#:1', 'g#', 'b:2', 'f#:1', 'g#', 'b', 'c#5', 'd#', 'b4', 'e5', 'd#', 'e', 'f#', 'b4:2', 'b', 'f#:1', 'g#', 'b', 'f#', 'e5', 'd#', 'c#', 'b4', 'f#', 'd#', 'e', 'f#', 'b:2', 'f#:1', 'g#', 'b:2', 'f#:1', 'g#', 'b', 'b', 'c#5', 'd#', 'b4', 'f#', 'g#', 'f#', 'b:2', 'b:1', 'a#', 'b', 'f#', 'g#', 'b', 'e5', 'd#', 'e', 'f#', 'b4:2', 'c#5'];\r\n            case Melodies.Ringtone:\r\n                return ['c4:1', 'd', 'e:2', 'g', 'd:1', 'e', 'f:2', 'a', 'e:1', 'f', 'g:2', 'b', 'c5:4'];\r\n            case Melodies.Funk:\r\n                return ['c2:2', 'c', 'd#', 'c:1', 'f:2', 'c:1', 'f:2', 'f#', 'g', 'c', 'c', 'g', 'c:1', 'f#:2', 'c:1', 'f#:2', 'f', 'd#'];\r\n            case Melodies.Blues:\r\n                return ['c2:2', 'e', 'g', 'a', 'a#', 'a', 'g', 'e', 'c2:2', 'e', 'g', 'a', 'a#', 'a', 'g', 'e', 'f', 'a', 'c3', 'd', 'd#', 'd', 'c', 'a2', 'c2:2', 'e', 'g', 'a', 'a#', 'a', 'g', 'e', 'g', 'b', 'd3', 'f', 'f2', 'a', 'c3', 'd#', 'c2:2', 'e', 'g', 'e', 'g', 'f', 'e', 'd'];\r\n            case Melodies.Birthday:\r\n                return ['c4:3', 'c:1', 'd:4', 'c:4', 'f', 'e:8', 'c:3', 'c:1', 'd:4', 'c:4', 'g', 'f:8', 'c:3', 'c:1', 'c5:4', 'a4', 'f', 'e', 'd', 'a#:3', 'a#:1', 'a:4', 'f', 'g', 'f:8'];\r\n            case Melodies.Wedding:\r\n                return ['c4:4', 'f:3', 'f:1', 'f:8', 'c:4', 'g:3', 'e:1', 'f:8', 'c:4', 'f:3', 'a:1', 'c5:4', 'a4:3', 'f:1', 'f:4', 'e:3', 'f:1', 'g:8'];\r\n            case Melodies.Funeral:\r\n                return ['c3:4', 'c:3', 'c:1', 'c:4', 'd#:3', 'd:1', 'd:3', 'c:1', 'c:3', 'b2:1', 'c3:4'];\r\n            case Melodies.Punchline:\r\n                return ['c4:3', 'g3:1', 'f#', 'g', 'g#:3', 'g', 'r', 'b', 'c4'];\r\n            case Melodies.Baddy:\r\n                return ['c3:3', 'r', 'd:2', 'd#', 'r', 'c', 'r', 'f#:8'];\r\n            case Melodies.Chase:\r\n                return ['a4:1', 'b', 'c5', 'b4', 'a:2', 'r', 'a:1', 'b', 'c5', 'b4', 'a:2', 'r', 'a:2', 'e5', 'd#', 'e', 'f', 'e', 'd#', 'e', 'b4:1', 'c5', 'd', 'c', 'b4:2', 'r', 'b:1', 'c5', 'd', 'c', 'b4:2', 'r', 'b:2', 'e5', 'd#', 'e', 'f', 'e', 'd#', 'e'];\r\n            case Melodies.BaDing:\r\n                return ['b5:1', 'e6:3'];\r\n            case Melodies.Wawawawaa:\r\n                return ['e3:3', 'r:1', 'd#:3', 'r:1', 'd:4', 'r:1', 'c#:8'];\r\n            case Melodies.JumpUp:\r\n                return ['c5:1', 'd', 'e', 'f', 'g'];\r\n            case Melodies.JumpDown:\r\n                return ['g5:1', 'f', 'e', 'd', 'c'];\r\n            case Melodies.PowerUp:\r\n                return ['g4:1', 'c5', 'e', 'g:2', 'e:1', 'g:3'];\r\n            case Melodies.PowerDown:\r\n                return ['g5:1', 'd#', 'c', 'g4:2', 'b:1', 'c5:3'];\r\n            default:\r\n                return [];\r\n        }\r\n    }\r\n}",
      "movement.ts": "/**\r\n * Blocks for turning Buggy\r\n */\r\n\r\n /**\r\n Options for turning right and left\r\n */\r\n\r\n enum Right {\r\n   //% block=\"180\"\r\n   OneEighty=180,\r\n   //%block=\"90\"\r\n   Ninety=90,\r\n   //%block=\"60\"\r\n   Sixty=64,\r\n   //%block=\"45\"\r\n   FortyFive=45,\r\n   //%block=\"30\"\r\n   Thirty=27,\r\n }\r\n\r\n enum Left {\r\n   //% block=\"180\"\r\n   OneEighty=180,\r\n   //%block=\"90\"\r\n   Ninety=90,\r\n   //%block=\"60\"\r\n   Sixty=64,\r\n   //%block=\"45\"\r\n   FortyFive=45,\r\n   //%block=\"30\"\r\n   Thirty=27,\r\n }\r\n\r\n enum Forward{\r\n   //%block=\"1 light\"\r\n   Once=1,\r\n   //%block=\"2 lights\"\r\n   Twice=2,\r\n   //%block=\"3 lights\"\r\n   Thrice=3,\r\n   //%block=\"4 lights\"\r\n   Fourth=4\r\n }\r\n\r\n//% weight=100 color=#d32cd3 icon=\"\\uf0a9\" block=\"Turning\"\r\nnamespace turn {\r\n    /*some parameters used for controlling the turn and length of the ServoLite board controlled :MOVE mini */\r\n    const microSecInASecond = 1000000\r\n    let numberOfDegreesPerSec = 245\r\n    let total=0;\r\n    let unit=0;\r\n\r\n    //% blockId=kitronik_servolite_servos_stop\r\n    //% block=\"stop\"\r\n    //%deprecated=true\r\n    export function stop(): void {\r\n        pins.analogWritePin(AnalogPin.P1, 0);\r\n        pins.analogWritePin(AnalogPin.P2, 0);\r\n        control.waitMicros(1000000)\r\n    }\r\n\r\n    /**\r\n     * returns number of degrees to turn (right)\r\n     */\r\n    //%blockId=device_turnRight\r\n    //%block=\" %degrees |degrees\"\r\n    //%blockHidden=true\r\n     export function rightOptions (degrees?: Right):number {\r\n        if(degrees==null) degrees=Right.Ninety\r\n        switch(degrees){\r\n          case Right.OneEighty:return 180\r\n          case Right.Ninety:return 90;\r\n          case Right.Sixty:return 63.5;\r\n          case Right.FortyFive:return 45;\r\n          case Right.Thirty:return 26.6;\r\n          default: return 90\r\n        }\r\n    }\r\n    //%block=\"Turn RIGHT |%deg\"\r\n    //%deg.shadow=\"device_turnRight\"\r\n    export function turnRight(deg:number): void {\r\n        let timeToWait = (deg * microSecInASecond) / 112;// calculation done this way round to avoid zero rounding\r\n        pins.servoWritePin(AnalogPin.P1, 180);\r\n        pins.servoWritePin(AnalogPin.P2, 180);\r\n        control.waitMicros(timeToWait);\r\n        if (deg==90||deg==45||deg==180){\r\n          total=total+deg;\r\n        }\r\n        else if (deg==63.5){\r\n          total=total+60;\r\n        }\r\n        else if(deg==26.6){\r\n          total=total+30;\r\n        }\r\n        stop();\r\n    }\r\n\r\n    /**\r\n     * returns number of degrees to turn (left)\r\n     */\r\n    //%blockId=device_turnLeft\r\n    //%block=\" %degrees |degrees\"\r\n    //%blockHidden=true\r\n     export function leftOptions (degrees?: Left):number {\r\n        if(degrees==null) degrees=Left.Ninety\r\n        switch(degrees){\r\n          case Left.OneEighty:return 180;\r\n          case Left.Ninety:return 90;\r\n          case Left.Sixty:return 63.5;\r\n          case Left.FortyFive:return 45;\r\n          case Left.Thirty:return 26.6;\r\n          default: return 90\r\n        }\r\n    }\r\n    /**\r\n    * Turns left through the requested degrees and then stops\r\n    * needs NumberOfDegreesPerSec tuned to make accurate, as it uses\r\n    * a simple turn, wait, stop method.\r\n    * Runs the servos at slower than the right function to reduce wheel slip\r\n    * @param deg how far to turn, eg: 90\r\n    */\r\n    //% block=\"Turn LEFT |%deg\"\r\n    //% deg.shadow=\"device_turnLeft\"\r\n    export function turnLeft(deg:number): void {\r\n        let timeToWait = (deg * microSecInASecond) / 120;// calculation done this way round to avoid zero rounding\r\n        pins.servoWritePin(AnalogPin.P1, 0);\r\n        pins.servoWritePin(AnalogPin.P2, 0);\r\n        control.waitMicros(timeToWait);\r\n        stop();\r\n        if (deg==90||deg==45||deg==180){\r\n          total=total-deg;\r\n        }\r\n        else if (deg==63.5){\r\n          total=total-60;\r\n        }\r\n        else if(deg==26.6){\r\n          total=total-30;\r\n        }\r\n    }\r\n    //%blockId=device_unit\r\n    //%block=\"forward\"\r\n    //%blockHidden=true\r\n    //%color=#5b5b5b\r\n    export function totalDegrees():number{\r\n      let w=total/15\r\n      if (w%6==0){\r\n        unit=7*25.4;\r\n      }\r\n      else if(w%2==0){\r\n        unit=15.6*25.4;\r\n      }\r\n      else if (w%3==0){\r\n        unit=9.8*25.4;\r\n      }\r\n      else{\r\n        unit=196*25.4;\r\n      }\r\n      return unit;\r\n    }\r\n}\r\n\r\n/**\r\n * Blocks for driving the Kitronik Servo:Lite Board\r\n */\r\n//% weight=100 color=#5b5b5b icon=\"\\uf01b\" block=\"Forward\"\r\nnamespace forward {\r\n\r\n\t/************************************************************************************************************************************************\r\n\t* micro:bit Servo:Lite / :MOVE mini blocks\r\n\t************************************************************************************************************************************************/\r\n\r\n    /*some parameters used for controlling the turn and length of the ServoLite board controlled :MOVE mini */\r\n    const microSecInASecond = 1000000\r\n    const diam = .785*25.4;\r\n    let distancePerSec = diam*3.14*.75; //dis per cycle * cylces per sec\r\n    let p1 = 1350;\r\n    let p2 = 1650;\r\n\r\n    /**\r\n     * Drives forwards. Call stop to stop\r\n     */\r\n    //% block=\"Drive |%lights 1 light\" color=#5b5b5b\r\n    //% lights.shadow=\"device_unit\"\r\n    export function forward1(lights:number): void {\r\n      let timeToWait = (lights * microSecInASecond) / distancePerSec; // calculation done this way round to avoid zero rounding\r\n      pins.servoSetPulse(AnalogPin.P1, p1);\r\n      pins.servoSetPulse(AnalogPin.P2, p2);\r\n      control.waitMicros(timeToWait);\r\n      stop();\r\n    }\r\n\r\n    //% block=\"Drive |%lights 2 lights\" color=#5b5b5b\r\n    //% lights.shadow=\"device_unit\"\r\n    export function forward2(lights:number): void {\r\n        let timeToWait = (lights * 2 * microSecInASecond) / distancePerSec; // calculation done this way round to avoid zero rounding\r\n        pins.servoSetPulse(AnalogPin.P1, p1);\r\n        pins.servoSetPulse(AnalogPin.P2, p2);\r\n        control.waitMicros(timeToWait);\r\n        stop();\r\n    }\r\n\r\n    //% block=\"Drive |%lights 3 lights\" color=#5b5b5b\r\n    //% lights.shadow=\"device_unit\"\r\n    export function forward3(lights:number): void {\r\n        let timeToWait = (lights * 3 * microSecInASecond) / distancePerSec; // calculation done this way round to avoid zero rounding\r\n        pins.servoSetPulse(AnalogPin.P1, p1);\r\n        pins.servoSetPulse(AnalogPin.P2, p2);\r\n        control.waitMicros(timeToWait);\r\n        stop();\r\n    }\r\n\r\n    //% block=\"Drive |%lights 4 lights\" color=#5b5b5b\r\n    //% lights.shadow=\"device_unit\"\r\n    export function forward4(lights:number): void {\r\n        let timeToWait = (lights * 4 * microSecInASecond) / distancePerSec; // calculation done this way round to avoid zero rounding\r\n        pins.servoSetPulse(AnalogPin.P1, p1);\r\n        pins.servoSetPulse(AnalogPin.P2, p2);\r\n        control.waitMicros(timeToWait);\r\n        stop();\r\n    }\r\n\t/**\r\n\t * Stop for 360 servos.\r\n\t * rather than write 90, which may not stop the servo moving if it is out of trim\r\n\t * this stops sending servo pulses, which has the same effect.\r\n\t * On a normal servo this will stop the servo where it is, rather than return it to neutral position.\r\n\t * It will also not provide any holding force.\r\n     */\r\n    //% blockId=kitronik_servolite_servos_stop\r\n    //% block=\"stop\"\r\n    export function stop(): void {\r\n        pins.analogWritePin(AnalogPin.P1, 0);\r\n        pins.analogWritePin(AnalogPin.P2, 0);\r\n        control.waitMicros(500000)\r\n    }\r\n\r\n\t/**\r\n\t * Sends servos to 'neutral' position.\r\n\t * On a well trimmed 360 this is stationary, on a normal servo this is 90 degrees.\r\n     */\r\n    //% block=\"goto neutral position\"\r\n    //%deprecated=true\r\n    export function neutral(): void {\r\n        pins.servoWritePin(AnalogPin.P1, 90);\r\n        pins.servoWritePin(AnalogPin.P2, 90);\r\n    }\r\n\r\n}\r\n",
      "music.ts": "enum Note {\r\n    //% blockIdentity=music.noteFrequency enumval=262\r\n    C = 262,\r\n    //% block=C#\r\n    //% blockIdentity=music.noteFrequency enumval=277\r\n    CSharp = 277,\r\n    //% blockIdentity=music.noteFrequency enumval=294\r\n    D = 294,\r\n    //% blockIdentity=music.noteFrequency enumval=311\r\n    Eb = 311,\r\n    //% blockIdentity=music.noteFrequency enumval=330\r\n    E = 330,\r\n    //% blockIdentity=music.noteFrequency enumval=349\r\n    F = 349,\r\n    //% block=F#\r\n    //% blockIdentity=music.noteFrequency enumval=370\r\n    FSharp = 370,\r\n    //% blockIdentity=music.noteFrequency enumval=392\r\n    G = 392,\r\n    //% block=G#\r\n    //% blockIdentity=music.noteFrequency enumval=415\r\n    GSharp = 415,\r\n    //% blockIdentity=music.noteFrequency enumval=440\r\n    A = 440,\r\n    //% blockIdentity=music.noteFrequency enumval=466\r\n    Bb = 466,\r\n    //% blockIdentity=music.noteFrequency enumval=494\r\n    B = 494,\r\n    //% blockIdentity=music.noteFrequency enumval=131\r\n    C3 = 131,\r\n    //% block=C#3\r\n    //% blockIdentity=music.noteFrequency enumval=139\r\n    CSharp3 = 139,\r\n    //% blockIdentity=music.noteFrequency enumval=147\r\n    D3 = 147,\r\n    //% blockIdentity=music.noteFrequency enumval=156\r\n    Eb3 = 156,\r\n    //% blockIdentity=music.noteFrequency enumval=165\r\n    E3 = 165,\r\n    //% blockIdentity=music.noteFrequency enumval=175\r\n    F3 = 175,\r\n    //% block=F#3\r\n    //% blockIdentity=music.noteFrequency enumval=185\r\n    FSharp3 = 185,\r\n    //% blockIdentity=music.noteFrequency enumval=196\r\n    G3 = 196,\r\n    //% block=G#3\r\n    //% blockIdentity=music.noteFrequency enumval=208\r\n    GSharp3 = 208,\r\n    //% blockIdentity=music.noteFrequency enumval=220\r\n    A3 = 220,\r\n    //% blockIdentity=music.noteFrequency enumval=233\r\n    Bb3 = 233,\r\n    //% blockIdentity=music.noteFrequency enumval=247\r\n    B3 = 247,\r\n    //% blockIdentity=music.noteFrequency enumval=262\r\n    C4 = 262,\r\n    //% block=C#4\r\n    //% blockIdentity=music.noteFrequency enumval=277\r\n    CSharp4 = 277,\r\n    //% blockIdentity=music.noteFrequency enumval=294\r\n    D4 = 294,\r\n    //% blockIdentity=music.noteFrequency enumval=311\r\n    Eb4 = 311,\r\n    //% blockIdentity=music.noteFrequency enumval=330\r\n    E4 = 330,\r\n    //% blockIdentity=music.noteFrequency enumval=349\r\n    F4 = 349,\r\n    //% block=F#4\r\n    //% blockIdentity=music.noteFrequency enumval=370\r\n    FSharp4 = 370,\r\n    //% blockIdentity=music.noteFrequency enumval=392\r\n    G4 = 392,\r\n    //% block=G#4\r\n    //% blockIdentity=music.noteFrequency enumval=415\r\n    GSharp4 = 415,\r\n    //% blockIdentity=music.noteFrequency enumval=440\r\n    A4 = 440,\r\n    //% blockIdentity=music.noteFrequency enumval=466\r\n    Bb4 = 466,\r\n    //% blockIdentity=music.noteFrequency enumval=494\r\n    B4 = 494,\r\n    //% blockIdentity=music.noteFrequency enumval=523\r\n    C5 = 523,\r\n    //% block=C#5\r\n    //% blockIdentity=music.noteFrequency enumval=555\r\n    CSharp5 = 555,\r\n    //% blockIdentity=music.noteFrequency enumval=587\r\n    D5 = 587,\r\n    //% blockIdentity=music.noteFrequency enumval=622\r\n    Eb5 = 622,\r\n    //% blockIdentity=music.noteFrequency enumval=659\r\n    E5 = 659,\r\n    //% blockIdentity=music.noteFrequency enumval=698\r\n    F5 = 698,\r\n    //% block=F#5\r\n    //% blockIdentity=music.noteFrequency enumval=740\r\n    FSharp5 = 740,\r\n    //% blockIdentity=music.noteFrequency enumval=784\r\n    G5 = 784,\r\n    //% block=G#5\r\n    //% blockIdentity=music.noteFrequency enumval=831\r\n    GSharp5 = 831,\r\n    //% blockIdentity=music.noteFrequency enumval=880\r\n    A5 = 880,\r\n    //% blockIdentity=music.noteFrequency enumval=932\r\n    Bb5 = 932,\r\n    //% blockIdentity=music.noteFrequency enumval=988\r\n    B5 = 988,\r\n}\r\n\r\nenum BeatFraction {\r\n    //% block=1\r\n    Whole = 1,\r\n    //% block=\"1/2\"\r\n    Half = 2,\r\n    //% block=\"1/4\"\r\n    Quarter = 4,\r\n    //% block=\"1/8\"\r\n    Eighth = 8,\r\n    //% block=\"1/16\"\r\n    Sixteenth = 16,\r\n    //% block=\"2\"\r\n    Double = 32,\r\n    //% block=\"4\",\r\n    Breve = 64\r\n}\r\n\r\nenum MelodyOptions {\r\n    //% block=\"once\"\"\r\n    Once = 1,\r\n    //% block=\"forever\"\r\n    Forever = 2,\r\n    //% block=\"once in background\"\r\n    OnceInBackground = 4,\r\n    //% block=\"forever in background\"\r\n    ForeverInBackground = 8\r\n}\r\n\r\nenum MusicEvent {\r\n    //% block=\"melody note played\"\r\n    MelodyNotePlayed = 1,\r\n    //% block=\"melody started\"\r\n    MelodyStarted = 2,\r\n    //% block=\"melody ended\"\r\n    MelodyEnded = 3,\r\n    //% block=\"melody repeated\"\r\n    MelodyRepeated = 4,\r\n    //% block=\"background melody note played\"\r\n    BackgroundMelodyNotePlayed = MelodyNotePlayed | 0xf0,\r\n    //% block=\"background melody started\"\r\n    BackgroundMelodyStarted = MelodyStarted | 0xf0,\r\n    //% block=\"background melody ended\"\r\n    BackgroundMelodyEnded = MelodyEnded | 0xf0,\r\n    //% block=\"background melody repeated\"\r\n    BackgroundMelodyRepeated = MelodyRepeated | 0xf0,\r\n    //% block=\"background melody paused\"\r\n    BackgroundMelodyPaused = 5 | 0xf0,\r\n    //% block=\"background melody resumed\"\r\n    BackgroundMelodyResumed = 6 | 0xf0\r\n}\r\n\r\n/**\r\n * Generation of music tones.\r\n */\r\n//% color=#E63022 weight=106 icon=\"\\uf025\"\r\n//% deprecated=true\r\nnamespace music {\r\n    let beatsPerMinute: number = 120;\r\n    let freqTable: number[] = [];\r\n    let _playTone: (frequency: number, duration: number) => void;\r\n    const MICROBIT_MELODY_ID = 2000;\r\n\r\n    /**\r\n     * Plays a tone through pin ``P0`` for the given duration.\r\n     * @param frequency pitch of the tone to play in Hertz (Hz), eg: Note.C\r\n     * @param ms tone duration in milliseconds (ms)\r\n     */\r\n    //% help=music/play-tone weight=90\r\n    //% blockId=device_play_note block=\"play|tone %note=device_note|for %duration=device_beat\" blockGap=8\r\n    //% parts=\"headphone\"\r\n    //% useEnumVal=1\r\n    export function playTone(frequency: number, ms: number): void {\r\n        if (_playTone) _playTone(frequency, ms);\r\n        else pins.analogPitch(frequency, ms);\r\n    }\r\n\r\n    /**\r\n     * Plays a tone through pin ``P0``.\r\n     * @param frequency pitch of the tone to play in Hertz (Hz), eg: Note.C\r\n     */\r\n    //% help=music/ring-tone weight=80\r\n    //% blockId=device_ring block=\"ring tone (Hz)|%note=device_note\" blockGap=8\r\n    //% parts=\"headphone\"\r\n    //% useEnumVal=1\r\n    export function ringTone(frequency: number): void {\r\n        playTone(frequency, 0);\r\n    }\r\n\r\n    /**\r\n     * Rests (plays nothing) for a specified time through pin ``P0``.\r\n     * @param ms rest duration in milliseconds (ms)\r\n     */\r\n    //% help=music/rest weight=79\r\n    //% blockId=device_rest block=\"rest(ms)|%duration=device_beat\"\r\n    //% parts=\"headphone\"\r\n    export function rest(ms: number): void {\r\n        playTone(0, ms);\r\n    }\r\n\r\n\r\n    /**\r\n     * Gets the frequency of a note.\r\n     * @param name the note name\r\n     */\r\n    //% weight=50 help=music/note-frequency\r\n    //% blockId=device_note block=\"%name\"\r\n    //% shim=TD_ID color=\"#FFFFFF\" colorSecondary=\"#FFFFFF\"\r\n    //% name.fieldEditor=\"note\" name.defl=\"262\"\r\n    //% name.fieldOptions.decompileLiterals=true\r\n    //% useEnumVal=1\r\n    export function noteFrequency(name: Note): number {\r\n        return name;\r\n    }\r\n\r\n    function init() {\r\n        if (beatsPerMinute <= 0) beatsPerMinute = 120;\r\n        if (freqTable.length == 0) freqTable = [31, 33, 35, 37, 39, 41, 44, 46, 49, 52, 55, 58, 62, 65, 69, 73, 78, 82, 87, 92, 98, 104, 110, 117, 123, 131, 139, 147, 156, 165, 175, 185, 196, 208, 220, 233, 247, 262, 277, 294, 311, 330, 349, 370, 392, 415, 440, 466, 494, 523, 554, 587, 622, 659, 698, 740, 784, 831, 880, 932, 988, 1047, 1109, 1175, 1245, 1319, 1397, 1480, 1568, 1661, 1760, 1865, 1976, 2093, 2217, 2349, 2489, 2637, 2794, 2960, 3136, 3322, 3520, 3729, 3951, 4186]\r\n    }\r\n\r\n    /**\r\n     * Returns the duration of a beat in milli-seconds\r\n     */\r\n    //% help=music/beat weight=49\r\n    //% blockId=device_beat block=\"%fraction|beat\"\r\n    export function beat(fraction?: BeatFraction): number {\r\n        init();\r\n        if (fraction == null) fraction = BeatFraction.Whole;\r\n        let beat = 60000 / beatsPerMinute;\r\n        switch (fraction) {\r\n            case BeatFraction.Half: return beat / 2;\r\n            case BeatFraction.Quarter: return beat / 4;\r\n            case BeatFraction.Eighth: return beat / 8;\r\n            case BeatFraction.Sixteenth: return beat / 16;\r\n            case BeatFraction.Double: return beat * 2;\r\n            case BeatFraction.Breve: return beat * 4;\r\n            default: return beat;\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Returns the tempo in beats per minute. Tempo is the speed (bpm = beats per minute) at which notes play. The larger the tempo value, the faster the notes will play.\r\n     */\r\n    //% help=music/tempo weight=40\r\n    //% blockId=device_tempo block=\"tempo (bpm)\" blockGap=8\r\n    export function tempo(): number {\r\n        init();\r\n        return beatsPerMinute;\r\n    }\r\n\r\n    /**\r\n     * Change the tempo by the specified amount\r\n     * @param bpm The change in beats per minute to the tempo, eg: 20\r\n     */\r\n    //% help=music/change-tempo-by weight=39\r\n    //% blockId=device_change_tempo block=\"change tempo by (bpm)|%value\" blockGap=8\r\n    export function changeTempoBy(bpm: number): void {\r\n        init();\r\n        setTempo(beatsPerMinute + bpm);\r\n    }\r\n\r\n    /**\r\n     * Sets the tempo to the specified amount\r\n     * @param bpm The new tempo in beats per minute, eg: 120\r\n     */\r\n    //% help=music/set-tempo weight=38\r\n    //% blockId=device_set_tempo block=\"set tempo to (bpm)|%value\"\r\n    //% bpm.min=4 bpm.max=400\r\n    export function setTempo(bpm: number): void {\r\n        init();\r\n        if (bpm > 0) {\r\n            beatsPerMinute = Math.max(1, bpm);\r\n        }\r\n    }\r\n\r\n    let currentMelody: Melody;\r\n    let currentBackgroundMelody: Melody;\r\n\r\n    /**\r\n     * Gets the melody array of a built-in melody.\r\n     * @param name the note name, eg: Note.C\r\n     */\r\n    //% weight=50 help=music/builtin-melody\r\n    //% blockId=device_builtin_melody block=\"%melody\"\r\n    //% blockHidden=true\r\n    export function builtInMelody(melody: Melodies): string[] {\r\n        return getMelody(melody);\r\n    }\r\n\r\n    /**\r\n     * Registers code to run on various melody events\r\n     */\r\n    //% blockId=melody_on_event block=\"music on %value\"\r\n    //% help=music/on-event weight=59 blockGap=32\r\n    export function onEvent(value: MusicEvent, handler: () => void) {\r\n        control.onEvent(MICROBIT_MELODY_ID, value, handler);\r\n    }\r\n\r\n    /**\r\n     * Starts playing a melody.\r\n     * Notes are expressed as a string of characters with this format: NOTE[octave][:duration]\r\n     * @param melodyArray the melody array to play\r\n     * @param options melody options, once / forever, in the foreground / background\r\n     */\r\n    //% help=music/begin-melody weight=60 blockGap=16\r\n    //% blockId=device_start_melody block=\"start melody %melody=device_builtin_melody| repeating %options\"\r\n    //% parts=\"headphone\"\r\n    export function beginMelody(melodyArray: string[], options: MelodyOptions = 1) {\r\n        init();\r\n        if (currentMelody != undefined) {\r\n            if (((options & MelodyOptions.OnceInBackground) == 0)\r\n                && ((options & MelodyOptions.ForeverInBackground) == 0)\r\n                && currentMelody.background) {\r\n                currentBackgroundMelody = currentMelody;\r\n                currentMelody = null;\r\n                control.raiseEvent(MICROBIT_MELODY_ID, MusicEvent.BackgroundMelodyPaused);\r\n            }\r\n            if (currentMelody)\r\n                control.raiseEvent(MICROBIT_MELODY_ID, currentMelody.background ? MusicEvent.BackgroundMelodyEnded : MusicEvent.MelodyEnded);\r\n            currentMelody = new Melody(melodyArray, options);\r\n            control.raiseEvent(MICROBIT_MELODY_ID, currentMelody.background ? MusicEvent.BackgroundMelodyStarted : MusicEvent.MelodyStarted);\r\n        } else {\r\n            currentMelody = new Melody(melodyArray, options);\r\n            control.raiseEvent(MICROBIT_MELODY_ID, currentMelody.background ? MusicEvent.BackgroundMelodyStarted : MusicEvent.MelodyStarted);\r\n            // Only start the fiber once\r\n            control.inBackground(() => {\r\n                while (currentMelody.hasNextNote()) {\r\n                    playNextNote(currentMelody);\r\n                    if (!currentMelody.hasNextNote() && currentBackgroundMelody) {\r\n                        // Swap the background melody back\r\n                        currentMelody = currentBackgroundMelody;\r\n                        currentBackgroundMelody = null;\r\n                        control.raiseEvent(MICROBIT_MELODY_ID, MusicEvent.MelodyEnded);\r\n                        control.raiseEvent(MICROBIT_MELODY_ID, MusicEvent.BackgroundMelodyResumed);\r\n                    }\r\n                }\r\n                control.raiseEvent(MICROBIT_MELODY_ID, currentMelody.background ? MusicEvent.BackgroundMelodyEnded : MusicEvent.MelodyEnded);\r\n                currentMelody = null;\r\n            })\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Sets a custom playTone function for playing melodies\r\n     */\r\n    //% help=music/set-play-tone\r\n    //% advanced=true\r\n    export function setPlayTone(f: (frequency: number, duration: number) => void) {\r\n        _playTone = f;\r\n    }\r\n\r\n    function playNextNote(melody: Melody): void {\r\n        // cache elements\r\n        let currNote = melody.nextNote();\r\n        let currentPos = melody.currentPos;\r\n        let currentDuration = melody.currentDuration;\r\n        let currentOctave = melody.currentOctave;\r\n\r\n        let note: number;\r\n        let isrest: boolean = false;\r\n        let beatPos: number;\r\n        let parsingOctave: boolean = true;\r\n\r\n        for (let pos = 0; pos < currNote.length; pos++) {\r\n            let noteChar = currNote.charAt(pos);\r\n            switch (noteChar) {\r\n                case 'c': case 'C': note = 1; break;\r\n                case 'd': case 'D': note = 3; break;\r\n                case 'e': case 'E': note = 5; break;\r\n                case 'f': case 'F': note = 6; break;\r\n                case 'g': case 'G': note = 8; break;\r\n                case 'a': case 'A': note = 10; break;\r\n                case 'b': case 'B': note = 12; break;\r\n                case 'r': case 'R': isrest = true; break;\r\n                case '#': note++; break;\r\n                case 'b': note--; break;\r\n                case ':': parsingOctave = false; beatPos = pos; break;\r\n                default: if (parsingOctave) currentOctave = parseInt(noteChar);\r\n            }\r\n        }\r\n        if (!parsingOctave) {\r\n            currentDuration = parseInt(currNote.substr(beatPos + 1, currNote.length - beatPos));\r\n        }\r\n        let beat = (60000 / beatsPerMinute) / 4;\r\n        if (isrest) {\r\n            music.rest(currentDuration * beat)\r\n        } else {\r\n            let keyNumber = note + (12 * (currentOctave - 1));\r\n            let frequency = keyNumber >= 0 && keyNumber < freqTable.length ? freqTable[keyNumber] : 0;\r\n            music.playTone(frequency, currentDuration * beat);\r\n        }\r\n        melody.currentDuration = currentDuration;\r\n        melody.currentOctave = currentOctave;\r\n        const repeating = melody.repeating && currentPos == melody.melodyArray.length - 1;\r\n        melody.currentPos = repeating ? 0 : currentPos + 1;\r\n\r\n        control.raiseEvent(MICROBIT_MELODY_ID, melody.background ? MusicEvent.BackgroundMelodyNotePlayed : MusicEvent.MelodyNotePlayed);\r\n        if (repeating)\r\n            control.raiseEvent(MICROBIT_MELODY_ID, melody.background ? MusicEvent.BackgroundMelodyRepeated : MusicEvent.MelodyRepeated);\r\n    }\r\n\r\n    class Melody {\r\n        public melodyArray: string[];\r\n        public currentDuration: number;\r\n        public currentOctave: number;\r\n        public currentPos: number;\r\n        public repeating: boolean;\r\n        public background: boolean;\r\n\r\n        constructor(melodyArray: string[], options: MelodyOptions) {\r\n            this.melodyArray = melodyArray;\r\n            this.repeating = ((options & MelodyOptions.Forever) != 0);\r\n            this.repeating = this.repeating ? true : ((options & MelodyOptions.ForeverInBackground) != 0)\r\n            this.background = ((options & MelodyOptions.OnceInBackground) != 0);\r\n            this.background = this.background ? true : ((options & MelodyOptions.ForeverInBackground) != 0);\r\n            this.currentDuration = 4; //Default duration (Crotchet)\r\n            this.currentOctave = 4; //Middle octave\r\n            this.currentPos = 0;\r\n        }\r\n\r\n        hasNextNote() {\r\n            return this.repeating || this.currentPos < this.melodyArray.length;\r\n        }\r\n\r\n        nextNote(): string {\r\n            const currentNote = this.melodyArray[this.currentPos];\r\n            return currentNote;\r\n        }\r\n    }\r\n}\r\n",
      "neopixel.ts": "/**\r\n * Well known colors for a NeoPixel strip\r\n */\r\nenum NeoPixelColors {\r\n  //% block=red\r\n  Red = 0xFF0000,\r\n  //% block=orange\r\n  Orange = 0xFFA500,\r\n  //% block=yellow\r\n  Yellow = 0xFFFF00,\r\n  //% block=green\r\n  Green = 0x00FF00,\r\n  //% block=blue\r\n  Blue = 0x0000FF,\r\n  //% block=indigo\r\n  Indigo = 0x4b0082,\r\n  //% block=violet\r\n  Violet = 0x8a2be2,\r\n  //% block=purple\r\n  Purple = 0xFF00FF,\r\n  //% block=white\r\n  White = 0xFFFFFF,\r\n}\r\n\r\n/**\r\n * Different modes for RGB or RGB+W NeoPixel strips\r\n */\r\nenum NeoPixelMode {\r\n    //% block=\"RGB (GRB format)\"\r\n    RGB = 0,\r\n    //% block=\"RGB+W\"\r\n    RGBW = 1,\r\n    //% block=\"RGB (RGB format)\"\r\n    RGB_RGB = 2\r\n}\r\n\r\n/**\r\n * Functions to operate NeoPixel strips.\r\n */\r\n//% weight=100 color=#1E90FF icon=\"\\uf110\"\r\nnamespace basic {\r\n    /**\r\n     * A NeoPixel strip\r\n     */\r\n    export class Strip {\r\n        buf: Buffer;\r\n        pin: DigitalPin;\r\n        // TODO: encode as bytes instead of 32bit\r\n        brightness: number;\r\n        start: number; // start offset in LED strip\r\n        _length: number; // number of LEDs\r\n        _mode: NeoPixelMode;\r\n        _matrixWidth: number; // number of leds in a matrix - if any\r\n\r\n        /**\r\n         * Shows all LEDs to a given color (range 0-255 for r, g, b).\r\n         * @param rgb RGB color of the LED\r\n         */\r\n        //% blockId=\"neopixel_set_strip_color\" block=\"%strip|show color %rgb=neopixel_colors\"\r\n        //% parts=\"neopixel\"\r\n        //% deprecated=true\r\n        showColor(rgb: number) {\r\n            rgb = rgb >> 0;\r\n            this.setAllRGB(rgb);\r\n            this.show();\r\n        }\r\n\r\n        /**\r\n         * Shows a rainbow pattern on all LEDs.\r\n         * @param startHue the start hue value for the rainbow, eg: 1\r\n         * @param endHue the end hue value for the rainbow, eg: 360\r\n         */\r\n        //% blockId=\"neopixel_set_strip_rainbow\" block=\"%strip|show rainbow from %startHue|to %endHue\"\r\n        //% parts=\"neopixel\"\r\n        //% deprecated=true\r\n        showRainbow(startHue: number = 1, endHue: number = 360) {\r\n            if (this._length <= 0) return;\r\n\r\n            startHue = startHue >> 0;\r\n            endHue = endHue >> 0;\r\n            const saturation = 100;\r\n            const luminance = 50;\r\n            const steps = this._length;\r\n            const direction = HueInterpolationDirection.Clockwise;\r\n\r\n            //hue\r\n            const h1 = startHue;\r\n            const h2 = endHue;\r\n            const hDistCW = ((h2 + 360) - h1) % 360;\r\n            const hStepCW = Math.idiv((hDistCW * 100), steps);\r\n            const hDistCCW = ((h1 + 360) - h2) % 360;\r\n            const hStepCCW = Math.idiv(-(hDistCCW * 100), steps);\r\n            let hStep: number;\r\n            if (direction === HueInterpolationDirection.Clockwise) {\r\n                hStep = hStepCW;\r\n            } else if (direction === HueInterpolationDirection.CounterClockwise) {\r\n                hStep = hStepCCW;\r\n            } else {\r\n                hStep = hDistCW < hDistCCW ? hStepCW : hStepCCW;\r\n            }\r\n            const h1_100 = h1 * 100; //we multiply by 100 so we keep more accurate results while doing interpolation\r\n\r\n            //sat\r\n            const s1 = saturation;\r\n            const s2 = saturation;\r\n            const sDist = s2 - s1;\r\n            const sStep = Math.idiv(sDist, steps);\r\n            const s1_100 = s1 * 100;\r\n\r\n            //lum\r\n            const l1 = luminance;\r\n            const l2 = luminance;\r\n            const lDist = l2 - l1;\r\n            const lStep = Math.idiv(lDist, steps);\r\n            const l1_100 = l1 * 100\r\n\r\n            //interpolate\r\n            if (steps === 1) {\r\n                this.setPixelColor(0, hsl(h1 + hStep, s1 + sStep, l1 + lStep))\r\n            } else {\r\n                this.setPixelColor(0, hsl(startHue, saturation, luminance));\r\n                for (let i = 1; i < steps - 1; i++) {\r\n                    const h = Math.idiv((h1_100 + i * hStep), 100) + 360;\r\n                    const s = Math.idiv((s1_100 + i * sStep), 100);\r\n                    const l = Math.idiv((l1_100 + i * lStep), 100);\r\n                    this.setPixelColor(i, hsl(h, s, l));\r\n                }\r\n                this.setPixelColor(steps - 1, hsl(endHue, saturation, luminance));\r\n            }\r\n            this.show();\r\n        }\r\n\r\n        /**\r\n         * Displays a vertical bar graph based on the `value` and `high` value.\r\n         * If `high` is 0, the chart gets adjusted automatically.\r\n         * @param value current value to plot\r\n         * @param high maximum value, eg: 255\r\n         */\r\n        //% blockId=neopixel_show_bar_graph block=\"%strip|show bar graph of %value|up to %high\"\r\n        //% icon=\"\\uf080\"\r\n        //% parts=\"neopixel\"\r\n        //%deprecated=true\r\n        showBarGraph(value: number, high: number): void {\r\n            if (high <= 0) {\r\n                this.clear();\r\n                this.setPixelColor(0, NeoPixelColors.Yellow);\r\n                this.show();\r\n                return;\r\n            }\r\n\r\n            value = Math.abs(value);\r\n            const n = this._length;\r\n            const n1 = n - 1;\r\n            let v = Math.idiv((value * n), high);\r\n            if (v == 0) {\r\n                this.setPixelColor(0, 0x666600);\r\n                for (let i = 1; i < n; ++i)\r\n                    this.setPixelColor(i, 0);\r\n            } else {\r\n                for (let i = 0; i < n; ++i) {\r\n                    if (i <= v) {\r\n                        const b = Math.idiv(i * 255, n1);\r\n                        this.setPixelColor(i, basic.rgb(b, 0, 255 - b));\r\n                    }\r\n                    else this.setPixelColor(i, 0);\r\n                }\r\n            }\r\n            this.show();\r\n        }\r\n\r\n        /**\r\n         * Set LED to a given color (range 0-255 for r, g, b).\r\n         * You need to call ``show`` to make the changes visible.\r\n         * @param pixeloffset position of the NeoPixel in the strip\r\n         * @param rgb RGB color of the LED\r\n         */\r\n        //% blockId=\"neopixel_set_pixel_color\" block=\"%strip|set pixel color at %pixeloffset|to %rgb=neopixel_colors\"\r\n        //% parts=\"neopixel\" advanced=false\r\n        //%deprecated =true\r\n        setPixelColor(pixeloffset: number, rgb: number): void {\r\n            this.setPixelRGB(pixeloffset >> 0, rgb >> 0);\r\n        }\r\n\r\n        /**\r\n         * Sets the number of pixels in a matrix shaped strip\r\n         * @param width number of pixels in a row\r\n         */\r\n        //% blockId=neopixel_set_matrix_width block=\"%strip|set matrix width %width\"\r\n        //% parts=\"neopixel\" advanced=false\r\n        //%deprecated =true\r\n        setMatrixWidth(width: number) {\r\n            this._matrixWidth = Math.min(this._length, width >> 0);\r\n        }\r\n\r\n        /**\r\n         * Set LED to a given color (range 0-255 for r, g, b) in a matrix shaped strip\r\n         * You need to call ``show`` to make the changes visible.\r\n         * @param x horizontal position\r\n         * @param y horizontal position\r\n         * @param rgb RGB color of the LED\r\n         */\r\n        //% blockId=\"neopixel_set_matrix_color\" block=\"%strip|set matrix color at x %x|y %y|to %rgb=neopixel_colors\"\r\n        //% parts=\"neopixel\" advanced=false\r\n        //%deprecated =true\r\n        setMatrixColor(x: number, y: number, rgb: number) {\r\n            if (this._matrixWidth <= 0) return; // not a matrix, ignore\r\n            x = x >> 0;\r\n            y = y >> 0;\r\n            rgb = rgb >> 0;\r\n            const cols = Math.idiv(this._length, this._matrixWidth);\r\n            if (x < 0 || x >= this._matrixWidth || y < 0 || y >= cols) return;\r\n            let i = x + y * this._matrixWidth;\r\n            this.setPixelColor(i, rgb);\r\n        }\r\n\r\n        /**\r\n         * For NeoPixels with RGB+W LEDs, set the white LED brightness. This only works for RGB+W NeoPixels.\r\n         * @param pixeloffset position of the LED in the strip\r\n         * @param white brightness of the white LED\r\n         */\r\n        //% blockId=\"neopixel_set_pixel_white\" block=\"%strip|set pixel white LED at %pixeloffset|to %white\"\r\n        //% parts=\"neopixel\" advanced=false\r\n        //%deprecated =true\r\n        setPixelWhiteLED(pixeloffset: number, white: number): void {\r\n            if (this._mode === NeoPixelMode.RGBW) {\r\n                this.setPixelW(pixeloffset >> 0, white >> 0);\r\n            }\r\n        }\r\n\r\n        /**\r\n         * Send all the changes to the strip.\r\n         */\r\n        //% blockId=\"neopixel_show\" block=\"%strip|show\"\r\n        //% parts=\"neopixel\"\r\n        //% blockHidden=true\r\n        show() {\r\n            ws2812b.sendBuffer(this.buf, this.pin);\r\n        }\r\n\r\n        /**\r\n         * Turn off all LEDs.\r\n         * You need to call ``show`` to make the changes visible.\r\n         */\r\n        //% blockId=\"neopixel_clear\" block=\"%strip|clear\"\r\n        //% parts=\"neopixel\"\r\n        //% blockHidden=true\r\n        clear(): void {\r\n            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;\r\n            this.buf.fill(0, this.start * stride, this._length * stride);\r\n        }\r\n\r\n        /**\r\n         * Gets the number of pixels declared on the strip\r\n         */\r\n        //% blockId=\"neopixel_length\" block=\"%strip|length\"\r\n        //% blockHidden =true\r\n        length() {\r\n            return this._length;\r\n        }\r\n\r\n        /**\r\n         * Set the brightness of the strip. This flag only applies to future operation.\r\n         * @param brightness a measure of LED brightness in 0-255. eg: 255\r\n         */\r\n        //% blockId=\"neopixel_set_brightness\" block=\"%strip|set brightness %brightness\"\r\n        //% blockHidden=true\r\n        setBrightness(brightness: number): void {\r\n            this.brightness = brightness & 0xff;\r\n        }\r\n\r\n        /**\r\n         * Apply brightness to current colors using a quadratic easing function.\r\n         **/\r\n        //% blockId=\"neopixel_each_brightness\" block=\"%strip|ease brightness\"\r\n        //% parts=\"neopixel\" advanced=false\r\n        //%blockHidden =true\r\n        easeBrightness(): void {\r\n            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;\r\n            const br = this.brightness;\r\n            const buf = this.buf;\r\n            const end = this.start + this._length;\r\n            const mid = Math.idiv(this._length, 2);\r\n            for (let i = this.start; i < end; ++i) {\r\n                const k = i - this.start;\r\n                const ledoffset = i * stride;\r\n                const br = k > mid\r\n                    ? Math.idiv(255 * (this._length - 1 - k) * (this._length - 1 - k), (mid * mid))\r\n                    : Math.idiv(255 * k * k, (mid * mid));\r\n                serial.writeLine(k + \":\" + br);\r\n                const r = (buf[ledoffset + 0] * br) >> 8; buf[ledoffset + 0] = r;\r\n                const g = (buf[ledoffset + 1] * br) >> 8; buf[ledoffset + 1] = g;\r\n                const b = (buf[ledoffset + 2] * br) >> 8; buf[ledoffset + 2] = b;\r\n                if (stride == 4) {\r\n                    const w = (buf[ledoffset + 3] * br) >> 8; buf[ledoffset + 3] = w;\r\n                }\r\n            }\r\n        }\r\n\r\n        /**\r\n         * Create a range of LEDs.\r\n         * @param start offset in the LED strip to start the range\r\n         * @param length number of LEDs in the range. eg: 4\r\n         */\r\n        //% blockId=\"neopixel_range\" block=\"%strip|range from %start|with %length|leds\"\r\n        //% parts=\"neopixel\"\r\n        //% deprecated=true\r\n        range(start: number, length: number): Strip {\r\n            start = start >> 0;\r\n            length = length >> 0;\r\n            let strip = new Strip();\r\n            strip.buf = this.buf;\r\n            strip.pin = this.pin;\r\n            strip.brightness = this.brightness;\r\n            strip.start = this.start + Math.clamp(0, this._length - 1, start);\r\n            strip._length = Math.clamp(0, this._length - (strip.start - this.start), length);\r\n            strip._matrixWidth = 0;\r\n            strip._mode = this._mode;\r\n            return strip;\r\n        }\r\n\r\n        /**\r\n         * Shift LEDs forward and clear with zeros.\r\n         * You need to call ``show`` to make the changes visible.\r\n         * @param offset number of pixels to shift forward, eg: 1\r\n         */\r\n        //% blockId=\"neopixel_shift\" block=\"%strip|shift pixels by %offset\"\r\n        //% parts=\"neopixel\"\r\n        //% deprecated=true\r\n        shift(offset: number = 1): void {\r\n            offset = offset >> 0;\r\n            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;\r\n            this.buf.shift(-offset * stride, this.start * stride, this._length * stride)\r\n        }\r\n\r\n        /**\r\n         * Rotate LEDs forward.\r\n         * You need to call ``show`` to make the changes visible.\r\n         * @param offset number of pixels to rotate forward, eg: 1\r\n         */\r\n        //% blockId=\"neopixel_rotate\" block=\"%strip|rotate pixels by %offset\"\r\n        //% parts=\"neopixel\"\r\n        //% deprecated = true\r\n        rotate(offset: number = 1): void {\r\n            offset = offset >> 0;\r\n            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;\r\n            this.buf.rotate(-offset * stride, this.start * stride, this._length * stride)\r\n        }\r\n\r\n        /**\r\n         * Set the pin where the neopixel is connected, defaults to P0.\r\n         */\r\n        //% parts=\"neopixel\" advanced=false\r\n        //% blockHidden=true\r\n        setPin(pin: DigitalPin): void {\r\n            this.pin = pin;\r\n            pins.digitalWritePin(this.pin, 0);\r\n            // don't yield to avoid races on initialization\r\n        }\r\n\r\n        /**\r\n         * Estimates the electrical current (mA) consumed by the current light configuration.\r\n         */\r\n        //% blockId=neopixel_power block=\"%strip|power (mA)\"\r\n        //% advanced=false\r\n        //% blockHidden=true\r\n        power(): number {\r\n            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;\r\n            const end = this.start + this._length;\r\n            let p = 0;\r\n            for (let i = this.start; i < end; ++i) {\r\n                const ledoffset = i * stride;\r\n                for (let j = 0; j < stride; ++j) {\r\n                    p += this.buf[i + j];\r\n                }\r\n            }\r\n            return Math.idiv(this.length(), 2) /* 0.5mA per neopixel */\r\n                + Math.idiv(p * 433, 10000); /* rought approximation */\r\n        }\r\n\r\n        private setBufferRGB(offset: number, red: number, green: number, blue: number): void {\r\n            if (this._mode === NeoPixelMode.RGB_RGB) {\r\n                this.buf[offset + 0] = red;\r\n                this.buf[offset + 1] = green;\r\n            } else {\r\n                this.buf[offset + 0] = green;\r\n                this.buf[offset + 1] = red;\r\n            }\r\n            this.buf[offset + 2] = blue;\r\n        }\r\n\r\n        private setAllRGB(rgb: number) {\r\n            let red = unpackR(rgb);\r\n            let green = unpackG(rgb);\r\n            let blue = unpackB(rgb);\r\n\r\n            const br = this.brightness;\r\n            if (br < 255) {\r\n                red = (red * br) >> 8;\r\n                green = (green * br) >> 8;\r\n                blue = (blue * br) >> 8;\r\n            }\r\n            const end = this.start + this._length;\r\n            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;\r\n            for (let i = this.start; i < end; ++i) {\r\n                this.setBufferRGB(i * stride, red, green, blue)\r\n            }\r\n        }\r\n        private setAllW(white: number) {\r\n            if (this._mode !== NeoPixelMode.RGBW)\r\n                return;\r\n\r\n            let br = this.brightness;\r\n            if (br < 255) {\r\n                white = (white * br) >> 8;\r\n            }\r\n            let buf = this.buf;\r\n            let end = this.start + this._length;\r\n            for (let i = this.start; i < end; ++i) {\r\n                let ledoffset = i * 4;\r\n                buf[ledoffset + 3] = white;\r\n            }\r\n        }\r\n        private setPixelRGB(pixeloffset: number, rgb: number): void {\r\n            if (pixeloffset < 0\r\n                || pixeloffset >= this._length)\r\n                return;\r\n\r\n            let stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;\r\n            pixeloffset = (pixeloffset + this.start) * stride;\r\n\r\n            let red = unpackR(rgb);\r\n            let green = unpackG(rgb);\r\n            let blue = unpackB(rgb);\r\n\r\n            let br = this.brightness;\r\n            if (br < 255) {\r\n                red = (red * br) >> 8;\r\n                green = (green * br) >> 8;\r\n                blue = (blue * br) >> 8;\r\n            }\r\n            this.setBufferRGB(pixeloffset, red, green, blue)\r\n        }\r\n        private setPixelW(pixeloffset: number, white: number): void {\r\n            if (this._mode !== NeoPixelMode.RGBW)\r\n                return;\r\n\r\n            if (pixeloffset < 0\r\n                || pixeloffset >= this._length)\r\n                return;\r\n\r\n            pixeloffset = (pixeloffset + this.start) * 4;\r\n\r\n            let br = this.brightness;\r\n            if (br < 255) {\r\n                white = (white * br) >> 8;\r\n            }\r\n            let buf = this.buf;\r\n            buf[pixeloffset + 3] = white;\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Create a new NeoPixel driver for `numleds` LEDs.\r\n     * @param pin the pin where the neopixel is connected.\r\n     * @param numleds number of leds in the strip, eg: 24,30,60,64\r\n     */\r\n    //% blockId=\"neopixel_create\" block=\"%color\"\r\n    //% color.shadow=\"neopixel_colors\"\r\n    //% blockSetVariable=strip\r\n    //% parts=\"neopixel\"\r\n    //%color=#f7cb1d\r\n    export function create(color:NeoPixelColors): Strip {\r\n        let strip = new Strip();\r\n        let stride = NeoPixelMode.RGBW ? 4 : 3;\r\n        strip.buf = pins.createBuffer(5 * stride);\r\n        strip.start = 0;\r\n        strip._length = 5;\r\n        strip._mode = NeoPixelMode.RGB;\r\n        strip._matrixWidth = 0;\r\n        strip.setBrightness(255);\r\n        strip.setPin(DigitalPin.P0);\r\n        strip.showColor(color);\r\n        control.waitMicros(4000000)\r\n        return strip;\r\n    }\r\n\r\n    /**\r\n     * Converts red, green, blue channels into a RGB color\r\n     * @param red value of the red channel between 0 and 255. eg: 255\r\n     * @param green value of the green channel between 0 and 255. eg: 255\r\n     * @param blue value of the blue channel between 0 and 255. eg: 255\r\n     */\r\n    //% blockId=\"neopixel_rgb\" block=\"red %red|green %green|blue %blue\"\r\n    //% advanced=false\r\n    //% blockHidden=true\r\n    export function rgb(red: number, green: number, blue: number): number {\r\n        return packRGB(red, green, blue);\r\n    }\r\n\r\n    /**\r\n     * Gets the RGB value of a known color\r\n    */\r\n    //% blockId=\"neopixel_colors\" block=\"%color\"\r\n    //% advanced=false\r\n    //% blockHidden=true\r\n    export function colors(color: NeoPixelColors): number {\r\n        return color;\r\n    }\r\n\r\n    function packRGB(a: number, b: number, c: number): number {\r\n        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);\r\n    }\r\n    function unpackR(rgb: number): number {\r\n        let r = (rgb >> 16) & 0xFF;\r\n        return r;\r\n    }\r\n    function unpackG(rgb: number): number {\r\n        let g = (rgb >> 8) & 0xFF;\r\n        return g;\r\n    }\r\n    function unpackB(rgb: number): number {\r\n        let b = (rgb) & 0xFF;\r\n        return b;\r\n    }\r\n\r\n    /**\r\n     * Converts a hue saturation luminosity value into a RGB color\r\n     * @param h hue from 0 to 360\r\n     * @param s saturation from 0 to 99\r\n     * @param l luminosity from 0 to 99\r\n     */\r\n    //% blockId=neopixelHSL block=\"hue %h|saturation %s|luminosity %l\"\r\n    //% blockHidden=true\r\n    export function hsl(h: number, s: number, l: number): number {\r\n        h = Math.round(h);\r\n        s = Math.round(s);\r\n        l = Math.round(l);\r\n\r\n        h = h % 360;\r\n        s = Math.clamp(0, 99, s);\r\n        l = Math.clamp(0, 99, l);\r\n        let c = Math.idiv((((100 - Math.abs(2 * l - 100)) * s) << 8), 10000); //chroma, [0,255]\r\n        let h1 = Math.idiv(h, 60);//[0,6]\r\n        let h2 = Math.idiv((h - h1 * 60) * 256, 60);//[0,255]\r\n        let temp = Math.abs((((h1 % 2) << 8) + h2) - 256);\r\n        let x = (c * (256 - (temp))) >> 8;//[0,255], second largest component of this color\r\n        let r$: number;\r\n        let g$: number;\r\n        let b$: number;\r\n        if (h1 == 0) {\r\n            r$ = c; g$ = x; b$ = 0;\r\n        } else if (h1 == 1) {\r\n            r$ = x; g$ = c; b$ = 0;\r\n        } else if (h1 == 2) {\r\n            r$ = 0; g$ = c; b$ = x;\r\n        } else if (h1 == 3) {\r\n            r$ = 0; g$ = x; b$ = c;\r\n        } else if (h1 == 4) {\r\n            r$ = x; g$ = 0; b$ = c;\r\n        } else if (h1 == 5) {\r\n            r$ = c; g$ = 0; b$ = x;\r\n        }\r\n        let m = Math.idiv((Math.idiv((l * 2 << 8), 100) - c), 2);\r\n        let r = r$ + m;\r\n        let g = g$ + m;\r\n        let b = b$ + m;\r\n        return packRGB(r, g, b);\r\n    }\r\n\r\n    export enum HueInterpolationDirection {\r\n        Clockwise,\r\n        CounterClockwise,\r\n        Shortest\r\n    }\r\n}\r\n",
      "parts/headphone.svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"142\" height=\"180\" viewBox=\"0 0 142 180\"><rect ry=\".3\" rx=\"1\" y=\"58.615\" x=\"-8.878\" height=\"23.571\" width=\"17.143\" transform=\"rotate(-45)\" fill=\"#b3b3b3\"/><rect ry=\".3\" rx=\"1\" y=\"32.043\" x=\"-8.878\" height=\"23.571\" width=\"17.143\" transform=\"rotate(-45)\" fill=\"#b3b3b3\"/><path d=\"M.346 7.296c-.394.39-.31 4.797-.18 4.898l13.404 10.18c.117.12.337 4.76.73 4.368l5.506-5.56.01.01 6.51-6.444c.39-.392-4.25-.614-4.366-.73L11.777.612c-.1-.132-4.51-.215-4.898.18L4.087 3.636l-.01-.01-3.73 3.67z\" fill=\"#b3b3b3\"/><rect ry=\"6.85\" rx=\"4.571\" y=\"84.758\" x=\"-20.128\" height=\"75.571\" width=\"39.643\" transform=\"rotate(-45)\"/><rect ry=\".374\" rx=\"1.038\" y=\"29.442\" x=\"-8.925\" height=\"2.228\" width=\"17.238\" transform=\"rotate(-45)\" fill=\"#fff\"/><rect ry=\".374\" rx=\"1.038\" y=\"55.939\" x=\"-8.925\" height=\"2.228\" width=\"17.238\" transform=\"rotate(-45)\" fill=\"#fff\"/><rect ry=\".374\" rx=\"1.038\" y=\"82.392\" x=\"-8.925\" height=\"2.228\" width=\"17.238\" transform=\"rotate(-45)\" fill=\"#fff\"/><rect ry=\"2.317\" rx=\"2.183\" y=\"158.876\" x=\"-9.774\" height=\"25.568\" width=\"18.935\" transform=\"rotate(-45)\"/><path d=\"M128.588 128.82s14.97 11.165 7.547 26.35c-8.426 17.24-25.57 20.653-25.57 20.653\" fill=\"none\" stroke=\"#000\" stroke-width=\"6.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
      "parts/speaker.svg": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<svg viewBox=\"0 0 500 500\" xmlns=\"http://www.w3.org/2000/svg\">\r\n  <g transform=\"matrix(1, 0, 0, 1, -0.00023, -58.230297)\">\r\n    <ellipse style=\"fill: rgb(70, 70, 70);\" cx=\"250.58\" cy=\"308.81\" rx=\"215\" ry=\"215\"/>\r\n    <ellipse style=\"fill: rgb(0, 0, 0);\" transform=\"matrix(1, 0, 0, 1.000001, -232.069031, 248.780606)\" cx=\"482.069\" cy=\"198.188\" rx=\"23.028\" ry=\"23.028\"/>\r\n    <ellipse style=\"fill: rgb(0, 0, 0);\" transform=\"matrix(1, 0, 0, 0.999999, -232.067871, 110.041956)\" cx=\"482.067\" cy=\"198.188\" rx=\"23.028\" ry=\"23.028\"/>\r\n    <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"389.12\" cy=\"308.23\" rx=\"23.028\" ry=\"23.028\"/>\r\n    <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"110.88\" cy=\"308.23\" rx=\"23.028\" ry=\"23.028\"/>\r\n    <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"250\" cy=\"169.393\" rx=\"23.028\" ry=\"23.028\"/>\r\n    <g transform=\"matrix(1, 0, 0, 1, -0.000009, 0.000015)\">\r\n      <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"250\" cy=\"238.513\" rx=\"23.028\" ry=\"23.028\" transform=\"matrix(1.000001, 0, 0, 0.999999, 69.996739, 69.71816)\"/>\r\n      <ellipse style=\"fill: rgb(0, 0, 0);\" transform=\"matrix(1, 0, 0, 0.999999, -302.064453, 110.043115)\" cx=\"482.064\" cy=\"198.188\" rx=\"23.028\" ry=\"23.028\"/>\r\n    </g>\r\n    <g transform=\"matrix(0.866026, 0.5, -0.5, 0.866026, 7.386552, -105.261086)\">\r\n      <ellipse style=\"fill: rgb(0, 0, 0);\" transform=\"matrix(0.999999, 0, 0, 0.999999, -65.212313, 177.387415)\" cx=\"482.068\" cy=\"198.188\" rx=\"23.028\" ry=\"23.028\"/>\r\n      <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"555.975\" cy=\"236.836\" rx=\"23.028\" ry=\"23.028\"/>\r\n      <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"277.735\" cy=\"236.836\" rx=\"23.028\" ry=\"23.028\"/>\r\n      <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"416.855\" cy=\"97.999\" rx=\"23.028\" ry=\"23.028\"/>\r\n    </g>\r\n    <g transform=\"matrix(0.5, 0.866026, -0.866026, 0.5, 246.635941, -171.170502)\">\r\n      <ellipse style=\"fill: rgb(0, 0, 0);\" transform=\"matrix(0.999999, 0, 0, 0.999999, -65.212313, 177.387415)\" cx=\"482.068\" cy=\"198.188\" rx=\"23.028\" ry=\"23.028\"/>\r\n      <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"555.975\" cy=\"236.836\" rx=\"23.028\" ry=\"23.028\"/>\r\n      <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"277.735\" cy=\"236.836\" rx=\"23.028\" ry=\"23.028\"/>\r\n      <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"416.855\" cy=\"97.999\" rx=\"23.028\" ry=\"23.028\"/>\r\n    </g>\r\n    <g transform=\"matrix(-0.5, 0.866026, -0.866026, -0.5, 641.934998, 245.84082)\">\r\n      <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"250\" cy=\"238.513\" rx=\"23.028\" ry=\"23.028\" transform=\"matrix(1.000001, 0, 0, 0.999999, 69.996739, 69.71816)\"/>\r\n      <ellipse style=\"fill: rgb(0, 0, 0);\" transform=\"matrix(1, 0, 0, 0.999999, -302.064453, 110.043115)\" cx=\"482.064\" cy=\"198.188\" rx=\"23.028\" ry=\"23.028\"/>\r\n    </g>\r\n    <g transform=\"matrix(-0.500001, -0.866026, 0.866026, -0.500001, 108.063393, 678.85083)\">\r\n      <ellipse style=\"fill: rgb(0, 0, 0);\" cx=\"250\" cy=\"238.513\" rx=\"23.028\" ry=\"23.028\" transform=\"matrix(1.000001, 0, 0, 0.999999, 69.996739, 69.71816)\"/>\r\n      <ellipse style=\"fill: rgb(0, 0, 0);\" transform=\"matrix(1, 0, 0, 0.999999, -302.064453, 110.043115)\" cx=\"482.064\" cy=\"198.188\" rx=\"23.028\" ry=\"23.028\"/>\r\n    </g>\r\n  </g>\r\n</svg>",
      "pins.cpp": "#include \"pxt.h\"\r\n\r\nenum class DigitalPin {\r\n    P0 = MICROBIT_ID_IO_P0,\r\n    P1 = MICROBIT_ID_IO_P1,\r\n    P2 = MICROBIT_ID_IO_P2,\r\n    P3 = MICROBIT_ID_IO_P3,\r\n    P4 = MICROBIT_ID_IO_P4,\r\n    P5 = MICROBIT_ID_IO_P5,\r\n    P6 = MICROBIT_ID_IO_P6,\r\n    P7 = MICROBIT_ID_IO_P7,\r\n    P8 = MICROBIT_ID_IO_P8,\r\n    P9 = MICROBIT_ID_IO_P9,\r\n    P10 = MICROBIT_ID_IO_P10,\r\n    P11 = MICROBIT_ID_IO_P11,\r\n    P12 = MICROBIT_ID_IO_P12,\r\n    P13 = MICROBIT_ID_IO_P13,\r\n    P14 = MICROBIT_ID_IO_P14,\r\n    P15 = MICROBIT_ID_IO_P15,\r\n    P16 = MICROBIT_ID_IO_P16,\r\n    P19 = MICROBIT_ID_IO_P19,\r\n    P20 = MICROBIT_ID_IO_P20,\r\n};\r\n\r\nenum class AnalogPin {\r\n    P0 = MICROBIT_ID_IO_P0,\r\n    P1 = MICROBIT_ID_IO_P1,\r\n    P2 = MICROBIT_ID_IO_P2,\r\n    P3 = MICROBIT_ID_IO_P3,\r\n    P4 = MICROBIT_ID_IO_P4,\r\n    P10 = MICROBIT_ID_IO_P10,\r\n    //% block=\"P5 (write only)\"\r\n    P5 = MICROBIT_ID_IO_P5,\r\n    //% block=\"P6 (write only)\"\r\n    P6 = MICROBIT_ID_IO_P6,\r\n    //% block=\"P7 (write only)\"\r\n    P7 = MICROBIT_ID_IO_P7,\r\n    //% block=\"P8 (write only)\"\r\n    P8 = MICROBIT_ID_IO_P8,\r\n    //% block=\"P9 (write only)\"\r\n    P9 = MICROBIT_ID_IO_P9,\r\n    //% block=\"P11 (write only)\"\r\n    P11 = MICROBIT_ID_IO_P11,\r\n    //% block=\"P12 (write only)\"\r\n    P12 = MICROBIT_ID_IO_P12,\r\n    //% block=\"P13 (write only)\"\r\n    P13 = MICROBIT_ID_IO_P13,\r\n    //% block=\"P14 (write only)\"\r\n    P14 = MICROBIT_ID_IO_P14,\r\n    //% block=\"P15 (write only)\"\r\n    P15 = MICROBIT_ID_IO_P15,\r\n    //% block=\"P16 (write only)\"\r\n    P16 = MICROBIT_ID_IO_P16,\r\n    //% block=\"P19 (write only)\"\r\n    P19 = MICROBIT_ID_IO_P19,\r\n    //% block=\"P20 (write only)\"\r\n    P20 = MICROBIT_ID_IO_P20\r\n};\r\n\r\nenum class PulseValue {\r\n    //% block=high\r\n    High = MICROBIT_PIN_EVT_PULSE_HI,\r\n    //% block=low\r\n    Low = MICROBIT_PIN_EVT_PULSE_LO\r\n};\r\n\r\nenum class PinPullMode {\r\n    //% block=\"down\"\r\n    PullDown = 0,\r\n    //% block=\"up\"\r\n    PullUp = 1,\r\n    //% block=\"none\"\r\n    PullNone = 2\r\n};\r\n\r\nenum class PinEventType {\r\n    //% block=\"edge\"\r\n    Edge = MICROBIT_PIN_EVENT_ON_EDGE,\r\n    //% block=\"pulse\"\r\n    Pulse = MICROBIT_PIN_EVENT_ON_PULSE,\r\n    //% block=\"touch\"\r\n    Touch = MICROBIT_PIN_EVENT_ON_TOUCH,\r\n    //% block=\"none\"\r\n    None = MICROBIT_PIN_EVENT_NONE\r\n};\r\n\r\n\r\nnamespace pxt\r\n{\r\nMicroBitPin *getPin(int id) {\r\n    switch (id) {\r\n        case MICROBIT_ID_IO_P0: return &uBit.io.P0;\r\n        case MICROBIT_ID_IO_P1: return &uBit.io.P1;\r\n        case MICROBIT_ID_IO_P2: return &uBit.io.P2;\r\n        case MICROBIT_ID_IO_P3: return &uBit.io.P3;\r\n        case MICROBIT_ID_IO_P4: return &uBit.io.P4;\r\n        case MICROBIT_ID_IO_P5: return &uBit.io.P5;\r\n        case MICROBIT_ID_IO_P6: return &uBit.io.P6;\r\n        case MICROBIT_ID_IO_P7: return &uBit.io.P7;\r\n        case MICROBIT_ID_IO_P8: return &uBit.io.P8;\r\n        case MICROBIT_ID_IO_P9: return &uBit.io.P9;\r\n        case MICROBIT_ID_IO_P10: return &uBit.io.P10;\r\n        case MICROBIT_ID_IO_P11: return &uBit.io.P11;\r\n        case MICROBIT_ID_IO_P12: return &uBit.io.P12;\r\n        case MICROBIT_ID_IO_P13: return &uBit.io.P13;\r\n        case MICROBIT_ID_IO_P14: return &uBit.io.P14;\r\n        case MICROBIT_ID_IO_P15: return &uBit.io.P15;\r\n        case MICROBIT_ID_IO_P16: return &uBit.io.P16;\r\n        case MICROBIT_ID_IO_P19: return &uBit.io.P19;\r\n        case MICROBIT_ID_IO_P20: return &uBit.io.P20;\r\n        default: return NULL;\r\n    }\r\n}\r\n\r\n} // pxt\r\n\r\nnamespace pins {\r\n    #define PINOP(op) \\\r\n      MicroBitPin *pin = getPin((int)name); \\\r\n      if (!pin) return; \\\r\n      pin->op\r\n\r\n    #define PINREAD(op) \\\r\n      MicroBitPin *pin = getPin((int)name); \\\r\n      if (!pin) return 0; \\\r\n      return pin->op\r\n\r\n\r\n    //%\r\n    MicroBitPin *getPinAddress(int id) {\r\n        return getPin(id);\r\n    }\r\n\r\n    /**\r\n     * Read the specified pin or connector as either 0 or 1\r\n     * @param name pin to read from, eg: DigitalPin.P0\r\n     */\r\n    //% help=pins/digital-read-pin weight=30\r\n    //% blockId=device_get_digital_pin block=\"digital read|pin %name\" blockGap=8\r\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\r\n    //% name.fieldOptions.tooltips=\"false\" name.fieldOptions.width=\"250\"\r\n    int digitalReadPin(DigitalPin name) {\r\n        PINREAD(getDigitalValue());\r\n    }\r\n\r\n    /**\r\n      * Set a pin or connector value to either 0 or 1.\r\n      * @param name pin to write to, eg: DigitalPin.P0\r\n      * @param value value to set on the pin, 1 eg,0\r\n      */\r\n    //% help=pins/digital-write-pin weight=29\r\n    //% blockId=device_set_digital_pin block=\"digital write|pin %name|to %value\"\r\n    //% value.min=0 value.max=1\r\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\r\n    //% name.fieldOptions.tooltips=\"false\" name.fieldOptions.width=\"250\"\r\n    void digitalWritePin(DigitalPin name, int value) {\r\n        PINOP(setDigitalValue(value));\r\n    }\r\n\r\n    /**\r\n     * Read the connector value as analog, that is, as a value comprised between 0 and 1023.\r\n     * @param name pin to write to, eg: AnalogPin.P0\r\n     */\r\n    //% help=pins/analog-read-pin weight=25\r\n    //% blockId=device_get_analog_pin block=\"analog read|pin %name\" blockGap=\"8\"\r\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\r\n    //% name.fieldOptions.tooltips=\"false\" name.fieldOptions.width=\"250\"\r\n    int analogReadPin(AnalogPin name) {\r\n        PINREAD(getAnalogValue());\r\n    }\r\n\r\n    /**\r\n     * Set the connector value as analog. Value must be comprised between 0 and 1023.\r\n     * @param name pin name to write to, eg: AnalogPin.P0\r\n     * @param value value to write to the pin between ``0`` and ``1023``. eg:1023,0\r\n     */\r\n    //% help=pins/analog-write-pin weight=24\r\n    //% blockId=device_set_analog_pin block=\"analog write|pin %name|to %value\" blockGap=8\r\n    //% value.min=0 value.max=1023\r\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\r\n    //% name.fieldOptions.tooltips=\"false\" name.fieldOptions.width=\"250\"\r\n    void analogWritePin(AnalogPin name, int value) {\r\n        PINOP(setAnalogValue(value));\r\n    }\r\n\r\n    /**\r\n     * Configures the Pulse-width modulation (PWM) of the analog output to the given value in **microseconds** or `1/1000` milliseconds.\r\n     * If this pin is not configured as an analog output (using `analog write pin`), the operation has no effect.\r\n     * @param name analog pin to set period to, eg: AnalogPin.P0\r\n     * @param micros period in micro seconds. eg:20000\r\n     */\r\n    //% help=pins/analog-set-period weight=23 blockGap=8\r\n    //% blockId=device_set_analog_period block=\"analog set period|pin %pin|to (µs)%micros\"\r\n    //% pin.fieldEditor=\"gridpicker\" pin.fieldOptions.columns=4\r\n    //% pin.fieldOptions.tooltips=\"false\"\r\n    void analogSetPeriod(AnalogPin name, int micros) {\r\n        PINOP(setAnalogPeriodUs(micros));\r\n    }\r\n\r\n    /**\r\n    * Configures this pin to a digital input, and generates events where the timestamp is the duration that this pin was either ``high`` or ``low``.\r\n    * @param name digital pin to register to, eg: DigitalPin.P0\r\n    * @param pulse the value of the pulse, eg: PulseValue.High\r\n    */\r\n    //% help=pins/on-pulsed weight=22 blockGap=16 advanced=true\r\n    //% blockId=pins_on_pulsed block=\"on|pin %pin|pulsed %pulse\"\r\n    //% pin.fieldEditor=\"gridpicker\" pin.fieldOptions.columns=4\r\n    //% pin.fieldOptions.tooltips=\"false\" pin.fieldOptions.width=\"250\"\r\n    void onPulsed(DigitalPin name, PulseValue pulse, Action body) {\r\n        MicroBitPin* pin = getPin((int)name);\r\n        if (!pin) return;\r\n\r\n        pin->eventOn(MICROBIT_PIN_EVENT_ON_PULSE);\r\n        registerWithDal((int)name, (int)pulse, body);\r\n    }\r\n\r\n    /**\r\n    * Gets the duration of the last pulse in micro-seconds. This function should be called from a ``onPulsed`` handler.\r\n    */\r\n    //% help=pins/pulse-duration advanced=true\r\n    //% blockId=pins_pulse_duration block=\"pulse duration (µs)\"\r\n    //% weight=21 blockGap=8\r\n    int pulseDuration() {\r\n        return pxt::lastEvent.timestamp;\r\n    }\r\n\r\n    /**\r\n    * Returns the duration of a pulse in microseconds\r\n    * @param name the pin which measures the pulse, eg: DigitalPin.P0\r\n    * @param value the value of the pulse, eg: PulseValue.High\r\n    * @param maximum duration in micro-seconds\r\n    */\r\n    //% blockId=\"pins_pulse_in\" block=\"pulse in (µs)|pin %name|pulsed %value\"\r\n    //% weight=20 advanced=true\r\n    //% help=pins/pulse-in\r\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\r\n    //% name.fieldOptions.tooltips=\"false\" name.fieldOptions.width=\"250\"\r\n    int pulseIn(DigitalPin name, PulseValue value, int maxDuration = 2000000) {\r\n        MicroBitPin* pin = getPin((int)name);\r\n        if (!pin) return 0;\r\n\r\n        int pulse = value == PulseValue::High ? 1 : 0;\r\n        uint64_t tick =  system_timer_current_time_us();\r\n        uint64_t maxd = (uint64_t)maxDuration;\r\n        while(pin->getDigitalValue() != pulse) {\r\n            if(system_timer_current_time_us() - tick > maxd)\r\n                return 0;\r\n        }\r\n\r\n        uint64_t start =  system_timer_current_time_us();\r\n        while(pin->getDigitalValue() == pulse) {\r\n            if(system_timer_current_time_us() - tick > maxd)\r\n                return 0;\r\n        }\r\n        uint64_t end =  system_timer_current_time_us();\r\n        return end - start;\r\n    }\r\n\r\n    /**\r\n     * Writes a value to the servo, controlling the shaft accordingly. On a standard servo, this will set the angle of the shaft (in degrees), moving the shaft to that orientation. On a continuous rotation servo, this will set the speed of the servo (with ``0`` being full-speed in one direction, ``180`` being full speed in the other, and a value near ``90`` being no movement).\r\n     * @param name pin to write to, eg: AnalogPin.P0\r\n     * @param value angle or rotation speed, eg:180,90,0\r\n     */\r\n    //% help=pins/servo-write-pin weight=20\r\n    //% blockId=device_set_servo_pin block=\"servo write|pin %name|to %value\" blockGap=8\r\n    //% parts=microservo trackArgs=0\r\n    //% value.min=0 value.max=180\r\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\r\n    //% name.fieldOptions.tooltips=\"false\" name.fieldOptions.width=\"250\"\r\n    void servoWritePin(AnalogPin name, int value) {\r\n        PINOP(setServoValue(value));\r\n    }\r\n\r\n    /**\r\n     * Configures this IO pin as an analog/pwm output, configures the period to be 20 ms, and sets the pulse width, based on the value it is given **microseconds** or `1/1000` milliseconds.\r\n     * @param name pin name\r\n     * @param micros pulse duration in micro seconds, eg:1500\r\n     */\r\n    //% help=pins/servo-set-pulse weight=19\r\n    //% blockId=device_set_servo_pulse block=\"servo set pulse|pin %value|to (µs) %micros\"\r\n    //% value.fieldEditor=\"gridpicker\" value.fieldOptions.columns=4\r\n    //% value.fieldOptions.tooltips=\"false\" value.fieldOptions.width=\"250\"\r\n    void servoSetPulse(AnalogPin name, int micros) {\r\n        PINOP(setServoPulseUs(micros));\r\n    }\r\n\r\n\r\n    MicroBitPin* pitchPin = NULL;\r\n\r\n    /**\r\n     * Sets the pin used when using `analog pitch` or music.\r\n     * @param name pin to modulate pitch from\r\n     */\r\n    //% blockId=device_analog_set_pitch_pin block=\"analog set pitch pin %name\"\r\n    //% help=pins/analog-set-pitch-pin weight=3 advanced=true\r\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\r\n    //% name.fieldOptions.tooltips=\"false\" name.fieldOptions.width=\"250\"\r\n    void analogSetPitchPin(AnalogPin name) {\r\n      pitchPin = getPin((int)name);\r\n    }\r\n\r\n    /**\r\n     * Emits a Pulse-width modulation (PWM) signal to the current pitch pin. Use `analog set pitch pin` to define the pitch pin.\r\n     * @param frequency frequency to modulate in Hz.\r\n     * @param ms duration of the pitch in milli seconds.\r\n     */\r\n    //% blockId=device_analog_pitch block=\"analog pitch %frequency|for (ms) %ms\"\r\n    //% help=pins/analog-pitch weight=4 async advanced=true blockGap=8\r\n    void analogPitch(int frequency, int ms) {\r\n      if (pitchPin == NULL)\r\n        analogSetPitchPin(AnalogPin::P0);\r\n      if (frequency <= 0) {\r\n        pitchPin->setAnalogValue(0);\r\n      } else {\r\n        pitchPin->setAnalogValue(512);\r\n        pitchPin->setAnalogPeriodUs(1000000/frequency);\r\n      }\r\n\r\n      if (ms > 0) {\r\n          fiber_sleep(ms);\r\n          pitchPin->setAnalogValue(0);\r\n          // TODO why do we use wait_ms() here? it's a busy wait I think\r\n          wait_ms(5);\r\n      }\r\n    }\r\n\r\n\r\n    /**\r\n    * Configures the pull of this pin.\r\n    * @param name pin to set the pull mode on, eg: DigitalPin.P0\r\n    * @param pull one of the mbed pull configurations, eg: PinPullMode.PullUp\r\n    */\r\n    //% help=pins/set-pull weight=3 advanced=true\r\n    //% blockId=device_set_pull block=\"set pull|pin %pin|to %pull\"\r\n    //% pin.fieldEditor=\"gridpicker\" pin.fieldOptions.columns=4\r\n    //% pin.fieldOptions.tooltips=\"false\" pin.fieldOptions.width=\"250\"\r\n    void setPull(DigitalPin name, PinPullMode pull) {\r\n        PinMode m = pull == PinPullMode::PullDown\r\n            ? PinMode::PullDown\r\n            : pull == PinPullMode::PullUp ? PinMode::PullUp\r\n            : PinMode::PullNone;\r\n        PINOP(setPull(m));\r\n    }\r\n\r\n    /**\r\n    * Configures the events emitted by this pin. Events can be subscribed to\r\n    * using ``control.onEvent()``.\r\n    * @param name pin to set the event mode on, eg: DigitalPin.P0\r\n    * @param type the type of events for this pin to emit, eg: PinEventType.Edge\r\n    */\r\n    //% help=pins/set-events weight=4 advanced=true\r\n    //% blockId=device_set_pin_events block=\"set pin %pin|to emit %type|events\"\r\n    //% pin.fieldEditor=\"gridpicker\" pin.fieldOptions.columns=4\r\n    //% pin.fieldOptions.tooltips=\"false\" pin.fieldOptions.width=\"250\"\r\n    void setEvents(DigitalPin name, PinEventType type) {\r\n        getPin((int)name)->eventOn((int)type);\r\n    }\r\n\r\n    /**\r\n     * Create a new zero-initialized buffer.\r\n     * @param size number of bytes in the buffer\r\n     */\r\n    //%\r\n    Buffer createBuffer(int size)\r\n    {\r\n        return mkBuffer(NULL, size);\r\n    }\r\n\r\n    /**\r\n     * Read `size` bytes from a 7-bit I2C `address`.\r\n     */\r\n    //%\r\n    Buffer i2cReadBuffer(int address, int size, bool repeat = false)\r\n    {\r\n      Buffer buf = createBuffer(size);\r\n      uBit.i2c.read(address << 1, (char*)buf->data, size, repeat);\r\n      return buf;\r\n    }\r\n\r\n    /**\r\n     * Write bytes to a 7-bit I2C `address`.\r\n     */\r\n    //%\r\n    int i2cWriteBuffer(int address, Buffer buf, bool repeat = false)\r\n    {\r\n      return uBit.i2c.write(address << 1, (char*)buf->data, buf->length, repeat);\r\n    }\r\n\r\n    SPI* spi = NULL;\r\n    SPI* allocSPI() {\r\n        if (NULL == spi)\r\n            spi = new SPI(MOSI, MISO, SCK);\r\n        return spi;\r\n    }\r\n\r\n    /**\r\n    * Write to the SPI slave and return the response\r\n    * @param value Data to be sent to the SPI slave\r\n    */\r\n    //% help=pins/spi-write weight=5 advanced=true\r\n    //% blockId=spi_write block=\"spi write %value\"\r\n    int spiWrite(int value) {\r\n        auto p = allocSPI();\r\n        return p->write(value);\r\n    }\r\n\r\n    /**\r\n    * Sets the SPI frequency\r\n    * @param frequency the clock frequency, eg: 1000000\r\n    */\r\n    //% help=pins/spi-frequency weight=4 advanced=true\r\n    //% blockId=spi_frequency block=\"spi frequency %frequency\"\r\n    void spiFrequency(int frequency) {\r\n        auto p = allocSPI();\r\n        p->frequency(frequency);\r\n    }\r\n\r\n    /**\r\n    * Sets the SPI bits and mode\r\n    * @param bits the number of bits, eg: 8\r\n    * @param mode the mode, eg: 3\r\n    */\r\n    //% help=pins/spi-format weight=3 advanced=true\r\n    //% blockId=spi_format block=\"spi format|bits %bits|mode %mode\"\r\n    void spiFormat(int bits, int mode) {\r\n        auto p = allocSPI();\r\n        p->format(bits, mode);        \r\n    }\r\n\r\n    /**\r\n    * Sets the MOSI, MISO, SCK pins used by the SPI instance\r\n    *\r\n    */\r\n    //% help=pins/spi-pins weight=2 advanced=true\r\n    //% blockId=spi_pins block=\"spi set pins|MOSI %mosi|MISO %miso|SCK %sck\"\r\n    //% mosi.fieldEditor=\"gridpicker\" mosi.fieldOptions.columns=4\r\n    //% mosi.fieldOptions.tooltips=\"false\" mosi.fieldOptions.width=\"250\"\r\n    //% miso.fieldEditor=\"gridpicker\" miso.fieldOptions.columns=4\r\n    //% miso.fieldOptions.tooltips=\"false\" miso.fieldOptions.width=\"250\"\r\n    //% sck.fieldEditor=\"gridpicker\" sck.fieldOptions.columns=4\r\n    //% sck.fieldOptions.tooltips=\"false\" sck.fieldOptions.width=\"250\"\r\n    void spiPins(DigitalPin mosi, DigitalPin miso, DigitalPin sck) {\r\n        if (NULL != spi) {\r\n            delete spi;\r\n            spi = NULL;\r\n        }\r\n\r\n        spi = new SPI(getPin((int)mosi)->name, getPin((int)miso)->name, getPin((int)sck)->name);\r\n    }\r\n}\r\n",
      "pins.ts": "/**\r\n * Control currents in Pins for analog/digital signals, servos, i2c, ...\r\n */\r\n//% color=#B22222 weight=30 icon=\"\\uf140\"\r\n//% advanced=true\r\n//% deprecated=true\r\nnamespace pins {\r\n    /**\r\n     * Re-maps a number from one range to another. That is, a value of ``from low`` would get mapped to ``to low``, a value of ``from high`` to ``to high``, values in-between to values in-between, etc.\r\n     * @param value value to map in ranges\r\n     * @param fromLow the lower bound of the value's current range\r\n     * @param fromHigh the upper bound of the value's current range, eg: 1023\r\n     * @param toLow the lower bound of the value's target range\r\n     * @param toHigh the upper bound of the value's target range, eg: 4\r\n     */\r\n    //% help=pins/map weight=23\r\n    //% blockId=pin_map block=\"map %value|from low %fromLow|from high %fromHigh|to low %toLow|to high %toHigh\"\r\n    export function map(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number {\r\n        return ((value - fromLow) * (toHigh - toLow)) / (fromHigh - fromLow) + toLow;\r\n    }\r\n\r\n    /**\r\n     * Read one number from 7-bit I2C address.\r\n     */\r\n    //% help=pins/i2c-read-number blockGap=8 advanced=true\r\n    //% blockId=pins_i2c_readnumber block=\"i2c read number|at address %address|of format %format|repeated %repeat\" weight=7\r\n    export function i2cReadNumber(address: number, format: NumberFormat, repeated?: boolean): number {\r\n        let buf = pins.i2cReadBuffer(address, pins.sizeOf(format), repeated)\r\n        return buf.getNumber(format, 0)\r\n    }\r\n\r\n    /**\r\n     * Write one number to a 7-bit I2C address.\r\n     */\r\n    //% help=pins/i2c-write-number blockGap=8 advanced=true\r\n    //% blockId=i2c_writenumber block=\"i2c write number|at address %address|with value %value|of format %format|repeated %repeat\" weight=6\r\n    export function i2cWriteNumber(address: number, value: number, format: NumberFormat, repeated?: boolean): void {\r\n        let buf = createBuffer(pins.sizeOf(format))\r\n        buf.setNumber(format, 0, value)\r\n        pins.i2cWriteBuffer(address, buf, repeated)\r\n    }\r\n}\r\n",
      "pinscompat.ts": "const enum PinEvent {\r\n    //% block=\"pulse high\"\r\n    PulseHigh = DAL.MICROBIT_PIN_EVT_PULSE_HI,  // DEVICE_PIN_EVT_PULSE_HI\r\n    //% block=\"pulse low\"\r\n    PulseLow = DAL.MICROBIT_PIN_EVT_PULSE_LO,  // DEVICE_PIN_EVT_PULSE_LO\r\n    //% block=\"rise\"\r\n    Rise = DAL.MICROBIT_PIN_EVT_RISE,  // DEVICE_PIN_EVT_RISE\r\n    //% block=\"fall\"\r\n    Fall = DAL.MICROBIT_PIN_EVT_FALL,  // DEVICE_PIN_EVT_FALL\r\n}\r\n\r\n//% noRefCounting fixedInstances\r\ninterface DigitalInOutPin {\r\n    digitalRead(): boolean;\r\n\r\n    digitalWrite(value: boolean): void;\r\n\r\n    onPulsed(pulse: PulseValue, body: () => void): void;\r\n\r\n    onEvent(event: PinEvent, body: () => void): void;\r\n\r\n    pulseIn(value: PulseValue, maxDuration?: number): number;\r\n\r\n    setPull(pull: PinPullMode): void;\r\n}\r\n\r\n//% noRefCounting fixedInstances\r\ninterface AnalogInPin extends DigitalInOutPin {\r\n    analogRead(): number;\r\n}\r\n\r\n//% noRefCounting fixedInstances\r\ninterface AnalogOutPin extends DigitalInOutPin {\r\n    analogWrite(value: number): void;\r\n}\r\n\r\n//% noRefCounting fixedInstances\r\ninterface AnalogInOutPin extends AnalogInPin, AnalogOutPin {\r\n}\r\n\r\n//% noRefCounting fixedInstances\r\ninterface PwmOnlyPin extends DigitalInOutPin, AnalogOutPin {\r\n    //% parts=microservo trackArgs=0\r\n    analogSetPeriod(period: number): void;\r\n\r\n    //% parts=microservo trackArgs=0\r\n    servoWrite(value: number): void;\r\n\r\n    //% parts=microservo trackArgs=0\r\n    servoSetPulse(duration: number): void;\r\n}\r\n\r\n//% noRefCounting fixedInstances\r\ninterface PwmPin extends PwmOnlyPin, DigitalInOutPin, AnalogInPin {\r\n}\r\n\r\n//% noRefCounting fixedInstances\r\nclass MicrobitPin implements AnalogInPin, AnalogOutPin, AnalogInOutPin, PwmOnlyPin {\r\n    public id: number;\r\n    constructor(id: number) {\r\n        this.id = id;\r\n    }\r\n\r\n    protected digitalId(): DigitalPin {\r\n        return <DigitalPin>this.id;\r\n    }\r\n\r\n    protected analogId(): AnalogPin {\r\n        return <AnalogPin>this.id;\r\n    }\r\n\r\n    digitalRead(): boolean {\r\n        return pins.digitalReadPin(this.digitalId()) != 0;\r\n    }\r\n\r\n    digitalWrite(value: boolean): void {\r\n        pins.digitalWritePin(this.digitalId(), value ? 1 : 0);\r\n    }\r\n\r\n    onPulsed(pulse: PulseValue, body: () => void): void {\r\n        pins.onPulsed(this.digitalId(), pulse, body);\r\n    }\r\n\r\n    onEvent(event: PinEvent, body: () => void): void {\r\n        // TODO\r\n    }\r\n\r\n    pulseIn(value: PulseValue, maxDuration?: number): number {\r\n        return pins.pulseIn(this.digitalId(), value, maxDuration);\r\n    }\r\n\r\n    setPull(pull: PinPullMode): void {\r\n        pins.setPull(this.digitalId(), pull);\r\n    }\r\n\r\n    analogRead(): number {\r\n        return pins.analogReadPin(this.analogId());\r\n    }\r\n\r\n    analogWrite(value: number): void {\r\n        pins.analogWritePin(this.analogId(), value);\r\n    }\r\n\r\n    analogSetPeriod(period: number): void {\r\n        pins.analogSetPeriod(this.analogId(), period);\r\n    }\r\n\r\n    servoWrite(value: number): void {\r\n        pins.servoWritePin(this.analogId(), value);\r\n    }\r\n\r\n    servoSetPulse(duration: number): void {\r\n        pins.servoSetPulse(this.analogId(), duration);\r\n    }\r\n}\r\n\r\nnamespace pins {\r\n    /**\r\n     * Pin P0\r\n     */\r\n    //% fixedInstance whenUsed\r\n    export const P0: PwmPin = new MicrobitPin(DigitalPin.P0);\r\n\r\n    /**\r\n     * Pin P1\r\n     */\r\n    //% fixedInstance whenUsed\r\n    export const P1: PwmPin = new MicrobitPin(DigitalPin.P1);\r\n\r\n    /**\r\n     * Pin P2\r\n     */\r\n    //% fixedInstance whenUsed\r\n    export const P2: PwmPin = new MicrobitPin(DigitalPin.P2);\r\n\r\n    /**\r\n     * Pin P3\r\n     */\r\n    //% fixedInstance whenUsed\r\n    export const P3: AnalogInPin = new MicrobitPin(DigitalPin.P3);\r\n\r\n    /**\r\n     * Pin P4\r\n     */\r\n    //% fixedInstance whenUsed\r\n    export const P4: AnalogInPin = new MicrobitPin(DigitalPin.P4);\r\n\r\n    /**\r\n     * Pin P5\r\n     */\r\n    //% fixedInstance whenUsed\r\n    export const P5: DigitalInOutPin = new MicrobitPin(DigitalPin.P5);\r\n\r\n    /**\r\n     * Pin P6\r\n     */\r\n    //% fixedInstance whenUsed\r\n    export const P6: DigitalInOutPin = new MicrobitPin(DigitalPin.P6);\r\n\r\n    /**\r\n     * Pin P7\r\n     */\r\n    //% fixedInstance whenUsed\r\n    export const P7: DigitalInOutPin = new MicrobitPin(DigitalPin.P7);\r\n\r\n    /**\r\n     * Pin P8\r\n     */\r\n    //% fixedInstance whenUsed\r\n    export const P8: DigitalInOutPin = new MicrobitPin(DigitalPin.P8);\r\n\r\n    /**\r\n     * Pin P9\r\n     */\r\n    //% fixedInstance whenUsed\r\n    export const P9: DigitalInOutPin = new MicrobitPin(DigitalPin.P9);\r\n\r\n    /**\r\n     * Pin P10\r\n     */\r\n    //% fixedInstance whenUsed\r\n    export const P10: AnalogInPin = new MicrobitPin(DigitalPin.P10);\r\n\r\n    /**\r\n     * Pin P3\r\n     */\r\n    //% fixedInstance whenUsed\r\n    export const P11: DigitalInOutPin = new MicrobitPin(DigitalPin.P11);\r\n\r\n    /**\r\n     * Pin P12\r\n     */\r\n    //% fixedInstance whenUsed\r\n    export const P12: DigitalInOutPin = new MicrobitPin(DigitalPin.P12);\r\n\r\n    /**\r\n     * Pin P13\r\n     */\r\n    //% fixedInstance whenUsed\r\n    export const P13: DigitalInOutPin = new MicrobitPin(DigitalPin.P13);\r\n\r\n    /**\r\n     * Pin P14\r\n     */\r\n    //% fixedInstance whenUsed\r\n    export const P14: DigitalInOutPin = new MicrobitPin(DigitalPin.P14);\r\n\r\n    /**\r\n     * Pin P15\r\n     */\r\n    //% fixedInstance whenUsed\r\n    export const P15: DigitalInOutPin = new MicrobitPin(DigitalPin.P15);\r\n\r\n    /**\r\n     * Pin P16\r\n     */\r\n    //% fixedInstance whenUsed\r\n    export const P16: DigitalInOutPin = new MicrobitPin(DigitalPin.P16);\r\n\r\n    /**\r\n     * Pin P19\r\n     */\r\n    //% fixedInstance whenUsed\r\n    export const P19: DigitalInOutPin = new MicrobitPin(DigitalPin.P19);\r\n\r\n    /**\r\n     * Pin P19\r\n     */\r\n    //% fixedInstance whenUsed\r\n    export const P20: DigitalInOutPin = new MicrobitPin(DigitalPin.P20);\r\n}\r\n",
      "platform.h": "// helpful define to handle C++ differences in package\r\n#define PXT_MICROBIT_TAGGED_INT 1\r\n\r\n// cross version compatible way of access data field\r\n#ifndef PXT_BUFFER_DATA\r\n#define PXT_BUFFER_DATA(buffer) buffer->data\r\n#endif\r\n\r\n#ifndef PXT_CREATE_BUFFER\r\n#define PXT_CREATE_BUFFER(data, len) pxt::mkBuffer(data, len)\r\n#endif\r\n\r\n#define PXT_POWI 1\r\n",
      "pxt-core.d.ts": "/// <reference no-default-lib=\"true\"/>\n\ninterface Array<T> {\n    /**\n      * Get or set the length of an array. This number is one more than the index of the last element the array.\n      */\n    //% shim=Array_::length weight=84\n    //% blockId=\"lists_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"arrays\"\n    length: number;\n\n    /**\n      * Append a new element to an array.\n      * @param items New elements of the Array.\n      */\n    //% help=arrays/push\n    //% shim=Array_::push weight=50\n    //% blockId=\"array_push\" block=\"%list| add value %value| to end\" blockNamespace=\"arrays\"\n    push(item: T): void;\n\n    /**\n      * Remove the last element from an array and return it.\n      */\n    //% help=arrays/pop\n    //% shim=Array_::pop weight=45\n    //% blockId=\"array_pop\" block=\"get and remove last value from %list\" blockNamespace=\"arrays\"\n    //% blockGap=64\n    pop(): T;\n\n    /**\n      * Reverse the elements in an array. The first array element becomes the last, and the last array element becomes the first.\n      */\n    //% help=arrays/reverse\n    //% helper=arrayReverse weight=10\n    //% blockId=\"array_reverse\" block=\"reverse %list\" blockNamespace=\"arrays\"\n    reverse(): void;\n\n    /**\n      * Remove the first element from an array and return it. This method changes the length of the array.\n      */\n    //% help=arrays/shift\n    //% helper=arrayShift weight=30\n    //% blockId=\"array_shift\" block=\"get and remove first value from %list\" blockNamespace=\"arrays\"\n    shift(): T;\n\n    /**\n      * Add one element to the beginning of an array and return the new length of the array.\n      * @param element to insert at the start of the Array.\n      */\n    //% help=arrays/unshift\n    //% helper=arrayUnshift weight=25\n    //% blockId=\"array_unshift\" block=\"%list| insert %value| at beginning\" blockNamespace=\"arrays\"\n    //unshift(...values:T[]): number; //rest is not supported in our compiler yet.\n    unshift(value: T): number;\n\n    /**\n      * Return a section of an array.\n      * @param start The beginning of the specified portion of the array. eg: 0\n      * @param end The end of the specified portion of the array. eg: 0\n      */\n    //% help=arrays/slice\n    //% helper=arraySlice weight=41 blockNamespace=\"arrays\"\n    slice(start: number, end: number): T[];\n\n    /**\n      * Remove elements from an array.\n      * @param start The zero-based location in the array from which to start removing elements. eg: 0\n      * @param deleteCount The number of elements to remove. eg: 0\n      */\n    //% helper=arraySplice weight=40\n    splice(start: number, deleteCount: number): void;\n\n    /**\n      * joins all elements of an array into a string and returns this string.\n      * @param sep the string separator\n      */\n    //% helper=arrayJoin weight=40\n    join(sep: string): string;\n    \n    /**\n      * Tests whether at least one element in the array passes the test implemented by the provided function.\n      * @param callbackfn A function that accepts up to two arguments. The some method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arraySome weight=40\n    some(callbackfn: (value: T, index: number) => boolean): boolean;\n\n    /**\n      * Tests whether all elements in the array pass the test implemented by the provided function.\n      * @param callbackfn A function that accepts up to two arguments. The every method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayEvery weight=40\n    every(callbackfn: (value: T, index: number) => boolean): boolean;\n    \n    /**\n      * Sort the elements of an array in place and returns the array. The sort is not necessarily stable.\n      * @param specifies a function that defines the sort order. If omitted, the array is sorted according to the prmitive type\n      */\n    //% helper=arraySort weight=40\n    sort(callbackfn?: (value1: T, value2: T) => number): T[];\n\n    /**\n      * Call a defined callback function on each element of an array, and return an array containing the results.\n      * @param callbackfn A function that accepts up to two arguments. The map method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayMap weight=40\n    map<U>(callbackfn: (value: T, index: number) => U): U[];\n\n    /**\n      * Call a defined callback function on each element of an array.\n      * @param callbackfn A function that accepts up to two arguments. The forEach method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayForEach weight=40\n    forEach(callbackfn: (value: T, index: number) => void): void;\n    \n    /**\n      * Return the elements of an array that meet the condition specified in a callback function.\n      * @param callbackfn A function that accepts up to two arguments. The filter method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayFilter weight=40\n    filter(callbackfn: (value: T, index: number) => boolean): T[];\n\n    /**\n      * Call the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\n      * @param callbackfn A function that accepts up to three arguments. The reduce method calls the callbackfn function one time for each element in the array.\n      * @param initialValue Initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\n      */\n    //% helper=arrayReduce weight=40\n    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U;\n\n\n    /** Remove the first occurence of an object. Returns true if removed. */\n    //% shim=Array_::removeElement weight=48\n    removeElement(element: T): boolean;\n\n    /** Remove the element at a certain index. */\n    //% help=arrays/remove-at\n    //% shim=Array_::removeAt weight=15\n    //% blockId=\"array_removeat\" block=\"%list| remove value at %index\" blockNamespace=\"arrays\"\n    removeAt(index: number): T;\n\n    /**\n     * Insert the value at a particular index, increases length by 1\n     * @param index the zero-based position in the list to insert the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% help=arrays/insert-at\n    //% shim=Array_::insertAt weight=20\n    //% blockId=\"array_insertAt\" block=\"%list| insert at %index| value %value\" blockNamespace=\"arrays\"\n    insertAt(index: number, value: T): void;\n\n    /**\n      * Return the index of the first occurrence of a value in an array.\n      * @param item The value to locate in the array.\n      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.\n      */\n    //% help=arrays/index-of\n    //% shim=Array_::indexOf weight=40\n    //% blockId=\"array_indexof\" block=\"%list| find index of %value\" blockNamespace=\"arrays\"\n    indexOf(item: T, fromIndex?: number): number;\n\n    /**\n     * Get the value at a particular index\n     * @param index the zero-based position in the list of the item, eg: 0\n     */\n    //% help=arrays/get\n    //% shim=Array_::getAt weight=85\n    get(index: number): T;\n\n    /**\n     * Store a value at a particular index\n     * @param index the zero-based position in the list to store the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% help=arrays/set\n    //% shim=Array_::setAt weight=84\n    set(index: number, value: T): void;\n\n    [n: number]: T;\n}\n\ndeclare interface String {\n    // This block is currently disabled in favor of the built-in Blockly \"Create text with\" block, which compiles to \"\" + \"\"\n    // Add % sign back to the block annotation to re-enable\n    /**\n     * Returns a string that contains the concatenation of two or more strings.\n     * @param other The string to append to the end of the string.\n     */\n    //% shim=String_::concat weight=49\n    //% blockId=\"string_concat\" blockNamespace=\"text\"\n    // block=\"join %list=text|%other\"\n    concat(other: string): string;\n\n    /**\n     * Return the character at the specified index.\n     * @param index The zero-based index of the desired character.\n     */\n    //% shim=String_::charAt weight=48\n    //% help=text/char-at\n    //% blockId=\"string_get\" block=\"char from %this=text|at %pos\" blockNamespace=\"text\"\n    charAt(index: number): string;\n\n    /** Returns the length of a String object. */\n    //% property shim=String_::length weight=47\n    //% blockId=\"text_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"text\"\n    length: number;\n\n    /**\n     * Return the Unicode value of the character at the specified location.\n     * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.\n     */\n    //% shim=String_::charCodeAt\n    charCodeAt(index: number): number;\n\n    /**\n     * See how the order of characters in two strings is different (in ASCII encoding).\n     * @param that String to compare to target string\n     */\n    //% shim=String_::compare\n    //% help=text/compare\n    //% blockId=\"string_compare\" block=\"compare %this=text| to %that\" blockNamespace=\"text\"\n    compare(that: string): number;\n\n    /**\n     * Return a substring of the current string.\n     * @param start first character index; can be negative from counting from the end, eg:0\n     * @param length number of characters to extract\n     */\n    //% shim=String_::substr length.defl=10\n    //% help=text/substr\n    //% blockId=\"string_substr\" block=\"substring of %this=text|from %start|of length %length\" blockNamespace=\"text\"\n    substr(start: number, length?: number): string;\n\n    // This block is currently disabled, as it does not compile in some targets\n    // Add % sign back to the block annotation to re-enable\n    /** Returns a value indicating if the string is empty */\n    //% shim=String_::isEmpty\n    //% blockId=\"string_isempty\" blockNamespace=\"text\"\n    // block=\"%this=text| is empty\"\n    isEmpty(): boolean;\n\n    /**\n     * Returns the position of the first occurrence of a specified value in a string.\n     * @param searchValue the text to find\n     * @param start optional start index for the search\n     */\n    //% shim=String_::indexOf\n    //% help=text/index-of\n    //% blockId=\"string_indexof\" blockNamespace=\"text\"\n    indexOf(searchValue: string, start?: number): number;\n\n    /**\n     * Determines whether a string contains the characters of a specified string.\n     * @param searchValue the text to find\n     * @param start optional start index for the search\n     */\n    //% shim=String_::includes\n    //% help=text/includes\n    //% blockId=\"string_includes\" blockNamespace=\"text\"\n    includes(searchValue: string, start?: number): boolean;\n\n    [index: number]: string;\n}\n\n/**\n  * Convert a string to a number.\n  * @param s A string to convert into a number. eg: 123\n  */\n//% shim=String_::toNumber\n//% help=text/parse-float\n//% blockId=\"string_parsefloat\" block=\"parse to number %text\" blockNamespace=\"text\"\n//% text.defl=\"123\"\ndeclare function parseFloat(text: string): number;\n\ninterface Object { }\ninterface Function { }\ninterface IArguments { }\ninterface RegExp { }\ntype TemplateStringsArray = Array<string>;\n\ntype uint8 = number;\ntype uint16 = number;\ntype uint32 = number;\ntype int8 = number;\ntype int16 = number;\ntype int32 = number;\n\n\ndeclare interface Boolean {\n    /**\n     * Returns a string representation of an object.\n     */\n    //% shim=numops::toString\n    toString(): string;\n}\n\n/**\n * Combine, split, and search text strings.\n*/\n//% blockNamespace=\"Text\"\ndeclare namespace String {\n\n    /**\n     * Make a string from the given ASCII character code.\n     */\n    //% help=math/from-char-code\n    //% shim=String_::fromCharCode\n    //% weight=0\n    //% blockNamespace=\"Text\" blockId=\"stringFromCharCode\" block=\"text from char code %code\" weight=1\n    function fromCharCode(code: number): string;\n}\n\ndeclare interface Number {\n    /**\n     * Returns a string representation of a number.\n     */\n    //% shim=numops::toString\n    toString(): string;\n}\n\n/**\n * Add, remove, and replace items in lists.\n*/\n//% blockNamespace=\"Arrays\"\ndeclare namespace Array {\n}\n\n/**\n * More complex operations with numbers.\n*/\ndeclare namespace Math {\n    /**\n     * Returns the value of a base expression taken to a specified power.\n     * @param x The base value of the expression.\n     * @param y The exponent value of the expression.\n     */\n    //% shim=Math_::pow\n    function pow(x: number, y: number): number;\n\n    /**\n     * Returns a pseudorandom number between 0 and 1.\n     */\n    //% shim=Math_::random\n    //% help=math/random\n    function random(): number;\n\n    /**\n     * Returns a pseudorandom number between min and max included.\n     * If both numbers are integral, the result is integral.\n     * @param min the lower inclusive bound, eg: 0\n     * @param max the upper inclusive bound, eg: 10\n     */\n    //% blockId=\"device_random\" block=\"pick random %min|to %limit\"\n    //% help=math/random-range\n    //% shim=Math_::randomRange\n    function randomRange(min: number, max: number): number;\n\n    /**\n     * Returns the natural logarithm (base e) of a number.\n     * @param x A number\n     */\n    //% shim=Math_::log\n    function log(x: number): number;\n\n    /**\n     * Returns returns ``e^x``.\n     * @param x A number\n     */\n    //% shim=Math_::exp\n    function exp(x: number): number;\n\n    /**\n     * Returns the sine of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::sin\n    function sin(x: number): number;\n\n    /**\n     * Returns the cosine of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::cos\n    function cos(x: number): number;\n\n    /**\n     * Returns the tangent of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::tan\n    function tan(x: number): number;\n\n    /**\n     * Returns the arcsine (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::asin\n    function asin(x: number): number;\n\n    /**\n     * Returns the arccosine (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::acos\n    function acos(x: number): number;\n\n    /**\n     * Returns the arctangent (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::atan\n    function atan(x: number): number;\n\n    /**\n     * Returns the arctangent of the quotient of its arguments.\n     * @param y A number\n     * @param x A number\n     */\n    //% shim=Math_::atan2\n    function atan2(y: number, x: number): number;\n\n    /**\n     * Returns the square root of a number.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::sqrt\n    function sqrt(x: number): number;\n\n    /**\n     * Returns the smallest number greater than or equal to its numeric argument.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::ceil\n    function ceil(x: number): number;\n\n    /**\n      * Returns the greatest number less than or equal to its numeric argument.\n      * @param x A numeric expression.\n      */\n    //% shim=Math_::floor\n    function floor(x: number): number;\n\n    /**\n      * Returns the number with the decimal part truncated.\n      * @param x A numeric expression.\n      */\n    //% shim=Math_::trunc\n    function trunc(x: number): number;\n\n    /**\n      * Returns a supplied numeric expression rounded to the nearest number.\n      * @param x The value to be rounded to the nearest number.\n      */\n    //% shim=Math_::round\n    function round(x: number): number;\n\n    /**\n     * Returns the value of integer signed 32 bit multiplication of two numbers.\n     * @param x The first number\n     * @param y The second number\n     */\n    //% shim=Math_::imul\n    function imul(x: number, y: number): number;\n\n    /**\n     * Returns the value of integer signed 32 bit division of two numbers.\n     * @param x The first number\n     * @param y The second number\n     */\n    //% shim=Math_::idiv\n    function idiv(x: number, y: number): number;\n}\n",
      "pxt-helpers.ts": "type Action = () => void;\n\n\n/**\n  * Convert a string to an integer.\n  * @param s A string to convert into an integral number. eg: 123\n  */\n//% help=text/parse-int\n//% blockId=\"string_parseint\" block=\"parse to integer %text\" blockNamespace=\"text\"\n//% text.defl=\"123\"\n//% blockHidden=1\nfunction parseInt(text: string): number {\n    return parseFloat(text) >> 0;\n}\n\nnamespace helpers {\n    export function arraySplice<T>(arr: T[], start: number, len: number) {\n        if (start < 0) {\n            return;\n        }\n        for (let i = 0; i < len; ++i) {\n            arr.removeAt(start)\n        }\n    }\n\n    export function arrayReverse<T>(arr: T[]): void {\n        let len = arr.length;\n        for (let i = 0; i < len / 2; i++) {\n            swap(arr, i, len - i - 1);\n        }\n    }\n\n    export function arrayShift<T>(arr: T[]): T {\n        return arr.removeAt(0);\n    }\n\n    export function arrayJoin<T>(arr: T[], sep: string): string {\n        let r = \"\";\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            if (i > 0 && sep)\n                r += sep;\n            r += arr[i] || \"\";\n        }\n        return r;\n    }\n\n    /*TODO: Enable this multiple value unshift, after rest is enabled in our compiler.\n        export function arrayUnshift<T>(arr: T[], ...values: T[]) : number {\n            for(let i = values.length; i > 0; --i) {\n                arr.insertAt(0, values[i - 1]);\n            }\n            return arr.length;\n        }\n    */\n    export function arrayUnshift<T>(arr: T[], value: T): number {\n        arr.insertAt(0, value);\n        return arr.length;\n    }\n\n    function swap<T>(arr: T[], i: number, j: number): void {\n        let temp: T = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n\n    function sortHelper<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (arr.length <= 0 || !callbackfn) {\n            return arr;\n        }\n        let len = arr.length;\n        // simple selection sort.\n        for (let i = 0; i < len - 1; ++i) {\n            for (let j = i + 1; j < len; ++j) {\n                if (callbackfn(arr[i], arr[j]) > 0) {\n                    swap(arr, i, j);\n                }\n            }\n        }\n        return arr;\n    }\n\n    export function arraySort<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (!callbackfn) {\n            //TODO: support native strings and number sorting\n            /* callbackfn = function (value1: string, value2: string) : number {\n                return value1.compare(value2);\n                }*/\n        }\n        return sortHelper(arr, callbackfn);\n    }\n\n    export function arrayMap<T, U>(arr: T[], callbackfn: (value: T, index: number) => U): U[] {\n        let res: U[] = []\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            res.push(callbackfn(arr[i], i))\n        }\n        return res\n    }\n\n    export function arraySome<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): boolean {\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i)\n            if (callbackfn(arr[i], i))\n                return true;\n        return false;\n    }\n\n    export function arrayEvery<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): boolean {\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i)\n            if (!callbackfn(arr[i], i))\n                return false;\n        return true;\n    }\n\n    export function arrayForEach<T>(arr: T[], callbackfn: (value: T, index: number) => void): void {\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            callbackfn(arr[i], i);\n        }\n    }\n\n    export function arrayFilter<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): T[] {\n        let res: T[] = []\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            let v = arr[i] // need to cache\n            if (callbackfn(v, i)) res.push(v)\n        }\n        return res\n    }\n\n    export function arrayReduce<T, U>(arr: T[], callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U {\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            initialValue = callbackfn(initialValue, arr[i], i)\n        }\n        return initialValue\n    }\n\n    export function arraySlice<T>(arr: T[], start: number, end: number): T[] {\n        const res: T[] = [];\n        const len = arr.length;\n\n        if (start < 0) {\n            start = Math.max(len + start, 0);\n        }\n\n        if (end < 0) {\n            end = len + end;\n        }\n\n        const sliceLength = end - start;\n\n        for (let i = 0; i < sliceLength; ++i) {\n            const index = i + start;\n            if (index >= len) {\n                break;\n            }\n            res.push(arr[index]);\n        }\n        return res;\n    }\n}\n\nnamespace Math {\n    export function clamp(min: number, max: number, value: number): number {\n        return Math.min(max, Math.max(min, value));\n    }\n\n    /**\n      * Returns the absolute value of a number (the value without regard to whether it is positive or negative).\n      * For example, the absolute value of -5 is the same as the absolute value of 5.\n      * @param x A numeric expression for which the absolute value is needed.\n      */\n    export function abs(x: number): number {\n        return x < 0 ? -x : x;\n    }\n\n    /**\n      * Returns the sign of the x, indicating whether x is positive, negative or zero.\n      * @param x The numeric expression to test\n      */\n    export function sign(x: number): number {\n        if (x == 0) return 0;\n        if (x > 0) return 1;\n        return -1;\n    }\n\n    /**\n      * Returns the larger of two supplied numeric expressions.\n      */\n    export function max(a: number, b: number): number {\n        if (a >= b) return a;\n        return b;\n    }\n\n    /**\n      * Returns the smaller of two supplied numeric expressions.\n      */\n    export function min(a: number, b: number): number {\n        if (a <= b) return a;\n        return b;\n    }\n\n    /**\n     * Rounds ``x`` to a number with the given number of ``digits``\n     * @param x the number to round\n     * @param digits the number of resulting digits\n     */\n    //%\n    export function roundWithPrecision(x: number, digits: number): number {\n        digits = digits | 0;\n        // invalid digits input\n        if (digits <= 0) return Math.round(x);\n        if (x == 0) return 0;\n        let r = 0;\n        do {\n            const d = Math.pow(10, digits);\n            r = Math.round(x * d) / d;\n            digits++;\n        } while (r == 0 && digits < 21);\n        return r;\n    }\n}\n\n\n//% blockHidden=1\nnamespace __internal {\n    /**\n     * A shim to render a boolean as a down/up toggle\n     */\n    //% shim=TD_ID blockHidden=1\n    //% blockId=toggleDownUp block=\"%down\"\n    //% down.fieldEditor=toggledownup\n    //% down.fieldOptions.decompileLiterals=true\n    export function __downUp(down: boolean): boolean {\n        return down;\n    }\n\n    /**\n     * A shim to render a boolean as a up/down toggle\n     */\n    //% shim=TD_ID blockHidden=1\n    //% blockId=toggleUpDown block=\"%up\"\n    //% up.fieldEditor=toggleupdown\n    //% up.fieldOptions.decompileLiterals=true\n    export function __upDown(up: boolean): boolean {\n        return up;\n    }\n\n    /**\n     * A shim to render a boolean as a high/low toggle\n     */\n    //% shim=TD_ID blockHidden=1\n    //% blockId=toggleHighLow block=\"%high\"\n    //% high.fieldEditor=togglehighlow\n    //% high.fieldOptions.decompileLiterals=true\n    export function __highLow(high: boolean): boolean {\n        return high;\n    }\n\n    /**\n     * A shim to render a boolean as a on/off toggle\n     */\n    //% shim=TD_ID blockHidden=1\n    //% blockId=toggleOnOff block=\"%on\"\n    //% on.fieldEditor=toggleonoff\n    //% on.fieldOptions.decompileLiterals=true\n    export function __onOff(on: boolean): boolean {\n        return on;\n    }\n\n    /**\n     * A shim to render a boolean as a yes/no toggle\n     */\n    //% shim=TD_ID blockHidden=1\n    //% blockId=toggleYesNo block=\"%yes\"\n    //% yes.fieldEditor=toggleyesno\n    //% yes.fieldOptions.decompileLiterals=true\n    export function __yesNo(yes: boolean): boolean {\n        return yes;\n    }\n\n    /**\n     * Get the color wheel field editor\n     * @param color color, eg: #ff0000\n     */\n    //% blockId=colorNumberPicker block=\"%value\"\n    //% blockHidden=true\n    //% shim=TD_ID colorSecondary=\"#FFFFFF\"\n    //% value.fieldEditor=\"colornumber\" value.fieldOptions.decompileLiterals=true\n    //% value.defl='#ff0000'\n    //% value.fieldOptions.colours='[\"#ff0000\",\"#ff8000\",\"#ffff00\",\"#ff9da5\",\"#00ff00\",\"#b09eff\",\"#00ffff\",\"#007fff\",\"#65471f\",\"#0000ff\",\"#7f00ff\",\"#ff0080\",\"#ff00ff\",\"#ffffff\",\"#999999\",\"#000000\"]'\n    //% value.fieldOptions.columns=4 value.fieldOptions.className='rgbColorPicker'\n    export function __colorNumberPicker(value: number) {\n        return value;\n    }\n\n    /**\n     * Get the color wheel field editor\n     * @param value value between 0 to 255 to get a color value, eg: 10\n     */\n    //% blockId=colorWheelPicker block=\"%value\"\n    //% blockHidden=true\n    //% shim=TD_ID colorSecondary=\"#FFFFFF\"\n    //% value.fieldEditor=\"colorwheel\" value.fieldOptions.decompileLiterals=true\n    //% value.fieldOptions.sliderWidth='200'\n    //% value.fieldOptions.min=0 value.fieldOptions.max=255\n    export function __colorWheelPicker(value: number) {\n        return value;\n    }\n\n    /**\n    * Get the color wheel field editor using HSV values\n    * @param value value between 0 to 255 to get a color value, eg: 10\n    */\n    //% blockId=colorWheelHsvPicker block=\"%value\"\n    //% blockHidden=true\n    //% shim=TD_ID colorSecondary=\"#FFFFFF\"\n    //% value.fieldEditor=\"colorwheel\" value.fieldOptions.decompileLiterals=true\n    //% value.fieldOptions.sliderWidth='200'\n    //% value.fieldOptions.min=0 value.fieldOptions.max=255\n    //% value.fieldOptions.channel=hsvfast\n    export function __colorWheelHsvPicker(value: number) {\n        return value;\n    }\n\n    /**\n     * A speed picker\n     * @param speed the speed, eg: 50\n     */\n    //% blockId=speedPicker block=\"%speed\" shim=TD_ID\n    //% speed.fieldEditor=\"speed\" colorSecondary=\"#FFFFFF\"\n    //% weight=0 blockHidden=1 speed.fieldOptions.decompileLiterals=1\n    export function __speedPicker(speed: number): number {\n        return speed;\n    }\n\n    /**\n     * A turn ratio picker\n     * @param turnratio the turn ratio, eg: 0\n     */\n    //% blockId=turnRatioPicker block=\"%turnratio\" shim=TD_ID\n    //% turnratio.fieldEditor=\"turnratio\" colorSecondary=\"#FFFFFF\"\n    //% weight=0 blockHidden=1 turnRatio.fieldOptions.decompileLiterals=1\n    export function __turnRatioPicker(turnratio: number): number {\n        return turnratio;\n    }\n\n    /**\n     * A field editor that displays a protractor\n     */\n    //% blockId=protractorPicker block=\"%angle\"\n    //% shim=TD_ID\n    //% angle.fieldEditor=protractor\n    //% angle.fieldOptions.decompileLiterals=1    \n    //% colorSecondary=\"#FFFFFF\"\n    //% blockHidden=1\n    export function __protractor(angle: number) {\n        return angle;\n    }\n\n    /**\n      * Get the time field editor\n      * @param ms time duration in milliseconds, eg: 500, 1000\n      */\n    //% blockId=timePicker block=\"%ms\"\n    //% blockHidden=true shim=TD_ID\n    //% colorSecondary=\"#FFFFFF\"\n    //% ms.fieldEditor=\"numberdropdown\" ms.fieldOptions.decompileLiterals=true\n    //% ms.fieldOptions.data='[[\"100 ms\", 100], [\"200 ms\", 200], [\"500 ms\", 500], [\"1 second\", 1000], [\"2 seconds\", 2000]]'\n    export function __timePicker(ms: number): number {\n        return ms;\n    }\n}",
      "pxt.cpp": "#include \"pxtbase.h\"\r\n\r\nusing namespace std;\r\n\r\nnamespace pxt {\r\n\r\nTValue incr(TValue e) {\r\n    if (isRefCounted(e)) {\r\n        getVTable((RefObject *)e);\r\n        ((RefObject *)e)->ref();\r\n    }\r\n    return e;\r\n}\r\n\r\nvoid decr(TValue e) {\r\n    if (isRefCounted(e)) {\r\n        ((RefObject *)e)->unref();\r\n    }\r\n}\r\n\r\n// TODO\r\nAction mkAction(int reflen, int totallen, int startptr) {\r\n    check(0 <= reflen && reflen <= totallen, ERR_SIZE, 1);\r\n    check(reflen <= totallen && totallen <= 255, ERR_SIZE, 2);\r\n    check(bytecode[startptr] == 0xffff, ERR_INVALID_BINARY_HEADER, 3);\r\n    check(bytecode[startptr + 1] == PXT_REF_TAG_ACTION, ERR_INVALID_BINARY_HEADER, 4);\r\n\r\n    uintptr_t tmp = (uintptr_t)&bytecode[startptr];\r\n\r\n    if (totallen == 0) {\r\n        return (TValue)tmp; // no closure needed\r\n    }\r\n\r\n    void *ptr = ::operator new(sizeof(RefAction) + totallen * sizeof(unsigned));\r\n    RefAction *r = new (ptr) RefAction();\r\n    r->len = totallen;\r\n    r->reflen = reflen;\r\n    r->func = (ActionCB)((tmp + 4) | 1);\r\n    memset(r->fields, 0, r->len * sizeof(unsigned));\r\n\r\n    MEMDBG(\"mkAction: start=%p => %p\", startptr, r);\r\n\r\n    return (Action)r;\r\n}\r\n\r\n// TODO\r\nTValue runAction3(Action a, TValue arg0, TValue arg1, TValue arg2) {\r\n    auto aa = (RefAction *)a;\r\n    if (aa->vtable == PXT_REF_TAG_ACTION) {\r\n        check(aa->refcnt == 0xffff, ERR_INVALID_BINARY_HEADER, 4);\r\n        return ((ActionCB)(((uintptr_t)a + 4) | 1))(NULL, arg0, arg1, arg2);\r\n    } else {\r\n        check(aa->refcnt != 0xffff, ERR_INVALID_BINARY_HEADER, 4);\r\n        return aa->runCore(arg0, arg1, arg2);\r\n    }\r\n}\r\n\r\nTValue runAction2(Action a, TValue arg0, TValue arg1) {\r\n    return runAction3(a, arg0, arg1, 0);\r\n}\r\n\r\nTValue runAction1(Action a, TValue arg0) {\r\n    return runAction3(a, arg0, 0, 0);\r\n}\r\n\r\nTValue runAction0(Action a) {\r\n    return runAction3(a, 0, 0, 0);\r\n}\r\n\r\nRefRecord *mkClassInstance(int vtableOffset) {\r\n    VTable *vtable = (VTable *)&bytecode[vtableOffset];\r\n\r\n    intcheck(vtable->methods[0] == &RefRecord_destroy, ERR_SIZE, 3);\r\n    intcheck(vtable->methods[1] == &RefRecord_print, ERR_SIZE, 4);\r\n\r\n    void *ptr = ::operator new(vtable->numbytes);\r\n    RefRecord *r = new (ptr) RefRecord(PXT_VTABLE_TO_INT(vtable));\r\n    memset(r->fields, 0, vtable->numbytes - sizeof(RefRecord));\r\n    MEMDBG(\"mkClass: vt=%p => %p\", vtable, r);\r\n    return r;\r\n}\r\n\r\nTValue RefRecord::ld(int idx) {\r\n    // intcheck((reflen == 255 ? 0 : reflen) <= idx && idx < len, ERR_OUT_OF_BOUNDS, 1);\r\n    return fields[idx];\r\n}\r\n\r\nTValue RefRecord::ldref(int idx) {\r\n    // DMESG(\"LD %p len=%d reflen=%d idx=%d\", this, len, reflen, idx);\r\n    // intcheck(0 <= idx && idx < reflen, ERR_OUT_OF_BOUNDS, 2);\r\n    TValue tmp = fields[idx];\r\n    incr(tmp);\r\n    return tmp;\r\n}\r\n\r\nvoid RefRecord::st(int idx, TValue v) {\r\n    // intcheck((reflen == 255 ? 0 : reflen) <= idx && idx < len, ERR_OUT_OF_BOUNDS, 3);\r\n    fields[idx] = v;\r\n}\r\n\r\nvoid RefRecord::stref(int idx, TValue v) {\r\n    // DMESG(\"ST %p len=%d reflen=%d idx=%d\", this, len, reflen, idx);\r\n    // intcheck(0 <= idx && idx < reflen, ERR_OUT_OF_BOUNDS, 4);\r\n    decr(fields[idx]);\r\n    fields[idx] = v;\r\n}\r\n\r\nvoid RefObject::destroyVT() {\r\n    ((RefObjectMethod)getVTable(this)->methods[0])(this);\r\n    ::operator delete(this);\r\n}\r\n\r\nvoid RefObject::printVT() {\r\n    ((RefObjectMethod)getVTable(this)->methods[1])(this);\r\n}\r\n\r\nvoid RefRecord_destroy(RefRecord *r) {\r\n    VTable *tbl = getVTable(r);\r\n    uint8_t *refmask = (uint8_t *)&tbl->methods[tbl->userdata & 0xff];\r\n    int len = (tbl->numbytes >> 2) - 1;\r\n    for (int i = 0; i < len; ++i) {\r\n        if (refmask[i])\r\n            decr(r->fields[i]);\r\n        r->fields[i] = 0;\r\n    }\r\n}\r\n\r\nvoid RefRecord_print(RefRecord *r) {\r\n    DMESG(\"RefRecord %p r=%d size=%d bytes\", r, r->refcnt, getVTable(r)->numbytes);\r\n}\r\n\r\nTValue Segment::get(unsigned i) {\r\n#ifdef DEBUG_BUILD\r\n    DMESG(\"In Segment::get index:%d\", i);\r\n    this->print();\r\n#endif\r\n\r\n    if (i < length) {\r\n        return data[i];\r\n    }\r\n    return Segment::DefaultValue;\r\n}\r\n\r\nvoid Segment::setRef(unsigned i, TValue value) {\r\n    decr(get(i));\r\n    set(i, value);\r\n}\r\n\r\nvoid Segment::set(unsigned i, TValue value) {\r\n    if (i < size) {\r\n        data[i] = value;\r\n    } else if (i < Segment::MaxSize) {\r\n        growByMin(i + 1);\r\n        data[i] = value;\r\n    } else {\r\n        return;\r\n    }\r\n    if (length <= i) {\r\n        length = i + 1;\r\n    }\r\n\r\n#ifdef DEBUG_BUILD\r\n    DMESG(\"In Segment::set\");\r\n    this->print();\r\n#endif\r\n\r\n    return;\r\n}\r\n\r\nramint_t Segment::growthFactor(ramint_t size) {\r\n    if (size == 0) {\r\n        return 4;\r\n    }\r\n    if (size < 64) {\r\n        return size * 2; // Double\r\n    }\r\n    if (size < 512) {\r\n        return size * 5 / 3; // Grow by 1.66 rate\r\n    }\r\n     // Grow by constant rate\r\n    if ((unsigned)size + 256 < MaxSize)\r\n        return size + 256;\r\n    else\r\n        return MaxSize;\r\n}\r\n\r\nvoid Segment::growByMin(ramint_t minSize) {\r\n    growBy(max(minSize, growthFactor(size)));\r\n}\r\n\r\nvoid Segment::growBy(ramint_t newSize) {\r\n#ifdef DEBUG_BUILD\r\n    DMESG(\"growBy: %d\", newSize);\r\n    this->print();\r\n#endif\r\n    if (size < newSize) {\r\n        // this will throw if unable to allocate\r\n        TValue *tmp = (TValue *)(::operator new(newSize * sizeof(TValue)));\r\n\r\n        // Copy existing data\r\n        if (size) {\r\n            memcpy(tmp, data, size * sizeof(TValue));\r\n        }\r\n        // fill the rest with default value\r\n        memset(tmp + size, 0, (newSize - size) * sizeof(TValue));\r\n\r\n        // free older segment;\r\n        ::operator delete(data);\r\n\r\n        data = tmp;\r\n        size = newSize;\r\n\r\n#ifdef DEBUG_BUILD\r\n        DMESG(\"growBy - after reallocation\");\r\n        this->print();\r\n#endif\r\n    }\r\n    // else { no shrinking yet; }\r\n    return;\r\n}\r\n\r\nvoid Segment::ensure(ramint_t newSize) {\r\n    if (newSize < size) {\r\n        return;\r\n    }\r\n    growByMin(newSize);\r\n}\r\n\r\nvoid Segment::setLength(unsigned newLength) {\r\n    if (newLength > size) {\r\n        ensure(length);\r\n    }\r\n    length = newLength;\r\n    return;\r\n}\r\n\r\nvoid Segment::push(TValue value) {\r\n    this->set(length, value);\r\n}\r\n\r\nTValue Segment::pop() {\r\n#ifdef DEBUG_BUILD\r\n    DMESG(\"In Segment::pop\");\r\n    this->print();\r\n#endif\r\n\r\n    if (length > 0) {\r\n        --length;\r\n        TValue value = data[length];\r\n        data[length] = Segment::DefaultValue;\r\n        return value;\r\n    }\r\n    return Segment::DefaultValue;\r\n}\r\n\r\n// this function removes an element at index i and shifts the rest of the elements to\r\n// left to fill the gap\r\nTValue Segment::remove(unsigned i) {\r\n#ifdef DEBUG_BUILD\r\n    DMESG(\"In Segment::remove index:%d\", i);\r\n    this->print();\r\n#endif\r\n    if (i < length) {\r\n        // value to return\r\n        TValue ret = data[i];\r\n        if (i + 1 < length) {\r\n            // Move the rest of the elements to fill in the gap.\r\n            memmove(data + i, data + i + 1, (length - i - 1) * sizeof(unsigned));\r\n        }\r\n        length--;\r\n        data[length] = Segment::DefaultValue;\r\n#ifdef DEBUG_BUILD\r\n        DMESG(\"After Segment::remove index:%d\", i);\r\n        this->print();\r\n#endif\r\n        return ret;\r\n    }\r\n    return Segment::DefaultValue;\r\n}\r\n\r\n// this function inserts element value at index i by shifting the rest of the elements right.\r\nvoid Segment::insert(unsigned i, TValue value) {\r\n#ifdef DEBUG_BUILD\r\n    DMESG(\"In Segment::insert index:%d value:%d\", i, value);\r\n    this->print();\r\n#endif\r\n\r\n    if (i < length) {\r\n        ensure(length + 1);\r\n        \r\n        // Move the rest of the elements to fill in the gap.\r\n        memmove(data + i + 1, data + i, (length - i) * sizeof(unsigned));\r\n\r\n        data[i] = value;\r\n        length++;\r\n    } else {\r\n        // This is insert beyond the length, just call set which will adjust the length\r\n        set(i, value);\r\n    }\r\n#ifdef DEBUG_BUILD\r\n    DMESG(\"After Segment::insert index:%d\", i);\r\n    this->print();\r\n#endif\r\n}\r\n\r\nvoid Segment::print() {\r\n    DMESG(\"Segment: %p, length: %d, size: %d\", data, (unsigned)length, (unsigned)size);\r\n    for (unsigned i = 0; i < size; i++) {\r\n        DMESG(\"-> %d\", (unsigned)(uintptr_t)data[i]);\r\n    }\r\n}\r\n\r\nbool Segment::isValidIndex(unsigned i) {\r\n    if (i > length) {\r\n        return false;\r\n    }\r\n    return true;\r\n}\r\n\r\nvoid Segment::destroy() {\r\n#ifdef DEBUG_BUILD\r\n    DMESG(\"In Segment::destroy\");\r\n    this->print();\r\n#endif\r\n    length = size = 0;\r\n    ::operator delete(data);\r\n    data = nullptr;\r\n}\r\n\r\nvoid RefCollection::push(TValue x) {\r\n    incr(x);\r\n    head.push(x);\r\n}\r\n\r\nTValue RefCollection::pop() {\r\n    TValue ret = head.pop();\r\n    incr(ret);\r\n    return ret;\r\n}\r\n\r\nTValue RefCollection::getAt(int i) {\r\n    TValue tmp = head.get(i);\r\n    incr(tmp);\r\n    return tmp;\r\n}\r\n\r\nTValue RefCollection::removeAt(int i) {\r\n    return head.remove(i);\r\n}\r\n\r\nvoid RefCollection::insertAt(int i, TValue value) {\r\n    head.insert(i, value);\r\n    incr(value);\r\n}\r\n\r\nvoid RefCollection::setAt(int i, TValue value) {\r\n    incr(value);\r\n    head.setRef(i, value);\r\n}\r\n\r\nint RefCollection::indexOf(TValue x, int start) {\r\n#ifndef X86_64\r\n    unsigned i = start;\r\n    while (head.isValidIndex(i)) {\r\n        if (pxt::eq_bool(head.get(i), x)) {\r\n            return (int)i;\r\n        }\r\n        i++;\r\n    }\r\n#endif\r\n    return -1;\r\n}\r\n\r\nbool RefCollection::removeElement(TValue x) {\r\n    int idx = indexOf(x, 0);\r\n    if (idx >= 0) {\r\n        decr(removeAt(idx));\r\n        return 1;\r\n    }\r\n    return 0;\r\n}\r\n\r\nnamespace Coll0 {\r\nPXT_VTABLE_BEGIN(RefCollection, 0, 0)\r\nPXT_VTABLE_END\r\n} // namespace Coll0\r\n\r\nRefCollection::RefCollection() : RefObject(0) {\r\n    vtable = PXT_VTABLE_TO_INT(&Coll0::RefCollection_vtable);\r\n}\r\n\r\nvoid RefCollection::destroy(RefCollection *t) {\r\n    for (unsigned i = 0; i < t->head.getLength(); i++) {\r\n        decr(t->head.get(i));\r\n    }\r\n    t->head.destroy();\r\n}\r\n\r\nvoid RefCollection::print(RefCollection *t) {\r\n    DMESG(\"RefCollection %p r=%d size=%d\", t, t->refcnt, t->head.getLength());\r\n    t->head.print();\r\n}\r\n\r\nPXT_VTABLE_CTOR(RefAction) {}\r\n\r\n// fields[] contain captured locals\r\nvoid RefAction::destroy(RefAction *t) {\r\n    for (int i = 0; i < t->reflen; ++i) {\r\n        decr(t->fields[i]);\r\n        t->fields[i] = 0;\r\n    }\r\n}\r\n\r\nvoid RefAction::print(RefAction *t) {\r\n    DMESG(\"RefAction %p r=%d pc=%X size=%d (%d refs)\", t, t->refcnt,\r\n          (const uint8_t *)t->func - (const uint8_t *)bytecode, t->len, t->reflen);\r\n}\r\n\r\nvoid RefLocal::print(RefLocal *t) {\r\n    DMESG(\"RefLocal %p r=%d v=%d\", t, t->refcnt, t->v);\r\n}\r\n\r\nvoid RefLocal::destroy(RefLocal *) {}\r\n\r\nPXT_VTABLE_CTOR(RefLocal) {\r\n    v = 0;\r\n}\r\n\r\nPXT_VTABLE_CTOR(RefRefLocal) {\r\n    v = 0;\r\n}\r\n\r\nvoid RefRefLocal::print(RefRefLocal *t) {\r\n    DMESG(\"RefRefLocal %p r=%d v=%p\", t, t->refcnt, (void *)t->v);\r\n}\r\n\r\nvoid RefRefLocal::destroy(RefRefLocal *t) {\r\n    decr(t->v);\r\n}\r\n\r\nPXT_VTABLE_BEGIN(RefMap, 0, RefMapMarker)\r\nPXT_VTABLE_END\r\nRefMap::RefMap() : PXT_VTABLE_INIT(RefMap) {}\r\n\r\nvoid RefMap::destroy(RefMap *t) {\r\n    for (unsigned i = 0; i < t->values.getLength(); ++i) {\r\n        decr(t->values.get(i));\r\n        t->values.set(i, 0);\r\n    }\r\n    t->keys.destroy();\r\n    t->values.destroy();\r\n}\r\n\r\nint RefMap::findIdx(unsigned key) {\r\n    for (unsigned i = 0; i < keys.getLength(); ++i) {\r\n        if ((uintptr_t)keys.get(i) == key)\r\n            return i;\r\n    }\r\n    return -1;\r\n}\r\n\r\nvoid RefMap::print(RefMap *t) {\r\n    DMESG(\"RefMap %p r=%d size=%d\", t, t->refcnt, t->keys.getLength());\r\n}\r\n\r\nvoid debugMemLeaks() {}\r\n\r\nvoid error(PXT_ERROR code, int subcode) {\r\n    DMESG(\"Error: %d [%d]\", code, subcode);\r\n    target_panic(42);\r\n}\r\n\r\nuint16_t *bytecode;\r\nTValue *globals;\r\n\r\nunsigned *allocate(ramint_t sz) {\r\n    unsigned *arr = new unsigned[sz];\r\n    memset(arr, 0, sz * sizeof(unsigned));\r\n    return arr;\r\n}\r\n\r\nvoid checkStr(bool cond, const char *msg) {\r\n    if (!cond) {\r\n        while (true) {\r\n            // uBit.display.scroll(msg, 100);\r\n            // uBit.sleep(100);\r\n        }\r\n    }\r\n}\r\n\r\nint templateHash() {\r\n    return ((int *)bytecode)[4];\r\n}\r\n\r\nint programHash() {\r\n    return ((int *)bytecode)[6];\r\n}\r\n\r\nint getNumGlobals() {\r\n    return bytecode[16];\r\n}\r\n\r\n#ifndef X86_64\r\nvoid exec_binary(unsigned *pc) {\r\n    // XXX re-enable once the calibration code is fixed and [editor/embedded.ts]\r\n    // properly prepends a call to [internal_main].\r\n    // ::touch_develop::internal_main();\r\n\r\n    // unique group for radio based on source hash\r\n    // ::touch_develop::micro_bit::radioDefaultGroup = programHash();\r\n\r\n    unsigned ver = *pc++;\r\n    checkStr(ver == 0x4209, \":( Bad runtime version\");\r\n\r\n    bytecode = *((uint16_t **)pc++); // the actual bytecode is here\r\n    globals = (TValue *)allocate(getNumGlobals());\r\n\r\n    // can be any valid address, best in RAM for speed\r\n    globals[0] = (TValue)&globals;\r\n\r\n    // just compare the first word\r\n    // TODO\r\n    checkStr(((uint32_t *)bytecode)[0] == 0x923B8E70 && (unsigned)templateHash() == *pc,\r\n             \":( Failed partial flash\");\r\n\r\n    uintptr_t startptr = (uintptr_t)bytecode;\r\n\r\n    startptr += 48; // header\r\n    startptr |= 1;  // Thumb state\r\n\r\n    initRuntime();\r\n\r\n    ((unsigned (*)())startptr)();\r\n\r\n    pxt::releaseFiber();\r\n}\r\n\r\nvoid start() {\r\n    exec_binary((unsigned *)functionsAndBytecode);\r\n}\r\n#endif\r\n\r\n} // namespace pxt\r\n",
      "pxt.h": "#ifndef __PXT_H\r\n#define __PXT_H\r\n\r\n//#define DEBUG_MEMLEAKS 1\r\n\r\n#pragma GCC diagnostic ignored \"-Wunused-parameter\"\r\n\r\n#include \"pxtbase.h\"\r\n\r\nnamespace pxt {\r\n\r\nclass RefMImage : public RefObject {\r\n  public:\r\n    ImageData *img;\r\n\r\n    RefMImage(ImageData *d);\r\n    void makeWritable();\r\n    static void destroy(RefMImage *map);\r\n    static void print(RefMImage *map);\r\n};\r\n\r\n#define MSTR(s) ManagedString((s)->data, (s)->length)\r\n\r\nstatic inline String PSTR(ManagedString s) {\r\n    return mkString(s.toCharArray(), s.length());\r\n}\r\n\r\ntypedef uint32_t ImageLiteral_;\r\n\r\nstatic inline ImageData *imageBytes(ImageLiteral_ lit) {\r\n    return (ImageData*)ptrOfLiteral(lit);\r\n}\r\n\r\ntypedef RefMImage *Image;\r\n\r\nextern MicroBit uBit;\r\nextern MicroBitEvent lastEvent;\r\n\r\nMicroBitPin *getPin(int id);\r\n\r\nstatic inline int min_(int a, int b) {\r\n    if (a < b) return a;\r\n    else return b;\r\n}\r\n\r\nstatic inline int max_(int a, int b) {\r\n    if (a > b) return a;\r\n    else return b;\r\n}\r\n\r\n}\r\n\r\nusing namespace pxt;\r\n\r\n#define DEVICE_EVT_ANY 0\r\n\r\n#endif\r\n\r\n// vim: ts=2 sw=2 expandtab\r\n",
      "pxt.json": "{\n    \"name\": \"core\",\n    \"description\": \"The microbit core library\",\n    \"files\": [\n        \"README.md\",\n        \"platform.h\",\n        \"pxt.cpp\",\n        \"pxt.h\",\n        \"pxtbase.h\",\n        \"pxtcore.h\",\n        \"math.ts\",\n        \"dal.d.ts\",\n        \"enums.d.ts\",\n        \"shims.d.ts\",\n        \"pxt-core.d.ts\",\n        \"core.cpp\",\n        \"pxt-helpers.ts\",\n        \"helpers.ts\",\n        \"pinscompat.ts\",\n        \"codal.cpp\",\n        \"images.cpp\",\n        \"basic.cpp\",\n        \"basic.ts\",\n        \"icons.ts\",\n        \"icons.jres\",\n        \"input.cpp\",\n        \"input.ts\",\n        \"gestures.jres\",\n        \"control.ts\",\n        \"control.cpp\",\n        \"console.ts\",\n        \"game.ts\",\n        \"led.cpp\",\n        \"led.ts\",\n        \"music.ts\",\n        \"melodies.ts\",\n        \"pins.cpp\",\n        \"pins.ts\",\n        \"serial.cpp\",\n        \"serial.ts\",\n        \"buffer.cpp\",\n        \"buffer.ts\",\n        \"movement.ts\",\n        \"pxtparts.json\",\n        \"main.ts\",\n        \"neopixel.ts\",\n        \"sendBuffer.asm\",\n        \".travis.yml\",\n        \"parts/speaker.svg\",\n        \"parts/headphone.svg\"\n    ],\n    \"public\": true,\n    \"dependencies\": {},\n    \"yotta\": {\n        \"optionalConfig\": {\n            \"microbit-dal\": {\n                \"bluetooth\": {\n                    \"private_addressing\": 0,\n                    \"advertising_timeout\": 0,\n                    \"tx_power\": 6,\n                    \"dfu_service\": 1,\n                    \"event_service\": 1,\n                    \"device_info_service\": 1,\n                    \"eddystone_url\": 1,\n                    \"eddystone_uid\": 1,\n                    \"open\": 0,\n                    \"pairing_mode\": 1,\n                    \"whitelist\": 1,\n                    \"security_level\": \"SECURITY_MODE_ENCRYPTION_NO_MITM\",\n                    \"partial_flashing\": 1\n                }\n            }\n        },\n        \"userConfigs\": [\n            {\n                \"description\": \"No Pairing Required: Anyone can connect via Bluetooth.\",\n                \"config\": {\n                    \"microbit-dal\": {\n                        \"bluetooth\": {\n                            \"open\": 1,\n                            \"whitelist\": 0,\n                            \"security_level\": null\n                        }\n                    }\n                }\n            },\n            {\n                \"description\": \"JustWorks pairing (default): Pairing is automatic once the pairing is initiated.\",\n                \"config\": {\n                    \"microbit-dal\": {\n                        \"bluetooth\": {\n                            \"open\": null,\n                            \"whitelist\": null,\n                            \"security_level\": null\n                        }\n                    }\n                }\n            },\n            {\n                \"description\": \"Passkey pairing: Pairing requires 6 digit key to pair.\",\n                \"config\": {\n                    \"microbit-dal\": {\n                        \"bluetooth\": {\n                            \"open\": 0,\n                            \"whitelist\": 1,\n                            \"security_level\": \"SECURITY_MODE_ENCRYPTION_WITH_MITM\"\n                        }\n                    }\n                }\n            }\n        ]\n    },\n    \"testFiles\": [\n        \"test.ts\"\n    ],\n    \"targetVersions\": {\n        \"target\": \"1.2.9\"\n    }\n}",
      "pxtbase.h": "#ifndef __PXTBASE_H\r\n#define __PXTBASE_H\r\n\r\n#pragma GCC diagnostic ignored \"-Wunused-parameter\"\r\n#pragma GCC diagnostic ignored \"-Wformat\"\r\n#pragma GCC diagnostic ignored \"-Warray-bounds\"\r\n\r\n// needed for gcc6; not sure why\r\n#undef min\r\n#undef max\r\n\r\n#define NOLOG(...)                                                                                 \\\r\n    do {                                                                                           \\\r\n    } while (0)\r\n\r\n#define MEMDBG NOLOG\r\n\r\n#include \"pxtconfig.h\"\r\n\r\n#define intcheck(...) check(__VA_ARGS__)\r\n//#define intcheck(...) do {} while (0)\r\n\r\n#include <string.h>\r\n#include <stdint.h>\r\n#include <math.h>\r\n\r\n#ifdef POKY\r\nvoid* operator new (size_t size, void* ptr);\r\nvoid* operator new (size_t size);\r\n#else\r\n#include <new>\r\n#endif\r\n\r\n#include \"platform.h\"\r\n#include \"pxtcore.h\"\r\n\r\n#ifndef PXT_VTABLE_SHIFT\r\n#define PXT_VTABLE_SHIFT 2\r\n#endif\r\n\r\n#define CONCAT_1(a, b) a##b\r\n#define CONCAT_0(a, b) CONCAT_1(a, b)\r\n#define STATIC_ASSERT(e) enum { CONCAT_0(_static_assert_, __LINE__) = 1 / ((e) ? 1 : 0) };\r\n\r\n#ifndef ramint_t\r\n// this type limits size of arrays\r\n#ifdef __linux__\r\n#define ramint_t uint32_t\r\n#else\r\n#define ramint_t uint16_t\r\n#endif\r\n#endif\r\n\r\n#ifdef POKY\r\ninline void *operator new(size_t, void *p) {\r\n    return p;\r\n}\r\ninline void *operator new[](size_t, void *p) {\r\n    return p;\r\n}\r\n#endif\r\n\r\nnamespace pxt {\r\n\r\ntemplate <typename T> inline const T &max(const T &a, const T &b) {\r\n    if (a < b)\r\n        return b;\r\n    return a;\r\n}\r\n\r\ntemplate <typename T> inline const T &min(const T &a, const T &b) {\r\n    if (a < b)\r\n        return a;\r\n    return b;\r\n}\r\n\r\ntemplate <typename T> inline void swap(T &a, T &b) {\r\n    T tmp = a;\r\n    a = b;\r\n    b = tmp;\r\n}\r\n\r\n//\r\n// Tagged values (assume 4 bytes for now, Cortex-M0)\r\n//\r\nstruct TValueStruct {};\r\ntypedef TValueStruct *TValue;\r\n\r\ntypedef TValue TNumber;\r\ntypedef TValue Action;\r\ntypedef TValue ImageLiteral;\r\n\r\n// To be implemented by the target\r\nextern \"C\" void target_panic(int error_code);\r\nextern \"C\" void target_reset();\r\nvoid sleep_ms(unsigned ms);\r\nvoid sleep_us(uint64_t us);\r\nvoid releaseFiber();\r\nuint64_t current_time_us();\r\nint current_time_ms();\r\nvoid initRuntime();\r\nvoid sendSerial(const char *data, int len);\r\nvoid setSendToUART(void (*f)(const char *, int));\r\nint getSerialNumber();\r\nvoid registerWithDal(int id, int event, Action a, int flags = 16); // EVENT_LISTENER_DEFAULT_FLAGS\r\nvoid runInParallel(Action a);\r\nvoid runForever(Action a);\r\nvoid waitForEvent(int id, int event);\r\n//%\r\nunsigned afterProgramPage();\r\n//%\r\nvoid dumpDmesg();\r\n\r\n// also defined DMESG macro\r\n// end\r\n\r\n#define TAGGED_SPECIAL(n) (TValue)(void *)((n << 2) | 2)\r\n#define TAG_FALSE TAGGED_SPECIAL(2)\r\n#define TAG_TRUE TAGGED_SPECIAL(16)\r\n#define TAG_UNDEFINED (TValue)0\r\n#define TAG_NULL TAGGED_SPECIAL(1)\r\n#define TAG_NUMBER(n) (TNumber)(void *)((n << 1) | 1)\r\n\r\ninline bool isTagged(TValue v) {\r\n    return ((intptr_t)v & 3) || !v;\r\n}\r\n\r\ninline bool isNumber(TValue v) {\r\n    return (intptr_t)v & 1;\r\n}\r\n\r\ninline bool isSpecial(TValue v) {\r\n    return (intptr_t)v & 2;\r\n}\r\n\r\ninline bool bothNumbers(TValue a, TValue b) {\r\n    return (intptr_t)a & (intptr_t)b & 1;\r\n}\r\n\r\ninline int numValue(TValue n) {\r\n    return (intptr_t)n >> 1;\r\n}\r\n\r\n#ifdef PXT_BOX_DEBUG\r\ninline bool canBeTagged(int) {\r\n    return false;\r\n}\r\n#else\r\ninline bool canBeTagged(int v) {\r\n    return (v << 1) >> 1 == v;\r\n}\r\n#endif\r\n\r\ntypedef enum {\r\n    ERR_INVALID_BINARY_HEADER = 5,\r\n    ERR_OUT_OF_BOUNDS = 8,\r\n    ERR_REF_DELETED = 7,\r\n    ERR_SIZE = 9,\r\n} PXT_ERROR;\r\n\r\nextern const unsigned functionsAndBytecode[];\r\nextern TValue *globals;\r\nextern uint16_t *bytecode;\r\nclass RefRecord;\r\n\r\n// Utility functions\r\n\r\n//%\r\nTValue runAction3(Action a, TValue arg0, TValue arg1, TValue arg2);\r\n//%\r\nTValue runAction2(Action a, TValue arg0, TValue arg1);\r\n//%\r\nTValue runAction1(Action a, TValue arg0);\r\n//%\r\nTValue runAction0(Action a);\r\n//%\r\nAction mkAction(int reflen, int totallen, int startptr);\r\n// allocate [sz] words and clear them\r\n//%\r\nunsigned *allocate(ramint_t sz);\r\n//%\r\nint templateHash();\r\n//%\r\nint programHash();\r\n//%\r\nunsigned programSize();\r\n//%\r\nint getNumGlobals();\r\n//%\r\nRefRecord *mkClassInstance(int vtableOffset);\r\n//%\r\nvoid debugMemLeaks();\r\n//%\r\nvoid anyPrint(TValue v);\r\n\r\nint getConfig(int key, int defl = -1);\r\n\r\n//%\r\nint toInt(TNumber v);\r\n//%\r\nunsigned toUInt(TNumber v);\r\n//%\r\ndouble toDouble(TNumber v);\r\n//%\r\nfloat toFloat(TNumber v);\r\n//%\r\nTNumber fromDouble(double r);\r\n//%\r\nTNumber fromFloat(float r);\r\n\r\n//%\r\nTNumber fromInt(int v);\r\n//%\r\nTNumber fromUInt(unsigned v);\r\n//%\r\nTValue fromBool(bool v);\r\n//%\r\nbool eq_bool(TValue a, TValue b);\r\n//%\r\nbool eqq_bool(TValue a, TValue b);\r\n\r\nvoid error(PXT_ERROR code, int subcode = 0);\r\nvoid exec_binary(unsigned *pc);\r\nvoid start();\r\n\r\nstruct HandlerBinding {\r\n    HandlerBinding *next;\r\n    int source;\r\n    int value;\r\n    Action action;\r\n};\r\nHandlerBinding *findBinding(int source, int value);\r\nvoid setBinding(int source, int value, Action act);\r\n\r\n// The standard calling convention is:\r\n//   - when a pointer is loaded from a local/global/field etc, and incr()ed\r\n//     (in other words, its presence on stack counts as a reference)\r\n//   - after a function call, all pointers are popped off the stack and decr()ed\r\n// This does not apply to the RefRecord and st/ld(ref) methods - they unref()\r\n// the RefRecord* this.\r\n//%\r\nTValue incr(TValue e);\r\n//%\r\nvoid decr(TValue e);\r\n\r\nclass RefObject;\r\n\r\nstatic inline RefObject *incrRC(RefObject *r) {\r\n    return (RefObject *)incr((TValue)r);\r\n}\r\nstatic inline void decrRC(RefObject *r) {\r\n    decr((TValue)r);\r\n}\r\n\r\ninline void *ptrOfLiteral(int offset) {\r\n    return &bytecode[offset];\r\n}\r\n\r\n// Checks if object is ref-counted, and has a custom PXT vtable in front\r\n// TODO\r\ninline bool isRefCounted(TValue e) {\r\n    return !isTagged(e) && (*((unsigned *)e) & 1) == 1;\r\n}\r\n\r\ninline void check(int cond, PXT_ERROR code, int subcode = 0) {\r\n    if (!cond)\r\n        error(code, subcode);\r\n}\r\n\r\ninline void oops() {\r\n    target_panic(47);\r\n}\r\n\r\nclass RefObject;\r\n\r\ntypedef void (*RefObjectMethod)(RefObject *self);\r\ntypedef void *PVoid;\r\ntypedef void **PPVoid;\r\n\r\ntypedef void *Object_;\r\n\r\nconst PPVoid RefMapMarker = (PPVoid)(void *)43;\r\n\r\nstruct VTable {\r\n    uint16_t numbytes; // in the entire object, including the vtable pointer\r\n    uint16_t userdata;\r\n    PVoid *ifaceTable;\r\n    PVoid methods[3]; // we only use up to three methods here; pxt will generate more\r\n                      // refmask sits at &methods[nummethods]\r\n};\r\n\r\nconst int vtableShift = PXT_VTABLE_SHIFT;\r\n\r\n// A base abstract class for ref-counted objects.\r\nclass RefObject {\r\n  public:\r\n    uint16_t refcnt;\r\n    uint16_t vtable;\r\n\r\n    RefObject(uint16_t vt) {\r\n        refcnt = 3;\r\n        vtable = vt;\r\n    }\r\n\r\n    void destroyVT();\r\n    void printVT();\r\n\r\n    inline bool isReadOnly() { return refcnt == 0xffff; }\r\n\r\n    // Increment/decrement the ref-count. Decrementing to zero deletes the current object.\r\n    inline void ref() {\r\n        if (isReadOnly())\r\n            return;\r\n        MEMDBG(\"INCR: %p refs=%d\", this, this->refcnt);\r\n        check(refcnt > 1, ERR_REF_DELETED);\r\n        refcnt += 2;\r\n    }\r\n\r\n    inline void unref() {\r\n        if (isReadOnly())\r\n            return;\r\n        MEMDBG(\"DECR: %p refs=%d\", this, this->refcnt);\r\n        check(refcnt > 1, ERR_REF_DELETED);\r\n        check((refcnt & 1), ERR_REF_DELETED);\r\n        refcnt -= 2;\r\n        if (refcnt == 1) {\r\n            destroyVT();\r\n        }\r\n    }\r\n};\r\n\r\nclass Segment {\r\n  private:\r\n    TValue *data;\r\n    ramint_t length;\r\n    ramint_t size;\r\n\r\n    // this just gives max value of ramint_t\r\n    static constexpr ramint_t MaxSize = (((1U << (8 * sizeof(ramint_t) - 1)) - 1) << 1) + 1;\r\n    static constexpr TValue DefaultValue = TAG_UNDEFINED;\r\n\r\n    static ramint_t growthFactor(ramint_t size);\r\n    void growByMin(ramint_t minSize);\r\n    void growBy(ramint_t newSize);\r\n    void ensure(ramint_t newSize);\r\n\r\n  public:\r\n    Segment() : data(nullptr), length(0), size(0){};\r\n\r\n    TValue get(unsigned i);\r\n    void set(unsigned i, TValue value);\r\n    void setRef(unsigned i, TValue value);\r\n\r\n    unsigned getLength() { return length; };\r\n    void setLength(unsigned newLength);\r\n    void resize(unsigned newLength) { setLength(newLength); }\r\n\r\n    void push(TValue value);\r\n    TValue pop();\r\n\r\n    TValue remove(unsigned i);\r\n    void insert(unsigned i, TValue value);\r\n\r\n    bool isValidIndex(unsigned i);\r\n\r\n    void destroy();\r\n\r\n    void print();\r\n};\r\n\r\n// A ref-counted collection of either primitive or ref-counted objects (String, Image,\r\n// user-defined record, another collection)\r\nclass RefCollection : public RefObject {\r\n  private:\r\n    Segment head;\r\n\r\n  public:\r\n    RefCollection();\r\n\r\n    static void destroy(RefCollection *coll);\r\n    static void print(RefCollection *coll);\r\n\r\n    unsigned length() { return head.getLength(); }\r\n    void setLength(unsigned newLength) { head.setLength(newLength); }\r\n\r\n    void push(TValue x);\r\n    TValue pop();\r\n    TValue getAt(int i);\r\n    void setAt(int i, TValue x);\r\n    // removes the element at index i and shifts the other elements left\r\n    TValue removeAt(int i);\r\n    // inserts the element at index i and moves the other elements right.\r\n    void insertAt(int i, TValue x);\r\n\r\n    int indexOf(TValue x, int start);\r\n    bool removeElement(TValue x);\r\n};\r\n\r\nclass RefMap : public RefObject {\r\n  public:\r\n    Segment keys;\r\n    Segment values;\r\n\r\n    RefMap();\r\n    static void destroy(RefMap *map);\r\n    static void print(RefMap *map);\r\n    int findIdx(unsigned key);\r\n};\r\n\r\n// A ref-counted, user-defined JS object.\r\nclass RefRecord : public RefObject {\r\n  public:\r\n    // The object is allocated, so that there is space at the end for the fields.\r\n    TValue fields[];\r\n\r\n    RefRecord(uint16_t v) : RefObject(v) {}\r\n\r\n    TValue ld(int idx);\r\n    TValue ldref(int idx);\r\n    void st(int idx, TValue v);\r\n    void stref(int idx, TValue v);\r\n};\r\n\r\n//%\r\nVTable *getVTable(RefObject *r);\r\n\r\n// these are needed when constructing vtables for user-defined classes\r\n//%\r\nvoid RefRecord_destroy(RefRecord *r);\r\n//%\r\nvoid RefRecord_print(RefRecord *r);\r\n\r\nclass RefAction;\r\ntypedef TValue (*ActionCB)(TValue *captured, TValue arg0, TValue arg1, TValue arg2);\r\n\r\n// Ref-counted function pointer.\r\nclass RefAction : public RefObject {\r\n  public:\r\n    // This is the same as for RefRecord.\r\n    uint8_t len;\r\n    uint8_t reflen;\r\n    ActionCB func; // The function pointer\r\n    // fields[] contain captured locals\r\n    TValue fields[];\r\n\r\n    static void destroy(RefAction *act);\r\n    static void print(RefAction *act);\r\n\r\n    RefAction();\r\n\r\n    inline void stCore(int idx, TValue v) {\r\n        // DMESG(\"ST [%d] = %d \", idx, v); this->print();\r\n        intcheck(0 <= idx && idx < len, ERR_OUT_OF_BOUNDS, 10);\r\n        intcheck(fields[idx] == 0, ERR_OUT_OF_BOUNDS, 11); // only one assignment permitted\r\n        fields[idx] = v;\r\n    }\r\n\r\n    inline TValue runCore(TValue arg0, TValue arg1,\r\n                          TValue arg2) // internal; use runAction*() functions\r\n    {\r\n        this->ref();\r\n        TValue r = this->func(&this->fields[0], arg0, arg1, arg2);\r\n        this->unref();\r\n        return r;\r\n    }\r\n};\r\n\r\n// These two are used to represent locals written from inside inline functions\r\nclass RefLocal : public RefObject {\r\n  public:\r\n    TValue v;\r\n    static void destroy(RefLocal *l);\r\n    static void print(RefLocal *l);\r\n    RefLocal();\r\n};\r\n\r\nclass RefRefLocal : public RefObject {\r\n  public:\r\n    TValue v;\r\n    static void destroy(RefRefLocal *l);\r\n    static void print(RefRefLocal *l);\r\n    RefRefLocal();\r\n};\r\n\r\ntypedef int color;\r\n\r\n// note: this is hardcoded in PXT (hexfile.ts)\r\n\r\n#define PXT_REF_TAG_STRING 1\r\n#define PXT_REF_TAG_BUFFER 2\r\n#define PXT_REF_TAG_IMAGE 3\r\n#define PXT_REF_TAG_NUMBER 32\r\n#define PXT_REF_TAG_ACTION 33\r\n\r\nclass BoxedNumber : public RefObject {\r\n  public:\r\n    double num;\r\n    BoxedNumber() : RefObject(PXT_REF_TAG_NUMBER) {}\r\n} __attribute__((packed));\r\n\r\nclass BoxedString : public RefObject {\r\n  public:\r\n    uint16_t length;\r\n    char data[0];\r\n    BoxedString() : RefObject(PXT_REF_TAG_STRING) {}\r\n};\r\n\r\nclass BoxedBuffer : public RefObject {\r\n  public:\r\n    // data needs to be word-aligned, so we use 32 bits for length\r\n    int length;\r\n    uint8_t data[0];\r\n    BoxedBuffer() : RefObject(PXT_REF_TAG_BUFFER) {}\r\n};\r\n\r\n\r\n// the first byte of data indicates the format - currently 0xE1 or 0xE4 to 1 or 4 bit bitmaps\r\n// second byte indicates width in pixels\r\n// third byte indicates the height (which should also match the size of the buffer)\r\n// just like ordinary buffers, these can be layed out in flash\r\nclass RefImage : public RefObject {\r\n    uintptr_t _buffer;\r\n    uint8_t _data[0];\r\n\r\n  public:\r\n    RefImage(BoxedBuffer *buf);\r\n    RefImage(uint32_t sz);\r\n\r\n    bool hasBuffer() { return !(_buffer & 1); }\r\n    BoxedBuffer *buffer() { return hasBuffer() ? (BoxedBuffer *)_buffer : NULL; }\r\n    void setBuffer(BoxedBuffer *b);\r\n    bool isDirty() { return (_buffer & 3) == 3; }\r\n    void clearDirty() { if (isDirty()) _buffer &= ~2; }\r\n\r\n    uint8_t *data() { return hasBuffer() ? buffer()->data : _data; }\r\n    int length() { return hasBuffer() ? buffer()->length : (_buffer >> 2); }\r\n    int pixLength() { return length() - 4; }\r\n\r\n    int height();\r\n    int width();\r\n    int byteHeight();\r\n    int wordHeight();\r\n    int bpp();\r\n\r\n    bool hasPadding() { return (height() & 0x1f) != 0; }\r\n\r\n    uint8_t *pix() { return data() + 4; }\r\n    uint8_t *pix(int x, int y);\r\n    uint8_t fillMask(color c);\r\n    bool inRange(int x, int y);\r\n    void clamp(int *x, int *y);\r\n    void makeWritable();\r\n\r\n    static void destroy(RefImage *t);\r\n    static void print(RefImage *t);\r\n};\r\n\r\nRefImage *mkImage(int w, int h, int bpp);\r\n\r\n\r\ntypedef BoxedBuffer *Buffer;\r\ntypedef BoxedString *String;\r\ntypedef RefImage *Image_;\r\n\r\n// keep in sync with github/pxt/pxtsim/libgeneric.ts\r\nenum class NumberFormat {\r\n    Int8LE = 1,\r\n    UInt8LE,\r\n    Int16LE,\r\n    UInt16LE,\r\n    Int32LE,\r\n    Int8BE,\r\n    UInt8BE,\r\n    Int16BE,\r\n    UInt16BE,\r\n    Int32BE,\r\n\r\n    UInt32LE,\r\n    UInt32BE,\r\n    Float32LE,\r\n    Float64LE,\r\n    Float32BE,\r\n    Float64BE,\r\n};\r\n\r\n// data can be NULL in both cases\r\nString mkString(const char *data, int len = -1);\r\nBuffer mkBuffer(const uint8_t *data, int len);\r\n\r\nTNumber getNumberCore(uint8_t *buf, int size, NumberFormat format);\r\nvoid setNumberCore(uint8_t *buf, int size, NumberFormat format, TNumber value);\r\n\r\nTNumber mkNaN();\r\n\r\nvoid seedRandom(unsigned seed);\r\n// max is inclusive\r\nunsigned getRandom(unsigned max);\r\n\r\nextern const VTable string_vt;\r\nextern const VTable image_vt;\r\nextern const VTable buffer_vt;\r\nextern const VTable number_vt;\r\nextern const VTable RefAction_vtable;\r\n\r\nenum class ValType {\r\n    Undefined,\r\n    Boolean,\r\n    Number,\r\n    String,\r\n    Object,\r\n    Function,\r\n};\r\n\r\nValType valType(TValue v);\r\n} // namespace pxt\r\n\r\n#define PXT_DEF_STRING(name, val)                                                                  \\\r\n    static const char name[] __attribute__((aligned(4))) = \"\\xff\\xff\\x01\\x00\" val;\r\n\r\nusing namespace pxt;\r\n\r\nnamespace numops {\r\n//%\r\nString stringConv(TValue v);\r\n//%\r\nString toString(TValue v);\r\n}\r\n\r\nnamespace pins {\r\nBuffer createBuffer(int size);\r\n}\r\n\r\nnamespace String_ {\r\n//%\r\nint compare(TValue a, TValue b);\r\n}\r\n\r\n// The ARM Thumb generator in the JavaScript code is parsing\r\n// the hex file and looks for the magic numbers as present here.\r\n//\r\n// Then it fetches function pointer addresses from there.\r\n//\r\n// The vtable pointers are there, so that the ::emptyData for various types\r\n// can be patched with the right vtable.\r\n//\r\n#define PXT_SHIMS_BEGIN                                                                            \\\r\n    namespace pxt {                                                                                \\\r\n    const unsigned functionsAndBytecode[]                                                          \\\r\n        __attribute__((aligned(0x20))) = {0x08010801, 0x42424242, 0x08010801, 0x8de9d83e,\r\n\r\n#define PXT_SHIMS_END                                                                              \\\r\n    }                                                                                              \\\r\n    ;                                                                                              \\\r\n    }\r\n\r\n#ifndef X86_64\r\n#pragma GCC diagnostic ignored \"-Wpmf-conversions\"\r\n#endif\r\n\r\n#define PXT_VTABLE_TO_INT(vt) ((uintptr_t)(vt) >> vtableShift)\r\n#define PXT_VTABLE_BEGIN(classname, flags, iface)                                                  \\\r\n    const VTable classname##_vtable __attribute__((aligned(1 << vtableShift))) = {                 \\\r\n        sizeof(classname), flags, iface, {(void *)&classname::destroy, (void *)&classname::print,\r\n\r\n#define PXT_VTABLE_END                                                                             \\\r\n    }                                                                                              \\\r\n    }                                                                                              \\\r\n    ;\r\n\r\n#define PXT_VTABLE_INIT(classname) RefObject(PXT_VTABLE_TO_INT(&classname##_vtable))\r\n\r\n#define PXT_VTABLE_CTOR(classname)                                                                 \\\r\n    PXT_VTABLE_BEGIN(classname, 0, 0)                                                              \\\r\n    PXT_VTABLE_END classname::classname() : PXT_VTABLE_INIT(classname)\r\n\r\n#define PXT_MAIN                                                                                   \\\r\n    int main() {                                                                                   \\\r\n        pxt::start();                                                                              \\\r\n        return 0;                                                                                  \\\r\n    }\r\n\r\n#define PXT_FNPTR(x) (unsigned)(void *)(x)\r\n\r\n#define PXT_ABI(...)\r\n\r\n#define JOIN(a, b) a##b\r\n/// Defines getClassName() function to fetch the singleton\r\n#define SINGLETON(ClassName)                                                                       \\\r\n    static ClassName *JOIN(inst, ClassName);                                                       \\\r\n    ClassName *JOIN(get, ClassName)() {                                                            \\\r\n        if (!JOIN(inst, ClassName))                                                                \\\r\n            JOIN(inst, ClassName) = new ClassName();                                               \\\r\n        return JOIN(inst, ClassName);                                                              \\\r\n    }\r\n\r\n#endif\r\n",
      "pxtcore.h": "#ifndef __PXTCORE_H\r\n#define __PXTCORE_H\r\n\r\n#include \"MicroBit.h\"\r\n#include \"MicroBitImage.h\"\r\n#include \"ManagedString.h\"\r\n#include \"ManagedType.h\"\r\n\r\nnamespace pxt {\r\nvoid debuglog(const char *format, ...);\r\n}\r\n\r\n\r\n#define DMESG NOLOG\r\n\r\n#endif\r\n",
      "pxtparts.json": "{\r\n    \"buttonpair\": {\r\n        \"simulationBehavior\": \"buttonpair\",\r\n        \"visual\": {\r\n            \"builtIn\": \"buttonpair\",\r\n            \"width\": 75,\r\n            \"height\": 45,\r\n            \"pinDistance\": 15,\r\n            \"pinLocations\": [\r\n                {\r\n                    \"x\": 0,\r\n                    \"y\": 0\r\n                },\r\n                {\r\n                    \"x\": 30,\r\n                    \"y\": 45\r\n                },\r\n                {\r\n                    \"x\": 45,\r\n                    \"y\": 0\r\n                },\r\n                {\r\n                    \"x\": 75,\r\n                    \"y\": 45\r\n                }\r\n            ]\r\n        },\r\n        \"numberOfPins\": 4,\r\n        \"pinDefinitions\": [\r\n            {\r\n                \"target\": \"P14\",\r\n                \"style\": \"male\",\r\n                \"orientation\": \"-Z\"\r\n            },\r\n            {\r\n                \"target\": \"ground\",\r\n                \"style\": \"male\",\r\n                \"orientation\": \"-Z\"\r\n            },\r\n            {\r\n                \"target\": \"P15\",\r\n                \"style\": \"male\",\r\n                \"orientation\": \"-Z\"\r\n            },\r\n            {\r\n                \"target\": \"ground\",\r\n                \"style\": \"male\",\r\n                \"orientation\": \"-Z\"\r\n            }\r\n        ],\r\n        \"instantiation\": {\r\n            \"kind\": \"singleton\"\r\n        },\r\n        \"assembly\": [\r\n            {\r\n                \"part\": true\r\n            },\r\n            {\r\n                \"pinIndices\": [\r\n                    0,\r\n                    1\r\n                ]\r\n            },\r\n            {\r\n                \"pinIndices\": [\r\n                    2,\r\n                    3\r\n                ]\r\n            }\r\n        ]\r\n    },\r\n    \"microservo\": {\r\n        \"simulationBehavior\": \"microservo\",\r\n        \"visual\": {\r\n            \"builtIn\": \"microservo\",\r\n            \"width\": 74.85,\r\n            \"height\": 200,\r\n            \"pinDistance\": 10,\r\n            \"pinLocations\": [\r\n                {\r\n                    \"x\": 30,\r\n                    \"y\": 5\r\n                },\r\n                {\r\n                    \"x\": 37,\r\n                    \"y\": 5\r\n                },\r\n                {\r\n                    \"x\": 45,\r\n                    \"y\": 5\r\n                }\r\n            ]\r\n        },\r\n        \"numberOfPins\": 3,\r\n        \"pinDefinitions\": [\r\n            {\r\n                \"target\": {\r\n                    \"pinInstantiationIdx\": 0\r\n                },\r\n                \"style\": \"croc\",\r\n                \"orientation\": \"+Z\"\r\n            },\r\n            {\r\n                \"target\": \"threeVolt\",\r\n                \"style\": \"croc\",\r\n                \"orientation\": \"+Z\"\r\n            },\r\n            {\r\n                \"target\": \"ground\",\r\n                \"style\": \"croc\",\r\n                \"orientation\": \"+Z\"\r\n            }\r\n        ],\r\n        \"instantiations\": [\r\n            {\r\n                \"kind\": \"function\",\r\n                \"fullyQualifiedName\": \"pins.servoWritePin,pins.servoSetPulse,PwmOnlyPin.servoWrite,PwmOnlyPin.servoSetPulse,servos.Servo.setAngle,servos.Servo.run,servos.Servo.setPulse\",\r\n                \"argumentRoles\": [\r\n                    {\r\n                        \"pinInstantiationIdx\": 0,\r\n                        \"partParameter\": \"name\"\r\n                    }\r\n                ]\r\n            }\r\n        ],\r\n        \"assembly\": [\r\n            {\r\n                \"part\": true,\r\n                \"pinIndices\": [\r\n                    2\r\n                ]\r\n            },\r\n            {\r\n                \"pinIndices\": [\r\n                    0,\r\n                    1\r\n                ]\r\n            }\r\n        ]\r\n    },\r\n    \"neopixel\": {\r\n        \"simulationBehavior\": \"neopixel\",\r\n        \"visual\": {\r\n            \"builtIn\": \"neopixel\",\r\n            \"width\": 58,\r\n            \"height\": 113,\r\n            \"pinDistance\": 9,\r\n            \"pinLocations\": [\r\n                {\r\n                    \"x\": 10,\r\n                    \"y\": 0\r\n                },\r\n                {\r\n                    \"x\": 19,\r\n                    \"y\": 0\r\n                },\r\n                {\r\n                    \"x\": 28,\r\n                    \"y\": 0\r\n                }\r\n            ]\r\n        },\r\n        \"numberOfPins\": 3,\r\n        \"pinDefinitions\": [\r\n            {\r\n                \"target\": {\r\n                    \"pinInstantiationIdx\": 0\r\n                },\r\n                \"style\": \"solder\",\r\n                \"orientation\": \"+Z\"\r\n            },\r\n            {\r\n                \"target\": \"threeVolt\",\r\n                \"style\": \"solder\",\r\n                \"orientation\": \"+Z\"\r\n            },\r\n            {\r\n                \"target\": \"ground\",\r\n                \"style\": \"solder\",\r\n                \"orientation\": \"+Z\"\r\n            }\r\n        ],\r\n        \"instantiation\": {\r\n            \"kind\": \"function\",\r\n            \"fullyQualifiedName\": \"neopixel.create\",\r\n            \"argumentRoles\": [\r\n                {\r\n                    \"pinInstantiationIdx\": 0,\r\n                    \"partParameter\": \"pin\"\r\n                },\r\n                {\r\n                    \"partParameter\": \"mode\"\r\n                }\r\n            ]\r\n        },\r\n        \"assembly\": [\r\n            {\r\n                \"part\": true,\r\n                \"pinIndices\": [\r\n                    2\r\n                ]\r\n            },\r\n            {\r\n                \"pinIndices\": [\r\n                    0,\r\n                    1\r\n                ]\r\n            }\r\n        ]\r\n    },\r\n    \"ledmatrix\": {\r\n        \"visual\": {\r\n            \"builtIn\": \"ledmatrix\",\r\n            \"width\": 105,\r\n            \"height\": 105,\r\n            \"pinDistance\": 15,\r\n            \"pinLocations\": [\r\n                {\r\n                    \"x\": 0,\r\n                    \"y\": 0\r\n                },\r\n                {\r\n                    \"x\": 15,\r\n                    \"y\": 0\r\n                },\r\n                {\r\n                    \"x\": 30,\r\n                    \"y\": 0\r\n                },\r\n                {\r\n                    \"x\": 45,\r\n                    \"y\": 0\r\n                },\r\n                {\r\n                    \"x\": 105,\r\n                    \"y\": 105\r\n                },\r\n                {\r\n                    \"x\": 0,\r\n                    \"y\": 105\r\n                },\r\n                {\r\n                    \"x\": 15,\r\n                    \"y\": 105\r\n                },\r\n                {\r\n                    \"x\": 30,\r\n                    \"y\": 105\r\n                },\r\n                {\r\n                    \"x\": 45,\r\n                    \"y\": 105\r\n                },\r\n                {\r\n                    \"x\": 60,\r\n                    \"y\": 0\r\n                }\r\n            ]\r\n        },\r\n        \"simulationBehavior\": \"ledmatrix\",\r\n        \"numberOfPins\": 10,\r\n        \"instantiation\": {\r\n            \"kind\": \"singleton\"\r\n        },\r\n        \"pinDefinitions\": [\r\n            {\r\n                \"target\": \"P6\",\r\n                \"style\": \"male\",\r\n                \"orientation\": \"-Z\",\r\n                \"colorGroup\": 0\r\n            },\r\n            {\r\n                \"target\": \"P7\",\r\n                \"style\": \"male\",\r\n                \"orientation\": \"-Z\",\r\n                \"colorGroup\": 0\r\n            },\r\n            {\r\n                \"target\": \"P8\",\r\n                \"style\": \"male\",\r\n                \"orientation\": \"-Z\",\r\n                \"colorGroup\": 0\r\n            },\r\n            {\r\n                \"target\": \"P9\",\r\n                \"style\": \"male\",\r\n                \"orientation\": \"-Z\",\r\n                \"colorGroup\": 0\r\n            },\r\n            {\r\n                \"target\": \"P10\",\r\n                \"style\": \"male\",\r\n                \"orientation\": \"-Z\",\r\n                \"colorGroup\": 0\r\n            },\r\n            {\r\n                \"target\": \"P12\",\r\n                \"style\": \"male\",\r\n                \"orientation\": \"-Z\",\r\n                \"colorGroup\": 1\r\n            },\r\n            {\r\n                \"target\": \"P13\",\r\n                \"style\": \"male\",\r\n                \"orientation\": \"-Z\",\r\n                \"colorGroup\": 1\r\n            },\r\n            {\r\n                \"target\": \"P16\",\r\n                \"style\": \"male\",\r\n                \"orientation\": \"-Z\",\r\n                \"colorGroup\": 1\r\n            },\r\n            {\r\n                \"target\": \"P19\",\r\n                \"style\": \"male\",\r\n                \"orientation\": \"-Z\",\r\n                \"colorGroup\": 1\r\n            },\r\n            {\r\n                \"target\": \"P20\",\r\n                \"style\": \"male\",\r\n                \"orientation\": \"-Z\",\r\n                \"colorGroup\": 1\r\n            }\r\n        ],\r\n        \"assembly\": [\r\n            {\r\n                \"part\": true\r\n            },\r\n            {\r\n                \"pinIndices\": [\r\n                    0,\r\n                    1,\r\n                    2,\r\n                    3,\r\n                    4\r\n                ]\r\n            },\r\n            {\r\n                \"pinIndices\": [\r\n                    5,\r\n                    6,\r\n                    7,\r\n                    8,\r\n                    9\r\n                ]\r\n            }\r\n        ]\r\n    },\r\n    \"headphone\": {\r\n        \"numberOfPins\": 2,\r\n        \"visual\": {\r\n            \"image\": \"parts/headphone.svg\",\r\n            \"width\": 142,\r\n            \"height\": 180,\r\n            \"pinDistance\": 20,\r\n            \"pinLocations\": [\r\n                {\r\n                    \"x\": 17,\r\n                    \"y\": 11\r\n                },\r\n                {\r\n                    \"x\": 55,\r\n                    \"y\": 50\r\n                }\r\n            ]\r\n        },\r\n        \"pinDefinitions\": [\r\n            {\r\n                \"target\": \"P0\",\r\n                \"style\": \"croc\",\r\n                \"orientation\": \"Y\"\r\n            },\r\n            {\r\n                \"target\": \"ground\",\r\n                \"style\": \"croc\",\r\n                \"orientation\": \"Y\"\r\n            }\r\n        ],\r\n        \"instantiation\": {\r\n            \"kind\": \"singleton\"\r\n        },\r\n        \"assembly\": [\r\n            {\r\n                \"part\": true,\r\n                \"pinIndices\": [\r\n                    0\r\n                ]\r\n            },\r\n            {\r\n                \"pinIndices\": [\r\n                    1\r\n                ]\r\n            }\r\n        ]\r\n    },\r\n    \"speaker\": {\r\n        \"numberOfPins\": 2,\r\n        \"visual\": {\r\n            \"image\": \"parts/speaker.svg\",\r\n            \"width\": 500,\r\n            \"height\": 500,\r\n            \"pinDistance\": 70,\r\n            \"pinLocations\": [\r\n                {\r\n                    \"x\": 180,\r\n                    \"y\": 135\r\n                },\r\n                {\r\n                    \"x\": 320,\r\n                    \"y\": 135\r\n                }\r\n            ]\r\n        },\r\n        \"pinDefinitions\": [\r\n            {\r\n                \"target\": \"P0\",\r\n                \"style\": \"male\",\r\n                \"orientation\": \"-Z\"\r\n            },\r\n            {\r\n                \"target\": \"ground\",\r\n                \"style\": \"male\",\r\n                \"orientation\": \"-Z\"\r\n            }\r\n        ],\r\n        \"instantiation\": {\r\n            \"kind\": \"singleton\"\r\n        },\r\n        \"assembly\": [\r\n            {\r\n                \"part\": true,\r\n                \"pinIndices\": [\r\n                    0\r\n                ]\r\n            },\r\n            {\r\n                \"pinIndices\": [\r\n                    1\r\n                ]\r\n            }\r\n        ]\r\n    }\r\n}",
      "sendBuffer.asm": "sendBufferAsm:\r\n\r\n    push {r4,r5,r6,r7,lr}\r\n    \r\n    mov r4, r0 ; save buff\r\n    mov r6, r1 ; save pin\r\n    \r\n    mov r0, r4\r\n    bl BufferMethods::length\r\n    mov r5, r0\r\n    \r\n    mov r0, r4\r\n    bl BufferMethods::getBytes\r\n    mov r4, r0\r\n    \r\n    ; setup pin as digital\r\n    mov r0, r6\r\n    movs r1, #0\r\n    bl pins::digitalWritePin\r\n    \r\n    ; load pin address\r\n    mov r0, r6\r\n    bl pins::getPinAddress\r\n\r\n    ldr r0, [r0, #8] ; get mbed DigitalOut from MicroBitPin\r\n    ldr r1, [r0, #4] ; r1-mask for this pin\r\n    ldr r2, [r0, #16] ; r2-clraddr\r\n    ldr r3, [r0, #12] ; r3-setaddr\r\n    \r\n    cpsid i ; disable irq\r\n    \r\n    b .start\r\n    \r\n.nextbit:               ;            C0\r\n    str r1, [r3, #0]    ; pin := hi  C2\r\n    tst r6, r0          ;            C3\r\n    bne .islate         ;            C4\r\n    str r1, [r2, #0]    ; pin := lo  C6\r\n.islate:\r\n    lsrs r6, r6, #1     ; r6 >>= 1   C7\r\n    bne .justbit        ;            C8\r\n    \r\n    ; not just a bit - need new byte\r\n    adds r4, #1         ; r4++       C9\r\n    subs r5, #1         ; r5--       C10\r\n    bcc .stop           ; if (r5<0) goto .stop  C11\r\n.start:\r\n    movs r6, #0x80      ; reset mask C12\r\n    nop                 ;            C13\r\n\r\n.common:               ;             C13\r\n    str r1, [r2, #0]   ; pin := lo   C15\r\n    ; always re-load byte - it just fits with the cycles better this way\r\n    ldrb r0, [r4, #0]  ; r0 := *r4   C17\r\n    b .nextbit         ;             C20\r\n\r\n.justbit: ; C10\r\n    ; no nops, branch taken is already 3 cycles\r\n    b .common ; C13\r\n\r\n.stop:    \r\n    str r1, [r2, #0]   ; pin := lo\r\n    cpsie i            ; enable irq\r\n\r\n    pop {r4,r5,r6,r7,pc}\r\n\r\n\r\n",
      "serial.cpp": "#include \"pxt.h\"\r\n\r\n#define MICROBIT_SERIAL_READ_BUFFER_LENGTH 64\r\n\r\n// make sure USB_TX and USB_RX don't overlap with other pin ids\r\nenum SerialPin {\r\n    P0 = MICROBIT_ID_IO_P0,\r\n    P1 = MICROBIT_ID_IO_P1,\r\n    P2 = MICROBIT_ID_IO_P2,\r\n    P8 = MICROBIT_ID_IO_P8,\r\n    P12 = MICROBIT_ID_IO_P12,\r\n    P13 = MICROBIT_ID_IO_P13,\r\n    P14 = MICROBIT_ID_IO_P14,\r\n    P15 = MICROBIT_ID_IO_P15,\r\n    P16 = MICROBIT_ID_IO_P16,\r\n    USB_TX = 1001,\r\n    USB_RX = 1002\r\n};\r\n\r\nenum BaudRate {\r\n  //% block=115200\r\n  BaudRate115200 = 115200,\r\n  //% block=57600\r\n  BaudRate57600 = 57600,\r\n  //% block=38400\r\n  BaudRate38400 = 38400,\r\n  //% block=31250\r\n  BaudRate31250 = 31250,\r\n  //% block=28800\r\n  BaudRate28800 = 28800,\r\n  //% block=19200\r\n  BaudRate19200 = 19200,\r\n  //% block=14400\r\n  BaudRate14400 = 14400,\r\n  //% block=9600\r\n  BaudRate9600 = 9600,\r\n  //% block=4800\r\n  BaudRate4800 = 4800,\r\n  //% block=2400\r\n  BaudRate2400 = 2400,\r\n  //% block=1200\r\n  BaudRate1200 = 1200,\r\n  //% block=300\r\n  BaudRate300 = 300\r\n};\r\n\r\nenum Delimiters {\r\n    //% block=\"new line\"\r\n    NewLine = 1,\r\n    //% block=\",\"\r\n    Comma = 2,\r\n    //% block=\"$\"\r\n    Dollar = 3,\r\n    //% block=\":\"\r\n    Colon = 4,\r\n    //% block=\".\"\r\n    Fullstop = 5,\r\n    //% block=\"#\"\r\n    Hash = 6,\r\n};\r\n\r\n//% weight=2 color=#002050 icon=\"\\uf287\"\r\n//% advanced=true\r\nnamespace serial {\r\n    // note that at least one // followed by % is needed per declaration!\r\n\r\n    /**\r\n     * Read a line of text from the serial port and return the buffer when the delimiter is met.\r\n     * @param delimiter text delimiter that separates each text chunk\r\n     */\r\n    //% help=serial/read-until\r\n    //% blockId=serial_read_until block=\"serial|read until %delimiter=serial_delimiter_conv\"\r\n    //% weight=19\r\n    String readUntil(String delimiter) {\r\n      return PSTR(uBit.serial.readUntil(MSTR(delimiter)));\r\n    }\r\n\r\n    /**\r\n    * Read the buffered received data as a string\r\n    */\r\n    //% help=serial/read-string\r\n    //% blockId=serial_read_buffer block=\"serial|read string\"\r\n    //% weight=18\r\n    String readString() {\r\n      int n = uBit.serial.getRxBufferSize();\r\n      if (n == 0) return mkString(\"\", 0);\r\n      return PSTR(uBit.serial.read(n, MicroBitSerialMode::ASYNC));\r\n    }\r\n\r\n    /**\r\n    * Register an event to be fired when one of the delimiter is matched.\r\n    * @param delimiters the characters to match received characters against.\r\n    */\r\n    //% help=serial/on-data-received\r\n    //% weight=18 blockId=serial_on_data_received block=\"serial|on data received %delimiters=serial_delimiter_conv\"\r\n    void onDataReceived(String delimiters, Action body) {\r\n      uBit.serial.eventOn(MSTR(delimiters));\r\n      registerWithDal(MICROBIT_ID_SERIAL, MICROBIT_SERIAL_EVT_DELIM_MATCH, body);\r\n      // lazy initialization of serial buffers\r\n      uBit.serial.read(MicroBitSerialMode::ASYNC);\r\n    }\r\n\r\n    /**\r\n     * Send a piece of text through the serial connection.\r\n     */\r\n    //% help=serial/write-string\r\n    //% weight=87 blockGap=8\r\n    //% blockId=serial_writestring block=\"serial|write string %text\"\r\n    //% text.shadowOptions.toString=true\r\n    void writeString(String text) {\r\n      if (!text) return;\r\n\r\n      uBit.serial.send(MSTR(text));\r\n    }\r\n\r\n    /**\r\n    * Send a buffer through serial connection\r\n    */\r\n    //% blockId=serial_writebuffer block=\"serial|write buffer %buffer=serial_readbuffer\"\r\n    //% help=serial/write-buffer advanced=true weight=6\r\n    void writeBuffer(Buffer buffer) {\r\n      if (!buffer) return;\r\n\r\n      uBit.serial.send(buffer->data, buffer->length);\r\n    }\r\n\r\n    /**\r\n    * Read multiple characters from the receive buffer. Pause until enough characters are present.\r\n    * @param length default buffer length, eg: 64\r\n    */\r\n    //% blockId=serial_readbuffer block=\"serial|read buffer %length\"\r\n    //% help=serial/read-buffer advanced=true weight=5\r\n    Buffer readBuffer(int length) {\r\n      if (length <= 0)\r\n        length = MICROBIT_SERIAL_READ_BUFFER_LENGTH;\r\n\r\n      auto buf = mkBuffer(NULL, length);\r\n      int read = uBit.serial.read(buf->data, buf->length);\r\n      if (read != length) {\r\n        auto prev = buf;\r\n        buf = mkBuffer(buf->data, read);\r\n        decrRC(prev);\r\n      }\r\n\r\n      return buf;\r\n    }\r\n\r\n    bool tryResolvePin(SerialPin p, PinName& name) {\r\n      switch(p) {\r\n        case SerialPin::USB_TX: name = USBTX; return true;\r\n        case SerialPin::USB_RX: name = USBRX; return true;\r\n        default: \r\n          auto pin = getPin(p); \r\n          if (NULL != pin) {\r\n            name = pin->name;\r\n            return true;\r\n          }\r\n      }\r\n      return false;\r\n    }\r\n\r\n    /**\r\n    * Set the serial input and output to use pins instead of the USB connection.\r\n    * @param tx the new transmission pin, eg: SerialPin.P0\r\n    * @param rx the new reception pin, eg: SerialPin.P1\r\n    * @param rate the new baud rate. eg: 115200\r\n    */\r\n    //% weight=10\r\n    //% help=serial/redirect\r\n    //% blockId=serial_redirect block=\"serial|redirect to|TX %tx|RX %rx|at baud rate %rate\"\r\n    //% blockExternalInputs=1\r\n    //% tx.fieldEditor=\"gridpicker\" tx.fieldOptions.columns=3\r\n    //% tx.fieldOptions.tooltips=\"false\"\r\n    //% rx.fieldEditor=\"gridpicker\" rx.fieldOptions.columns=3\r\n    //% rx.fieldOptions.tooltips=\"false\"\r\n    //% blockGap=8\r\n    void redirect(SerialPin tx, SerialPin rx, BaudRate rate) {\r\n      PinName txn;\r\n      PinName rxn;\r\n      if (tryResolvePin(tx, txn) && tryResolvePin(rx, rxn))\r\n        uBit.serial.redirect(txn, rxn);\r\n      uBit.serial.baud((int)rate);\r\n    }\r\n\r\n    /**\r\n    * Direct the serial input and output to use the USB connection.\r\n    */\r\n    //% weight=9 help=serial/redirect-to-usb\r\n    //% blockId=serial_redirect_to_usb block=\"serial|redirect to USB\"\r\n    void redirectToUSB() {\r\n      uBit.serial.redirect(USBTX, USBRX);\r\n      uBit.serial.baud(115200);\r\n    }\r\n}\r\n",
      "serial.ts": "/**\r\n * Reading and writing data over a serial connection.\r\n */\r\n//% weight=2 color=#002050 icon=\"\\uf287\"\r\n//% advanced=true\r\n//% deprecated =true\r\nnamespace serial {\r\n    /**\r\n     * Print a line of text to the serial port\r\n     * @param value to send over serial\r\n     */\r\n    //% weight=90\r\n    //% help=serial/write-line blockGap=8\r\n    //% blockId=serial_writeline block=\"serial|write line %text\"\r\n    //% text.shadowOptions.toString=true\r\n    export function writeLine(text: string): void {\r\n        if (!text) text = \"\";\r\n        // pad data to the 32 byte boundary\r\n        // to ensure apps receive the packet\r\n        let r = (32 - (text.length + 2) % 32) % 32;\r\n        serial.writeString(text);\r\n        for (let i = 0; i < r; ++i)\r\n            serial.writeString(\" \");\r\n        serial.writeString(\"\\r\\n\");\r\n    }\r\n\r\n    /**\r\n     * Print a numeric value to the serial port\r\n     */\r\n    //% help=serial/write-number\r\n    //% weight=89 blockGap=8\r\n    //% blockId=serial_writenumber block=\"serial|write number %value\"\r\n    export function writeNumber(value: number): void {\r\n        writeString(value.toString());\r\n    }\r\n\r\n    /**\r\n     * Print an array of numeric values as CSV to the serial port\r\n     */\r\n    //% help=serial/write-numbers\r\n    //% weight=86\r\n    //% blockId=serial_writenumbers block=\"serial|write numbers %values\"\r\n    export function writeNumbers(values: number[]): void {\r\n        if (!values) return;\r\n        for(let i = 0; i < values.length; ++i) {\r\n            if (i > 0) writeString(\",\");\r\n            writeNumber(values[i]);\r\n        }\r\n        writeLine(\"\")\r\n    }\r\n\r\n    /**\r\n     * Write a name:value pair as a line to the serial port.\r\n     * @param name name of the value stream, eg: x\r\n     * @param value to write\r\n     */\r\n    //% weight=88 blockGap=8\r\n    //% help=serial/write-value\r\n    //% blockId=serial_writevalue block=\"serial|write value %name|= %value\"\r\n    export function writeValue(name: string, value: number): void {\r\n        writeLine(name + \":\" + value);\r\n    }\r\n\r\n    /**\r\n     * Read a line of text from the serial port.\r\n     */\r\n    //% help=serial/read-line\r\n    //% blockId=serial_read_line block=\"serial|read line\"\r\n    //% weight=20 blockGap=8\r\n    export function readLine(): string {\r\n        return serial.readUntil(delimiters(Delimiters.NewLine));\r\n    }\r\n\r\n    /**\r\n     * Return the corresponding delimiter string\r\n     */\r\n    //% blockId=\"serial_delimiter_conv\" block=\"%del\"\r\n    //% weight=1 blockHidden=true\r\n    export function delimiters(del: Delimiters): string {\r\n        // even though it might not look like, this is more\r\n        // (memory) efficient than the C++ implementation, because the\r\n        // strings are statically allocated and take no RAM\r\n        switch (del) {\r\n            case Delimiters.NewLine: return \"\\n\"\r\n            case Delimiters.Comma: return \",\"\r\n            case Delimiters.Dollar: return \"$\"\r\n            case Delimiters.Colon: return \":\"\r\n            case Delimiters.Fullstop: return \".\"\r\n            case Delimiters.Hash: return \"#\"\r\n            default: return \"\\n\"\r\n        }\r\n    }\r\n}\r\n",
      "shims.d.ts": "// Auto-generated. Do not edit.\n\n\n    /**\n     * Creation, manipulation and display of LED images.\n     */\n    //% color=#7600A8 weight=31 icon=\"\\uf03e\"\n    //% advanced=true\n    //% deprecated=true\ndeclare namespace images {\n\n    /**\n     * Creates an image that fits on the LED screen.\n     */\n    //% weight=75 help=images/create-image\n    //% blockId=device_build_image block=\"create image\"\n    //% parts=\"ledmatrix\" imageLiteral=1 shim=images::createImage\n    function createImage(leds: string): Image;\n\n    /**\n     * Creates an image with 2 frames.\n     */\n    //% weight=74 help=images/create-big-image\n    //% blockId=device_build_big_image block=\"create big image\" imageLiteral=2\n    //% parts=\"ledmatrix\" shim=images::createBigImage\n    function createBigImage(leds: string): Image;\n}\n\n\ndeclare interface Image {\n    /**\n     * Plots the image at a given column to the screen\n     */\n    //% help=images/plot-image\n    //% parts=\"ledmatrix\" xOffset.defl=0 shim=ImageMethods::plotImage\n    plotImage(xOffset?: int32): void;\n\n    /**\n     * Shows an frame from the image at offset ``x offset``.\n     * @param xOffset column index to start displaying the image\n     */\n    //% help=images/show-image weight=80 blockNamespace=images\n    //% blockId=device_show_image_offset block=\"show image %sprite(myImage)|at offset %offset\" blockGap=8\n    //% parts=\"ledmatrix\" async interval.defl=400 shim=ImageMethods::showImage\n    showImage(xOffset: int32, interval?: int32): void;\n\n    /**\n     * Draws the ``index``-th frame of the image on the screen.\n     * @param xOffset column index to start displaying the image\n     */\n    //% help=images/plot-frame weight=80\n    //% parts=\"ledmatrix\" shim=ImageMethods::plotFrame\n    plotFrame(xOffset: int32): void;\n\n    /**\n     * Scrolls an image .\n     * @param frameOffset x offset moved on each animation step, eg: 1, 2, 5\n     * @param interval time between each animation step in milli seconds, eg: 200\n     */\n    //% help=images/scroll-image weight=79 async blockNamespace=images\n    //% blockId=device_scroll_image\n    //% block=\"scroll image %sprite(myImage)|with offset %frameoffset|and interval (ms) %delay\"\n    //% blockGap=8 parts=\"ledmatrix\" shim=ImageMethods::scrollImage\n    scrollImage(frameOffset: int32, interval: int32): void;\n\n    /**\n     * Sets all pixels off.\n     */\n    //% help=images/clear\n    //% parts=\"ledmatrix\" shim=ImageMethods::clear\n    clear(): void;\n\n    /**\n     * Sets a specific pixel brightness at a given position\n     */\n    //%\n    //% parts=\"ledmatrix\" shim=ImageMethods::setPixelBrightness\n    setPixelBrightness(x: int32, y: int32, value: int32): void;\n\n    /**\n     * Gets the pixel brightness ([0..255]) at a given position\n     */\n    //%\n    //% parts=\"ledmatrix\" shim=ImageMethods::pixelBrightness\n    pixelBrightness(x: int32, y: int32): int32;\n\n    /**\n     * Gets the width in columns\n     */\n    //% help=functions/width shim=ImageMethods::width\n    width(): int32;\n\n    /**\n     * Gets the height in rows (always 5)\n     */\n    //% shim=ImageMethods::height\n    height(): int32;\n\n    /**\n     * Set a pixel state at position ``(x,y)``\n     * @param x TODO\n     * @param y TODO\n     * @param value TODO\n     */\n    //% help=images/set-pixel\n    //% parts=\"ledmatrix\" shim=ImageMethods::setPixel\n    setPixel(x: int32, y: int32, value: boolean): void;\n\n    /**\n     * Get the pixel state at position ``(x,y)``\n     * @param x TODO\n     * @param y TODO\n     */\n    //% help=images/pixel\n    //% parts=\"ledmatrix\" shim=ImageMethods::pixel\n    pixel(x: int32, y: int32): boolean;\n\n    /**\n     * Shows a particular frame of the image strip.\n     * @param frame TODO\n     */\n    //% weight=70 help=images/show-frame\n    //% parts=\"ledmatrix\" interval.defl=400 shim=ImageMethods::showFrame\n    showFrame(frame: int32, interval?: int32): void;\n}\n\n\n    /**\n     * Provides access to basic micro:bit functionality.\n     */\n    //% color=#1E90FF weight=116 icon=\"\\uf00a\"\ndeclare namespace basic {\n\n    /**\n     * Draws an image on the LED screen.\n     * @param leds the pattern of LED to turn on/off\n     * @param interval time in milliseconds to pause after drawing\n     */\n    //% help=basic/show-leds\n    //% weight=95 blockGap=8\n    //% imageLiteral=1 async\n    //% blockId=device_show_leds\n    //% block=\"show leds\" icon=\"\\uf00a\"\n    //% parts=\"ledmatrix\"\n    //%deprecated=true interval.defl=400 shim=basic::showLeds\n    function showLeds(leds: string, interval?: int32): void;\n\n    /**\n     * Display text on the display, one character at a time. If the string fits on the screen (i.e. is one letter), does not scroll.\n     * @param text the text to scroll on the screen, eg: \"Hello!\"\n     * @param interval how fast to shift characters; eg: 150, 100, 200, -100\n     */\n    //% help=basic/show-string\n    //% weight=87 blockGap=16\n    //% block=\"show|string %text\"\n    //% async\n    //% blockId=device_print_message\n    //% parts=\"ledmatrix\"\n    //% text.shadowOptions.toString=true\n    //%deprecated=true interval.defl=150 shim=basic::showString\n    function showString(text: string, interval?: int32): void;\n\n    /**\n     * Turn off all LEDs\n     */\n    //% help=basic/clear-screen weight=79\n    //% blockId=device_clear_display block=\"clear screen\"\n    //% parts=\"ledmatrix\"\n    //% advanced=true\n    //%deprecated=true shim=basic::clearScreen\n    function clearScreen(): void;\n\n    /**\n     * Shows a sequence of LED screens as an animation.\n     * @param leds pattern of LEDs to turn on/off\n     * @param interval time in milliseconds between each redraw\n     */\n    //% help=basic/show-animation imageLiteral=1 async\n    //% parts=\"ledmatrix\"\n    //%deprecated=true interval.defl=400 shim=basic::showAnimation\n    function showAnimation(leds: string, interval?: int32): void;\n\n    /**\n     * Draws an image on the LED screen.\n     * @param leds pattern of LEDs to turn on/off\n     */\n    //% help=basic/plot-leds weight=80\n    //% parts=\"ledmatrix\"\n    //%deprecated=true imageLiteral=1 shim=basic::plotLeds\n    function plotLeds(leds: string): void;\n\n    /**\n     * Repeats the code forever in the background. On each iteration, allows other codes to run.\n     * @param body code to execute\n     */\n    //% help=basic/forever weight=55 blockGap=16 blockAllowMultiple=1 afterOnStart=true\n    //% blockId=device_forever block=\"forever\" icon=\"\\uf01e\"\n    //%deprecated=true shim=basic::forever\n    function forever(a: () => void): void;\n\n    /**\n     * Pause for the specified time in milliseconds\n     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000\n     */\n    //% help=basic/pause weight=54\n    //% async block=\"pause (ms) %pause\" blockGap=16\n    //% blockId=device_pause icon=\"\\uf110\"\n    //% pause.shadow=timePicker\n    //%deprecated=true shim=basic::pause\n    function pause(ms: int32): void;\n}\n\n\n\n    //% color=#D400D4 weight=111 icon=\"\\uf192\"\ndeclare namespace input {\n\n    /**\n     * Do something when a button (A, B or both A+B) is pushed down and released again.\n     * @param button the button that needs to be pressed\n     * @param body code to run when event is raised\n     */\n    //% help=input/on-button-pressed weight=85 blockGap=16\n    //% blockId=device_button_event block=\"on button|%NAME|pressed\"\n    //% parts=\"buttonpair\" shim=input::onButtonPressed\n    function onButtonPressed(button: Button, body: () => void): void;\n\n    /**\n     * Do something when when a gesture is done (like shaking the micro:bit).\n     * @param gesture the type of gesture to track, eg: Gesture.Shake\n     * @param body code to run when gesture is raised\n     */\n    //% help=input/on-gesture weight=84 blockGap=16\n    //% blockId=device_gesture_event block=\"on |%NAME\"\n    //% parts=\"accelerometer\"\n    //% NAME.fieldEditor=\"gestures\" NAME.fieldOptions.columns=4 shim=input::onGesture\n    function onGesture(gesture: Gesture, body: () => void): void;\n\n    /**\n     * Do something when a pin is touched and released again (while also touching the GND pin).\n     * @param name the pin that needs to be pressed, eg: TouchPin.P0\n     * @param body the code to run when the pin is pressed\n     */\n    //% help=input/on-pin-pressed weight=83 blockGap=32\n    //% blockId=device_pin_event block=\"on pin %name|pressed\" shim=input::onPinPressed\n    function onPinPressed(name: TouchPin, body: () => void): void;\n\n    /**\n     * Do something when a pin is released.\n     * @param name the pin that needs to be released, eg: TouchPin.P0\n     * @param body the code to run when the pin is released\n     */\n    //% help=input/on-pin-released weight=6 blockGap=16\n    //% blockId=device_pin_released block=\"on pin %NAME|released\"\n    //% advanced=true shim=input::onPinReleased\n    function onPinReleased(name: TouchPin, body: () => void): void;\n\n    /**\n     * Get the button state (pressed or not) for ``A`` and ``B``.\n     * @param button the button to query the request, eg: Button.A\n     */\n    //% help=input/button-is-pressed weight=60\n    //% block=\"button|%NAME|is pressed\"\n    //% blockId=device_get_button2\n    //% icon=\"\\uf192\" blockGap=8\n    //% parts=\"buttonpair\" shim=input::buttonIsPressed\n    function buttonIsPressed(button: Button): boolean;\n\n    /**\n     * Get the pin state (pressed or not). Requires to hold the ground to close the circuit.\n     * @param name pin used to detect the touch, eg: TouchPin.P0\n     */\n    //% help=input/pin-is-pressed weight=58\n    //% blockId=\"device_pin_is_pressed\" block=\"pin %NAME|is pressed\"\n    //% blockGap=8 shim=input::pinIsPressed\n    function pinIsPressed(name: TouchPin): boolean;\n\n    /**\n     * Get the acceleration value in milli-gravitys (when the board is laying flat with the screen up, x=0, y=0 and z=-1024)\n     * @param dimension TODO\n     */\n    //% help=input/acceleration weight=58\n    //% blockId=device_acceleration block=\"acceleration (mg)|%NAME\" blockGap=8\n    //% parts=\"accelerometer\" shim=input::acceleration\n    function acceleration(dimension: Dimension): int32;\n\n    /**\n     * Reads the light level applied to the LED screen in a range from ``0`` (dark) to ``255`` bright.\n     */\n    //% help=input/light-level weight=57\n    //% blockId=device_get_light_level block=\"light level\" blockGap=8\n    //% parts=\"ledmatrix\" shim=input::lightLevel\n    function lightLevel(): int32;\n\n    /**\n     * Get the current compass heading in degrees.\n     */\n    //% help=input/compass-heading\n    //% weight=56\n    //% blockId=device_heading block=\"compass heading (°)\" blockGap=8\n    //% parts=\"compass\" shim=input::compassHeading\n    function compassHeading(): int32;\n\n    /**\n     * Gets the temperature in Celsius degrees (°C).\n     */\n    //% weight=55\n    //% help=input/temperature\n    //% blockId=device_temperature block=\"temperature (°C)\" blockGap=8\n    //% parts=\"thermometer\" shim=input::temperature\n    function temperature(): int32;\n\n    /**\n     * The pitch or roll of the device, rotation along the ``x-axis`` or ``y-axis``, in degrees.\n     * @param kind TODO\n     */\n    //% help=input/rotation weight=52\n    //% blockId=device_get_rotation block=\"rotation (°)|%NAME\" blockGap=8\n    //% parts=\"accelerometer\" advanced=true shim=input::rotation\n    function rotation(kind: Rotation): int32;\n\n    /**\n     * Get the magnetic force value in ``micro-Teslas`` (``µT``). This function is not supported in the simulator.\n     * @param dimension TODO\n     */\n    //% help=input/magnetic-force weight=51\n    //% blockId=device_get_magnetic_force block=\"magnetic force (µT)|%NAME\" blockGap=8\n    //% parts=\"compass\"\n    //% advanced=true shim=input::magneticForce\n    function magneticForce(dimension: Dimension): int32;\n\n    /**\n     * Gets the number of milliseconds elapsed since power on.\n     */\n    //% help=input/running-time weight=50 blockGap=8\n    //% blockId=device_get_running_time block=\"running time (ms)\"\n    //% advanced=true shim=input::runningTime\n    function runningTime(): int32;\n\n    /**\n     * Gets the number of microseconds elapsed since power on.\n     */\n    //% help=input/running-time-micros weight=49\n    //% blockId=device_get_running_time_micros block=\"running time (micros)\"\n    //% advanced=true shim=input::runningTimeMicros\n    function runningTimeMicros(): int32;\n\n    /**\n     * Obsolete, compass calibration is automatic.\n     */\n    //% help=input/calibrate-compass advanced=true\n    //% blockId=\"input_compass_calibrate\" block=\"calibrate compass\"\n    //% weight=45 shim=input::calibrateCompass\n    function calibrateCompass(): void;\n\n    /**\n     * Sets the accelerometer sample range in gravities.\n     * @param range a value describe the maximum strengh of acceleration measured\n     */\n    //% help=input/set-accelerometer-range\n    //% blockId=device_set_accelerometer_range block=\"set accelerometer|range %range\"\n    //% weight=5\n    //% parts=\"accelerometer\"\n    //% advanced=true shim=input::setAccelerometerRange\n    function setAccelerometerRange(range: AcceleratorRange): void;\n}\n\n\n\n    //% weight=1 color=\"#333333\"\n    //% advanced=true\ndeclare namespace control {\n\n    /**\n     * Schedules code that run in the background.\n     */\n    //% help=control/in-background blockAllowMultiple=1 afterOnStart=true\n    //% blockId=\"control_in_background\" block=\"run in background\" blockGap=8 shim=control::inBackground\n    function inBackground(a: () => void): void;\n\n    /**\n     * Resets the BBC micro:bit.\n     */\n    //% weight=30 async help=control/reset blockGap=8\n    //% blockId=\"control_reset\" block=\"reset\" shim=control::reset\n    function reset(): void;\n\n    /**\n     * Blocks the current fiber for the given microseconds\n     * @param micros number of micro-seconds to wait. eg: 4\n     */\n    //% help=control/wait-micros weight=29\n    //% blockId=\"control_wait_us\" block=\"wait (µs)%micros\" shim=control::waitMicros\n    function waitMicros(micros: int32): void;\n\n    /**\n     * Raises an event in the event bus.\n     * @param src ID of the MicroBit Component that generated the event e.g. MICROBIT_ID_BUTTON_A.\n     * @param value Component specific code indicating the cause of the event.\n     * @param mode optional definition of how the event should be processed after construction (default is CREATE_AND_FIRE).\n     */\n    //% weight=21 blockGap=12 blockId=\"control_raise_event\" block=\"raise event|from source %src=control_event_source_id|with value %value=control_event_value_id\" blockExternalInputs=1\n    //% help=control/raise-event\n    //% mode.defl=1 shim=control::raiseEvent\n    function raiseEvent(src: int32, value: int32, mode?: EventCreationMode): void;\n\n    /**\n     * Registers an event handler.\n     */\n    //% weight=20 blockGap=8 blockId=\"control_on_event\" block=\"on event|from %src=control_event_source_id|with value %value=control_event_value_id\"\n    //% help=control/on-event\n    //% blockExternalInputs=1 shim=control::onEvent\n    function onEvent(src: int32, value: int32, handler: () => void): void;\n\n    /**\n     * Gets the value of the last event executed on the bus\n     */\n    //% blockId=control_event_value\" block=\"event value\"\n    //% help=control/event-value\n    //% weight=18 shim=control::eventValue\n    function eventValue(): int32;\n\n    /**\n     * Gets the timestamp of the last event executed on the bus\n     */\n    //% blockId=control_event_timestamp\" block=\"event timestamp\"\n    //% help=control/event-timestamp\n    //% weight=19 blockGap=8 shim=control::eventTimestamp\n    function eventTimestamp(): int32;\n\n    /**\n     * Make a friendly name for the device based on its serial number\n     */\n    //% blockId=\"control_device_name\" block=\"device name\" weight=10 blockGap=8\n    //% advanced=true shim=control::deviceName\n    function deviceName(): string;\n\n    /**\n     * Derive a unique, consistent serial number of this device from internal data.\n     */\n    //% blockId=\"control_device_serial_number\" block=\"device serial number\" weight=9\n    //% advanced=true shim=control::deviceSerialNumber\n    function deviceSerialNumber(): int32;\n\n    /**\n     * Informs simulator/runtime of a MIDI message\n     * Internal function to support the simulator.\n     */\n    //% part=midioutput blockHidden=1 shim=control::__midiSend\n    function __midiSend(buffer: Buffer): void;\n\n    /**\n     *\n     */\n    //% shim=control::__log\n    function __log(text: string): void;\n}\n\n\n\n    //% color=#7600A8 weight=101 icon=\"\\uf205\"\ndeclare namespace led {\n\n    /**\n     * Turn on the specified LED using x, y coordinates (x is horizontal, y is vertical). (0,0) is upper left.\n     * @param x the horizontal coordinate of the LED starting at 0\n     * @param y the vertical coordinate of the LED starting at 0\n     */\n    //% help=led/plot weight=78\n    //% blockId=device_plot block=\"plot|x %x|y %y\" blockGap=8\n    //% parts=\"ledmatrix\"\n    //% x.min=0 x.max=4 y.min=0 y.max=4\n    //% x.fieldOptions.precision=1 y.fieldOptions.precision=1 shim=led::plot\n    function plot(x: int32, y: int32): void;\n\n    /**\n     * Turn on the specified LED with specific brightness using x, y coordinates (x is horizontal, y is vertical). (0,0) is upper left.\n     * @param x the horizontal coordinate of the LED starting at 0\n     * @param y the vertical coordinate of the LED starting at 0\n     * @param brightness the brightness from 0 (off) to 255 (bright), eg:255\n     */\n    //% help=led/plot-brightness weight=78\n    //% blockId=device_plot_brightness block=\"plot|x %x|y %y|brightness %brightness\" blockGap=8\n    //% parts=\"ledmatrix\"\n    //% x.min=0 x.max=4 y.min=0 y.max=4 brightness.min=0 brightness.max=255\n    //% x.fieldOptions.precision=1 y.fieldOptions.precision=1\n    //% advanced=true shim=led::plotBrightness\n    function plotBrightness(x: int32, y: int32, brightness: int32): void;\n\n    /**\n     * Turn off the specified LED using x, y coordinates (x is horizontal, y is vertical). (0,0) is upper left.\n     * @param x TODO\n     * @param y TODO\n     */\n    //% help=led/unplot weight=77\n    //% blockId=device_unplot block=\"unplot|x %x|y %y\" blockGap=8\n    //% parts=\"ledmatrix\"\n    //% x.min=0 x.max=4 y.min=0 y.max=4\n    //% x.fieldOptions.precision=1 y.fieldOptions.precision=1 shim=led::unplot\n    function unplot(x: int32, y: int32): void;\n\n    /**\n     * Get the on/off state of the specified LED using x, y coordinates. (0,0) is upper left.\n     * @param x TODO\n     * @param y TODO\n     */\n    //% help=led/point weight=76\n    //% blockId=device_point block=\"point|x %x|y %y\"\n    //% parts=\"ledmatrix\"\n    //% x.min=0 x.max=4 y.min=0 y.max=4\n    //% x.fieldOptions.precision=1 y.fieldOptions.precision=1 shim=led::point\n    function point(x: int32, y: int32): boolean;\n\n    /**\n     * Get the screen brightness from 0 (off) to 255 (full bright).\n     */\n    //% help=led/brightness weight=60\n    //% blockId=device_get_brightness block=\"brightness\" blockGap=8\n    //% parts=\"ledmatrix\"\n    //% advanced=true shim=led::brightness\n    function brightness(): int32;\n\n    /**\n     * Set the screen brightness from 0 (off) to 255 (full bright).\n     * @param value the brightness value, eg:255, 127, 0\n     */\n    //% help=led/set-brightness weight=59\n    //% blockId=device_set_brightness block=\"set brightness %value\"\n    //% parts=\"ledmatrix\"\n    //% advanced=true\n    //% value.min=0 value.max=255 shim=led::setBrightness\n    function setBrightness(value: int32): void;\n\n    /**\n     * Cancels the current animation and clears other pending animations.\n     */\n    //% weight=50 help=led/stop-animation\n    //% blockId=device_stop_animation block=\"stop animation\"\n    //% parts=\"ledmatrix\"\n    //% advanced=true shim=led::stopAnimation\n    function stopAnimation(): void;\n\n    /**\n     * Sets the display mode between black and white and greyscale for rendering LEDs.\n     * @param mode mode the display mode in which the screen operates\n     */\n    //% weight=1 help=led/set-display-mode\n    //% parts=\"ledmatrix\" advanced=true weight=1\n    //% blockId=\"led_set_display_mode\" block=\"set display mode $mode\" shim=led::setDisplayMode\n    function setDisplayMode(mode: DisplayMode): void;\n\n    /**\n     * Gets the current display mode\n     */\n    //% weight=1 parts=\"ledmatrix\" advanced=true shim=led::displayMode\n    function displayMode(): DisplayMode;\n\n    /**\n     * Turns on or off the display\n     */\n    //% help=led/enable blockId=device_led_enable block=\"led enable %on\"\n    //% advanced=true parts=\"ledmatrix\" shim=led::enable\n    function enable(on: boolean): void;\n\n    /**\n     * Takes a screenshot of the LED screen and returns an image.\n     */\n    //% help=led/screenshot\n    //% parts=\"ledmatrix\" shim=led::screenshot\n    function screenshot(): Image;\n}\ndeclare namespace pins {\n\n    /**\n     * Read the specified pin or connector as either 0 or 1\n     * @param name pin to read from, eg: DigitalPin.P0\n     */\n    //% help=pins/digital-read-pin weight=30\n    //% blockId=device_get_digital_pin block=\"digital read|pin %name\" blockGap=8\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\n    //% name.fieldOptions.tooltips=\"false\" name.fieldOptions.width=\"250\" shim=pins::digitalReadPin\n    function digitalReadPin(name: DigitalPin): int32;\n\n    /**\n     * Set a pin or connector value to either 0 or 1.\n     * @param name pin to write to, eg: DigitalPin.P0\n     * @param value value to set on the pin, 1 eg,0\n     */\n    //% help=pins/digital-write-pin weight=29\n    //% blockId=device_set_digital_pin block=\"digital write|pin %name|to %value\"\n    //% value.min=0 value.max=1\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\n    //% name.fieldOptions.tooltips=\"false\" name.fieldOptions.width=\"250\" shim=pins::digitalWritePin\n    function digitalWritePin(name: DigitalPin, value: int32): void;\n\n    /**\n     * Read the connector value as analog, that is, as a value comprised between 0 and 1023.\n     * @param name pin to write to, eg: AnalogPin.P0\n     */\n    //% help=pins/analog-read-pin weight=25\n    //% blockId=device_get_analog_pin block=\"analog read|pin %name\" blockGap=\"8\"\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\n    //% name.fieldOptions.tooltips=\"false\" name.fieldOptions.width=\"250\" shim=pins::analogReadPin\n    function analogReadPin(name: AnalogPin): int32;\n\n    /**\n     * Set the connector value as analog. Value must be comprised between 0 and 1023.\n     * @param name pin name to write to, eg: AnalogPin.P0\n     * @param value value to write to the pin between ``0`` and ``1023``. eg:1023,0\n     */\n    //% help=pins/analog-write-pin weight=24\n    //% blockId=device_set_analog_pin block=\"analog write|pin %name|to %value\" blockGap=8\n    //% value.min=0 value.max=1023\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\n    //% name.fieldOptions.tooltips=\"false\" name.fieldOptions.width=\"250\" shim=pins::analogWritePin\n    function analogWritePin(name: AnalogPin, value: int32): void;\n\n    /**\n     * Configures the Pulse-width modulation (PWM) of the analog output to the given value in **microseconds** or `1/1000` milliseconds.\n     * If this pin is not configured as an analog output (using `analog write pin`), the operation has no effect.\n     * @param name analog pin to set period to, eg: AnalogPin.P0\n     * @param micros period in micro seconds. eg:20000\n     */\n    //% help=pins/analog-set-period weight=23 blockGap=8\n    //% blockId=device_set_analog_period block=\"analog set period|pin %pin|to (µs)%micros\"\n    //% pin.fieldEditor=\"gridpicker\" pin.fieldOptions.columns=4\n    //% pin.fieldOptions.tooltips=\"false\" shim=pins::analogSetPeriod\n    function analogSetPeriod(name: AnalogPin, micros: int32): void;\n\n    /**\n     * Configures this pin to a digital input, and generates events where the timestamp is the duration that this pin was either ``high`` or ``low``.\n     * @param name digital pin to register to, eg: DigitalPin.P0\n     * @param pulse the value of the pulse, eg: PulseValue.High\n     */\n    //% help=pins/on-pulsed weight=22 blockGap=16 advanced=true\n    //% blockId=pins_on_pulsed block=\"on|pin %pin|pulsed %pulse\"\n    //% pin.fieldEditor=\"gridpicker\" pin.fieldOptions.columns=4\n    //% pin.fieldOptions.tooltips=\"false\" pin.fieldOptions.width=\"250\" shim=pins::onPulsed\n    function onPulsed(name: DigitalPin, pulse: PulseValue, body: () => void): void;\n\n    /**\n     * Gets the duration of the last pulse in micro-seconds. This function should be called from a ``onPulsed`` handler.\n     */\n    //% help=pins/pulse-duration advanced=true\n    //% blockId=pins_pulse_duration block=\"pulse duration (µs)\"\n    //% weight=21 blockGap=8 shim=pins::pulseDuration\n    function pulseDuration(): int32;\n\n    /**\n     * Returns the duration of a pulse in microseconds\n     * @param name the pin which measures the pulse, eg: DigitalPin.P0\n     * @param value the value of the pulse, eg: PulseValue.High\n     * @param maximum duration in micro-seconds\n     */\n    //% blockId=\"pins_pulse_in\" block=\"pulse in (µs)|pin %name|pulsed %value\"\n    //% weight=20 advanced=true\n    //% help=pins/pulse-in\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\n    //% name.fieldOptions.tooltips=\"false\" name.fieldOptions.width=\"250\" maxDuration.defl=2000000 shim=pins::pulseIn\n    function pulseIn(name: DigitalPin, value: PulseValue, maxDuration?: int32): int32;\n\n    /**\n     * Writes a value to the servo, controlling the shaft accordingly. On a standard servo, this will set the angle of the shaft (in degrees), moving the shaft to that orientation. On a continuous rotation servo, this will set the speed of the servo (with ``0`` being full-speed in one direction, ``180`` being full speed in the other, and a value near ``90`` being no movement).\n     * @param name pin to write to, eg: AnalogPin.P0\n     * @param value angle or rotation speed, eg:180,90,0\n     */\n    //% help=pins/servo-write-pin weight=20\n    //% blockId=device_set_servo_pin block=\"servo write|pin %name|to %value\" blockGap=8\n    //% parts=microservo trackArgs=0\n    //% value.min=0 value.max=180\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\n    //% name.fieldOptions.tooltips=\"false\" name.fieldOptions.width=\"250\" shim=pins::servoWritePin\n    function servoWritePin(name: AnalogPin, value: int32): void;\n\n    /**\n     * Configures this IO pin as an analog/pwm output, configures the period to be 20 ms, and sets the pulse width, based on the value it is given **microseconds** or `1/1000` milliseconds.\n     * @param name pin name\n     * @param micros pulse duration in micro seconds, eg:1500\n     */\n    //% help=pins/servo-set-pulse weight=19\n    //% blockId=device_set_servo_pulse block=\"servo set pulse|pin %value|to (µs) %micros\"\n    //% value.fieldEditor=\"gridpicker\" value.fieldOptions.columns=4\n    //% value.fieldOptions.tooltips=\"false\" value.fieldOptions.width=\"250\" shim=pins::servoSetPulse\n    function servoSetPulse(name: AnalogPin, micros: int32): void;\n\n    /**\n     * Sets the pin used when using `analog pitch` or music.\n     * @param name pin to modulate pitch from\n     */\n    //% blockId=device_analog_set_pitch_pin block=\"analog set pitch pin %name\"\n    //% help=pins/analog-set-pitch-pin weight=3 advanced=true\n    //% name.fieldEditor=\"gridpicker\" name.fieldOptions.columns=4\n    //% name.fieldOptions.tooltips=\"false\" name.fieldOptions.width=\"250\" shim=pins::analogSetPitchPin\n    function analogSetPitchPin(name: AnalogPin): void;\n\n    /**\n     * Emits a Pulse-width modulation (PWM) signal to the current pitch pin. Use `analog set pitch pin` to define the pitch pin.\n     * @param frequency frequency to modulate in Hz.\n     * @param ms duration of the pitch in milli seconds.\n     */\n    //% blockId=device_analog_pitch block=\"analog pitch %frequency|for (ms) %ms\"\n    //% help=pins/analog-pitch weight=4 async advanced=true blockGap=8 shim=pins::analogPitch\n    function analogPitch(frequency: int32, ms: int32): void;\n\n    /**\n     * Configures the pull of this pin.\n     * @param name pin to set the pull mode on, eg: DigitalPin.P0\n     * @param pull one of the mbed pull configurations, eg: PinPullMode.PullUp\n     */\n    //% help=pins/set-pull weight=3 advanced=true\n    //% blockId=device_set_pull block=\"set pull|pin %pin|to %pull\"\n    //% pin.fieldEditor=\"gridpicker\" pin.fieldOptions.columns=4\n    //% pin.fieldOptions.tooltips=\"false\" pin.fieldOptions.width=\"250\" shim=pins::setPull\n    function setPull(name: DigitalPin, pull: PinPullMode): void;\n\n    /**\n     * Configures the events emitted by this pin. Events can be subscribed to\n     * using ``control.onEvent()``.\n     * @param name pin to set the event mode on, eg: DigitalPin.P0\n     * @param type the type of events for this pin to emit, eg: PinEventType.Edge\n     */\n    //% help=pins/set-events weight=4 advanced=true\n    //% blockId=device_set_pin_events block=\"set pin %pin|to emit %type|events\"\n    //% pin.fieldEditor=\"gridpicker\" pin.fieldOptions.columns=4\n    //% pin.fieldOptions.tooltips=\"false\" pin.fieldOptions.width=\"250\" shim=pins::setEvents\n    function setEvents(name: DigitalPin, type: PinEventType): void;\n\n    /**\n     * Create a new zero-initialized buffer.\n     * @param size number of bytes in the buffer\n     */\n    //% shim=pins::createBuffer\n    function createBuffer(size: int32): Buffer;\n\n    /**\n     * Read `size` bytes from a 7-bit I2C `address`.\n     */\n    //% repeat.defl=0 shim=pins::i2cReadBuffer\n    function i2cReadBuffer(address: int32, size: int32, repeat?: boolean): Buffer;\n\n    /**\n     * Write bytes to a 7-bit I2C `address`.\n     */\n    //% repeat.defl=0 shim=pins::i2cWriteBuffer\n    function i2cWriteBuffer(address: int32, buf: Buffer, repeat?: boolean): int32;\n\n    /**\n     * Write to the SPI slave and return the response\n     * @param value Data to be sent to the SPI slave\n     */\n    //% help=pins/spi-write weight=5 advanced=true\n    //% blockId=spi_write block=\"spi write %value\" shim=pins::spiWrite\n    function spiWrite(value: int32): int32;\n\n    /**\n     * Sets the SPI frequency\n     * @param frequency the clock frequency, eg: 1000000\n     */\n    //% help=pins/spi-frequency weight=4 advanced=true\n    //% blockId=spi_frequency block=\"spi frequency %frequency\" shim=pins::spiFrequency\n    function spiFrequency(frequency: int32): void;\n\n    /**\n     * Sets the SPI bits and mode\n     * @param bits the number of bits, eg: 8\n     * @param mode the mode, eg: 3\n     */\n    //% help=pins/spi-format weight=3 advanced=true\n    //% blockId=spi_format block=\"spi format|bits %bits|mode %mode\" shim=pins::spiFormat\n    function spiFormat(bits: int32, mode: int32): void;\n\n    /**\n     * Sets the MOSI, MISO, SCK pins used by the SPI instance\n     *\n     */\n    //% help=pins/spi-pins weight=2 advanced=true\n    //% blockId=spi_pins block=\"spi set pins|MOSI %mosi|MISO %miso|SCK %sck\"\n    //% mosi.fieldEditor=\"gridpicker\" mosi.fieldOptions.columns=4\n    //% mosi.fieldOptions.tooltips=\"false\" mosi.fieldOptions.width=\"250\"\n    //% miso.fieldEditor=\"gridpicker\" miso.fieldOptions.columns=4\n    //% miso.fieldOptions.tooltips=\"false\" miso.fieldOptions.width=\"250\"\n    //% sck.fieldEditor=\"gridpicker\" sck.fieldOptions.columns=4\n    //% sck.fieldOptions.tooltips=\"false\" sck.fieldOptions.width=\"250\" shim=pins::spiPins\n    function spiPins(mosi: DigitalPin, miso: DigitalPin, sck: DigitalPin): void;\n}\n\n\n\n    //% weight=2 color=#002050 icon=\"\\uf287\"\n    //% advanced=true\ndeclare namespace serial {\n\n    /**\n     * Read a line of text from the serial port and return the buffer when the delimiter is met.\n     * @param delimiter text delimiter that separates each text chunk\n     */\n    //% help=serial/read-until\n    //% blockId=serial_read_until block=\"serial|read until %delimiter=serial_delimiter_conv\"\n    //% weight=19 shim=serial::readUntil\n    function readUntil(delimiter: string): string;\n\n    /**\n     * Read the buffered received data as a string\n     */\n    //% help=serial/read-string\n    //% blockId=serial_read_buffer block=\"serial|read string\"\n    //% weight=18 shim=serial::readString\n    function readString(): string;\n\n    /**\n     * Register an event to be fired when one of the delimiter is matched.\n     * @param delimiters the characters to match received characters against.\n     */\n    //% help=serial/on-data-received\n    //% weight=18 blockId=serial_on_data_received block=\"serial|on data received %delimiters=serial_delimiter_conv\" shim=serial::onDataReceived\n    function onDataReceived(delimiters: string, body: () => void): void;\n\n    /**\n     * Send a piece of text through the serial connection.\n     */\n    //% help=serial/write-string\n    //% weight=87 blockGap=8\n    //% blockId=serial_writestring block=\"serial|write string %text\"\n    //% text.shadowOptions.toString=true shim=serial::writeString\n    function writeString(text: string): void;\n\n    /**\n     * Send a buffer through serial connection\n     */\n    //% blockId=serial_writebuffer block=\"serial|write buffer %buffer=serial_readbuffer\"\n    //% help=serial/write-buffer advanced=true weight=6 shim=serial::writeBuffer\n    function writeBuffer(buffer: Buffer): void;\n\n    /**\n     * Read multiple characters from the receive buffer. Pause until enough characters are present.\n     * @param length default buffer length, eg: 64\n     */\n    //% blockId=serial_readbuffer block=\"serial|read buffer %length\"\n    //% help=serial/read-buffer advanced=true weight=5 shim=serial::readBuffer\n    function readBuffer(length: int32): Buffer;\n\n    /**\n     * Set the serial input and output to use pins instead of the USB connection.\n     * @param tx the new transmission pin, eg: SerialPin.P0\n     * @param rx the new reception pin, eg: SerialPin.P1\n     * @param rate the new baud rate. eg: 115200\n     */\n    //% weight=10\n    //% help=serial/redirect\n    //% blockId=serial_redirect block=\"serial|redirect to|TX %tx|RX %rx|at baud rate %rate\"\n    //% blockExternalInputs=1\n    //% tx.fieldEditor=\"gridpicker\" tx.fieldOptions.columns=3\n    //% tx.fieldOptions.tooltips=\"false\"\n    //% rx.fieldEditor=\"gridpicker\" rx.fieldOptions.columns=3\n    //% rx.fieldOptions.tooltips=\"false\"\n    //% blockGap=8 shim=serial::redirect\n    function redirect(tx: SerialPin, rx: SerialPin, rate: BaudRate): void;\n\n    /**\n     * Direct the serial input and output to use the USB connection.\n     */\n    //% weight=9 help=serial/redirect-to-usb\n    //% blockId=serial_redirect_to_usb block=\"serial|redirect to USB\" shim=serial::redirectToUSB\n    function redirectToUSB(): void;\n}\n\n\n\n    //% indexerGet=BufferMethods::getByte indexerSet=BufferMethods::setByte\ndeclare interface Buffer {\n    /**\n     * Write a number in specified format in the buffer.\n     */\n    //% shim=BufferMethods::setNumber\n    setNumber(format: NumberFormat, offset: int32, value: number): void;\n\n    /**\n     * Read a number in specified format from the buffer.\n     */\n    //% shim=BufferMethods::getNumber\n    getNumber(format: NumberFormat, offset: int32): number;\n\n    /** Returns the length of a Buffer object. */\n    //% property shim=BufferMethods::length\n    length: int32;\n\n    /**\n     * Fill (a fragment) of the buffer with given value.\n     */\n    //% offset.defl=0 length.defl=-1 shim=BufferMethods::fill\n    fill(value: int32, offset?: int32, length?: int32): void;\n\n    /**\n     * Return a copy of a fragment of a buffer.\n     */\n    //% offset.defl=0 length.defl=-1 shim=BufferMethods::slice\n    slice(offset?: int32, length?: int32): Buffer;\n\n    /**\n     * Shift buffer left in place, with zero padding.\n     * @param offset number of bytes to shift; use negative value to shift right\n     * @param start start offset in buffer. Default is 0.\n     * @param length number of elements in buffer. If negative, length is set as the buffer length minus\n     * start. eg: -1\n     */\n    //% start.defl=0 length.defl=-1 shim=BufferMethods::shift\n    shift(offset: int32, start?: int32, length?: int32): void;\n\n    /**\n     * Convert a buffer to its hexadecimal representation.\n     */\n    //% shim=BufferMethods::toHex\n    toHex(): string;\n\n    /**\n     * Rotate buffer left in place.\n     * @param offset number of bytes to shift; use negative value to shift right\n     * @param start start offset in buffer. Default is 0.\n     * @param length number of elements in buffer. If negative, length is set as the buffer length minus\n     * start. eg: -1\n     */\n    //% start.defl=0 length.defl=-1 shim=BufferMethods::rotate\n    rotate(offset: int32, start?: int32, length?: int32): void;\n\n    /**\n     * Write contents of `src` at `dstOffset` in current buffer.\n     */\n    //% shim=BufferMethods::write\n    write(dstOffset: int32, src: Buffer): void;\n}\ndeclare namespace control {\n\n    /**\n     * Create a new zero-initialized buffer.\n     * @param size number of bytes in the buffer\n     */\n    //% shim=control::createBuffer\n    function createBuffer(size: int32): Buffer;\n}\n\n// Auto-generated. Do not edit. Really.\n",
      "test.ts": "let i = 1\r\nlet f = 0.5\r\nlet plus = i + f\r\nlet minus = i - f\r\n\r\nlet r = Math.random()\r\nlet ri = Math.randomRange(5, 10)\r\n\r\nforever(() => {\r\n    pause(100)\r\n})\r\n"
    },
    "radio": {
      "README.md": "# radio\n\nThe radio library.\n\n",
      "enums.d.ts": "// Auto-generated. Do not edit.\ndeclare namespace radio {\n}\n\n// Auto-generated. Do not edit. Really.\n",
      "pxt.json": "{\n    \"name\": \"radio\",\n    \"description\": \"The radio services\",\n    \"files\": [\n        \"README.md\",\n        \"shims.d.ts\",\n        \"enums.d.ts\",\n        \"radio.cpp\",\n        \"radio.ts\"\n    ],\n    \"icon\": \"./static/packages/radio/icon.png\",\n    \"public\": true,\n    \"dependencies\": {\n        \"core\": \"*\"\n    },\n    \"yotta\": {\n        \"config\": {\n            \"microbit-dal\": {\n                \"bluetooth\": {\n                    \"enabled\": 0\n                }\n            }\n        }\n    },\n    \"targetVersions\": {\n        \"target\": \"1.2.9\"\n    }\n}",
      "radio.cpp": "#include \"pxt.h\"\n\nusing namespace pxt;\n\n#define MAX_FIELD_NAME_LENGTH 12\n#define MAX_FIELD_DOUBLE_NAME_LENGTH 8\n#define MAX_PAYLOAD_LENGTH 20\n#define PACKET_PREFIX_LENGTH 9\n#define VALUE_PACKET_NAME_LEN_OFFSET 13\n#define DOUBLE_VALUE_PACKET_NAME_LEN_OFFSET 17\n\n\n// Packet Spec:\n// | 0              | 1 ... 4       | 5 ... 8           | 9 ... 28\n// ----------------------------------------------------------------\n// | packet type    | system time   | serial number     | payload\n//\n// Serial number defaults to 0 unless enabled by user\n\n// payload: number (9 ... 12)\n#define PACKET_TYPE_NUMBER 0\n\n// payload: number (9 ... 12), name length (13), name (14 ... 26)\n#define PACKET_TYPE_VALUE 1\n\n// payload: string length (9), string (10 ... 28)\n#define PACKET_TYPE_STRING 2\n\n// payload: buffer length (9), buffer (10 ... 28)\n#define PACKET_TYPE_BUFFER 3\n\n// payload: number (9 ... 16)\n#define PACKET_TYPE_DOUBLE 4\n\n// payload: number (9 ... 16), name length (17), name (18 ... 26)\n#define PACKET_TYPE_DOUBLE_VALUE 5\n\n//% color=#E3008C weight=96 icon=\"\\uf012\"\nnamespace radio {\n\n    // -------------------------------------------------------------------------\n    // Radio\n    // -------------------------------------------------------------------------\n    bool radioEnabled = false;\n    bool transmitSerialNumber = false;\n\n    PacketBuffer packet;\n\n    uint8_t type;\n    uint32_t time;\n    uint32_t serial;\n    int ivalue;\n    double dvalue;\n    String msg; // may be NULL before first packet\n    Buffer bufMsg; // may be NULL before first packet\n\n    int radioEnable() {\n        int r = uBit.radio.enable();\n        if (r != MICROBIT_OK) {\n            uBit.panic(43);\n            return r;\n        }\n        if (!radioEnabled) {\n            uBit.radio.setGroup(pxt::programHash());\n            uBit.radio.setTransmitPower(6); // start with high power by default\n            radioEnabled = true;\n        }\n        return r;\n    }\n\n    /**\n    * Sends an event over radio to neigboring devices\n    */\n    //% blockId=radioRaiseEvent block=\"radio raise event|from source %src=control_event_source_id|with value %value=control_event_value_id\" \n    //% blockExternalInputs=1\n    //% advanced=true\n    //% weight=1\n    //% help=radio/raise-event\n    void raiseEvent(int src, int value) {\n        if (radioEnable() != MICROBIT_OK) return;\n        uBit.radio.event.eventReceived(MicroBitEvent(src, value, CREATE_ONLY));\n    }\n\n    void setPacketPrefix(uint8_t* buf, int type) {\n        // prefix: type (0), time (1..4), serial (5..8)\n        uint32_t t = system_timer_current_time();\n        uint32_t sn = transmitSerialNumber ? microbit_serial_number() : 0;\n\n        buf[0] = (uint8_t) type;\n        memcpy(buf + 1, &t, 4);\n        memcpy(buf + 5, &sn, 4);\n    }\n\n    uint8_t copyStringValue(uint8_t* buf, String data, uint8_t maxLength) {\n        uint8_t len = min_(maxLength, data->length);\n\n        // One byte for length of the string\n        buf[0] = len;\n\n        if (len > 0) {\n            memcpy(buf + 1, data->data, len);\n        }\n        return len + 1;\n    }\n\n    String getStringValue(uint8_t* buf, uint8_t maxLength) {\n        // First byte is the string length\n        uint8_t len = min_(maxLength, buf[0]);\n        return mkString((char*)buf + 1, len);\n    }\n\n    uint8_t copyBufferValue(uint8_t* buf, Buffer data, uint8_t maxLength) {\n        uint8_t len = min_(maxLength, data->length);\n\n        // One byte for length of the buffer\n        buf[0] = len;\n        if (len > 0) {\n            memcpy(buf + 1, data->data, len);\n        }\n        return len + 1;\n    }\n\n    Buffer getBufferValue(uint8_t* buf, uint8_t maxLength) {\n        // First byte is the buffer length\n        uint8_t len = min_(maxLength, buf[0]);\n        // skip first byte\n        return mkBuffer(buf + 1, len);\n    }\n\n    void writePacketAsJSON(uint8_t tp, int iv, double dv, int s, int t, String m, Buffer b) {\n        // Convert the packet to JSON and send over serial\n        uBit.serial.send(\"{\");\n        uBit.serial.send(\"\\\"t\\\":\");\n        uBit.serial.send(t);\n        uBit.serial.send(\",\\\"s\\\":\");\n        uBit.serial.send(s);\n        if ((tp == PACKET_TYPE_STRING || tp == PACKET_TYPE_VALUE) && NULL != m) {\n            uBit.serial.send(\",\\\"n\\\":\\\"\");\n            uBit.serial.send((uint8_t*)m->data, m->length);\n            uBit.serial.send(\"\\\"\");\n        }\n        if (tp == PACKET_TYPE_BUFFER && NULL != b) {\n            uBit.serial.send(\",\\\"b\\\":\\\"\");\n            // TODO: proper base64 encoding\n            uBit.serial.send(b->data, b->length);\n            uBit.serial.send(\"\\\"\");\n        }\n        if (tp == PACKET_TYPE_NUMBER || tp == PACKET_TYPE_VALUE) {\n            uBit.serial.send(\",\\\"v\\\":\");\n            uBit.serial.send(iv);\n        } else if (tp == PACKET_TYPE_DOUBLE || tp == PACKET_TYPE_DOUBLE_VALUE) {\n            uBit.serial.send(\",\\\"v\\\":\");\n            TNumber td = fromDouble(dv);\n            String sd = numops::toString(td);\n            uBit.serial.send((uint8_t*)sd->data, sd->length);\n            decrRC(sd);\n        }\n        uBit.serial.send(\"}\\r\\n\");\n    }\n\n    /**\n     * Takes a packet from the micro:bit radio queue.\n     * @param writeToSerial if true, write the received packet to serial without updating the global packet;\n                            if false, update the global packet instead\n     */\n    void receivePacket(bool writeToSerial) {\n        PacketBuffer p = uBit.radio.datagram.recv();\n\n        uint8_t* buf = p.getBytes();\n        uint8_t tp;\n        int t;\n        int s;\n        int iv = 0;\n        double dv = 0;\n        String m = NULL;\n        Buffer b = NULL;\n\n        memcpy(&tp, buf, 1);\n        memcpy(&t, buf + 1, 4);\n        memcpy(&s, buf + 5, 4);\n\n        switch(tp) {\n            case PACKET_TYPE_STRING:\n                m = getStringValue(buf + PACKET_PREFIX_LENGTH, MAX_PAYLOAD_LENGTH - 1);\n                break;\n            case PACKET_TYPE_BUFFER:\n                b = getBufferValue(buf + PACKET_PREFIX_LENGTH, MAX_PAYLOAD_LENGTH - 1);\n                break;\n            case PACKET_TYPE_DOUBLE:\n            case PACKET_TYPE_DOUBLE_VALUE:\n                memcpy(&dv, buf + PACKET_PREFIX_LENGTH, sizeof(double));\n                if (tp == PACKET_TYPE_DOUBLE_VALUE) {\n                    m = getStringValue(buf + DOUBLE_VALUE_PACKET_NAME_LEN_OFFSET, MAX_FIELD_DOUBLE_NAME_LENGTH);\n                }\n                break;\n            case PACKET_TYPE_NUMBER:\n            case PACKET_TYPE_VALUE:\n                memcpy(&iv, buf + PACKET_PREFIX_LENGTH, sizeof(int));\n                if (tp == PACKET_TYPE_VALUE) {\n                    m = getStringValue(buf + VALUE_PACKET_NAME_LEN_OFFSET, MAX_FIELD_NAME_LENGTH);\n                }\n                break;\n            default: // unknown packet\n                return;\n        }\n\n        if (NULL == m)\n            m = mkString(\"\", 0);\n        if (NULL == b)\n            b = mkBuffer(NULL, 0);\n\n        if (!writeToSerial) {\n            // Refresh global packet\n            packet = p;\n            type = tp;\n            time = t;\n            serial = s;\n            ivalue = iv;\n            dvalue = dv;\n            decrRC(msg);\n            decrRC(bufMsg);\n            msg = m;\n            bufMsg = b;\n        }\n        else {\n            writePacketAsJSON(tp, iv, dv, s, t, m, b);\n            decrRC(m);\n            decrRC(b);\n        }\n    }\n\n    /**\n     * Broadcasts a number over radio to any connected micro:bit in the group.\n     */\n    //% help=radio/send-number\n    //% weight=60\n    //% blockId=radio_datagram_send block=\"radio send number %value\" blockGap=8\n    void sendNumber(TNumber value) {\n        if (radioEnable() != MICROBIT_OK) return;\n\n        int iv = toInt(value);\n        double dv = toDouble(value);\n        if (iv == dv) {\n            uint8_t length = PACKET_PREFIX_LENGTH + sizeof(int);\n            uint8_t buf[length];\n            memset(buf, 0, length);\n            setPacketPrefix(buf, PACKET_TYPE_NUMBER);\n            memcpy(buf + PACKET_PREFIX_LENGTH, &iv, sizeof(int));\n            uBit.radio.datagram.send(buf, length);\n        } else {\n            uint8_t length = PACKET_PREFIX_LENGTH + sizeof(double);\n            uint8_t buf[length];\n            memset(buf, 0, length);\n            setPacketPrefix(buf, PACKET_TYPE_DOUBLE);\n            memcpy(buf + PACKET_PREFIX_LENGTH, &dv, sizeof(double));\n            uBit.radio.datagram.send(buf, length);\n        }\n    }\n\n    /**\n    * Broadcasts a name / value pair along with the device serial number\n    * and running time to any connected micro:bit in the group.\n    * @param name the field name (max 12 characters), eg: \"name\"\n    * @param value the numberic value\n    */\n    //% help=radio/send-value\n    //% weight=59\n    //% blockId=radio_datagram_send_value block=\"radio send|value %name|= %value\" blockGap=8\n    void sendValue(String name, TNumber value) {\n        if (radioEnable() != MICROBIT_OK) return;\n\n        uint8_t buf[32];\n        memset(buf, 0, 32);\n\n        int iv = toInt(value);\n        double dv = toDouble(value);\n        if (iv == dv) {\n            setPacketPrefix(buf, PACKET_TYPE_VALUE);\n            memcpy(buf + PACKET_PREFIX_LENGTH, &iv, sizeof(int));\n\n            int stringLen = copyStringValue(buf + VALUE_PACKET_NAME_LEN_OFFSET, name, MAX_FIELD_DOUBLE_NAME_LENGTH);\n            uBit.radio.datagram.send(buf, VALUE_PACKET_NAME_LEN_OFFSET + stringLen);\n        } else {\n            setPacketPrefix(buf, PACKET_TYPE_DOUBLE_VALUE);\n            memcpy(buf + PACKET_PREFIX_LENGTH, &dv, sizeof(double));\n\n            int stringLen = copyStringValue(buf + DOUBLE_VALUE_PACKET_NAME_LEN_OFFSET, name, MAX_FIELD_NAME_LENGTH);\n            uBit.radio.datagram.send(buf, DOUBLE_VALUE_PACKET_NAME_LEN_OFFSET + stringLen);\n        }\n    }\n\n    /**\n     * Broadcasts a string along with the device serial number\n     * and running time to any connected micro:bit in the group.\n     */\n    //% help=radio/send-string\n    //% weight=58\n    //% blockId=radio_datagram_send_string block=\"radio send string %msg\"\n    //% msg.shadowOptions.toString=true\n    void sendString(String msg) {\n        if (radioEnable() != MICROBIT_OK || NULL == msg) return;\n\n        uint8_t buf[32];\n        memset(buf, 0, 32);\n\n        setPacketPrefix(buf, PACKET_TYPE_STRING);\n        int stringLen = copyStringValue(buf + PACKET_PREFIX_LENGTH, msg, MAX_PAYLOAD_LENGTH - 1);\n\n        uBit.radio.datagram.send(buf, PACKET_PREFIX_LENGTH + stringLen);\n    }\n\n    /**\n     * Broadcasts a buffer (up to 19 bytes long) along with the device serial number\n     * and running time to any connected micro:bit in the group.\n     */\n    //% help=radio/send-buffer\n    //% weight=57\n    //% advanced=true\n    void sendBuffer(Buffer msg) {\n        if (radioEnable() != MICROBIT_OK || NULL == msg) return;\n\n        uint8_t buf[32];\n        memset(buf, 0, 32);\n\n        setPacketPrefix(buf, PACKET_TYPE_BUFFER);\n        int bufLen = copyBufferValue(buf + PACKET_PREFIX_LENGTH, msg, MAX_PAYLOAD_LENGTH - 1);\n\n        uBit.radio.datagram.send(buf, PACKET_PREFIX_LENGTH + bufLen);\n    }\n\n\n    /**\n    * Reads the next packet from the radio queue and and writes it to serial\n    * as JSON.\n    */\n    //% help=radio/write-value-to-serial\n    //% weight=3\n    //% blockId=radio_write_value_serial block=\"radio write value to serial\"\n    //% deprecated=true\n    void writeValueToSerial() {\n        if (radioEnable() != MICROBIT_OK) return;\n        receivePacket(true);\n    }\n\n    /**\n    * Writes the last received packet to serial as JSON. This should be called\n    * within an ``onDataPacketReceived`` callback.\n    */\n    //% help=radio/write-received-packet-to-serial\n    //% weight=3\n    //% blockId=radio_write_packet_serial block=\"radio write received packet to serial\"\n    //% advanced=true\n    void writeReceivedPacketToSerial() {\n        if (radioEnable() != MICROBIT_OK) return;\n        writePacketAsJSON(type, ivalue, dvalue, (int) serial, (int) time, msg, bufMsg);\n    }\n\n    TNumber readNumber() {\n        if (type == PACKET_TYPE_NUMBER || type == PACKET_TYPE_VALUE)\n            return fromInt(ivalue);\n        else if (type == PACKET_TYPE_DOUBLE || type == PACKET_TYPE_DOUBLE_VALUE)\n            return fromDouble(dvalue);\n        else \n            return fromInt(0);\n    }\n\n    /**\n     * Reads the next packet from the radio queue and returns the packet's number\n     * payload or 0 if the packet did not contain a number.\n     */\n    //% help=radio/receive-number\n    //% weight=46\n    //% blockId=radio_datagram_receive block=\"radio receive number\" blockGap=8\n    //% deprecated=true\n    TNumber receiveNumber()\n    {\n        if (radioEnable() != MICROBIT_OK) return 0;\n        receivePacket(false);\n        return readNumber();\n    }\n\n    /**\n     * Registers code to run when a packet is received over radio.\n     */\n    //% help=radio/on-data-received\n    //% weight=50\n    //% blockId=radio_datagram_received_event block=\"radio on data received\" blockGap=8\n    //% deprecated=true\n    void onDataReceived(Action body) {\n        if (radioEnable() != MICROBIT_OK) return;\n        registerWithDal(MICROBIT_ID_RADIO, MICROBIT_RADIO_EVT_DATAGRAM, body);\n        // make sure the receive buffer has a free spot\n        receivePacket(false);\n    }\n\n\n    /**\n     * Reads the next packet from the radio queue and returns the packet's string\n     * payload or the empty string if the packet did not contain a string.\n     */\n    //% blockId=radio_datagram_receive_string block=\"radio receive string\" blockGap=8\n    //% weight=44\n    //% help=radio/receive-string\n    //% deprecated=true\n    String receiveString() {\n        if (radioEnable() != MICROBIT_OK) return mkString(\"\", 0);\n        receivePacket(false);\n        return msg;\n    }\n\n    /**\n     * Gets the received signal strength indicator (RSSI) from the last packet taken\n     * from the radio queue (via ``receiveNumber``, ``receiveString``, etc). Not supported in simulator.\n     * namespace=radio\n     */\n    //% help=radio/received-signal-strength\n    //% weight=40\n    //% blockId=radio_datagram_rssi block=\"radio received signal strength\"\n    //% deprecated=true\n    int receivedSignalStrength() {\n        if (radioEnable() != MICROBIT_OK) return 0;\n        return packet.getRSSI();\n    }\n\n    /**\n     * Sets the group id for radio communications. A micro:bit can only listen to one group ID at any time.\n     * @param id the group id between ``0`` and ``255``, eg: 1\n     */\n    //% help=radio/set-group\n    //% weight=10 blockGap=8\n    //% blockId=radio_set_group block=\"radio set group %ID\"\n    //% id.min=0 id.max=255\n    void setGroup(int id) {\n        if (radioEnable() != MICROBIT_OK) return;\n        uBit.radio.setGroup(id);\n    }\n\n    /**\n     * Change the output power level of the transmitter to the given value.\n    * @param power a value in the range 0..7, where 0 is the lowest power and 7 is the highest. eg: 7\n    */\n    //% help=radio/set-transmit-power\n    //% weight=9 blockGap=8\n    //% blockId=radio_set_transmit_power block=\"radio set transmit power %power\"\n    //% power.min=0 power.max=7\n    //% advanced=true\n    void setTransmitPower(int power) {\n        if (radioEnable() != MICROBIT_OK) return;\n        uBit.radio.setTransmitPower(power);\n    }\n\n    /**\n    * Set the radio to transmit the serial number in each message.\n    * @param transmit value indicating if the serial number is transmitted, eg: true\n    */\n    //% help=radio/set-transmit-serial-number\n    //% weight=8 blockGap=8\n    //% blockId=radio_set_transmit_serial_number block=\"radio set transmit serial number %transmit\"\n    //% advanced=true\n    void setTransmitSerialNumber(bool transmit) {\n        if (radioEnable() != MICROBIT_OK) return;\n        transmitSerialNumber = transmit;\n    }\n\n    /**\n     * Returns the number payload from the last packet taken from the radio queue\n     * (via ``receiveNumber``, ``receiveString``, etc) or 0 if that packet did not\n     * contain a number.\n     */\n    //% help=radio/received-number\n    TNumber receivedNumber() {\n        if (radioEnable() != MICROBIT_OK) return 0;\n        return readNumber();\n    }\n\n    /**\n     * Returns the serial number of the sender micro:bit from the last packet taken\n     * from the radio queue (via ``receiveNumber``, ``receiveString``, etc) or 0 if\n     * that packet did not send a serial number.\n     */\n    //% help=radio/received-serial\n    uint32_t receivedSerial() {\n        if (radioEnable() != MICROBIT_OK) return 0;\n        return serial;\n    }\n\n    /**\n     * Returns the string payload from the last packet taken from the radio queue\n     * (via ``receiveNumber``, ``receiveString``, etc) or the empty string if that\n     * packet did not contain a string.\n     */\n    //% help=radio/received-string\n    String receivedString() {\n        if (radioEnable() != MICROBIT_OK || NULL == msg) return mkString(\"\", 0);\n        incrRC(msg);\n        return msg;\n    }\n\n    /**\n     * Returns the buffer payload from the last packet taken from the radio queue\n     * (via ``receiveNumber``, ``receiveString``, etc) or the empty string if that\n     * packet did not contain a string.\n     */\n    //% help=radio/received-buffer\n    Buffer receivedBuffer() {\n        if (radioEnable() != MICROBIT_OK || NULL == bufMsg) return mkBuffer(NULL, 0);\n        incrRC(bufMsg);\n        return bufMsg;\n    }\n\n    /**\n     * Returns the system time of the sender micro:bit at the moment when it sent the\n     * last packet taken from the radio queue (via ``receiveNumber``,\n     * ``receiveString``, etc).\n     */\n    //% help=radio/received-time\n    uint32_t receivedTime() {\n        if (radioEnable() != MICROBIT_OK) return 0;\n        return time;\n    }\n}\n",
      "radio.ts": "\nenum RadioPacketProperty {\n    //% blockIdentity=radio._packetProperty\n    //% block=\"signal strength\"\n    SignalStrength = 2,\n    //% blockIdentity=radio._packetProperty\n    //% block=\"time\"\n    Time = 0,\n    //% block=\"serial number\"\n    //% blockIdentity=radio._packetProperty\n    SerialNumber = 1\n}\n\n/**\n * Communicate data using radio packets\n */\n//% color=#E3008C weight=96 icon=\"\\uf012\"\n//% deprecated=true\nnamespace radio {\n    export class Packet {\n        /**\n         * The number payload if a number was sent in this packet (via ``sendNumber()`` or ``sendValue()``)\n         * or 0 if this packet did not contain a number.\n         */\n        public receivedNumber: number;\n        /**\n         * The string payload if a string was sent in this packet (via ``sendString()`` or ``sendValue()``)\n         * or the empty string if this packet did not contain a string.\n         */\n        public receivedString: string;\n        /**\n         * The buffer payload if a buffer was sent in this packet\n         * or the empty buffer\n         */\n        public receivedBuffer: Buffer;\n        /**\n         * The system time of the sender of the packet at the time the packet was sent.\n         */\n        public time: number;\n        /**\n         * The serial number of the sender of the packet or 0 if the sender did not sent their serial number.\n         */\n        public serial: number;\n        /**\n         * The received signal strength indicator (RSSI) of the packet.\n         */\n        public signal: number;\n    }\n\n    /**\n     * Registers code to run when the radio receives a packet. Also takes the\n     * received packet from the radio queue.\n     */\n    //% help=radio/on-data-packet-received blockHandlerKey=\"radioreceived\" deprecated=true\n    //% mutate=objectdestructuring\n    //% mutateText=Packet\n    //% mutateDefaults=\"receivedNumber;receivedString:name,receivedNumber:value;receivedString\"\n    //% blockId=radio_on_packet block=\"on radio received\" blockGap=8\n    export function onDataPacketReceived(cb: (packet: Packet) => void) {\n        onDataReceived(() => {\n            receiveNumber();\n            const packet = new Packet();\n            packet.receivedNumber = receivedNumber();\n            packet.time = receivedTime();\n            packet.serial = receivedSerial();\n            packet.receivedString = receivedString();\n            packet.receivedBuffer = receivedBuffer();\n            packet.signal = receivedSignalStrength();\n            lastPacket = packet;\n            cb(packet)\n        });\n    }\n\n    /**\n     * Registers code to run when the radio receives a number.\n     */\n    //% help=radio/on-received-number blockHandlerKey=\"radioreceived\"\n    //% blockId=radio_on_number block=\"on radio received\" blockGap=16\n    //% useLoc=\"radio.onDataPacketReceived\"\n    export function onReceivedNumber(cb: (receivedNumber: number) => void) {\n        onDataReceived(() => {\n            receiveNumber();\n            const packet = new Packet();\n            packet.time = receivedTime();\n            packet.serial = receivedSerial();\n            packet.signal = receivedSignalStrength();\n            packet.receivedNumber = receivedNumber();\n            lastPacket = packet;\n            cb(packet.receivedNumber);\n        });\n    }\n\n    /**\n     * Registers code to run when the radio receives a key value pair.\n     */\n    //% help=radio/on-received-value blockHandlerKey=\"radioreceived\"\n    //% blockId=radio_on_value block=\"on radio received\" blockGap=16\n    //% useLoc=\"radio.onDataPacketReceived\"\n    export function onReceivedValue(cb: (name: string, value: number) => void) {\n        onDataReceived(() => {\n            receiveNumber();\n            const packet = new Packet();\n            packet.time = receivedTime();\n            packet.serial = receivedSerial();\n            packet.signal = receivedSignalStrength();\n            packet.receivedNumber = receivedNumber();\n            packet.receivedString = receivedString();\n            lastPacket = packet;\n            cb(packet.receivedString, packet.receivedNumber)\n        });\n    }\n\n    /**\n     * Registers code to run when the radio receives a string.\n     */\n    //% help=radio/on-received-string blockHandlerKey=\"radioreceived\"\n    //% blockId=radio_on_string block=\"on radio received\" blockGap=16\n    //% useLoc=\"radio.onDataPacketReceived\"\n    export function onReceivedString(cb: (receivedString: string) => void) {\n        onDataReceived(() => {\n            receiveNumber();\n            const packet = new Packet();\n            packet.time = receivedTime();\n            packet.serial = receivedSerial();\n            packet.signal = receivedSignalStrength();\n            packet.receivedString = receivedString();\n            lastPacket = packet;\n            cb(packet.receivedString);\n        });\n    }\n\n    /**\n     * Registers code to run when the radio receives a buffer.\n     */\n    //% help=radio/on-received-buffer blockHandlerKey=\"radioreceived\" blockHidden=1\n    //% blockId=radio_on_buffer block=\"on radio received\" blockGap=16\n    //% useLoc=\"radio.onDataPacketReceived\"\n    export function onReceivedBuffer(cb: (receivedBuffer: Buffer) => void) {\n        onDataReceived(() => {\n            receiveNumber();\n            const packet = new Packet();\n            packet.time = receivedTime();\n            packet.serial = receivedSerial();\n            packet.signal = receivedSignalStrength();\n            packet.receivedBuffer = receivedBuffer();\n            lastPacket = packet;\n            cb(packet.receivedBuffer)\n        });\n    }\n\n    let lastPacket: Packet;\n    /**\n     * Returns properties of the last radio packet received.\n     * @param type the type of property to retrieve from the last packet\n     */\n    //% help=radio/received-packet\n    //% weight=11 blockGap=8\n    //% blockId=radio_received_packet block=\"received packet %type=radio_packet_property\" blockGap=16\n    export function receivedPacket(type: number) {\n        if (lastPacket) {\n            switch(type) {\n                case RadioPacketProperty.Time: return lastPacket.time;\n                case RadioPacketProperty.SerialNumber: return lastPacket.serial;\n                case RadioPacketProperty.SignalStrength: return lastPacket.signal;\n            }\n        }\n        return 0;\n    }\n\n    /**\n     * Gets a packet property.\n     * @param type the packet property type, eg: PacketProperty.time\n     */\n    //% blockId=radio_packet_property block=\"%note\"\n    //% shim=TD_ID blockHidden=1\n    export function _packetProperty(type: RadioPacketProperty): number {\n        return type;\n    }\n}\n",
      "shims.d.ts": "// Auto-generated. Do not edit.\n\n\n\n    //% color=#E3008C weight=96 icon=\"\\uf012\"\ndeclare namespace radio {\n\n    /**\n     * Sends an event over radio to neigboring devices\n     */\n    //% blockId=radioRaiseEvent block=\"radio raise event|from source %src=control_event_source_id|with value %value=control_event_value_id\" \n    //% blockExternalInputs=1\n    //% advanced=true\n    //% weight=1\n    //% help=radio/raise-event shim=radio::raiseEvent\n    function raiseEvent(src: int32, value: int32): void;\n\n    /**\n     * Broadcasts a number over radio to any connected micro:bit in the group.\n     */\n    //% help=radio/send-number\n    //% weight=60\n    //% blockId=radio_datagram_send block=\"radio send number %value\" blockGap=8 shim=radio::sendNumber\n    function sendNumber(value: number): void;\n\n    /**\n     * Broadcasts a name / value pair along with the device serial number\n     * and running time to any connected micro:bit in the group.\n     * @param name the field name (max 12 characters), eg: \"name\"\n     * @param value the numberic value\n     */\n    //% help=radio/send-value\n    //% weight=59\n    //% blockId=radio_datagram_send_value block=\"radio send|value %name|= %value\" blockGap=8 shim=radio::sendValue\n    function sendValue(name: string, value: number): void;\n\n    /**\n     * Broadcasts a string along with the device serial number\n     * and running time to any connected micro:bit in the group.\n     */\n    //% help=radio/send-string\n    //% weight=58\n    //% blockId=radio_datagram_send_string block=\"radio send string %msg\"\n    //% msg.shadowOptions.toString=true shim=radio::sendString\n    function sendString(msg: string): void;\n\n    /**\n     * Broadcasts a buffer (up to 19 bytes long) along with the device serial number\n     * and running time to any connected micro:bit in the group.\n     */\n    //% help=radio/send-buffer\n    //% weight=57\n    //% advanced=true shim=radio::sendBuffer\n    function sendBuffer(msg: Buffer): void;\n\n    /**\n     * Reads the next packet from the radio queue and and writes it to serial\n     * as JSON.\n     */\n    //% help=radio/write-value-to-serial\n    //% weight=3\n    //% blockId=radio_write_value_serial block=\"radio write value to serial\"\n    //% deprecated=true shim=radio::writeValueToSerial\n    function writeValueToSerial(): void;\n\n    /**\n     * Writes the last received packet to serial as JSON. This should be called\n     * within an ``onDataPacketReceived`` callback.\n     */\n    //% help=radio/write-received-packet-to-serial\n    //% weight=3\n    //% blockId=radio_write_packet_serial block=\"radio write received packet to serial\"\n    //% advanced=true shim=radio::writeReceivedPacketToSerial\n    function writeReceivedPacketToSerial(): void;\n\n    /**\n     * Reads the next packet from the radio queue and returns the packet's number\n     * payload or 0 if the packet did not contain a number.\n     */\n    //% help=radio/receive-number\n    //% weight=46\n    //% blockId=radio_datagram_receive block=\"radio receive number\" blockGap=8\n    //% deprecated=true shim=radio::receiveNumber\n    function receiveNumber(): number;\n\n    /**\n     * Registers code to run when a packet is received over radio.\n     */\n    //% help=radio/on-data-received\n    //% weight=50\n    //% blockId=radio_datagram_received_event block=\"radio on data received\" blockGap=8\n    //% deprecated=true shim=radio::onDataReceived\n    function onDataReceived(body: () => void): void;\n\n    /**\n     * Reads the next packet from the radio queue and returns the packet's string\n     * payload or the empty string if the packet did not contain a string.\n     */\n    //% blockId=radio_datagram_receive_string block=\"radio receive string\" blockGap=8\n    //% weight=44\n    //% help=radio/receive-string\n    //% deprecated=true shim=radio::receiveString\n    function receiveString(): string;\n\n    /**\n     * Gets the received signal strength indicator (RSSI) from the last packet taken\n     * from the radio queue (via ``receiveNumber``, ``receiveString``, etc). Not supported in simulator.\n     * namespace=radio\n     */\n    //% help=radio/received-signal-strength\n    //% weight=40\n    //% blockId=radio_datagram_rssi block=\"radio received signal strength\"\n    //% deprecated=true shim=radio::receivedSignalStrength\n    function receivedSignalStrength(): int32;\n\n    /**\n     * Sets the group id for radio communications. A micro:bit can only listen to one group ID at any time.\n     * @param id the group id between ``0`` and ``255``, eg: 1\n     */\n    //% help=radio/set-group\n    //% weight=10 blockGap=8\n    //% blockId=radio_set_group block=\"radio set group %ID\"\n    //% id.min=0 id.max=255 shim=radio::setGroup\n    function setGroup(id: int32): void;\n\n    /**\n     * Change the output power level of the transmitter to the given value.\n     * @param power a value in the range 0..7, where 0 is the lowest power and 7 is the highest. eg: 7\n     */\n    //% help=radio/set-transmit-power\n    //% weight=9 blockGap=8\n    //% blockId=radio_set_transmit_power block=\"radio set transmit power %power\"\n    //% power.min=0 power.max=7\n    //% advanced=true shim=radio::setTransmitPower\n    function setTransmitPower(power: int32): void;\n\n    /**\n     * Set the radio to transmit the serial number in each message.\n     * @param transmit value indicating if the serial number is transmitted, eg: true\n     */\n    //% help=radio/set-transmit-serial-number\n    //% weight=8 blockGap=8\n    //% blockId=radio_set_transmit_serial_number block=\"radio set transmit serial number %transmit\"\n    //% advanced=true shim=radio::setTransmitSerialNumber\n    function setTransmitSerialNumber(transmit: boolean): void;\n\n    /**\n     * Returns the number payload from the last packet taken from the radio queue\n     * (via ``receiveNumber``, ``receiveString``, etc) or 0 if that packet did not\n     * contain a number.\n     */\n    //% help=radio/received-number shim=radio::receivedNumber\n    function receivedNumber(): number;\n\n    /**\n     * Returns the serial number of the sender micro:bit from the last packet taken\n     * from the radio queue (via ``receiveNumber``, ``receiveString``, etc) or 0 if\n     * that packet did not send a serial number.\n     */\n    //% help=radio/received-serial shim=radio::receivedSerial\n    function receivedSerial(): uint32;\n\n    /**\n     * Returns the string payload from the last packet taken from the radio queue\n     * (via ``receiveNumber``, ``receiveString``, etc) or the empty string if that\n     * packet did not contain a string.\n     */\n    //% help=radio/received-string shim=radio::receivedString\n    function receivedString(): string;\n\n    /**\n     * Returns the buffer payload from the last packet taken from the radio queue\n     * (via ``receiveNumber``, ``receiveString``, etc) or the empty string if that\n     * packet did not contain a string.\n     */\n    //% help=radio/received-buffer shim=radio::receivedBuffer\n    function receivedBuffer(): Buffer;\n\n    /**\n     * Returns the system time of the sender micro:bit at the moment when it sent the\n     * last packet taken from the radio queue (via ``receiveNumber``,\n     * ``receiveString``, etc).\n     */\n    //% help=radio/received-time shim=radio::receivedTime\n    function receivedTime(): uint32;\n}\n\n// Auto-generated. Do not edit. Really.\n"
    },
    "devices": {
      "README.md": "# devices\n",
      "devices.cpp": "#include \"pxt.h\"\n#include \"MESEvents.h\"\n\nusing namespace pxt;\n\nenum class MesCameraEvent {\n    //% block=\"take photo\"\n    TakePhoto = MES_CAMERA_EVT_TAKE_PHOTO,\n    //% block=\"start video capture\"\n    StartVideoCapture = MES_CAMERA_EVT_START_VIDEO_CAPTURE,\n    //% block=\"stop video capture\"\n    StopVideoCapture = MES_CAMERA_EVT_STOP_VIDEO_CAPTURE,\n    //% block=\"toggle front-rear\"\n    ToggleFrontRear = MES_CAMERA_EVT_TOGGLE_FRONT_REAR,\n    //% block=\"launch photo mode\"\n    LaunchPhotoMode = MES_CAMERA_EVT_LAUNCH_PHOTO_MODE,\n    //% block=\"launch video mode\"\n    LaunchVideoMode = MES_CAMERA_EVT_LAUNCH_VIDEO_MODE,\n    //% block=\"stop photo mode\"\n    StopPhotoMode = MES_CAMERA_EVT_STOP_PHOTO_MODE,\n    //% block=\"stop video mode\"\n    StopVideoMode = MES_CAMERA_EVT_STOP_VIDEO_MODE,\n};\n\nenum class MesAlertEvent {\n    //% block=\"display toast\"\n    DisplayToast = MES_ALERT_EVT_DISPLAY_TOAST,\n    //% block=\"vibrate\"\n    Vibrate = MES_ALERT_EVT_VIBRATE,\n    //% block=\"play sound\"\n    PlaySound = MES_ALERT_EVT_PLAY_SOUND,\n    //% block=\"play ring tone\"\n    PlayRingtone = MES_ALERT_EVT_PLAY_RINGTONE,\n    //% block=\"find my phone\"\n    FindMyPhone = MES_ALERT_EVT_FIND_MY_PHONE,\n    //% block=\"ring alarm\"\n    RingAlarm = MES_ALERT_EVT_ALARM1,\n    //% block=\"ring alarm 2\"\n    RingAlarm2 = MES_ALERT_EVT_ALARM2,\n    //% block=\"ring alarm 3\"\n    RingAlarm3 = MES_ALERT_EVT_ALARM3,\n    //% block=\"ring alarm 4\"\n    RingAlarm4 = MES_ALERT_EVT_ALARM4,\n    //% block=\"ring alarm 5\"\n    RingAlarm5 = MES_ALERT_EVT_ALARM5,\n    //% block=\"ring alarm 6\"\n    RingAlarm6 = MES_ALERT_EVT_ALARM6,\n};\n\nenum class MesDeviceInfo {\n    //% block=\"incoming call\"\n    IncomingCall = MES_DEVICE_INCOMING_CALL,\n    //% block=\"incoming message\"\n    IncomingMessage = MES_DEVICE_INCOMING_MESSAGE,\n    //% block=\"orientation landscape\"\n    OrientationLandscape = MES_DEVICE_ORIENTATION_LANDSCAPE,\n    //% block=\"orientation portrait\"\n    OrientationPortrait = MES_DEVICE_ORIENTATION_PORTRAIT,\n    //% block=\"shaken\"\n    Shaken = MES_DEVICE_GESTURE_DEVICE_SHAKEN,\n    //% block=\"display off\"\n    DisplayOff = MES_DEVICE_DISPLAY_OFF,\n    //% block=\"display on\"\n    DisplayOn = MES_DEVICE_DISPLAY_ON,\n};\n\nenum class MesRemoteControlEvent {\n    //% block=\"play\"\n    play = MES_REMOTE_CONTROL_EVT_PLAY,\n    //% block=\"pause\"\n    pause = MES_REMOTE_CONTROL_EVT_PAUSE,\n    //% block=\"stop\"\n    stop = MES_REMOTE_CONTROL_EVT_STOP,\n    //% block=\"next track\"\n    nextTrack = MES_REMOTE_CONTROL_EVT_NEXTTRACK,\n    //% block=\"previous track\"\n    previousTrack = MES_REMOTE_CONTROL_EVT_PREVTRACK,\n    //% block=\"forward\"\n    forward = MES_REMOTE_CONTROL_EVT_FORWARD,\n    //% block=\"rewind\"\n    rewind = MES_REMOTE_CONTROL_EVT_REWIND,\n    //% block=\"volume up\"\n    volumeUp = MES_REMOTE_CONTROL_EVT_VOLUMEUP,\n    //% block=\"volume down\"\n    volumeDown = MES_REMOTE_CONTROL_EVT_VOLUMEDOWN,\n};\n\n/**\n * Control a phone with the BBC micro:bit via Bluetooth.\n */\n//% color=#008272 weight=80 icon=\"\\uf10b\"\nnamespace devices {\n\n    static int _signalStrength = -1;\n    static void signalStrengthHandler(MicroBitEvent ev) { \n        // keep in sync with MESEvents.h\n        _signalStrength = ev.value - 1; \n    }\n    static void initSignalStrength() {\n        if (_signalStrength < 0) {\n            _signalStrength = 0;\n            uBit.messageBus.listen(MES_SIGNAL_STRENGTH_ID, MICROBIT_EVT_ANY, signalStrengthHandler);\n        }        \n    }\n    \n    /**\n     * Returns the last signal strength reported by the paired device.\n     */\n    //% help=devices/signal-strength weight=24\n    //% blockId=devices_signal_strength block=\"signal strength\" blockGap=14 icon=\"\\uf012\" blockGap=14\n    int signalStrength() {\n        initSignalStrength();\n        return _signalStrength;\n    }\n\n    /**\n     * Registers code to run when the device notifies about a change of signal strength.\n     * @param body Code run when the signal strength changes.\n     */\n    //% weight=23 help=devices/on-signal-strength-changed\n    //% blockId=devices_signal_strength_changed_event block=\"on signal strength changed\" icon=\"\\uf012\"\n    void onSignalStrengthChanged(Action body) {\n        initSignalStrength();    \n        registerWithDal(MES_SIGNAL_STRENGTH_ID, MICROBIT_EVT_ANY, body);\n    }\n}\n",
      "devices.ts": "\nnamespace devices {\n    /**\n     * Sends a ``camera`` command to the parent device.\n     * @param event event description\n     */\n    //% weight=30 help=devices/tell-camera-to\n    //% blockId=devices_camera icon=\"\\uf030\" block=\"tell camera to|%property\" blockGap=8\n    export function tellCameraTo(event: MesCameraEvent) {\n        control.raiseEvent(DAL.MES_CAMERA_ID, event);\n    }\n\n    /**\n     * Sends a ``remote control`` command to the parent device.\n     * @param event event description\n     */\n    //% weight=29 help=devices/tell-remote-control-to\n    //% blockId=devices_remote_control block=\"tell remote control to|%property\" blockGap=14 icon=\"\\uf144\"\n    export function tellRemoteControlTo(event: MesRemoteControlEvent) {\n        control.raiseEvent(DAL.MES_REMOTE_CONTROL_ID, event);\n    }\n\n    /**\n     * Sends an ``alert`` command to the parent device.\n     * @param event event description\n     */\n    //% weight=27 help=devices/raise-alert-to\n    //% blockId=devices_alert block=\"raise alert to|%property\" icon=\"\\uf0f3\"\n    export function raiseAlertTo(event: MesAlertEvent) {\n        control.raiseEvent(DAL.MES_ALERTS_ID, event);\n    }\n\n    /**\n     * Registers code to run when the device notifies about a particular event.\n     * @param event event description\n     * @param body code handler when event is triggered\n     */\n    //% help=devices/on-notified weight=26\n    //% blockId=devices_device_info_event block=\"on notified|%event\" icon=\"\\uf10a\"\n    export function onNotified(event: MesDeviceInfo, body: () => void) {\n        control.onEvent(DAL.MES_DEVICE_INFO_ID, event, body);\n    }\n\n    /**\n     * Register code to run when the micro:bit receives a command from the paired gamepad.\n     * @param name button name\n     * @param body code to run when button is pressed\n     */\n    //% help=devices/on-gamepad-button weight=40\n    //% weight=25\n    //% blockId=devices_gamepad_event block=\"on gamepad button|%NAME\" icon=\"\\uf11b\"\n    export function onGamepadButton(name: MesDpadButtonInfo, body: () => void) {\n        control.onEvent(DAL.MES_DPAD_CONTROLLER_ID, name, body);\n    }\n}",
      "enums.d.ts": "// Auto-generated. Do not edit.\n\n\n    declare const enum MesCameraEvent {\n    //% block=\"take photo\"\n    TakePhoto = 3,  // MES_CAMERA_EVT_TAKE_PHOTO\n    //% block=\"start video capture\"\n    StartVideoCapture = 4,  // MES_CAMERA_EVT_START_VIDEO_CAPTURE\n    //% block=\"stop video capture\"\n    StopVideoCapture = 5,  // MES_CAMERA_EVT_STOP_VIDEO_CAPTURE\n    //% block=\"toggle front-rear\"\n    ToggleFrontRear = 8,  // MES_CAMERA_EVT_TOGGLE_FRONT_REAR\n    //% block=\"launch photo mode\"\n    LaunchPhotoMode = 1,  // MES_CAMERA_EVT_LAUNCH_PHOTO_MODE\n    //% block=\"launch video mode\"\n    LaunchVideoMode = 2,  // MES_CAMERA_EVT_LAUNCH_VIDEO_MODE\n    //% block=\"stop photo mode\"\n    StopPhotoMode = 6,  // MES_CAMERA_EVT_STOP_PHOTO_MODE\n    //% block=\"stop video mode\"\n    StopVideoMode = 7,  // MES_CAMERA_EVT_STOP_VIDEO_MODE\n    }\n\n\n    declare const enum MesAlertEvent {\n    //% block=\"display toast\"\n    DisplayToast = 1,  // MES_ALERT_EVT_DISPLAY_TOAST\n    //% block=\"vibrate\"\n    Vibrate = 2,  // MES_ALERT_EVT_VIBRATE\n    //% block=\"play sound\"\n    PlaySound = 3,  // MES_ALERT_EVT_PLAY_SOUND\n    //% block=\"play ring tone\"\n    PlayRingtone = 4,  // MES_ALERT_EVT_PLAY_RINGTONE\n    //% block=\"find my phone\"\n    FindMyPhone = 5,  // MES_ALERT_EVT_FIND_MY_PHONE\n    //% block=\"ring alarm\"\n    RingAlarm = 6,  // MES_ALERT_EVT_ALARM1\n    //% block=\"ring alarm 2\"\n    RingAlarm2 = 7,  // MES_ALERT_EVT_ALARM2\n    //% block=\"ring alarm 3\"\n    RingAlarm3 = 8,  // MES_ALERT_EVT_ALARM3\n    //% block=\"ring alarm 4\"\n    RingAlarm4 = 9,  // MES_ALERT_EVT_ALARM4\n    //% block=\"ring alarm 5\"\n    RingAlarm5 = 10,  // MES_ALERT_EVT_ALARM5\n    //% block=\"ring alarm 6\"\n    RingAlarm6 = 11,  // MES_ALERT_EVT_ALARM6\n    }\n\n\n    declare const enum MesDeviceInfo {\n    //% block=\"incoming call\"\n    IncomingCall = 7,  // MES_DEVICE_INCOMING_CALL\n    //% block=\"incoming message\"\n    IncomingMessage = 8,  // MES_DEVICE_INCOMING_MESSAGE\n    //% block=\"orientation landscape\"\n    OrientationLandscape = 1,  // MES_DEVICE_ORIENTATION_LANDSCAPE\n    //% block=\"orientation portrait\"\n    OrientationPortrait = 2,  // MES_DEVICE_ORIENTATION_PORTRAIT\n    //% block=\"shaken\"\n    Shaken = 4,  // MES_DEVICE_GESTURE_DEVICE_SHAKEN\n    //% block=\"display off\"\n    DisplayOff = 5,  // MES_DEVICE_DISPLAY_OFF\n    //% block=\"display on\"\n    DisplayOn = 6,  // MES_DEVICE_DISPLAY_ON\n    }\n\n\n    declare const enum MesRemoteControlEvent {\n    //% block=\"play\"\n    play = 1,  // MES_REMOTE_CONTROL_EVT_PLAY\n    //% block=\"pause\"\n    pause = 2,  // MES_REMOTE_CONTROL_EVT_PAUSE\n    //% block=\"stop\"\n    stop = 3,  // MES_REMOTE_CONTROL_EVT_STOP\n    //% block=\"next track\"\n    nextTrack = 4,  // MES_REMOTE_CONTROL_EVT_NEXTTRACK\n    //% block=\"previous track\"\n    previousTrack = 5,  // MES_REMOTE_CONTROL_EVT_PREVTRACK\n    //% block=\"forward\"\n    forward = 6,  // MES_REMOTE_CONTROL_EVT_FORWARD\n    //% block=\"rewind\"\n    rewind = 7,  // MES_REMOTE_CONTROL_EVT_REWIND\n    //% block=\"volume up\"\n    volumeUp = 8,  // MES_REMOTE_CONTROL_EVT_VOLUMEUP\n    //% block=\"volume down\"\n    volumeDown = 9,  // MES_REMOTE_CONTROL_EVT_VOLUMEDOWN\n    }\ndeclare namespace devices {\n}\n\n// Auto-generated. Do not edit. Really.\n",
      "pxt.json": "{\n    \"name\": \"devices\",\n    \"description\": \"BETA -  Camera, remote control and other Bluetooth services. App required.\",\n    \"files\": [\n        \"README.md\",\n        \"enums.d.ts\",\n        \"shims.d.ts\",\n        \"devices.cpp\",\n        \"devices.ts\"\n    ],\n    \"icon\": \"./static/packages/devices/icon.png\",\n    \"public\": true,\n    \"dependencies\": {\n        \"core\": \"*\",\n        \"bluetooth\": \"*\"\n    },\n    \"targetVersions\": {\n        \"target\": \"1.2.9\"\n    }\n}",
      "shims.d.ts": "// Auto-generated. Do not edit.\n\n\n    /**\n     * Control a phone with the BBC micro:bit via Bluetooth.\n     */\n    //% color=#008272 weight=80 icon=\"\\uf10b\"\ndeclare namespace devices {\n\n    /**\n     * Returns the last signal strength reported by the paired device.\n     */\n    //% help=devices/signal-strength weight=24\n    //% blockId=devices_signal_strength block=\"signal strength\" blockGap=14 icon=\"\\uf012\" blockGap=14 shim=devices::signalStrength\n    function signalStrength(): int32;\n\n    /**\n     * Registers code to run when the device notifies about a change of signal strength.\n     * @param body Code run when the signal strength changes.\n     */\n    //% weight=23 help=devices/on-signal-strength-changed\n    //% blockId=devices_signal_strength_changed_event block=\"on signal strength changed\" icon=\"\\uf012\" shim=devices::onSignalStrengthChanged\n    function onSignalStrengthChanged(body: () => void): void;\n}\n\n// Auto-generated. Do not edit. Really.\n"
    }
  }
}