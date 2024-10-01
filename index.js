const apiResponse = {
  "success": "true",
  "result": {
      "resource_id": "F-C0032-001",
      "fields": [
          {
              "id": "datasetDescription",
              "type": "String"
          },
          {
              "id": "locationName",
              "type": "String"
          },
          {
              "id": "parameterName",
              "type": "String"
          },
          {
              "id": "parameterValue",
              "type": "String"
          },
          {
              "id": "parameterUnit",
              "type": "String"
          },
          {
              "id": "startTime",
              "type": "Timestamp"
          },
          {
              "id": "endTime",
              "type": "Timestamp"
          }
      ]
  },
  "records": {
      "datasetDescription": "三十六小時天氣預報",
      "location": [
          {
              "locationName": "臺中市三十六小時天氣預報",
              "weatherElement": [
                  {
                      "elementName": "Wx",
                      "time": [
                          {
                              "startTime": "2024-10-01 12:00:00",
                              "endTime": "2024-10-01 18:00:00",
                              "parameter": {
                                  "parameterName": "陰天",
                                  "parameterValue": "7"
                              }
                          },
                          {
                              "startTime": "2024-10-01 18:00:00",
                              "endTime": "2024-10-02 06:00:00",
                              "parameter": {
                                  "parameterName": "陰天",
                                  "parameterValue": "7"
                              }
                          },
                          {
                              "startTime": "2024-10-02 06:00:00",
                              "endTime": "2024-10-02 18:00:00",
                              "parameter": {
                                  "parameterName": "陰短暫陣雨或雷雨",
                                  "parameterValue": "18"
                              }
                          }
                      ]
                  },
                  {
                      "elementName": "PoP",
                      "time": [
                          {
                              "startTime": "2024-10-01 12:00:00",
                              "endTime": "2024-10-01 18:00:00",
                              "parameter": {
                                  "parameterName": "20",
                                  "parameterUnit": "百分比"
                              }
                          },
                          {
                              "startTime": "2024-10-01 18:00:00",
                              "endTime": "2024-10-02 06:00:00",
                              "parameter": {
                                  "parameterName": "20",
                                  "parameterUnit": "百分比"
                              }
                          },
                          {
                              "startTime": "2024-10-02 06:00:00",
                              "endTime": "2024-10-02 18:00:00",
                              "parameter": {
                                  "parameterName": "50",
                                  "parameterUnit": "百分比"
                              }
                          }
                      ]
                  },
                  {
                      "elementName": "MinT",
                      "time": [
                          {
                              "startTime": "2024-10-01 12:00:00",
                              "endTime": "2024-10-01 18:00:00",
                              "parameter": {
                                  "parameterName": "31",
                                  "parameterUnit": "C"
                              }
                          },
                          {
                              "startTime": "2024-10-01 18:00:00",
                              "endTime": "2024-10-02 06:00:00",
                              "parameter": {
                                  "parameterName": "27",
                                  "parameterUnit": "C"
                              }
                          },
                          {
                              "startTime": "2024-10-02 06:00:00",
                              "endTime": "2024-10-02 18:00:00",
                              "parameter": {
                                  "parameterName": "27",
                                  "parameterUnit": "C"
                              }
                          }
                      ]
                  },
                  {
                      "elementName": "CI",
                      "time": [
                          {
                              "startTime": "2024-10-01 12:00:00",
                              "endTime": "2024-10-01 18:00:00",
                              "parameter": {
                                  "parameterName": "悶熱至易中暑"
                              }
                          },
                          {
                              "startTime": "2024-10-01 18:00:00",
                              "endTime": "2024-10-02 06:00:00",
                              "parameter": {
                                  "parameterName": "舒適至悶熱"
                              }
                          },
                          {
                              "startTime": "2024-10-02 06:00:00",
                              "endTime": "2024-10-02 18:00:00",
                              "parameter": {
                                  "parameterName": "舒適至悶熱"
                              }
                          }
                      ]
                  },
                  {
                      "elementName": "MaxT",
                      "time": [
                          {
                              "startTime": "2024-10-01 12:00:00",
                              "endTime": "2024-10-01 18:00:00",
                              "parameter": {
                                  "parameterName": "35",
                                  "parameterUnit": "C"
                              }
                          },
                          {
                              "startTime": "2024-10-01 18:00:00",
                              "endTime": "2024-10-02 06:00:00",
                              "parameter": {
                                  "parameterName": "31",
                                  "parameterUnit": "C"
                              }
                          },
                          {
                              "startTime": "2024-10-02 06:00:00",
                              "endTime": "2024-10-02 18:00:00",
                              "parameter": {
                                  "parameterName": "30",
                                  "parameterUnit": "C"
                              }
                          }
                      ]
                  }
              ]
          }
      ]
  }
};

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString('zh-TW', { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit', 
      hour: '2-digit', 
      minute: '2-digit' 
  });
}

function displayWeatherInfo() {
  const weatherInfo = document.getElementById('weather-info');
  const location = apiResponse.records.location[0];
  const htmlContent = `
      <h2>${location.locationName}</h2>
      <p>資料描述: ${apiResponse.records.datasetDescription}</p>
      ${location.weatherElement.map(element => {
          if (element.elementName === 'Wx' || element.elementName === 'PoP') {
              return `
                  <h3>${element.elementName === 'Wx' ? '天氣狀況' : '降雨機率'}</h3>
                  <ul>
                      ${element.time.map(timeSlot => `
                          <li>
                              ${formatDate(timeSlot.startTime)} - ${formatDate(timeSlot.endTime)}:
                              ${timeSlot.parameter.parameterName}
                              ${element.elementName === 'PoP' ? '%' : ''}
                          </li>
                      `).join('')}
                  </ul>
              `;
          }
          return '';
      }).join('')}
      <h3>溫度範圍</h3>
      <ul>
          ${location.weatherElement.find(e => e.elementName === 'MinT').time.map((timeSlot, index) => {
              const maxTemp = location.weatherElement.find(e => e.elementName === 'MaxT').time[index].parameter.parameterName;
              return `
                  <li>
                      ${formatDate(timeSlot.startTime)} - ${formatDate(timeSlot.endTime)}:
                      ${timeSlot.parameter.parameterName}°C - ${maxTemp}°C
                  </li>
              `;
          }).join('')}
      </ul>
      <h3>舒適度</h3>
      <ul>
          ${location.weatherElement.find(e => e.elementName === 'CI').time.map(timeSlot => `
              <li>
                  ${formatDate(timeSlot.startTime)} - ${formatDate(timeSlot.endTime)}:
                  ${timeSlot.parameter.parameterName}
              </li>
          `).join('')}
      </ul>
  `;
  weatherInfo.innerHTML = htmlContent;
}

// 當頁面加載完成時顯示天氣信息
document.addEventListener('DOMContentLoaded', displayWeatherInfo);