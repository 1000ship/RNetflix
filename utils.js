import PropTypes from 'prop-types';

export const trimText = (text, limit) =>
    (text.length > limit ? `${text.slice(0, limit)}...` : text);
trimText.propTypes = {
    text: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired
}

export const formatDate = (date) => {
    const theDate = new Date(date);
    return theDate.toLocaleDateString('ko', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

}