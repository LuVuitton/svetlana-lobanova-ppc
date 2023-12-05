import { useEffect, useState } from 'react'

import HelpYouOptions, { SkillData } from '../HelpYouOptions/HelpYouOptions'
import HelpYouPage from '../HelpYouPage/HelopYouPage'
import styles from './index.module.scss'

export default function HelpYouBlock() {
  const [option, setOption] = useState<Options>('options')

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Прокрутка вверх
    };

    scrollToTop(); // Вызов функции прокрутки при изменении опции
  }, [option]);

  const componentMap = {
    options: (
      <HelpYouOptions
        data={skillData}
        callback={(option) => setOption(option)}
      />
    ),
    ads: (
      <HelpYouPage data={skillData[0]} callback={() => setOption('options')} />
    ),
    setup: (
      <HelpYouPage data={skillData[1]} callback={() => setOption('options')} />
    ),
    analytics: (
      <HelpYouPage data={skillData[2]} callback={() => setOption('options')} />
    ),
  }

  return (
    <>
      <div className={styles.mainWrapper}>
        {/* {option !== 'options' && (
          <button onClick={() => setOption('options')}> back </button>
        )} */}

        <div className={styles.container}>{componentMap[option]}</div>
      </div>
    </>
  )
}

export type Options = 'options' | 'ads' | 'setup' | 'analytics'

const skillData: SkillData[] = [
  {
    optionName: 'ads',
    id: 1,
    title: 'Google Ads account audit',
    description:
      'I will analyze not only your account and advertising campaigns settings, but also your website to ensure user-friendliness. It has been proven that launching an advertising campaign without a functional and easy-to-use website can fall short of your expectations. Keep in mind that while contextual advertising attracts potential buyers, it is your website that ultimately sells your product or service.  The audit typically takes 2-3 days to study your account and 1 day to prepare a file with recommendations.',
  },
  {
    optionName: 'setup',
    id: 2,
    title: 'Advertising setup',
    description:
      'All advertising campaigns will be configured for optimal results. ',
    list: {
      title: 'The setup includes:',
      data: [
        {
          id: 'text1',
          text: 'Collecting a complete list of keywords to target as many relevant search queries as possible;  ',
        },
        {
          id: 'text2',
          text: 'Compiling a list of negative keywords;',
        },
        {
          id: 'text3',
          text: 'Cross-mining between ad groups;',
        },
        {
          id: 'text4',
          text: 'Creating account and campaign-specific extensions;',
        },
        {
          id: 'text5',
          text: 'Writing at least three ads for each group;',
        },
        {
          id: 'text6',
          text: 'Setting rates and budgets;',
        },
        {
          id: 'text7',
          text: 'Targeting settings;',
        },
        {
          id: 'text8',
          text: 'Goal setting;',
        },
        {
          id: 'text9',
          text: 'Analytics setup.',
        },
      ],
    },
    list2: {
      title: 'Maintaining and optimizing advertising campaigns:',
      data: [
        {
          id: 'text10',
          text: 'Keyword optimization by expanding the list of targeted keywords and removing irrelevant queries;',
        },
        { id: 'text11', text: 'Ad improvement;' },
        {
          id: 'text12',
          text: 'Optimization of rates and budgets by reallocating funds from less effective to more effective campaigns and keywords;',
        },
        {
          id: 'text13',
          text: 'Analytics and reporting to provide real-time data on the effectiveness of your advertising;',
        },
        {
          id: 'text14',
          text: 'Search for new negative keywords by analyzing non-target queries and adding them to the list of negative keywords.',
        },
      ],
    },
  },
  {
    optionName: 'analytics',
    id: 3,
    title: 'Google Analytics and Google Tag Manager',
    description:
      'These are powerful tools that allow you to track website traffic and user behavior, measure the effectiveness of your online advertising campaigns, and gain valuable insights into your audience and their preferences.',
    list: {
      title: 'For Google Analytics:',
      data: [
        {
          id: 'text15',
          text: 'Initial setup and configuration of your Google Analytics (GA4) account;',
        },
        {
          id: 'text16',
          text: 'Integration of Google Analytics tracking code into your website;',
        },
        {
          id: 'text17',
          text: 'Customization of Google Analytics tracking to suit your business needs;',
        },
        {
          id: 'text18',
          text: 'Ongoing monitoring and optimization of your Google Analytics account to ensure accurate and useful data;',
        },
        {
          id: 'text19',
          text: 'Regular reporting and analysis of your website traffic and user behavior to help you make informed decisions about your marketing strategies.',
        },
      ],
    },
    list2: {
      title: 'For Google Tag Manager',
      data: [
        {
          id: 'text20',
          text: 'Initial setup and configuration of your Google Tag Manager account;',
        },
        {
          id: 'text21',
          text: 'Integration of Google Tag Manager container code into your website;',
        },
        {
          id: 'text22',
          text: 'Creation of tracking tags for Google Analytics and other third-party tools, such as Microsoft Clarity;',
        },
        {
          id: 'text23',
          text: 'Customization of Google Tag Manager tags to suit your business needs.',
        },
      ],
    },
  },
]
