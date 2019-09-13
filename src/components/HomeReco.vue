<template>
  <div class="home-reco">
    <div class="reco-title">饕餮美食</div>
    <div class="item border-bottom">
      <img class="item-img" src="https://i.52112.com/icon/jpg/256/20190823/55154/2459692.jpg" alt>
      <div class="info">
        <p class="info-title">glpla glboy</p>
        <p class="info-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, ratione.</p>
        <button class="info-btn">查看详情</button>
      </div>
    </div>
    <div class="item border-bottom">
      <img class="item-img" src="https://i.52112.com/icon/jpg/256/20190823/55154/2459684.jpg" alt>
      <div class="info">
        <p class="info-title">glpla cnplaman</p>
        <p
          class="info-desc"
        >Lorem ipsum dolor sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, ratione.</p>
        <button class="info-btn">查看详情</button>
      </div>
    </div>
    <div class="item border-bottom">
      <img class="item-img" src="https://i.52112.com/icon/jpg/256/20190823/55154/2459671.jpg" alt>
      <div class="info">
        <p class="info-title">glboy 54414</p>
        <p
          class="info-desc"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quas! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, ratione.</p>
        <button class="info-btn">查看详情</button>
      </div>
    </div>
    <div class="item border-bottom">
      <img class="item-img" src="https://i.52112.com/icon/jpg/256/20190823/55154/2459689.jpg" alt>
      <div class="info">
        <p class="info-title">glpla 75716</p>
        <p
          class="info-desc"
        >Lorem ipsum dolor sit amet.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, ratione.</p>
        <button class="info-btn">查看详情</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeReco"
};
</script>
<style scoped>
.home-reco {
  margin-top: 0.2rem;
}
.reco-title {
  background: #eee;
  line-height: 0.8rem;
  text-indent: 0.2rem;
}
.item {
  display: flex;
  align-items: center;
  padding: 0.2rem 0.1rem;
}
.item .item-img {
  width: 1.4rem;
  height: 1.4rem;
}
.item .info {
  flex: 1;
  margin-left: 0.2rem;
}
.item .info-title {
  line-height: 0.6rem;
  font-size: 0.32rem;
}
.item .info-desc {
  line-height: 0.4rem;
  color: #aaa;
}
.item .info-btn {
  margin-top: 0.16rem;
  padding: 0 0.2rem;
  line-height: 0.4rem;
  background: #ff9300;
  color: #fdfdfd;
  border-radius: 0.1rem;
}
</style>


