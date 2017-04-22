import React from 'react';
import style from './index.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Grid } from 'reflexbox';

export default class Profile extends React.Component {
    render() {
        return (
            <div className={style['root']}>profile
              <Card>
                {/* <CardHeader
                  title="URL Avatar"
                  subtitle="Subtitle"
                  avatar="images/jsa-128.jpg"
                /> */}
                <CardMedia>
                  <img src="/assets/img/house.png" />
                  <div className={style['profile-box']}>
                    <Grid col={4} px={2}>
                      <img src="/assets/img/Joan.png" />
                    </Grid>
                    <Grid col={8} px={2}>
                      <h2>Joan Wagner</h2>
                      <h3>$4,450,114.00</h3>
                      <h4>123 Street, Toronto</h4>
                    </Grid>
                  </div>
                </CardMedia>
                <CardTitle title="Why invest with Joan Wagner" subtitle="Card subtitle" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
                <div>
                  <Grid col={6} px={2}>
                    Left column
                  </Grid>
                  <Grid col={6} px={2}>
                    Right column
                  </Grid>
                </div>
              </Card>
            </div>
        );
    }
}
