<template>
  <div class="space-y-4">
 <h3 class="text-xl sm:text-2xl text-primary font-medium">全民識詐信心超越去年<br>缺少警戒成隱憂  九成認為詐騙嚴重</h3>
    <p>過於自信而鬆懈，降低敏感度和警覺性，確實是全民防詐的一大痛點。</p>
    <p>二四年《今周刊》曾在問卷詢問「您有沒有信心識別詐騙」，當時回覆「有信心」的民眾高達八三％，被視為防詐隱憂；時隔一年，面對相同提問，全民信心指數再衝高，有近八六％民眾「有信心」辨識詐騙，與「沒信心」的十一％形成強烈對比。</p>
    <p>有趣的是，前一年調查結果顯示，教育程度愈高的民眾，對防範詐騙信心指數也愈高；但在本次調查結果中，不同學歷受試者的填答沒有顯著差異，反倒是收入情形，仍然呈現年收愈高，民眾防詐信心愈足。此外，在回答「有信心」辨識詐騙的受試者中，更有八．八％曾經受騙上當。</p>
    <p>其實，依警政署統計，二五年單月平均詐騙件數已較前一年減少兩成，財損降低四成；但仍有高達七九％民眾認為台灣詐騙情形「非常嚴重」，且有六七％受訪者認為，司法體系對於詐騙犯的刑罰「判決太輕」，沒有嚇阻作用。</p>
    <p>這項結果，也與民眾期待政府精進的面向相呼應。在「政府應加強什麼措施」的提問中，希望「提高詐騙相關刑法或行政罰」獲得七六％支持度，連兩年居冠；也有逾六成民意認為政府應「加快追查及攔阻金流的效率」，從源頭降低詐騙財損。</p>
    <p>民眾期盼國家強化打詐力道，卻又不希望過度干預個人自由及金融市場運作，如何在兩者間取得平衡，一直是各國防堵詐騙難題。</p>
    <p>新加坡在二五年間，推出兩道創新防詐措施，一項是授權警察對「合理懷疑」正在受騙的民眾，窮盡勸阻手段仍無效下，得發出「限制令」，暫停該帳戶轉帳、提款或信用卡交易，最長限制三十天，至多延長五次，期間民眾若有疑慮可向警方申訴。</p>
    <p>這固然是一道強硬的政策手段，但當本次調查問及「贊不贊成台灣也立法賦予警方相同權限」時，有六七％表示贊成，約二三％不贊成，其中教育程度愈高的民眾，認同比率愈低。</p>
    <p>新加坡推出的第二招，是針對帳戶餘額超過五萬新幣（約新台幣一二二萬元）的存戶，實施匯款「二十四小時冷靜期」，只要在二十四小時內累計轉帳金額超過餘額一半，就會觸發該機制，當民眾用手機App或網銀轉帳時，交易會被自動延遲二十四小時，銀行臨櫃匯款則不受限。</p>
    <p>儘管延遲轉帳，可能影響正常交易，但民眾接受度相當高，近七八％民眾贊成台灣銀行業者也採取相同措施，不贊成僅十四％，顯示多數台灣民眾在防詐大前提下，願意承擔一定程度的不便，犧牲部分權益。</p>
    <p>然而，除了倚靠公私部門協力拉起防線，其實民眾自己也能運用既有的五項自保措施，為身家財產多上一道安全鎖，降低被詐騙風險。</p>
    <p>目前各縣市地政事務所可供民眾申請「地籍異動即時通」服務，當申請人名下不動產有申請買賣、贈與等情形時，會發送通知給指定聯絡人，由對方協助把關地產異動情形。這套防詐機制已經推動九年，但目前仍只有三四％民眾「知道」這項措施，更僅有三．六％受試者已經申請，有待加強推廣。</p>
    <br>
    <ChartGroup :sliderData="chartData">
      <div
        class="absolute h-full"
        :style="{'padding-top': '60px', 'width': `${isMobile ? 60 : 80}px`}"
      >
        <div class="relative w-full h-full">
          <div
            class="absolute top-[5%] h-[90%]"
            :class="isMobile ? 'left-2 w-2' : 'left-3 w-3'"
            style="background: linear-gradient(to bottom, #5470c6, #fc8452);"
          >
            <div class="absolute text-sm -right-6 top-2 leading-[1.2]">信<br>心<br>指<br>數<br>較<br>高</div>
            <div class="absolute text-sm -right-6 bottom-2 leading-[1.2]">信<br>心<br>指<br>數<br>較<br>低</div>
            <div
              class="absolute w-0 h-0 left-1/2 top-0 -translate-x-1/2 -translate-y-full"
              :style="{
                'border-width': `28px ${isMobile ? '14px' : '16px'}`,
                'border-style': 'solid',
                'border-color': 'transparent transparent #5470c6 transparent'
              }"
            />
            <div
              class="absolute w-0 h-0 left-1/2 bottom-0 -translate-x-1/2 translate-y-full"
              :style="{
                'border-width': `28px ${isMobile ? '14px' : '16px'}`,
                'border-style': 'solid',
                'border-color': '#fc8452 transparent transparent transparent'
              }"
            />
          </div>
        </div>
      </div>
    </ChartGroup>
    <br>
    </div>
