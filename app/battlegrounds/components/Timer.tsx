import * as React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import useEndTime from "battlegrounds/hooks/useEndTime";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number } & { background: string }
) {
  const x = props.background;
  console.log(x);
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{ height: "6px" }}
        />
      </Box>
      {/* <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box> */}
    </Box>
  );
}

export default function Timer() {
  const [progress, setProgress] = React.useState(100);
  const [progressColor, setProgressColor] = React.useState("#fff");
  const [end,setEnd] = React.useState(false)
  const [active,battleEnded] = useEndTime((state:any) => [state.active,state.battleEnded])

  React.useEffect(() => {
    const timer = setInterval(() => {
        if(progress>0)
        setProgress(progress=>progress-1)
        if(progress<=0)
        {battleEnded(); clearInterval(timer); console.log(active)}

        if(progress<30)
        {setProgressColor('#880808')}

        console.log(progress)
    //   setProgress((prevProgress) =>
    //     prevProgress <= setEnd(true) ? 100 : prevProgress - 1
    //   );
    //   console.log(progress);
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, [battleEnded, progress]);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progress} background={progressColor} />
    </Box>
  );
}
