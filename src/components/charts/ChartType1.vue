<template>
  <div class="space-y-4">
    <p>調查發現，整體有超過三成民眾，每月至少會收到一次意圖詐騙訊息；其中三十歲到四十九歲的青壯年族群，接觸訊息管道較多，逾兩成每周至少被詐團找上門一次。</p>
    <p>然而，當問及民眾接到意圖詐騙訊息後，通常會採取哪些行動，有高達八一％選擇「直接忽略或刪除」，只有近半民眾會「主動分享給家人或朋友」；至於進一步向警察單位或金融機構通報，或在社群平台	、通訊軟體檢舉意圖詐騙者，比率僅一至二成。</p>
    <p>《今周刊》也曾在二四年《全民反詐騙大調查》中，詢問民眾接觸疑似詐騙訊息時，是否曾向警方報案，或使用任何檢舉管道？當時高達八五％民眾回覆「沒有」。連兩年調查已經透露出一道警訊：台灣多數民眾對於防詐仍停留在個人自保階段，普遍沒有向外檢舉通報、集體拉起社會防護網的意識。</p>
    <p>進一步從性別分析，調查顯示女性分享詐騙訊息給家人或朋友的比率，較男性高出十五個百分點；此外，女性也較願意花時間，主動向警察單位及金融機構通報，或將詐騙資訊發布到社群媒體提醒他人。</p>
    <p>詐騙已經無所不在，警政署「一六五打詐儀錶板」統計，台灣二五年單年詐騙財損，高達新台幣近九百億元，實際究竟有多少民眾曾受騙？</p>
    <p>這項調查中，有九％的民眾坦言，自己「曾經被詐騙、且產生財損」，其中更有二％造成難以承受的「重大財損」。對照二五年底，台灣逾十八歲總人口約二○○六萬人，推估全國至少有一八○萬人曾經落入詐騙圈套且實際付出代價；另外還有十四．五％的民眾「差點被騙」，所幸及時察覺而成功脫離。</p>
    <p>細分年齡來看，七十歲以上的長者，曾被詐騙的比率達十一．七％，在所有年齡層居冠；且相較年輕族群多只造成自認「可承受」的少量財損，六十到六十九歲被詐騙產生「難以承受」重大財損的比率達三．四％。調查結果印證了高齡受騙情形嚴重，且長者資產較豐厚，整體損失金額往往更高。</p>
    <p>值得一提的是，一般普遍認為高智商、高學歷的人，相對不容易落入詐騙陷阱；但這份調查結果，卻顛覆大眾的想像。不同教育程度的受試者中，學歷為碩博士的民眾，「曾遭詐騙」比率達十一．七％，「差點被騙、及時察覺」則占十六．六％，均高於其他教育程度者。這群高學歷者遭詐騙後，產生重大財損的比率也達到二．五％，高於整體數字。</p>
    <p>臨床心理師蘇益賢觀察，高知識分子經常會過度自信，認為自己能輕易辨識詐騙，過於仰賴個人的主觀判斷，導致身處在詐騙情境中，通常不願主動對外求助或參考他人意見，反而更容易陷入風險之中。</p>
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
    title: '過去一年中，您接觸到意圖詐騙訊息的頻率為何？',
    subtitle: '(包含疑似詐騙電話、訊息、廣告、真人對談等)',
    after: '<p class="mt-4">整體逾3成民眾，每月至少接收一次意圖詐騙訊息；其中30歲到49歲青壯年族群，逾2成每周至少接觸一次。</p>',
    options: {
      "yAxis": {
        "type": "category",
        "inverse": true,
        "axisLabel": {"fontFamily": "Noto Sans TC"},
        "data": [
          "每周至少一次",
          "約每月一次",
          "幾個月一次",
          "一年一次",
          "沒有",
          "不知道／拒答"
        ]
      },
      "series": [{
        "data": [14.5, 18.5, 23.2, 9.4, 30.5, 3.9],
        "type": "bar",
        "label": {"show": true, "formatter": "{c}%"}
      }]
    }
  },
  {
    title: '當您接到意圖詐騙訊息，您通常會採取哪些行動？',
    subtitle: '(複選)',
    after: '<p class="mt-4">去年《今周刊》防詐大調查中，有85.4％民眾表示在接觸疑似詐騙訊息時，不會報案或檢舉；今年同樣有逾8成民眾，接獲詐騙訊息後會直接忽略和刪除。</p>',
    options: {
      "yAxis": {
        "type": "category",
        "inverse": true,
        "axisLabel": {"fontFamily": "Noto Sans TC"},
        "data": [
          "知道是詐騙\n，直接忽略或刪除",
          "主動分享給\n家人或朋友",
          "向警察單位\n、金融機構或\n反詐騙165專線通報",
          "向社群平台或\n通訊軟體檢舉",
          "將相關訊息發布到\n社群媒體或群組",
          "自行上網查證\n，但未主動通報或\n分享給他人",
          
        ]
      },
      "series": [{
        "data": [{ value: 81.7, itemStyle: {color: '#fc8452'} }, { value: 48.2, itemStyle: {color: '#fc8452'} }, 22.1, 15.3, 11.2, 6.2],
        "type": "bar",
        "label": {
          "show": true,
          formatter: params => (params.value > 5 ? params.value + '%' : ''),
        }
      }]
    }
  },
  {
    title: '當您接到意圖詐騙訊息，您通常會採取哪些行動？',
    subtitle: '交叉分析性別',
    after: '<p class="mt-4">主動分享詐騙訊息、向相關單位通報或檢舉的女性比率較高。</p>',
    options: {
      color: ['#5470c6', '#fc8452'],
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        confine: true,
        formatter: (par) => {
          return par.reduce((prev, current) => {
            if (current.seriesName === 'labelName') return prev;
            return `${prev}<p class="text-sm">${current.marker} <span>${current.seriesName}: ${current.value}%</span></p>`
          }, `<p class="font-bold text-base mb-1">${par[0].axisValue}</p>`)
        }
      },
      xAxis: { type: 'value', },
      yAxis: {
        type: 'category',
        inverse: true,
        axisLabel: {"fontFamily": "Noto Sans TC"},
        data: ['知道是詐騙，直接忽略或刪除', '主動分享給家人或朋友', '向警察單位、金融機構或反詐騙165專線通報', '向社群平台或通訊軟體檢舉', '將相關訊息發布到社群媒體或群組', '自行上網查證，但未主動通報或分享給他人'],
        axisLabel: { show: false },
      },
      grid: { left: 0, top: 60, right: 0, bottom: 0 },
      legend: {
        show: true,
        itemGap: 15,
        data: ['男性', '女性'],
      },
      series: [
        {
          name: 'labelName', // 偽yAxis label
          type: 'bar',
          data: [0, 0, 0, 0, 0, 0, 0],
          barWidth: 0,
          label: {
            show: true,
            position: [10, -20],
            formatter: (params) => params.name,
            color: '#7f7f7f',
            fontWeight: 'bold',
            fontSize: 16,
          },
          itemStyle: { color: 'transparent' },
          emphasis: { disabled: true },
          legendHoverLink: false,
        },
        {
          name: '男性', type: 'bar', stack: 'total',
          label: {
            show: true,
            formatter: params => (params.value > 5 ? params.value + '%' : ''),
          },
          emphasis: { focus: 'series' },
          barWidth: 45,
          data: [83.4, 40.5, 18, 14.7, 8.6, 6.3]
        },
        {
          name: '女性', type: 'bar', stack: 'total',
          label: {
            show: true,
            formatter: params => (params.value > 5 ? params.value + '%' : ''),
          },
          emphasis: { focus: 'series' },
          barWidth: 45,
          data: [80, 55.5, 26.1, 15.8, 13.7, 6.1]
        }
      ]
    }
  },
  {
    title: '您有沒有曾經被詐騙或瀕臨被騙的經驗？',
    subtitle: '',
    after: '<p class="mt-4">其中2%造成難以回復的重大財損。</p>',
    options: {
      tooltip: {
        trigger: 'item',
        formatter: (par) => {
          const { name, value } = par.data
          const formattedName = name.length > 11 ? `${name.slice(0, 11)}\n${name.slice(11)}` : name
          const title = `<div class="text-sm tracking-normal break-all whitespace-pre-wrap">${formattedName}</div>`
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
            { value: 9, name: '有，曾被詐騙並造成財務損失', itemStyle: { color: '#5470c6' }},
            { value: 14.5, name: '有，差點被騙，但及時察覺，未造成財損', itemStyle: { color: '#91cc75' }},
            { value: 75.2, name: '沒有，目前為止都能辨識出詐騙', itemStyle: { color: '#fc8452' }},
            { value: 1.3, name: '不確定／無法判斷', itemStyle: { color: '#c3c3c3' }},
          ]
        },
      ],
    }
  },
  {
    title: '您有沒有曾經被詐騙或瀕臨被騙的經驗？',
    subtitle: '交叉分析年齡',
    after: '<p class="mt-4">其中3.4%造成重大財損，較其他年齡層財損金額更高。</p>',
    options: {
      color: ['#5470c6', '#fc8452', '#91cc75', '#fac858'],
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        confine: true,
        formatter: (par) => {
          return par.reduce((prev, current) => {
            if (current.seriesName === 'labelName') return prev;
            return `${prev}<p class="text-sm">${current.marker} <span>${current.seriesName}: ${current.value}%</span></p>`
          }, `<p class="font-bold text-base mb-1">${par[0].axisValue}</p>`)
        }
      },
      xAxis: { type: 'value',max: 100 },
      yAxis: {
        type: 'category',
        inverse: true,
        axisLabel: {"fontFamily": "Noto Sans TC"},
        data: ['18-29歲', '30-39歲', '40-49歲', '50-59歲', '60-69歲', '70歲以上'],
        axisLabel: { show: false },
      },
      grid: { left: 0, top: 60, right: 0, bottom: 0 },
      legend: {
        show: true,
        itemGap: 15,
        data: ['曾被詐騙造成財損', '差點被騙未有財損', '目前都能辨識', '不確定／無法判斷'],
      },
      series: [
        {
          name: 'labelName', // 偽yAxis label
          type: 'bar',
          data: [0, 0, 0, 0, 0, 0],
          barWidth: 0,
          label: {
            show: true,
            position: [10, -20],
            formatter: (params) => params.name,
            color: '#7f7f7f',
            fontWeight: 'bold',
            fontSize: 16,
          },
          itemStyle: { color: 'transparent' },
          emphasis: { disabled: true },
          legendHoverLink: false,
        },
        {
          name: '曾被詐騙造成財損', type: 'bar', stack: 'total',
          label: {
            show: true,
            formatter: params => (params.value > 5 ? params.value + '%' : ''),
          },
          emphasis: { focus: 'series' },
          barWidth: 45,
          data: [8, 9.9, 9.1, 7.1, 6.7, 11.7]
        },
        {
          name: '差點被騙未有財損', type: 'bar', stack: 'total',
          label: {
            show: true,
            formatter: params => (params.value > 5 ? params.value + '%' : ''),
          },
          emphasis: { focus: 'series' },
          barWidth: 45,
          data: [13.4, 15, 14.9, 13.9, 15.5, 15.3]
        },
        {
          name: '目前都能辨識', type: 'bar', stack: 'total',
          label: {
            show: true,
            formatter: params => (params.value > 5 ? params.value + '%' : ''),
          },
          emphasis: { focus: 'series' },
          barWidth: 45,
          data: [76.6, 75.1, 74.2, 78.7, 76.6, 71.2]
        },
        {
          name: '不確定／無法判斷', type: 'bar', stack: 'total',
          label: {
            show: true,
            formatter: params => (params.value > 5 ? params.value + '%' : ''),
          },
          emphasis: { focus: 'series' },
          barWidth: 45,
          data: [2, 0, 1.8, 0.3, 1.2, 2]
        }
      ]
    }
  },
  {
    title: '您有沒有曾經被詐騙或瀕臨被騙的經驗？',
    subtitle: '交叉分析學歷',
    after: '<p class="mt-4">學歷為研究所的受訪者，曾遭詐騙比率高於其他教育程度者，造成重大財損的比率也較整體高。</p>',
    options: {
      color: ['#5470c6', '#fc8452', '#91cc75', '#fac858'],
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        confine: true,
        formatter: (par) => {
          return par.reduce((prev, current) => {
            if (current.seriesName === 'labelName') return prev;
            return `${prev}<p class="text-sm">${current.marker} <span>${current.seriesName}: ${current.value}%</span></p>`
          }, `<p class="font-bold text-base mb-1">${par[0].axisValue}</p>`)
        }
      },
      xAxis: { type: 'value', },
      yAxis: {
        type: 'category',
        inverse: true,
        axisLabel: {"fontFamily": "Noto Sans TC"},
        data: ['國中以下', '高中職', '專科', '大學', '碩、博士'],
        axisLabel: { show: false },
      },
      grid: { left: 0, top: 60, right: 0, bottom: 0 },
      legend: {
        show: true,
        itemGap: 15,
        data: ['曾被詐騙造成財損', '差點被騙未有財損', '目前都能辨識', '不確定／無法判斷'],
      },
      series: [
        {
          name: 'labelName', // 偽yAxis label
          type: 'bar',
          data: [0, 0, 0, 0, 0],
          barWidth: 0,
          label: {
            show: true,
            position: [10, -20],
            formatter: (params) => params.name,
            color: '#7f7f7f',
            fontWeight: 'bold',
            fontSize: 16,
          },
          itemStyle: { color: 'transparent' },
          emphasis: { disabled: true },
          legendHoverLink: false,
        },
        {
          name: '曾被詐騙造成財損', type: 'bar', stack: 'total',
          label: {
            show: true,
            formatter: params => (params.value > 5 ? params.value + '%' : ''),
          },
          emphasis: { focus: 'series' },
          barWidth: 45,
          data: [9.5, 6.9, 7.7, 9.5, 11.7]
        },
        {
          name: '差點被騙未有財損', type: 'bar', stack: 'total',
          label: {
            show: true,
            formatter: params => (params.value > 5 ? params.value + '%' : ''),
          },
          emphasis: { focus: 'series' },
          barWidth: 45,
          data: [15.7, 13.3, 17.4, 13.4, 16.6]
        },
        {
          name: '目前都能辨識', type: 'bar', stack: 'total',
          label: {
            show: true,
            formatter: params => (params.value > 5 ? params.value + '%' : ''),
          },
          emphasis: { focus: 'series' },
          barWidth: 45,
          data: [74.4, 77.5, 71.9, 76.5, 71.7]
        },
        {
          name: '不確定／無法判斷', type: 'bar', stack: 'total',
          label: {
            show: true,
            formatter: params => (params.value > 5 ? params.value + '%' : ''),
          },
          emphasis: { focus: 'series' },
          barWidth: 45,
          data: [0.4, 2.3, 3.0, 0.6, 0]
        }
      ]
    }
  },
]
</script>
