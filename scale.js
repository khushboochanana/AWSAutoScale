var AWS = require('aws-sdk')
var autoscaling = new AWS.AutoScaling();


exports.handler = (event, context, callback) => {
	console.log(event)
	var params = {};
	if (event.down) {
		params = {
			AutoScalingGroupName: event.groupName,
			MaxSize: 0,
			DesiredCapacity: 0,
			MinSize: 0
		};
	} else {
		params = {
			AutoScalingGroupName: event.groupName,
			MaxSize: event.MaxSize || 1,
			DesiredCapacity: event.DesiredCapacity || 1,
			MinSize: event.MinSize || 1
		};
	}
	autoscaling.updateAutoScalingGroup(params, function (err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(">>>>>>>>>>. Update Instance", data)
		callback(err, data);// successful response
	});
}
