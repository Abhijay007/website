/* This file contains all static data that is used in the application. */

import coinFLip from "../assets/home/coin-flip.svg";
import coinFLipV2 from "../assets/home/coin-flip-v2.svg";
import polygon from "../assets/home/polygon.svg";
import benefitsEasy from "../assets/home/benefits-easy.png";
import benefitsSecurity from "../assets/home/benefits-security.png";
import easyToUseAPIExample from "../assets/home/easy-to-use-api-example.png";
import opensourceMeet from "../assets/home/opensource-meet.png";

import bitcoinApp1 from "../assets/general/bitcoinApps/1.png";
import bitcoinApp2 from "../assets/general/bitcoinApps/2.png";
import bitcoinApp3 from "../assets/general/bitcoinApps/3.png";
import bitcoinApp4 from "../assets/general/bitcoinApps/4.png";
import bitcoinApp5 from "../assets/general/bitcoinApps/5.png";
import bitcoinApp6 from "../assets/general/bitcoinApps/6.png";
import bitcoinApp7 from "../assets/general/bitcoinApps/7.png";

import monetizationAsPodcaster from "../assets/general/monetization/cards/as-podcaster.png";
import monetizationOnWebsite from "../assets/general/monetization/cards/on-website.png";
import monetizationOnContentPlatforms from "../assets/general/monetization/cards/on-content-platforms.png";

import telegramIcon from "../assets/general/footer/telegram.svg";
import twitterIcon from "../assets/general/footer/twitter.svg";
import githubIcon from "../assets/general/footer/github.svg";
import youtubeIcon from "../assets/general/footer/youtube.svg";
import doItHint from "../assets/general/footer/do-it-hint.png";

import chromeIcon from "../assets/general/browsers/chrome.png";
import firefoxIcon from "../assets/general/browsers/firefox.png";

