import React from 'react'

function NewLetter() {
    return (
        <form >
            <h5 className="text-light">Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <a href="https://us18.list-manage.com/contact-form?u=ff3e740192b735d7a149ce646&form_id=8b7ee71fc515211166e8028930bcf7f3">
                    <button className="btn btn-primary" type="button">Subscribe</button>
                </a>
            </div>
        </form>
    )
}

export default NewLetter