// Watch the dropdown for any changes.
document.getElementsByName('primary-category-select')[0].onchange = function() {
	var index = this.value; // Chosen value.

	// Set a cookie with the new value.
	document.cookie = 'pjpc_primary_cat=' + this.value;

	// Won't take effect until we reload.
	location.reload();
}
