import classes from './quote.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTumblr, faTwitterSquare} from '@fortawesome/free-brands-svg-icons'
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import Button from "react-bootstrap/Button";

const Quote = (props) => {
    console.log(props)
    let onClick = () => {
        props.setCurrentQuotes();
    }

const getRandomColor = () => {

    let colors = [
        '#16a085',
        '#27ae60',
        '#189ea0',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#ff69b4',
        '#a06f97',
        '#8b008b',
        '#77B1A9',
        '#73A857'
    ];
    const currentQuoteColor = Math.floor(Math.random() * colors.length)
    return colors[currentQuoteColor];

}

let currentColor = getRandomColor();



    return (
        <div className={classes.mainDiv} style={{backgroundColor: currentColor}}>
            <div id="wrapper" className={classes.wrapper} style={{backgroundColor: currentColor}} >
                <div id="quote-box" className={classes.quoteBox}>
                    <div className={classes.quoteText} style={{color: currentColor}} >
                        <FontAwesomeIcon icon={faQuoteLeft} style={{color: currentColor}} size="lg"/>
                        <span id="text"> {props.quote.quote}</span>
                    </div>

                    <div className={classes.quoteAuthor} style={{color: currentColor}} >
                        <span id="author">{props.quote.author}</span>
                    </div>

                    <div className={classes.buttons}>
                        <a className={classes.button} id="tweet-quote" title="Tweet this quote!" target="_blank"
                           href={"https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + props.quote.quote + '" ' + props.quote.author)}>
                            <FontAwesomeIcon icon={faTwitterSquare} style={{color: currentColor}} size="2x"/>

                        </a>
                        <a className={classes.button} id="tumblr-quote" title="Post this quote on tumblr!"
                           target="_blank"
                           href={"https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + props.quote.quote + '" ' + props.quote.author)}>

                            <FontAwesomeIcon icon={faTumblr} style={{color: currentColor}} size="2x"/>

                        </a>
                        <Button variant="success"  onClick={onClick} id="new-quote"
                                style={{color: '#fff', backgroundColor: currentColor}} className={classes.buttonQuote}>New
                            quote</Button>

                    </div>
                </div>
                <div className={classes.footer}>by <a href="https://codepen.io/RuslanaChaika/pen/GRXRdEa/">Ruslana Chaika</a></div>
            </div>
        </div>
    )
}
export default Quote