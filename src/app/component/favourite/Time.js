import React, {Component} from 'react'
import {Text} from "react-native";

export class Time extends Component {
    constructor(props) {
        super(props);
        const time = this.props.time;
        //console.log("Time:"+time);
        this.state = {time: {}, seconds:time};
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    // handler format time
    secondsToTime(secs) {

        let hours = Math.floor(secs / (60 * 60));
        hours = this.formatTime(hours);

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        minutes = this.formatTime(minutes);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
        seconds = this.formatTime(seconds);

        return {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
    }

    formatTime(time) {
        time = time >= 10 ? time : "0" + time;
        return time;
    }

    componentWillMount(){
        this.startTimer();
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({time: timeLeftVar});
    }

    startTimer() {
        if (this.timer === 0) {
            this.timer = setInterval(this.countDown, 1000);
            console.log(this.timer+"gte")
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.
        if (seconds === 0) {
            clearInterval(this.timer);
        }
    }

    render() {
        return (
                <Text style={{fontSize:27,color:'#DE3051',marginBottom:7}}> {this.state.time.h}:{this.state.time.m}:{this.state.time.s} </Text>
        );
    }
}