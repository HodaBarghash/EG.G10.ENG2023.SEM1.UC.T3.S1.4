function ExecuteScript(strId)
{
  switch (strId)
  {
      case "691cFXYj5LE":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwZ4NmrAy0MlR1xTKgxToLQPbmghN4LEhkXRocU-6pACTJAHVkgDPK_HZWTFWxscg9W/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v16q1attempts:player.GetVar("v16q1attempts"),v16q1answeredcorrect:player.GetVar("v16q1answeredcorrect"),v16q2attempts:player.GetVar("v16q2attempts"),v16q2answeredcorrect:player.GetVar("v16q2answeredcorrect"),v16q3attempts:player.GetVar("v16q3attempts"),v16q3answeredcorrect:player.GetVar("v16q3answeredcorrect")})
	}
	)
}

