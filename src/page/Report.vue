<template>
  <div>
    <article class="pt-px">
      <Title class="mt-16">防詐大調查</Title>

      <h1 class="text-2xl lg:text-3xl xl:text-4xl sm:text-center mb-6 sm:my-8 xl:leading-snug mx-auto w-11/12 max-w-screen-lg min-h-[1.375em]">
        反詐大調查 主動檢舉、阻斷傳播者不到15％<br>高學歷高自信 受騙更難脫困
      </h1>
      <div class="container">
        <Introduction>
          <p>「上周我才收到一張停車欠費通知，六十元而已，點進去網站做得像真的一樣，信用卡號差點被騙走。」三十一歲的工程師丞浩點開LINE，翻出與假網友的聊天對話，嘴裡邊嘟囔「最近詐騙又變多了，個資不知道從哪流出去的。」</p>
          <p>兩個月前，丞浩的親戚長輩遭詐團設局，退休金幾乎被榨乾，這讓他繃緊神經，耳提面命家中兩老，千萬別理會不明來電和簡訊。「不過你教一招，詐團可以再變出五招，只能不厭其煩地提醒。」他用八個字形容，防詐，就是「全民皆兵，長期抗戰」。</p>
          <p>為了解民眾接觸詐騙訊息的情形，《今周刊》委託山水民調公司，針對全國十八歲以上的民眾，進行「二○二四全民反詐騙大調查」，希望透過現況分析，找出相應的防堵作為。</p>
        </Introduction>
      </div>

      <div class="container pb-20">
        <div class="content-wrapper my-16 space-y-4">
          <h3 class="text-xl sm:text-2xl text-primary font-medium">七十歲族群超過一成被騙過</h3>
          <h3 class="text-xl sm:text-2xl text-primary font-medium">教育程度高  也容易陷入受詐盲區</h3>
          <ChartType1 />
        </div>

        <div class="content-wrapper my-16">
          <ChartType2 />
        </div>

        <div class="content-wrapper my-16">
          <ChartType3 />
        </div>
      </div>
    </article>


  </div>
</template>

<script setup>
import Title from '../components/Title.vue'
import Introduction from '../components/Introduction.vue'
import ChartType1 from '../components/charts/ChartType1.vue'
import ChartType2 from '../components/charts/ChartType2.vue'
import ChartType3 from '../components/charts/ChartType3.vue'
</script>