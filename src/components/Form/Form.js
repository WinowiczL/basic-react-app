import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Radio from "./FormRadio";
import {Component} from "react";
import AppContext from "../../context";

const types = {
    twitter: "twitter",
    article: "article",
    note: "note",
};

const descriptions = {
    twitter: "favorite Twitter account",
    article: "Article",
    note: "Note",
};

class Form extends Component {
    state = {
        type: types.twitter,
        title: '',
        link: '',
        image: '',
        description: ''
    };

    handleRadioButtonChange = type => {
        this.setState({
            type: type,
            title: '',
            link: '',
            image: '',
            description: ''
        });
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {type} = this.state;

        return (
            <AppContext.Consumer>
                {(context) => (
                    <div className={styles.wrapper}>
                        <Title>Add new {descriptions[type]}</Title>
                        <form
                            autoComplete="off"
                            className={styles.form}
                            onSubmit={(e) => context.addItem(e,this.state)}
                        >
                            <div>
                                <Radio
                                    id={types.twitter}
                                    checked={type === types.twitter}
                                    changeFn={() => this.handleRadioButtonChange(types.twitter)}
                                >
                                    Twitter
                                </Radio>
                                <Radio
                                    id={types.article}
                                    checked={type === types.article}
                                    changeFn={() => this.handleRadioButtonChange(types.article)}
                                >
                                    Article
                                </Radio>
                                <Radio
                                    id={types.note}
                                    checked={type === types.note}
                                    changeFn={() => this.handleRadioButtonChange(types.note)}
                                >
                                    Note
                                </Radio>
                            </div>
                            <Input
                                name="title"
                                label={type === types.twitter ? "Twitter Name" : "Title"}
                                onChange={this.handleInputChange}
                                value={this.state.title}
                            />
                            {type !== types.note ? (
                                <Input
                                    name="link"
                                    label={type === types.twitter ? "Twitter Link" : "Link"}
                                    onChange={this.handleInputChange}
                                    value={this.state.link}
                                />
                            ) : null}

                            {type === types.twitter ? (
                                <Input
                                    name="image"
                                    label="Image"
                                    onChange={this.handleInputChange}
                                    value={this.state.image}
                                />
                            ) : null}
                            <Input
                                tag="textarea"
                                name="description"
                                label="Description"
                                onChange={this.handleInputChange}
                                value={this.state.description}
                            />
                            <Button>add new item</Button>
                        </form>
                    </div>
                )}
            </AppContext.Consumer>
        );
    }
}

export default Form;