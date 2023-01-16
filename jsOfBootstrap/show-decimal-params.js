const init = () => {
	const inputs = document.querySelectorAll("input");
	const decimal_params_div = document.querySelector(".decimal-params");
	inputs.forEach( input => {
		input.addEventListener("change", function() {
			
			if (this.id == "float" || this.type == "number")
				decimal_params_div.setAttribute("style", "display: block");
			else
				decimal_params_div.setAttribute("style", "display: none");
		})
	})
}
document.querySelector(".modal-content").onload = init();