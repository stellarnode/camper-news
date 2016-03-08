const apiLink = "http://www.freecodecamp.com/news/hot";

export default function getAjaxData(next) {

    $.getJSON(apiLink, (data) => {
        if (data && next) {
            next(data);
        } else {
            return data = "Could not load data";
        }
    });

}


/*

function getAjaxData(next) {
    https.get(apiLink, function(res) {
        var body = '';
   
        res.on('data', function(chunk) {
            body += chunk;
        });
       
        res.on('end', function() {
            var result = JSON.parse(body);
            result = result.result;
            // console.log(body.result);
            if (result && next) {
                next(result);
            } else {
                return result;
            }
        });
        
        }).on('error', function(err) {
            console.log("Got error: ", err);
        });
}

module.exports = getAjaxData;

//*/