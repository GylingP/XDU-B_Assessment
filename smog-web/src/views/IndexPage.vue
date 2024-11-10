<!--
 * @Author: GylingP gylingpolar@outlook.com
 * @Date: 2024-05-05 12:34:45
 * @LastEditors: GylingP gylingpolar@outlook.com
 * @LastEditTime: 2024-05-07 22:10:43
 * @FilePath: \smog\src\views\IndexPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: GylingP gylingpolar@outlook.com
 * @Date: 2024-05-05 12:34:45
 * @LastEditors: GylingP gylingpolar@outlook.com
 * @LastEditTime: 2024-05-07 08:59:54
 * @FilePath: \smog\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- bg-body-tertiary -->
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary fixed-top px-5"
    data-bs-theme="dark"
  >
    <div class="container-fluid d-flex justify-content-center">
      <a class="navbar-brand" href="#">雾霾探测系统</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              ><span><i class="bi bi-geo-alt me-2"></i></span
              >{{
                positionData.code != "0"
                  ? positionData.location[0].adm2 +
                    "-" +
                    positionData.location[0].name
                  : "---"
              }}</a
            >
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li> -->
        </ul>
        <!-- <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
        <div class="text-light d-none d-lg-block">天气服务由和风天气驱动</div>
      </div>
    </div>
  </nav>
  <section
    class="py-5 px-lg-10 h-auto"
    style="background-color: #6494f6"
  >
    <div class="container py-5">
      <div class="row d-flex justify-content-center justify-content-lg-around">
        <div class="col-10 col-lg-6">
          <div class="fs-2 mb-4 text-light">天气情况</div>
          <div class="card opacity-75">
            <div v-if="weatherData.code == '0'" class="card-body">
              <p class="card-text placeholder-glow">
                <span class="placeholder col-3 placeholder-lg"></span>
                <span class="placeholder col-10"></span>
                <span class="placeholder col-8"></span>
                <span class="placeholder col-10"></span>
              </p>
            </div>
            <div v-else class="card-body">
              <div
                class="d-flex justify-content-center justify-content-lg-start align-items-center"
              >
                <img
                  :src="getAssetsFile('icons/' + weatherData.now.icon + '.svg')"
                  width="50"
                  height="50"
                />
                <div class="ms-2" style="font-size: 50px">
                  {{ weatherData.now.temp }}<span>­°C</span>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-4">
                  <div
                    class="d-flex flex-column align-items-center align-items-lg-start"
                  >
                    <div class="fs-4">{{ weatherData.now.text }}</div>
                    <div class="fs-6 text-body-tertiary">天气</div>
                  </div>
                </div>
                <div class="col-4">
                  <div
                    class="d-flex flex-column align-items-center align-items-lg-start"
                  >
                    <div class="fs-4">
                      {{ weatherData.now.feelsLike + "­°C" }}
                    </div>
                    <div class="fs-6 text-body-tertiary">体感温度</div>
                  </div>
                </div>
                <div class="col-4">
                  <div
                    class="d-flex flex-column align-items-center align-items-lg-start"
                  >
                    <div class="fs-4">
                      {{ weatherData.now.windScale + "级" }}
                    </div>
                    <div class="fs-6 text-body-tertiary">
                      {{ weatherData.now.windDir }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-4">
                  <div
                    class="d-flex flex-column align-items-center align-items-lg-start"
                  >
                    <div class="fs-4">{{ weatherData.now.vis + "km" }}</div>
                    <div class="fs-6 text-body-tertiary">能见度</div>
                  </div>
                </div>
                <div class="col-4">
                  <div
                    class="d-flex flex-column align-items-center align-items-lg-start"
                  >
                    <div class="fs-4">{{ weatherData.now.precip + "mm" }}</div>
                    <div class="fs-6 text-body-tertiary">降水量</div>
                  </div>
                </div>
                <div class="col-4">
                  <div
                    class="d-flex flex-column align-items-center align-items-lg-start"
                  >
                    <div class="fs-4">
                      {{ weatherData.now.pressure + "hPa" }}
                    </div>
                    <div class="fs-6 text-body-tertiary">大气压强</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-none d-lg-block text-light col col-lg-5"
          :class="parseInt(weatherData.now.precip) > 0.0 ? 'cloud' : 'sun'"
        ></div>
        <!-- <div class="d-none d-lg-block text-light col col-lg-5">Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Libero ratione consequuntur natus inventore voluptate iusto nemo ea ut! Dolorum
                    sequi totam sed nemo architecto quod earum, consequuntur minima sit voluptas.</div>-->
      </div>
    </div>
  </section>

  <section class="py-5 h-auto" style="background-color: #f6f9fe; height: 80vh">
    <div class="container py-5">
      <div class="row d-flex justify-content-center justify-content-lg-between">
        <div class="col-10 col-lg-6">
          <div class="fs-2 mb-4 text-dark">空气质量</div>
          <div class="card opacity-75">
            <div v-if="airData.code == '0'" class="card-body">
              <p class="card-text placeholder-glow">
                <span class="placeholder col-3 placeholder-lg"></span>
                <span class="placeholder col-10"></span>
                <span class="placeholder col-8"></span>
                <span class="placeholder col-10"></span>
              </p>
            </div>
            <div v-else class="card-body">
              <div class="d-block d-lg-flex align-items-center">
                <div class="d-flex flex-column align-items-center">
                  <panel :value="parseInt(airData.now.aqi)"></panel>
                  <div class="text-body-tertiary fs-6">
                    {{ airData.now.category }}
                  </div>
                </div>
                <div class="w-100 h-auto p-3">
                  <div class="row p-2">
                    <div
                      class="col-4 d-flex flex-column align-items-center justify-content-center"
                    >
                      <div class="text-dark fs-5">{{ airData.now.pm2p5 }}</div>
                      <div
                        class="progress w-100"
                        role="progressbar"
                        aria-label="Basic example"
                        :aria-valuenow="airData.now.pm2p5"
                        aria-valuemin="0"
                        aria-valuemax="200"
                        style="height: 7px"
                      >
                        <div
                          class="progress-bar"
                          :style="
                            'width:' + getProcess(airData.now.pm2p5, 200) + '%'
                          "
                        ></div>
                      </div>
                      <div class="text-body-tertiary fs-6">PM2.5</div>
                    </div>
                    <div
                      class="col-4 d-flex flex-column align-items-center justify-content-center"
                    >
                      <div class="text-dark fs-5">{{ airData.now.pm10 }}</div>
                      <div
                        class="progress w-100"
                        role="progressbar"
                        aria-label="Basic example"
                        :aria-valuenow="airData.now.pm2p5"
                        aria-valuemin="0"
                        aria-valuemax="200"
                        style="height: 7px"
                      >
                        <div
                          class="progress-bar"
                          :style="
                            'width:' + getProcess(airData.now.pm10, 200) + '%'
                          "
                        ></div>
                      </div>
                      <div class="text-body-tertiary fs-6">PM10</div>
                    </div>
                    <div
                      class="col-4 d-flex flex-column align-items-center justify-content-center"
                    >
                      <div class="text-dark fs-5">{{ airData.now.o3 }}</div>
                      <div
                        class="progress w-100"
                        role="progressbar"
                        aria-label="Basic example"
                        :aria-valuenow="airData.now.pm2p5"
                        aria-valuemin="0"
                        aria-valuemax="300"
                        style="height: 7px"
                      >
                        <div
                          class="progress-bar"
                          :style="
                            'width:' + getProcess(airData.now.o3, 300) + '%'
                          "
                        ></div>
                      </div>
                      <div class="text-body-tertiary fs-6">臭氧</div>
                    </div>
                  </div>
                  <div class="row p-2">
                    <div
                      class="col-4 d-flex flex-column align-items-center justify-content-center"
                    >
                      <div class="text-dark fs-5">{{ airData.now.co }}</div>
                      <div
                        class="progress w-100"
                        role="progressbar"
                        aria-label="Basic example"
                        :aria-valuenow="airData.now.pm2p5"
                        aria-valuemin="0"
                        aria-valuemax="200"
                        style="height: 7px"
                      >
                        <div
                          class="progress-bar"
                          :style="
                            'width:' + getProcess(airData.now.co, 200) + '%'
                          "
                        ></div>
                      </div>
                      <div class="text-body-tertiary fs-6">一氧化碳</div>
                    </div>
                    <div
                      class="col-4 d-flex flex-column align-items-center justify-content-center"
                    >
                      <div class="text-dark fs-5">{{ airData.now.so2 }}</div>
                      <div
                        class="progress w-100"
                        role="progressbar"
                        aria-label="Basic example"
                        :aria-valuenow="airData.now.pm2p5"
                        aria-valuemin="0"
                        aria-valuemax="200"
                        style="height: 7px"
                      >
                        <div
                          class="progress-bar"
                          :style="
                            'width:' + getProcess(airData.now.so2, 200) + '%'
                          "
                        ></div>
                      </div>
                      <div class="text-body-tertiary fs-6">二氧化硫</div>
                    </div>
                    <div
                      class="col-4 d-flex flex-column align-items-center justify-content-center"
                    >
                      <div class="text-dark fs-5">{{ airData.now.no2 }}</div>
                      <div
                        class="progress w-100"
                        role="progressbar"
                        aria-label="Basic example"
                        :aria-valuenow="airData.now.pm2p5"
                        aria-valuemin="0"
                        aria-valuemax="200"
                        style="height: 7px"
                      >
                        <div
                          class="progress-bar"
                          :style="
                            'width:' + getProcess(airData.now.no2, 200) + '%'
                          "
                        ></div>
                      </div>
                      <div class="text-body-tertiary fs-6">二氧化氮</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-none d-lg-block col col-lg-5">
          <div class="card opacity-75">
            <div class="card-body">
              <div class="fs-4 text-light-emphasis w-auto">温馨提示</div>
              <br />
              <div class="fs-5 text-light-emphasis w-auto">
                轻度霾天气时：适当减少户外活动。
              </div>
              <div class="fs-5 text-light-emphasis w-auto">
                中度霾天气时：减少户外活动，避免户外锻炼；外出时可佩戴具有防霾功能的口罩。
              </div>
              <div class="fs-5 text-light-emphasis w-auto">
                重度霾天气时：尽量留在室内，避免户外活动；必须外出时须佩戴具有防霾功能的口罩；外出回来要及时清洗面部、鼻腔及裸露的皮肤。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-5 h-max" style="background-color: #b0d3fb">
    <div class="container py-5 ">
      <div class="row d-flex justify-content-center justify-content-lg-start">
        <div class="col-10 col-lg-6">
          <div class="fs-2 mb-4 text-dark">未来天气折线图</div>
          <div class="card opacity-75">
            <div class="card-body">
              <!-- <p  v-if="weatherData.code == '0'" class="card-text placeholder-glow">
                <span class="placeholder col-3 placeholder-lg"></span>
                <span class="placeholder col-10"></span>
                <span class="placeholder col-8"></span>
                <span class="placeholder col-10"></span>
              </p> -->
              <my-chart :data="tempArr"></my-chart>
            </div>
          </div>
        </div>
        <div class="col-10 col-lg-6 mt-3 mt-lg-0">
          <div class="fs-2 mb-4 text-dark">未来湿度折线图</div>
          <div class="card opacity-75">
            <div class="card-body">
              <!-- <p  v-if="weatherData.code == '0'" class="card-text placeholder-glow">
                <span class="placeholder col-3 placeholder-lg"></span>
                <span class="placeholder col-10"></span>
                <span class="placeholder col-8"></span>
                <span class="placeholder col-10"></span>
              </p> -->
              <my-chart :data="humidityArr"></my-chart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import { ref, reactive, onMounted } from "vue";
import panel from "./panel.vue";
import axios from "axios";
import MyChart from "./MyChart.vue";

import { chartDataType } from "./config.ts";

const tempArr = ref<chartDataType[]>([
  {
    name: "最高气温",
    type: "line",
    data: [],
  },
  {
    name: "最低气温",
    type: "line",
    data: [],
  },
]);

const humidityArr = ref<chartDataType[]>([
  {
    name: "相对湿度",
    type: "line",
    data: [],
  },
]);

let positionData = reactive({
  code: "0",
  location: [
    {
      name: "长安",
      id: "101110102",
      lat: "34.15710",
      lon: "108.94158",
      adm2: "西安",
      adm1: "陕西省",
      country: "中国",
      tz: "Asia/Shanghai",
      utcOffset: "+08:00",
      isDst: "0",
      type: "city",
      rank: "23",
      fxLink: "https://www.qweather.com/weather/chang'an-101110102.html",
    },
  ],
  refer: {
    sources: ["QWeather"],
    license: ["QWeather Developers License"],
  },
});
let weatherData = reactive({
  code: "0",
  updateTime: "2024-05-06T23:34+08:00",
  fxLink: "https://www.qweather.com/weather/chang'an-101110102.html",
  now: {
    obsTime: "2024-05-06T23:32+08:00",
    temp: "19",
    feelsLike: "19",
    icon: "150",
    text: "晴",
    wind360: "57",
    windDir: "东北风",
    windScale: "2",
    windSpeed: "8",
    humidity: "89",
    precip: "0.0",
    pressure: "962",
    vis: "16",
    cloud: "10",
    dew: "12",
  },
  refer: {
    sources: ["QWeather"],
    license: ["CC BY-SA 4.0"],
  },
});
let airData = reactive({
  code: "0",
  updateTime: "2024-05-06T23:37+08:00",
  fxLink: "https://www.qweather.com/air/chang'an-101110102.html",
  now: {
    pubTime: "2024-05-06T23:00+08:00",
    aqi: "59",
    level: "2",
    category: "良",
    primary: "PM10",
    pm10: "67",
    pm2p5: "21",
    no2: "38",
    so2: "3",
    co: "0.6",
    o3: "52",
  },
  refer: {
    sources: ["中国环境监测总站 (CNEMC)"],
    license: ["CC BY-SA 4.0"],
  },
});

const getAssetsFile = (url: string) => {
  return new URL(`../assets/${url}`, import.meta.url).href;
};

const location = ref("");

const setChartData = () => {
  axios
    .get(
      "https://devapi.qweather.com/v7/weather/7d?location=" +
        location.value +
        "&key=4c1c08fe43414f53ab868d82d9bef5fb"
    )
    .then((response) => {
      console.log(response.data);
      response.data.daily.forEach((element) => {
        let name = element.fxDate.substring(
          element.fxDate.indexOf("-") + 1,
          element.fxDate.length
        );
        tempArr.value[0].data.push({
          name: name,
          value: parseInt(element.tempMax),
        });
        tempArr.value[1].data.push({
          name: name,
          value: parseInt(element.tempMin),
        });
        humidityArr.value[0].data.push({
          name: name,
          value: parseInt(element.humidity) / 100,
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const setPositionData = () => {
  axios
    .get(
      "https://geoapi.qweather.com/v2/city/lookup?location=" +
        location.value +
        "&key=4c1c08fe43414f53ab868d82d9bef5fb"
    )
    .then((response) => {
      console.log(response.data);
      Object.assign(positionData, response.data);
      setWeatherData();
      setChartData();
    })
    .catch((error) => {
      console.log(error);
    });
};

const getPosition = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setLocation, (error) => {
      console.log(error);
    });
  } else {
    ElMessage.error("当前无法获取定位信息");
  }
};

const setWeatherData = () => {
  axios
    .get(
      "https://devapi.qweather.com/v7/weather/now?location=" +
        location.value +
        "&key=4c1c08fe43414f53ab868d82d9bef5fb"
    )
    .then((response) => {
      console.log(response.data);
      Object.assign(weatherData, response.data);
      setAirData();
    })
    .catch((error) => {
      console.log(error);
    });
};

const setAirData = () => {
  axios
    .get(
      "https://devapi.qweather.com/v7/air/now?location=" +
        location.value +
        "&key=4c1c08fe43414f53ab868d82d9bef5fb"
    )
    .then((response) => {
      console.log(response.data);
      Object.assign(airData, response.data);
      addRecData();
    })
    .catch((error) => {
      console.log(error);
    });
};

const addRecData = () => {
  const formData = new FormData();
  formData.append(`location`, location.value);
  formData.append(`weather`, JSON.stringify(weatherData));
  formData.append(`air`, JSON.stringify(airData));
  axios
    .post("https://" + "api.foxmedia.top" + "/add_rec", formData)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const setLocation = (position: any) => {
  const lati = position.coords.latitude; //十进制纬度
  const longi = position.coords.longitude; //十进制经度
  location.value = longi + "," + lati;
  setPositionData();
};

const getProcess = (value: string, max: number) => {
  return parseInt(value) < max ? Math.ceil((parseInt(value) / max) * 100) : 100;
};
// axios
//   .get("http://" + "8.137.167.26" + ":5590/query_rec")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
onMounted(() => {
  getPosition();
});

// const count = ref(0)
</script>

<style scoped>
.sun {
  width: 10em;
  height: 10em;
  /* 将正方形四直角改为圆角成 圆 */
  border-radius: 50%;
  /* 为太阳设置外围光辉阴影 */
  box-shadow: 0px 0px 100px #ffff00;
  /* 为圆从外到内设置颜色 黄色-》红色 */
  background: radial-gradient(circle at center, red, gold);
}

.cloud {
  width: 10em;
  height: 10em;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: #fff 12em -1em 0 -1em, #fff 5em -2em, #fff 8em 1em,
    #fff 13em 1em 0 -0.5em, #fff 15em 0.5em 0 -0.5em;
}
</style>
<style></style>
