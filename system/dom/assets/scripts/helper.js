﻿/**


	
	Dom.prototype[key] = Dom.Document.prototype[key] = function() {
		if (arguments.length === 1) {
			return getter.apply(this, arguments);
		}

		setter.apply(this, arguments);
		return this;
	};

	DomList.prototype[key] = function() {
		if (arguments.length === 1) {
			// return value.get.apply(Dom.get(this[0]), arguments);
			return this.invoke(key, arguments);
		}
		this.invoke(key, arguments);
		return this;