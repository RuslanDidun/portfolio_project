import React from "react"
import style from './Quote.css'

export function Quote() {
    return (
        <section className={style.quoteSection}>
            <div className={style.div1}>
                <div className={style.div2}>
                    <blockquote className={style.quote}>
                        Simplicity is the soul of efficiency
                    </blockquote>
                    <cite className={style.cite}> ~ Austin Freeman</cite>
                </div>
            </div>
        </section>
    )
}