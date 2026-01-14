<template>
  <div class="space-y-4">
    <h3 class="text-xl sm:text-2xl text-primary font-medium">七成不知防詐註記措施</h3>
    <h3 class="text-xl sm:text-2xl text-primary font-medium">過半長者不願申請  恐成詐團目標</h3>
    <p>另外，地政事務所也提供房地產所有權人辦理「預告登記」，當房地產有移轉、設定抵押權和贈與等情形，必須經過指定對象同意才能處分。這項措施，同樣只有三八％民眾「知道」，已申請比率不到二％。</p>
    <p>除了不動產外，詐團也經常慫恿受害人解除定期存款、保單或轉出大額款項，本刊曾在二五年報導中，呼籲相關單位增設防堵機制。</p>
    <p>經過一年推動，國內有十六家銀行、占全國逾六成分行，已開放民眾辦理定存註記服務。申請人可指定聯絡人，未來提前解除定存時，銀行會通知聯絡人協助把關；同樣地，多數銀行也開放讓存戶自行設定金額，如果申請者進行大額轉帳時，同步通知指定聯絡人。</p>
    <p>至於國內二十家壽險業者，也有十六家已推出保單註記服務，當要保人申請保單解約、部分提領，或保單借款超出一定金額，業者也會通知指定聯絡人，增加一道防線。</p>
    <p>不過，由於推動上路不久，目前分別只有二到三成民眾「知道」這三項防詐措施；而得知後，有意願進行定存、保單註記，或設定大額轉帳通知的民眾，都分別超過七成。</p>
    <p>值得提醒的是，從地籍異動即時通、定存及保單註記到大額轉帳通知，交叉分析年齡結果均顯示，七十歲以上民眾願意辦理的比率明顯偏低，分別較整體數字少二十至三十個百分點。偏偏高齡者正是詐團鎖定進行房產及大筆資產詐騙的頭號目標，財損金額也在所有年齡層居冠，未來如何加強對長者的宣傳推廣，是防詐重中之重。</p>
    <p>這份獨家防詐調查，呈現民眾實際接觸詐騙訊息的情況，以及對各項防詐自保措施的接受度，可做為政府更務實調整政策、金融機構更積極推動防詐機制的重要參考依據。</p>
    <br>
    <ChartGroup :sliderData="chartData" />
  </div>
</template>

<script setup>
import ChartGroup from './ChartGroup.vue';

import useClientSize from '../../composables/useClientSize'
const { isMobile } = useClientSize();