</template>

<script setup>
import ChartGroup from './ChartGroup.vue';

import useClientSize from '../../composables/useClientSize'
const { isMobile } = useClientSize();

const chartData = [
{
  title: '您有沒有信心能識別詐騙？',
  subtitle: '有信心中有8.8％曾經遭遇詐騙',
  options: {
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        const { name, value } = params
        const title = `<div class="text-sm tracking-normal break-all whitespace-pre-wrap">${name.replace(/\n/g, '')}</div>`
        return `${title}<strong class="text-base" style="color: ${params.color}">${value}%</strong>`
      }
    },
    series: [
      {
        type: 'pie',
        radius: ['35%', '60%'],  
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 2
        },
        data: [
          { value: 85.9, name: '有信心' },
          { value: 11, name: '沒信心' },
          { value: 3.1, name: '無意見', itemStyle: { color: '#c3c3c3' }},
        ],
        label: {
          show: true,
          formatter: '{b}\n{c}%',
          fontWeight: '500',
          fontSize: 15,
          position: 'outside',
        },
        labelLine: {
          show: true,
          length: 15,  
          length2: 20, 
        }
      }
    ]
  }
},
{
    title: '您有沒有信心能識別詐騙？',
    subtitle: '收入愈高的受訪者，愈有信心識別詐騙；<br>不同教育程度的受訪者，信心程度則沒有顯著差異。',
    options: {
      color: ['#5470c6', '#fc8452', '#c3c3c3'],
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
      xAxis: { type: 'value'},
      
      yAxis: {
        type: 'category',
        inverse: true,
        axisLabel: {"fontFamily": "Noto Sans TC"},
        data: ['30萬元以下', '31萬～50萬元', '51萬～80萬元', '81萬～100萬元', '101萬元以上', ],
        axisLabel: { show: false },
      },
      grid: { left: 0, top: 60, right: 0, bottom: 0 },
      legend: {
        show: true,
        itemGap: 15,
        data: ['有信心', '沒信心', '無明確意見'],
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
          name: '有信心', type: 'bar', stack: 'total',
          label: {
            show: true,
            formatter: params => (params.value > 5 ? params.value + '%' : ''),
          },
          emphasis: { focus: 'series' },
          barWidth: 45,
          data: [83, 83.8, 86.9, 88.4, 90.2]
        },
        {
          name: '沒信心', type: 'bar', stack: 'total',
          label: {
            show: true,
            formatter: params => (params.value > 5 ? params.value + '%' : ''),
          },
          emphasis: { focus: 'series' },
          barWidth: 45,
          data: [10.5, 14.8, 11, 10.7, 9.2]
        },
        {
          name: '無明確意見', type: 'bar', stack: 'total',
          label: {
            show: true,
            formatter: params => (params.value > 5 ? params.value + '%' : ''),
          },
          emphasis: { focus: 'series' },
          barWidth: 45,
          data: [6.5, 1.4, 2.1, 0.9, 0.6]
        },
      ]
    }
},
{
  title: '您認為台灣詐騙嚴不嚴重？',
  subtitle: '',
  options: {
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        const { name, value } = params
        const title = `<div class="text-sm tracking-normal break-all whitespace-pre-wrap">${name.replace(/\n/g, '')}</div>`
        return `${title}<strong class="text-base" style="color: ${params.color}">${value}%</strong>`
      }
    },
    series: [
      {
        type: 'pie',
        radius: isMobile.value ? ['20%', '45%'] : ['35%', '60%'],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 2
        },
        data: [
          { value: 79, name: '非常嚴重' },
          { value: 16.6, name: '還算嚴重' },
          { value: 3.2, name: '不太嚴重' },
          { value: 0.4, name: '完全不嚴重' },
          { value: 0.8, name: '無意見', itemStyle: { color: '#c3c3c3' }},
        ],
        label: {
          show: true,
          formatter: '{b}\n{c}%',
          fontWeight: '500',
          fontSize: 14,  
          position: 'outside',
          alignTo: 'none', 
          distanceToLabelLine: 5,
          bleedMargin: 10,  
        },
        labelLine: {
          show: true,
          length: 15, 
          length2: 15,  
          minTurnAngle: 90, 
        },
        labelLayout: {
          hideOverlap: false, 
          moveOverlap: 'shiftY', 
        }
      }
    ]
  }
},
{
  title: '您認為台灣司法體系對於詐騙犯罪者普遍的刑罰判決情況是？',
  subtitle: '',
  options: {
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        const { name, value } = params
        const title = `<div class="text-sm tracking-normal break-all whitespace-pre-wrap">${name.replace(/\n/g, '')}</div>`
        return `${title}<strong class="text-base" style="color: ${params.color}">${value}%</strong>`
      }
    },
    series: [
      {
        type: 'pie',
        radius: isMobile.value ? ['20%', '45%'] : ['35%', '60%'],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 2
        },
        data: [
          { value: 67.4, name: '判刑太輕', itemStyle: { color: '#5470c6' }},  
          { value: 19.7, name: '判刑偏輕', itemStyle: { color: '#91cc75' }}, 
          { value: 5.4, name: '判刑適中', itemStyle: { color: '#fac858' }},  
          { value: 0.7, name: '判刑偏重', itemStyle: { color: '#ee6666' }},  
          { value: 0.1, name: '判刑太重', itemStyle: { color: '#73c0de' }}, 
          { value: 6.7, name: '不知道／無法判斷', itemStyle: { color: '#c3c3c3' }},
        ],
        label: {
          show: true,
          formatter: '{b}\n{c}%',
          fontWeight: '500',
          fontSize: 14,  
          position: 'outside',
          alignTo: 'none', 
          distanceToLabelLine: 5,
          bleedMargin: 10,  
        },
        labelLine: {
          show: true,
          length: 15, 
          length2: 30,  
          minTurnAngle: 90, 
        },
        labelLayout: {
          hideOverlap: false, 
          moveOverlap: 'shiftY', 
        }
      }
    ]
  }
},
{
    title: '您認為政府應該更加強哪些方面作為，才能有效防堵詐騙？',
    subtitle: '(複選)',
    options: {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        confine: true,
        formatter: (par) => {
          return par.reduce((prev, current) => {
            if (current.seriesName === 'labelName') return prev;
            return `${prev}<strong class="text-base" style="color: ${current.color}">${current.value}%</strong>`
          }, `<p class="block text-sm tracking-normal break-all whitespace-pre-wrap">${par[0].axisValue.replace('\n', '')}</p>`)
        }
      },
      xAxis: { type: 'value', },
      yAxis: {
        type: 'category',
        inverse: true,
        axisLabel: {"fontFamily": "Noto Sans TC"},
        data: [
          '提高詐騙相關刑法或行政罰',
          '加快追查及攔阻金流的效率',
          '加快調閱詐騙帳戶等資料的速度',
          '強化與金融機構合作',
          '加強宣導防詐觀念',
          '強化與國際數位平台溝通合作',
          
        ],
        axisLabel: { show: false },
      },
      grid: { left: 10, top: 0, right: 10, bottom: 0 },
      series: [
        {
          name: 'labelName', // 偽yAxis label
          type: 'bar',
          data: [0, 0, 0, 0, 0, 0, 0],
          barWidth: 0,
          label: {
            show: true,
            position: [10, isMobile.value ? -25 : -20],
            formatter: (params) => isMobile.value ? params.name : params.name.replace('\n', ''),
            color: '#7f7f7f',
            fontWeight: 'bold',
            fontSize: 16,
            textBorderColor: '#ffffff',
            textBorderWidth: 2,
          },
          itemStyle: { color: 'transparent' },
          emphasis: { disabled: true },
          legendHoverLink: false,
        },
        {
          name: '', type: 'bar',
          label: {
            show: true,
            formatter: params => (params.value > 5 ? params.value + '%' : ''),
          },
          emphasis: { focus: 'series' },
          barWidth: 45,
          data: [
            { value: 76.8, x: 5, itemStyle: {color: '#fc8452'} }, 61.3, 58.5, 55.4, 55, 50.6]
        },
      ]
    }
},
{
  title: '新加坡2025年實施防詐「限制令」，授權警方對「合理懷疑」被詐騙的民眾，限制其銀行帳戶轉帳、提款和信用卡交易，最長限制30天，可延長5次，期間民眾可向警察機關提出申訴。您贊不贊成台灣應立法賦予警方相同權限？',
  subtitle: '',
  options: {
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        const { name, value } = params
        const title = `<div class="text-sm tracking-normal break-all whitespace-pre-wrap">${name.replace(/\n/g, '')}</div>`
        return `${title}<strong class="text-base" style="color: ${params.color}">${value}%</strong>`
      }
    },
    series: [
      {
        type: 'pie',
        radius: isMobile.value ? ['20%', '45%'] : ['35%', '60%'],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 2
        },
        data: [
          { value: 22, name: '非常贊成' },
          { value: 45.1, name: '還算贊成' },
          { value: 19, name: '不太贊成' },
          { value: 4.6, name: '非常不贊成' },
          { value: 9.3, name: '無意見', itemStyle: { color: '#c3c3c3' }},
        ],
        label: {
          show: true,
          formatter: '{b}\n{c}%',
          fontWeight: '500',
          fontSize: 14,  
          position: 'outside',
          alignTo: 'none', 
          distanceToLabelLine: 5,
          bleedMargin: 10,  
        },
        labelLine: {
          show: true,
          length: 15, 
          length2: 15,  
          minTurnAngle: 90, 
        },
        labelLayout: {
          hideOverlap: false, 
          moveOverlap: 'shiftY', 
        }
      }
    ]
  }
},
{
  title: '新加坡2025年針對帳戶餘額超過約新台幣122萬的存戶，實施匯款「24小時冷靜期」。若24小時內累計轉帳金額超過餘額50％，採用手機App或網銀轉帳，交易將被延遲24小時，銀行臨櫃匯款不受限制。您贊不贊成台灣的銀行業者實施相同措施？',
  subtitle: '',
  options: {
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        const { name, value } = params
        const title = `<div class="text-sm tracking-normal break-all whitespace-pre-wrap">${name.replace(/\n/g, '')}</div>`
        return `${title}<strong class="text-base" style="color: ${params.color}">${value}%</strong>`
      }
    },
    series: [
      {
        type: 'pie',
        radius: isMobile.value ? ['20%', '45%'] : ['35%', '60%'],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 2
        },
        data: [
          { value: 32, name: '非常贊成' },
          { value: 45.9, name: '還算贊成' },
          { value: 11.1, name: '不太贊成' },
          { value: 3.1, name: '非常不贊成' },
          { value: 7.9, name: '無意見', itemStyle: { color: '#c3c3c3' }},
        ],
        label: {
          show: true,
          formatter: '{b}\n{c}%',
          fontWeight: '500',
          fontSize: 14,  
          position: 'outside',
          alignTo: 'none', 
          distanceToLabelLine: 5,
          bleedMargin: 10,  
        },
        labelLine: {
          show: true,
          length: 15, 
          length2: 15,  
          minTurnAngle: 90, 
        },
        labelLayout: {
          hideOverlap: false, 
          moveOverlap: 'shiftY', 
        }
      }
    ]
  }
},

]
</script>