const { __ } = wp.i18n;
const { Fragment, useState } = wp.element;
const { SelectControl } = wp.components;
const { withDispatch, withSelect, useSelect } = wp.data;

const PrimaryCategorySelector = withSelect( select => {

	// We'll need to wait for the API to return the categories before we can render.
    const { isResolving } = select( 'core/data' );
    const query = { per_page: 100 }; // Limit for now to be safe.

	// Ensures that every time we check for the list of categories we know if
	// we're still waiting, so we can keep waiting.
    return {
        categories: select( 'core' ).getEntityRecords( 'taxonomy', 'category', query ),
        isRequesting: isResolving( 'core', 'getEntityRecords', [ 'taxonomy', 'category', query ] )
    };

} )( props => {
	if ( props.isRequesting ) {
		// If we don't have the data yet, just render a loading message.
		return (
			<Fragment><p>Loading data...</p></Fragment>
		)
	}

	// We can use state for our primary category selection.
	const [ primary, setPrimary ] = useState( false );

	return (
		<Fragment>
			<SelectControl
				label={ __(
					"Choose a primary category",
					"primary-category"
				) }
				value={ primary }
				options={ props.categories.map( category => {
	                return {
	                    label: category.name,
	                    value: category.id,
	                }
	            } ) }
				onChange={ ( value ) => {
					props.setMetaFieldValue( "_pjpc_primary_category", value );
					setPrimary( value );
				} }
			/>
		</Fragment>
	);

} );

export default withDispatch( ( dispatch ) => {
	return {
		setMetaFieldValue: function ( key, value ) {
			dispatch("core/editor").editPost( { meta: { [key]: value } } );
		},
	};
} ) ( PrimaryCategorySelector );
