import React, { useEffect } from 'react'

const Container = (props) => {
	return <div className={'container py-md-5' + (props.wide ? '' : 'container container--narrow')}>{props.children}</div>
}

export default Container

// reusable Container

// can override narrow in the child
