import icon from "../assets/accButton.svg"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';



function Accordion({ id, parentId, question = "Default Question", answer = "default answer", codesnippet, mark, onUpdate }) {
    const handleToggle = () => {
        onUpdate(id, !mark)
    }

    return (
        <div className="accordion-item border border-2 border-dark mt-5 text-start">
            <h2 className="accordion-header">
                <button
                    className="accordion-button collapsed custom-accordion-btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${id}`}
                    aria-expanded="false"
                    aria-controls={`collapse-${id}`}
                >
                    <h5>{question}</h5>
                    <img
                        src={icon}
                        alt="accordion toggle"
                        className="accordion-custom-icon"
                    />
                </button>
            </h2>
            <div
                id={`collapse-${id}`}
                className="accordion-collapse collapse"
                data-bs-parent={`#${parentId}`}
            >
                <label className="star-container float-end p-1 pe-4">
                    <input
                        type="checkbox"
                        checked={mark}
                        onChange={handleToggle}
                    />
                    <span className="star"></span>
                </label>
                <div className="accordion-body">
                    <p>{answer}</p>
                    <div>{codesnippet && codesnippet.map((code, index) => (
                        <div key={index}>
                            <SyntaxHighlighter language="javascript" style={docco}>
                                {code.replace(/;/g, ';\n')}
                            </SyntaxHighlighter></div>
                    ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Accordion