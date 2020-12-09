import React, {Component} from "react";
import {updateUpvote} from "../../../services/forum_api";
import profileIcon from "../../../images/profile-photo-icon.svg";
import {Button, IconButton} from "@material-ui/core";
import upvoteIcon from "../../../images/upvote-icon.svg";
import filledUpvoteIcon from "../../../images/filled-upvote-icon.svg";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";


class Answer extends Component {

    constructor(props) {
        super(props);

        this.upvote = this.upvote.bind(this);
        this.shouldChange = this.shouldChange.bind(this);
    }

    componentDidMount() {
        this.setState({self_upvote: this.props.data.is_upvoted ? 1 : 0});
    }


    state = {
        self_upvote: 0
    }

    shouldChange() {
        return ((this.state.self_upvote === 1) === this.props.data.is_upvoted ? 0 : this.state.self_upvote === 0 ? -1 : 1);
    }

    async upvote() {
        if (this.state.self_upvote === 0) {
            this.setState({self_upvote: 1});
            await updateUpvote({answer: this.props.data.id, hasUpvoted: true});
        } else {
            this.setState({self_upvote: 0});
            await updateUpvote({answer: this.props.data.id, hasUpvoted: false});
        }
    }


    render() {
        return (
            <div style={{
                borderRadius: 10,
                boxShadow: '0 5px 6px -6px #777',
                width: '100%',
                backgroundColor: 'white',
                paddingTop: 12,
                paddingLeft: 12,
                paddingRight: 12,
                marginTop: 30,
                marginLeft: 30,
                marginRight: 30,
                fontFamily: 'Raleway'
            }}>
                <div style={{display: 'flex', justifyContent: 'flex-start', alignContent: 'flex-end'}}>
                    <img src={profileIcon} style={{width: 25, color: 'red', height: 25}}/>
                    <span style={{marginTop: 3, marginLeft: 5}}>{this.props.data.user.name}</span>
                </div>
                <div style={{marginTop: 10}}>{this.props.data.answers !== null ?
                    <span>{this.props.data.text}</span> :
                    <span/>}</div>
                <div style={{display: 'flex', justifyContent: 'flex-start', marginTop: 10}}>

                    <div style={{display: 'flex', alignContent: 'flex-start'}}>

                        <IconButton onClick={this.upvote}>
                            <img
                                src={this.shouldChange() === -1 ? upvoteIcon : this.shouldChange() === 1 ? filledUpvoteIcon : this.props.data.is_upvoted ? filledUpvoteIcon : upvoteIcon}
                                style={{width: 15, height: 15}}/>
                        </IconButton>

                        <span style={{
                            marginLeft: 4,
                            fontSize: 14,
                            color: 'grey',
                            marginTop: 10
                        }}>{this.props.data.upvotes_count + this.shouldChange()} Upvotes</span>

                    </div>

                </div>
            </div>
        );
    }
}

export default Answer;
