var http= require("request")

exports.handler = (event, context, callback) => {
	var params = {
		AutoScalingGroupNames: [
			event.groupName
		]
	};

	autoscaling.describeAutoScalingGroups(params, function (err, data) {
		if (err) {
			console.log(err, err.stack);
			callback(err);
		}// an error occurred
		else {
			console.log("Group description : ",data);
			callback(null,data);
		}
	})
}
