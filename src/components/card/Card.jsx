import React from 'react';

const CardHeader = ({blank, children}) => {
    return (<div className={`card__header ${blank ? 'card__header--blank' : ''}`}>{children}</div>)
}

const CardBody = ({flat, children}) => {
    return (<div className="card__body">{children}</div>)
}

const Card = ({flat, children}) => {
    return (
        <div className={`card ${flat ? 'card--flat' : ''}`}>
            {children}
        </div>
    )
}

export {
    Card,
    CardHeader,
    CardBody
};