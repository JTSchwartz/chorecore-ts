module.exports = {
	isEqual: (originalVal: any, testVal: any, returnVal: any, sameType = true, elseVal = '') => {
		if (sameType) {
			if (originalVal === testVal) {
				return returnVal;
			} else if (originalVal == testVal) return returnVal;
		}
		return elseVal;
	},
	isFalse: (testVal: any, returnVal: any, elseVal: any = '') => {
		if (!testVal) return returnVal;
		return elseVal;
	},
	isNotEqual: (originalVal: any, testVal: any, returnVal: any, sameType = true, elseVal: any = '') => {
		if (sameType) {
			if (originalVal !== testVal) {
				return returnVal;
			} else if (originalVal != testVal) return returnVal;
		}
		return elseVal;
	},
	isNotNull: (testVal: any, returnVal: any, elseVal: any = '') => {
		if (testVal !== null) return returnVal;
		return elseVal;
	},
	isNotUndefined: (testVal: any, returnVal: any, elseVal: any = '') => {
		if (testVal !== undefined) return returnVal;
		return elseVal;
	},
	isNull: (testVal: any, returnVal: any, elseVal: any = '') => {
		if (testVal === null) return returnVal;
		return elseVal;
	},
	isTrue: (testVal: any, returnVal: any, elseVal: any = '') => {
		if (testVal) return returnVal;
		return elseVal;
	},
	isUndefined: (testVal: any, returnVal: any, elseVal: any = '') => {
		if (testVal === undefined) return returnVal
		return elseVal
	},
}
