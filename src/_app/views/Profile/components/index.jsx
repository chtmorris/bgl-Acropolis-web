import React from 'react';
import style from './index.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Grid } from 'reflexbox';

export default class Profile extends React.Component {
    render() {
        return (
            <div>
              <Card>
                {/* <CardHeader
                  title="URL Avatar"
                  subtitle="Subtitle"
                  avatar="images/jsa-128.jpg"
                /> */}
                <CardMedia>
                  <div className={style['profile-box']}>
                    <div>
                      <Grid col={4} px={2} py={2}>
                        <img src="/assets/img/Joan.png" />
                      </Grid>
                      <Grid col={8} px={2} py={2}>
                        <h2>Joan Wagner</h2>
                        <p className={style['price']}>$4,450,114.00</p>
                        <h4>123 Street, Toronto</h4>
                      </Grid>
                    </div>
                    <div>
                      <Grid col={4} px={2} py={2}>
                        <p className={style['green-text']}>570</p>
                        <p>Credit score</p>
                        <p>Learn more</p>
                      </Grid>
                      <Grid col={6} px={2} py={2}>
                        <p className={style['green-text']}>General Electric</p>
                        <p>Job at Fortune 500 company</p>
                      </Grid>
                      <Grid col={2} px={2} py={2}>
                        <p className={style['green-text']}>30</p>
                        <p>Backers</p>
                      </Grid>
                    </div>
                  </div>
                  <img src="/assets/img/house.png" />
                </CardMedia>
                <button className="mdc-button mdc-button--primary" data-demo-no-js>
                  Invest with Joan
                </button>
                <CardTitle title="Why invest with Joan Wagner" subtitle="Your rate on investment:" />
                <p className={style['rate']}>8.00%</p>
                <Grid col={4} px={2} py={2}>
                  <p className={style['green-text']}>About Joan</p>
                  <p>Mom with two kids and a loving husband. Work at a GE Aviation unit as an Engineer.</p>
                </Grid>
                <Grid col={4} px={2} py={2}>
                  <p className={style['green-text']}>The neighbourhood</p>
                  <p>
                    The Ultimate Of Luxury Living! Spectacular Ravine Lot!
                    Magnificent Forest Hill Newer Custom Built Home By Lorne Rose Architect And Defined By Stately Style, Impeccable Details, Exquisite Craftsmanship And Luxury Finishes.
                  </p>
                </Grid>
                <Grid col={4} px={2} py={2}>
                  <div className={style['video']}>
                    <img src="/assets/img/vidThumbnail.png"/>
                    <p>Backers</p>
                  </div>
                </Grid>

                {/* <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions> */}
              </Card>
            </div>
        );
    }
}
