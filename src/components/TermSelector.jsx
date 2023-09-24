import './TermSelector.css';

const TermSelector = ({term, changeTerm}) =>{
    return (
        <div>
            <TermButton current = {term} term = {"Fall"} changeTerm={changeTerm}/>
            <TermButton current = {term} term = {"Winter"} changeTerm={changeTerm}/>
            <TermButton current = {term} term = {"Spring"} changeTerm={changeTerm}/>
        </div>
    )
}

const TermButton = ({current, term, changeTerm}) =>{
    return (<button type="button" className="btn btn-primary term-button" disabled={current == term} onClick={()=>changeTerm(term)}>{term}</button>);
}

export default TermSelector;