export const staticData = {
  pages: {
    index: {
      // This is an example of data that is used in the index page.
      // The data can be accessed in the page using the following syntax:
      // import { staticData } from "[RELATIVE_PATH_TO_THIS_FILE]";
      // const { index: PAGE_DATA } = staticData.pages;
      headers: {
        title: "Alby — Lightning buzz for your Browser!",
        description:
          "Alby brings Bitcoin to the web with in-browser payments and identity.",
      },
      hero: {
        title: "Your Bitcoin Lightning wallet",
        subtitle:
          "Pay seamlessly as consumer, Receive payments directly as creator Integrate wallets as developer",
        button: {
          text: "Install it Now",
          link: "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe",
        },
      },
      benefits: {
        title: "Bitcoin transactions made simple",
        subtitle:
          "Use the Alby browser extension to pay and receive payments natively on the web.",
        cards: [
          {
            title: "Quick & Easy Setup",
            description:
              "Just connect your existing Bitcoin Lightning wallet or create a new wallet in a few clicks.",
            image: {
              src: benefitsEasy,
              alt: "Quick & Easy Setup",
            },
          },
          {
            title: "Convenient & Secure",
            description:
              "When a website requests a payment you will be prompted for confirmation. No need searching for your credit card, no QR-Code scanning or app-switching.",
            image: {
              src: benefitsSecurity,
              alt: "Convenient & Secure",
            },
          },
        ],
      },
      monetization: {
        title: "Monetize your content in a new way",
        subtitle: "Accept payments directly from your fans",
      },
      additionalIncome: {
        title: "How can you create additional income?",
        button: {
          text: "Get inspired",
          redirectTo: "/#",
        },
      },
    },
  },
  components: {
    index: {
      // This is an example of data that is used in the home's components.
      // The data can be accessed in the component using the following syntax:
      // import { staticData } from "[RELATIVE_PATH_TO_THIS_FILE]";
      // const { home: COMPONENT_DATA } = staticData.components;
      hero: {
        background: {
          images: {
            coinFLip: {
              src: coinFLip,
              alt: "Flipped Coin element",
            },
            coinFLipV2: {
              src: coinFLipV2,
              alt: "Flipped Coin element",
            },
            polygon: {
              src: polygon,
              alt: "Polygon element",
            },
          },
        },
      },
      apisExampleCard: {
        title: "Easy-to-use APIs",
        subtitle: "Designed for Developers",
        benefits: [
          "Power your app with bitcoin",
          "Embed wallets",
          "Enable instant payments within your app",
        ],
        coverImage: {
          src: easyToUseAPIExample,
          alt: "Easy-to-use APIs Demonstration",
        },
        buttonRedirectTo: "/#",
      },
      opensourceMeetBanner: {
        title: "Open source project",
        description: "Byweekly sessions with the comunity and AMAs",
        button: {
          text: "Comunity calls every Thursday • Join next call >",
          redirectTo: "/#",
        },
        coverImage: {
          src: opensourceMeet,
          alt: "Open source project",
        },
      },
    },
    bitcoinApps: {
      title: "Login to Bitcoin apps",
      description:
        "With an Alby Chrome Extension you can efortlessly login to a number of  lightning apps and make transactions with one click. No password needed.",
      apps: [
        {
          name: "Bolt.fun",
          image: {
            src: bitcoinApp1,
            alt: "Bolt.fun",
          },
          url: "https://makers.bolt.fun/feed",
        },
        {
          name: "LN Markets",
          image: {
            src: bitcoinApp2,
            alt: "LN Markets",
          },
          url: "https://lnmarkets.com/en",
        },
        {
          name: "WebLN Experiments",
          image: {
            src: bitcoinApp3,
            alt: "WebLN Experiments",
          },
          url: "https://webln.twentyuno.net/",
        },
        {
          name: "LOFT",
          image: {
            src: bitcoinApp4,
            alt: "LOFT",
          },
          url: "https://loft.trade/",
        },
        {
          name: "Kollider",
          image: {
            src: bitcoinApp5,
            alt: "Kollider",
          },
          url: "https://kollider.xyz/",
        },
        {
          name: "Podverse",
          image: {
            src: bitcoinApp6,
            alt: "Podverse",
          },
          url: "https://podverse.fm/",
        },
        {
          name: "Stacker News",
          image: {
            src: bitcoinApp7,
            alt: "Stacker News",
          },
          url: "https://stacker.news/",
        },
      ],
      moreApps: {
        text: "Browse more Apps",
        link: "/#",
      },
    },
    monetizationCards: [
      {
        image: {
          src: monetizationAsPodcaster,
          alt: "Podcaste",
        },
        title: "As a podcaster",
        description: "Build up a direct revenue stream from your listener",
        url: "/#",
      },
      {
        image: {
          src: monetizationOnWebsite,
          alt: "Website",
        },
        title: "On your website",
        description:
          "Benefit from multiple tools to receive payments on your website.",
        url: "/#",
      },
      {
        image: {
          src: monetizationOnContentPlatforms,
          alt: "Content platforms",
        },
        title: "On content platforms",
        description:
          "Keep your existing distribution channels but avoid hefty fees.",
        url: "/#",
      },
    ],
    twitterMentions: {
      title: "What People Are Saying",
      tweets: [
        ["1461415321823330305", "1482698978957271041"],
        ["1468991903349809152", "1485705677104369667", "1468036148844978181"],
        ["1483615302285807617", "1477623383454011392", "1477010314587561989"],
      ],
    },
    footer: {
      title: "Do you have feedback or need help?",
      description: [
        {
          text: "Alby is open-source and currently in alpha stage. Our goal is to create the best online experience to consume and reward content and services online. We love to hear from you. File a",
        },
        {
          text: "Github issue",
          type: "link",
          href: "https://github.com/getAlby/lightning-browser-extension/issues/new/choose",
        },
        { text: "or join the" },
        {
          text: "Telegram channel.",
          type: "link",
          href: "https://t.me/getAlby",
        },
      ],
      subtitle: "The Bitcoin Lightning App for your Browser",
      stayInTouch: {
        title: "Stay in touch",
        description: "Subscribe to our newsletter to get the latest updates.",
      },
      references: {
        alby: {
          title: "Alby",
          links: [
            {
              text: "Blog",
              href: "https://blog.getalby.com/",
            },
            {
              text: "Media",
              href: "https://github.com/getAlby/media",
            },
            {
              text: "Support",
              href: "mailto:support@getalby.com",
            },
            {
              text: "Terms of Service",
              href: "/terms-of-service",
            },
            {
              text: "Privacy Policy",
              href: "/privacy-policy",
            },
          ],
        },
        developers: {
          title: "Developers",
          links: [
            {
              text: "Documentation",
              href: "https://github.com/getAlby/lightning-browser-extension#lightning-web-extension",
            },
            {
              text: "Open Issues",
              href: "https://github.com/getAlby/lightning-browser-extension/issues",
            },
            {
              text: "Open Bounties",
              href: "https://github.com/getAlby/lightning-browser-extension/wiki/Bounties",
            },
          ],
        },
        stayInTouch: {
          title: "Stay in touch",
          links: [
            {
              name: "Twitter",
              href: "https://twitter.com/getalby",
              icon: {
                src: twitterIcon,
                alt: "Twitter",
              },
            },
            {
              name: "Telegram",
              href: "https://t.me/getAlby",
              icon: {
                src: telegramIcon,
                alt: "Telegram",
              },
            },
            {
              name: "Github",
              href: "https://github.com/getAlby",
              icon: {
                src: githubIcon,
                alt: "Github",
              },
            },
            {
              name: "Youtube",
              href: "https://www.youtube.com/channel/UCIICdm6mox3VkCAv-yHMeMw",
              icon: {
                src: youtubeIcon,
                alt: "Youtube",
              },
            },
          ],
        },
      },
      installContent: {
        text: "Install Alby",
        doItHint: {
          src: doItHint,
          alt: "Do it",
        },
        alert: (browser: string) =>
          `We currently do not yet support ${browser}. But maybe you can install it from source.`,
      },
    },
  },
  general: {
    // This is an example of data that is used in multiple components and pages.
    // The data can be accessed in the component using the following syntax:
    // import { staticData } from "[RELATIVE_PATH_TO_THIS_FILE]";
    // const { general: GENERAL_DATA } = staticData;
    content: {
      learnMore: "Learn more",
    },
  },
  hooks: {
    useInstallExtension: {
      // This is an example of data that is used in the useInstallExtension hook.
      // The data can be accessed in the hook using the following syntax:
      // import { staticData } from "[RELATIVE_PATH_TO_THIS_FILE]";
      // const { useInstallExtension: HOOK_DATA } = staticData.hooks;
      icons: {
        Chrome: {
          src: chromeIcon,
          alt: "Chrome",
        },
        Firefox: {
          src: firefoxIcon,
          alt: "Firefox",
        },
        Chromium: {
          src: chromeIcon,
          alt: "Chromium",
        },
      },
      installLinks: {
        Firefox: "https://addons.mozilla.org/en-US/firefox/addon/alby/",
        Chrome:
          "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe",
        Chromium:
          "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe",
        Vivaldi:
          "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe",
        Brave:
          "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe",
        Opera:
          "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe",
      },
      defaultLink: "https://github.com/getAlby/lightning-browser-extension",
    },
  },
};