const chartData = [
  {
    title: '各縣市地政事務所可供民眾申請「地籍異動即時通」，當名下不動產有申請買賣、贈與等12種情形時，可透過簡訊或電子郵件通知指定聯絡人，您知不知道這項措施？',
    subtitle: '',
    after: '',
    options: {
      tooltip: {
        trigger: 'item',
        formatter: (par) => {
          const { name, value } = par.data
          const title = `<div class="text-sm tracking-normal break-all whitespace-pre-wrap">${name.replace(/\n/g, '')}</div>`
          return `${title}<strong class="text-base" style="color: ${par.color}">${value}%</strong>`
        }
      },
      title: [
        {
          text: '',
          left: '50%',
          top: '2%',
          textAlign: 'center',
          textStyle: {
            color: '#505050',
            fontFamily: 'Noto Sans TC',
            fontWeight: '500',
          },
        },
      ],
      series: [
        {
          type: 'pie',
          radius: isMobile.value ? ['20%', '45%'] : ['35%', '60%'],
          itemStyle: {
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            formatter: '{b}\n{c}%',
            fontWeight: '500',
            fontSize: 15,
            position: 'outside',
          },
          emphasis: {label: { show: true }},
          data: [
            { value: 34.2, name: '知道', itemStyle: { color: '#5470c6' }},
            { value: 65.8, name: '不知道', itemStyle: { color: '#91cc75' }},
          ]
        },
      ],
    }
  },
  {
    title: '承上題，若有需求，您願不願意申請？',
    subtitle: '',
    after: '逾70歲長者願意申請比率僅46.5%',
    options: {
      tooltip: {
        trigger: 'item',
        formatter: (par) => {
          const { name, value } = par.data
          const title = `<div class="text-sm tracking-normal break-all whitespace-pre-wrap">${name.replace(/\n/g, '')}</div>`
          return `${title}<strong class="text-base" style="color: ${par.color}">${value}%</strong>`
        }
      },
      title: [
        {
          text: '',
          left: '50%',
          top: '2%',
          textAlign: 'center',
          textStyle: {
            color: '#505050',
            fontFamily: 'Noto Sans TC',
            fontWeight: '500',
          },
        },
      ],
      series: [
        {
          type: 'pie',
          radius: isMobile.value ? ['20%', '45%'] : ['35%', '60%'],
          itemStyle: {
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            formatter: '{b}\n{c}%',
            fontWeight: '500',
            fontSize: 15,
            position: 'outside',
          },
          emphasis: {label: { show: true }},
          data: [
            { value: 3.6, name: '已經申請', itemStyle: { color: '#5470c6' }},
            { value: 60.6, name: '願意申請', itemStyle: { color: '#91cc75' }},
            { value: 29.3, name: '不願意申請', itemStyle: { color: '#fc8452' }},
            { value: 6.5, name: '無意見', itemStyle: { color: '#c3c3c3' }},
          ]
        },
      ],
    }
  },
  {
    title: '各縣市地政事務所可供房地產所有權人辦理「預告登記」，當房地產要移轉、設定抵押權、贈與或信託等，都必須經指定對象「同意」才能處理，您知不知道這項措施？',
    subtitle: '',
    after: '',
    options: {
      tooltip: {
        trigger: 'item',
        formatter: (par) => {
          const { name, value } = par.data
          const title = `<div class="text-sm tracking-normal break-all whitespace-pre-wrap">${name.replace(/\n/g, '')}</div>`
          return `${title}<strong class="text-base" style="color: ${par.color}">${value}%</strong>`
        }
      },
      title: [
        {
          text: '',
          left: '50%',
          top: '2%',
          textAlign: 'center',
          textStyle: {
            color: '#505050',
            fontFamily: 'Noto Sans TC',
            fontWeight: '500',
          },
        },
      ],
      series: [
        {
          type: 'pie',
          radius: isMobile.value ? ['20%', '45%'] : ['35%', '60%'],
          itemStyle: {
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            formatter: '{b}\n{c}%',
            fontWeight: '500',
            fontSize: 15,
            position: 'outside',
          },
          emphasis: {label: { show: true }},
          data: [
            { value: 38.3, name: '知道', itemStyle: { color: '#5470c6' }},
            { value: 61.7, name: '不知道', itemStyle: { color: '#91cc75' }},
          ]
        },
      ],
    }
  },
  {
    title: '承上題，若有需求，您願不願意申請？',
    subtitle: '',
    after: '逾70歲長者願意申請比率僅50.2%',
    options: {
      tooltip: {
        trigger: 'item',
        formatter: (par) => {
          const { name, value } = par.data
          const title = `<div class="text-sm tracking-normal break-all whitespace-pre-wrap">${name.replace(/\n/g, '')}</div>`
          return `${title}<strong class="text-base" style="color: ${par.color}">${value}%</strong>`
        }
      },
      title: [
        {
          text: '',
          left: '50%',
          top: '2%',
          textAlign: 'center',
          textStyle: {
            color: '#505050',
            fontFamily: 'Noto Sans TC',
            fontWeight: '500',
          },
        },
      ],
      series: [
        {
          type: 'pie',
          radius: isMobile.value ? ['20%', '45%'] : ['35%', '60%'],
          itemStyle: {
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            formatter: '{b}\n{c}%',
            fontWeight: '500',
            fontSize: 15,
            position: 'outside',
          },
          emphasis: {label: { show: true }},
          data: [
            { value: 1.9, name: '已經申請', itemStyle: { color: '#5470c6' }},
            { value: 69.3, name: '願意申請', itemStyle: { color: '#91cc75' }},
            { value: 22.1, name: '不願意申請', itemStyle: { color: '#fc8452' }},
            { value: 6.7, name: '無意見', itemStyle: { color: '#c3c3c3' }},
          ]
        },
      ],
    }
  },
  {
    title: '您知不知道，台灣有逾6成銀行分行，已開放民眾辦理定期存款註記，當存戶未來解除定期存款時，銀行可協助通知已註記的聯絡人？',
    subtitle: '',
    after: '',
    options: {
      tooltip: {
        trigger: 'item',
        formatter: (par) => {
          const { name, value } = par.data
          const title = `<div class="text-sm tracking-normal break-all whitespace-pre-wrap">${name.replace(/\n/g, '')}</div>`
          return `${title}<strong class="text-base" style="color: ${par.color}">${value}%</strong>`
        }
      },
      title: [
        {
          text: '',
          left: '50%',
          top: '2%',
          textAlign: 'center',
          textStyle: {
            color: '#505050',
            fontFamily: 'Noto Sans TC',
            fontWeight: '500',
          },
        },
      ],
      series: [
        {
          type: 'pie',
          radius: isMobile.value ? ['20%', '45%'] : ['35%', '60%'],
          itemStyle: {
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            formatter: '{b}\n{c}%',
            fontWeight: '500',
            fontSize: 15,
            position: 'outside',
          },
          emphasis: {label: { show: true }},
          data: [
            { value: 22.9, name: '知道', itemStyle: { color: '#5470c6' }},
            { value: 77.1, name: '不知道', itemStyle: { color: '#91cc75' }},
          ]
        },
      ],
    }
  },
  {
    title: '承上題，若您有定期存款、且開戶的銀行有提供註記服務，您願不願意前往註記？',
    subtitle: '',
    after: '逾70歲長者願意註記比率僅42.1%',
    options: {
      tooltip: {
        trigger: 'item',
        formatter: (par) => {
          const { name, value } = par.data
          const title = `<div class="text-sm tracking-normal break-all whitespace-pre-wrap">${name.replace(/\n/g, '')}</div>`
          return `${title}<strong class="text-base" style="color: ${par.color}">${value}%</strong>`
        }
      },
      title: [
        {
          text: '',
          left: '50%',
          top: '2%',
          textAlign: 'center',
          textStyle: {
            color: '#505050',
            fontFamily: 'Noto Sans TC',
            fontWeight: '500',
          },
        },
      ],
      series: [
        {
          type: 'pie',
          radius: isMobile.value ? ['20%', '45%'] : ['35%', '60%'],
          itemStyle: {
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            formatter: '{b}\n{c}%',
            fontWeight: '500',
            fontSize: 15,
            position: 'outside',
          },
          emphasis: {label: { show: true }},
          data: [
            { value: 0.8, name: '已經註記', itemStyle: { color: '#5470c6' }},
            { value: 71.4, name: '願意註記', itemStyle: { color: '#91cc75' }},
            { value: 21.4, name: '不願意註記', itemStyle: { color: '#fc8452' }},
            { value: 6.4, name: '無意見', itemStyle: { color: '#c3c3c3' }},
          ]
        },
      ],
    }
  },
  {
    title: '您知不知道，台灣已有逾10間銀行，開放讓存戶自行設定，未來進行大額轉帳時（如超過100萬元、300萬元），銀行應通知指定的聯絡人？',
    subtitle: '',
    after: '',
    options: {
      tooltip: {
        trigger: 'item',
        formatter: (par) => {
          const { name, value } = par.data
          const title = `<div class="text-sm tracking-normal break-all whitespace-pre-wrap">${name.replace(/\n/g, '')}</div>`
          return `${title}<strong class="text-base" style="color: ${par.color}">${value}%</strong>`
        }
      },
      title: [
        {
          text: '',
          left: '50%',
          top: '2%',
          textAlign: 'center',
          textStyle: {
            color: '#505050',
            fontFamily: 'Noto Sans TC',
            fontWeight: '500',
          },
        },
      ],
      series: [
        {
          type: 'pie',
          radius: isMobile.value ? ['20%', '45%'] : ['35%', '60%'],
          itemStyle: {
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            formatter: '{b}\n{c}%',
            fontWeight: '500',
            fontSize: 15,
            position: 'outside',
          },
          emphasis: {label: { show: true }},
          data: [
            { value: 37, name: '知道', itemStyle: { color: '#5470c6' }},
            { value: 63, name: '不知道', itemStyle: { color: '#91cc75' }},
          ]
        },
      ],
    }
  },
  {
    title: '承上題，若您開戶的銀行有提供大額轉帳通知，您願不願意前往設定？',
    subtitle: '',
    after: '逾70歲長者願意設定比率僅50.5%',
    options: {
      tooltip: {
        trigger: 'item',
        formatter: (par) => {
          const { name, value } = par.data
          const title = `<div class="text-sm tracking-normal break-all whitespace-pre-wrap">${name.replace(/\n/g, '')}</div>`
          return `${title}<strong class="text-base" style="color: ${par.color}">${value}%</strong>`
        }
      },
      title: [
        {
          text: '',
          left: '50%',
          top: '2%',
          textAlign: 'center',
          textStyle: {
            color: '#505050',
            fontFamily: 'Noto Sans TC',
            fontWeight: '500',
          },
        },
      ],
      series: [
        {
          type: 'pie',
          radius: isMobile.value ? ['20%', '45%'] : ['35%', '60%'],
          itemStyle: {
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            formatter: '{b}\n{c}%',
            fontWeight: '500',
            fontSize: 15,
            position: 'outside',
          },
          emphasis: {label: { show: true }},
          data: [
            { value: 1.9, name: '已經設定', itemStyle: { color: '#5470c6' }},
            { value: 74.1, name: '願意設定', itemStyle: { color: '#91cc75' }},
            { value: 18.4, name: '不願意設定', itemStyle: { color: '#fc8452' }},
            { value: 5.6, name: '無意見', itemStyle: { color: '#c3c3c3' }},
          ]
        },
      ],
    }
  },
  {
    title: '您知不知道，國內多家壽險公司已開放讓民眾進行保單註記，當要保人申請保單解約、部分提領或保單借款超出一定金額時，業者可協助通知指定的聯絡人？',
    subtitle: '',
    after: '',
    options: {
      tooltip: {
        trigger: 'item',
        formatter: (par) => {
          const { name, value } = par.data
          const title = `<div class="text-sm tracking-normal break-all whitespace-pre-wrap">${name.replace(/\n/g, '')}</div>`
          return `${title}<strong class="text-base" style="color: ${par.color}">${value}%</strong>`
        }
      },
      title: [
        {
          text: '',
          left: '50%',
          top: '2%',
          textAlign: 'center',
          textStyle: {
            color: '#505050',
            fontFamily: 'Noto Sans TC',
            fontWeight: '500',
          },
        },
      ],
      series: [
        {
          type: 'pie',
          radius: isMobile.value ? ['20%', '45%'] : ['35%', '60%'],
          itemStyle: {
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            formatter: '{b}\n{c}%',
            fontWeight: '500',
            fontSize: 15,
            position: 'outside',
          },
          emphasis: {label: { show: true }},
          data: [
            { value: 27, name: '知道', itemStyle: { color: '#5470c6' }},
            { value: 73, name: '不知道', itemStyle: { color: '#91cc75' }},
          ]
        },
      ],
    }
  },
  {
    title: '承上題，若您有保單、且簽約的壽險公司有提供保單註記服務，您願不願意前往註記？',
    subtitle: '',
    after: '逾70歲長者願意註記比率僅48.7%',
    options: {
      tooltip: {
        trigger: 'item',
        formatter: (par) => {
          const { name, value } = par.data
          const title = `<div class="text-sm tracking-normal break-all whitespace-pre-wrap">${name.replace(/\n/g, '')}</div>`
          return `${title}<strong class="text-base" style="color: ${par.color}">${value}%</strong>`
        }
      },
      title: [
        {
          text: '',
          left: '50%',
          top: '2%',
          textAlign: 'center',
          textStyle: {
            color: '#505050',
            fontFamily: 'Noto Sans TC',
            fontWeight: '500',
          },
        },
      ],
      series: [
        {
          type: 'pie',
          radius: isMobile.value ? ['20%', '45%'] : ['35%', '60%'],
          itemStyle: {
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            formatter: '{b}\n{c}%',
            fontWeight: '500',
            fontSize: 15,
            position: 'outside',
          },
          emphasis: {label: { show: true }},
          data: [
            { value: 0.6, name: '已經註記', itemStyle: { color: '#5470c6' }},
            { value: 72.1, name: '願意註記', itemStyle: { color: '#91cc75' }},
            { value: 20.2, name: '不願意註記', itemStyle: { color: '#fc8452' }},
            { value: 7.1, name: '無意見', itemStyle: { color: '#c3c3c3' }},
          ]
        },
      ],
    }
  },
  {
    title: '若您開戶的銀行能夠提供更多防詐自主風險管理措施，讓民眾客製化針對自己需求進行相關設定，例如在特定時段關閉轉帳功能、自訂轉帳金額上限，或在特定情況下延遲交易等，會不會提高您使用該銀行服務的意願？',
    subtitle: '',
    after: '',
    options: {
      tooltip: {
        trigger: 'item',
        formatter: (par) => {
          const { name, value } = par.data
          const title = `<div class="text-sm tracking-normal break-all whitespace-pre-wrap">${name.replace(/\n/g, '')}</div>`
          return `${title}<strong class="text-base" style="color: ${par.color}">${value}%</strong>`
        }
      },
      title: [
        {
          text: '',
          left: '50%',
          top: '2%',
          textAlign: 'center',
          textStyle: {
            color: '#505050',
            fontFamily: 'Noto Sans TC',
            fontWeight: '500',
          },
        },
      ],
      series: [
        {
          type: 'pie',
          radius: isMobile.value ? ['20%', '45%'] : ['35%', '60%'],
          itemStyle: {
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            formatter: '{b}\n{c}%',
            fontWeight: '500',
            fontSize: 15,
            position: 'outside',
          },
          emphasis: {label: { show: true }},
          data: [
            { value: 67.7, name: '會', itemStyle: { color: '#5470c6' }},
            { value: 25, name: '不會', itemStyle: { color: '#91cc75' }},
            { value: 7.3, name: '無意見', itemStyle: { color: '#c3c3c3' }},
          ]
        },
      ],
    }
  },
]
</script>