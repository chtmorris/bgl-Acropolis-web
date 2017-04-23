import React from 'react';
import style from './index.css';
import {Card, CardMedia} from 'material-ui/Card';
import {Grid} from 'reflexbox';

const columnChartData = [
  ["Year", "Ownership", "Investors"],
  ["2017", 0.05, 0.95],
  ["2018", 0.10, 0.90],
  ["2019", 0.15, 0.85],
  ["2020", 0.20, 0.80],
  ["2021", 0.25, 0.75],
  ["2022", 0.30, 0.70],
  ["2023", 0.35, 0.65],
  ["2024", 0.40, 0.60],
  ["2025", 0.45, 0.55],
  ["2026", 0.50, 0.50],
  ["2027", 0.55, 0.45],
  ["2028", 0.60, 0.40],
  ["2029", 0.65, 0.35],
  ["2030", 0.70, 0.30],
  ["2031", 0.75, 0.25],
  ["2032", 0.80, 0.20],
  ["2033", 0.85, 0.15],
  ["2034", 0.90, 0.10],
  ["2035", 0.95, 0.05],
  ["2036", 1.00, 0.00]
]

const lineChartData = [
  ["Year", "Ownership"],
  ["2017", 0.05],
  ["2018", 0.10],
  ["2019", 0.15],
  ["2020", 0.20],
  ["2021", 0.25],
  ["2022", 0.30],
  ["2023", 0.35],
  ["2024", 0.40],
  ["2025", 0.45],
  ["2026", 0.50],
  ["2027", 0.55],
  ["2028", 0.60],
  ["2029", 0.65],
  ["2030", 0.70],
  ["2031", 0.75],
  ["2032", 0.80],
  ["2033", 0.85],
  ["2034", 0.90],
  ["2035", 0.95],
  ["2036", 1.00]
]

const pieChartOptions = {
    "backgroundColor": "transparent",
    "colors": ["#7ED321", "#626366", "#C8C5C6", "#E0E0E0"],
    "animation": {
      "startup": "true",
      "duration": "1000",
      "easing": "out",
    },
    "isStacked": "percent",
    "crosshair": {
      "color": "#000",
      "trigger": "selection"
    }
}

const crosshairSelection = {
  "row": 0,
  "column": 1
}

export default class Dashboard extends React.Component {
    render() {
        return (
          <div>
            <CardMedia>
              <div className={style['profile-box']}>
                <div>
                  <Grid col={4} px={2} py={2}>
                    <img src="/assets/img/Joan.png" alt="pic"/>
                  </Grid>
                  <Grid col={8} px={2} py={2}>
                    <h2>Joan Wagner</h2>
                    <p className={style['price']}>$4,450,114.00</p>
                    <h4>123 Street, Toronto</h4>
                  </Grid>
                </div>
                <div>
                  <Grid col={4} px={2} py={2}>
                    <p className={style['green-text']}>30</p>
                    <p>Backers</p>
                  </Grid>
                  <Grid col={6} px={2} py={2}>
                    <p className={style['green-text']}>4</p>
                    <p>Days remaining</p>
                  </Grid>
                  <Grid col={2} px={2} py={2}>
                    <p className={style['green-text']}>$0</p>
                    <p>Amount remaining</p>
                  </Grid>
                </div>
              </div>
              <img src="/assets/img/house-top.png" alt="snapshot"/>


              <article>
                <div>
                  <Grid col={12} px={2} py={2}>
                    <h3 className={style.summaryTitle}>Your summary</h3>
                  </Grid>
                </div>
                <div>
                  <Grid col={8} px={2} py={2}>
                    <p className={style.title}>Payment cycle</p>
                    <p className={style.subtitle}>Years to ownership</p>
                    <google-chart
                      type='column'
                      options={JSON.stringify(pieChartOptions)}
                      data={JSON.stringify(columnChartData)}
                      >
                    </google-chart>
                  </Grid>
                  <Grid col={4} px={2} py={2}>
                    <p className={style.title}>Ownership status</p>
                    <p className={style.subtitle}>Your piece of the pie</p>
                    <google-chart
                      type='pie'
                      options={JSON.stringify(pieChartOptions)}
                      cols='[{"label":"Investor", "type":"string"}, {"label":"Ownership", "type":"number"}]'
                      rows='[["Joan", 0.4],["Dave", 0.3],["Jane", 0.1],["Paul", 0.2]]'>
                    </google-chart>
                  </Grid>
                </div>
                <div>
                  <Grid col={12} px={2} py={2}>
                    <p className={style.title}>Current payment</p>
                    <p className={style.subtitle}>Years to ownership</p>
                      <google-chart
                        type='line'
                        options={JSON.stringify(pieChartOptions)}
                        data={JSON.stringify(lineChartData)}
                        selected={JSON.stringify(crosshairSelection)}
                        >
                      </google-chart>
                  </Grid>
                </div>
              </article>
            </CardMedia>
          </div>
        );
    }
}
