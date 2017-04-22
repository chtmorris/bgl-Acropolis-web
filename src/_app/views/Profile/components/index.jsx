import React from 'react';
import style from './index.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Profile extends React.Component {
    render() {
        return (
            <div className={style['root']}>profile
              <Card>
                <CardHeader
                  title="URL Avatar"
                  subtitle="Subtitle"
                  avatar="images/jsa-128.jpg"
                />
                <CardMedia
                  overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                  <img src="/assets/img/house.png" />
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
              </Card>
            </div>
        );
    }
}
