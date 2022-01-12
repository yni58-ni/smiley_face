(function (React$1, ReactDOM, d3) {
  'use strict';

  React$1 = React$1 && Object.prototype.hasOwnProperty.call(React$1, 'default') ? React$1['default'] : React$1;
  ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

  const BackgroundCircle = ({radius,strokeWidth})=>(
    React.createElement( 'circle', { 
      r: radius, fill: "yellow", stroke: "black", 'stroke-width': strokeWidth })
  );

  const Eyes =({eyeOffsetX,eyeOffsetY,eyeRadius})=>(
    React.createElement( React.Fragment, null,
      React.createElement( 'circle', {   cx: - eyeOffsetX, cy: - eyeOffsetY, r: eyeRadius }),
        React.createElement( 'circle', {   cx: eyeOffsetX, cy: - eyeOffsetY, r: eyeRadius })
      )
  );

  const Mouth = ({mouthRadius,mouthWidth})=>{
    const mouthArc = d3.arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 3 / 2);
    return React.createElement( 'path', { d: mouthArc() }); 
  };

  const FaceContainer = ({children,width,height,centerX,centerY}) => (
    React.createElement( 'svg', { width: width, height: height },
      React.createElement( 'g', { transform: `translate(${centerX},${centerY})` },
        children
      )
    )
  );

  const width = 960;
  const height = 500;
  const centerX = width/2;
  const centerY = height/2;
  const strokeWidth = 20;
  const eyeOffsetX = 90;
  const eyeOffsetY = 100;
  const eyeRadius = 50;
  const mouthWidth =20;
  const mouthRadius =100;




  const App = () => (
    React$1.createElement( FaceContainer, {
      width: width, height: height, centerX: centerX, centerY: centerY },
        React$1.createElement( BackgroundCircle, {
          radius: centerY - strokeWidth /2, strokeWidth: strokeWidth }),
        React$1.createElement( Eyes, {
          eyeOffsetX: eyeOffsetX, eyeOffsetY: eyeOffsetY, eyeRadius: eyeRadius }),
        React$1.createElement( Mouth, {
          mouthRadius: mouthRadius, mouthWidth: mouthWidth })
      )
  );

  const rootElement = document.getElementById('root');
  ReactDOM.render(React$1.createElement( App, null ), rootElement);

}(React, ReactDOM, d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIkJhY2tncm91bmRDaXJjbGUuanMiLCJFeWVzLmpzIiwiTW91dGguanMiLCJGYWNlQ29udGFpbmVyLmpzIiwiaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEJhY2tncm91bmRDaXJjbGUgPSAoe3JhZGl1cyxzdHJva2VXaWR0aH0pPT4oXG4gIDxjaXJjbGUgXG4gICAgcj17cmFkaXVzfVxuICAgIGZpbGwgPVwieWVsbG93XCJcbiAgICBzdHJva2UgPSBcImJsYWNrXCJcbiAgICBzdHJva2Utd2lkdGg9e3N0cm9rZVdpZHRofS8+XG4pOyIsImV4cG9ydCBjb25zdCBFeWVzID0oe2V5ZU9mZnNldFgsZXllT2Zmc2V0WSxleWVSYWRpdXN9KT0+KFxuICA8PlxuICAgIDxjaXJjbGUgICBjeD17LSBleWVPZmZzZXRYfVxuICAgICAgICAgICAgICAgIGN5PXstIGV5ZU9mZnNldFl9XG4gICAgICAgICAgICAgICAgcj17ZXllUmFkaXVzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICA8Y2lyY2xlICAgY3g9e2V5ZU9mZnNldFh9XG4gICAgICAgICAgICAgICAgY3k9ey0gZXllT2Zmc2V0WX1cbiAgICAgICAgICAgICAgICByPXtleWVSYWRpdXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICA8Lz5cbikiLCJpbXBvcnQge2FyY30gZnJvbSAnZDMnO1xuZXhwb3J0IGNvbnN0IE1vdXRoID0gKHttb3V0aFJhZGl1cyxtb3V0aFdpZHRofSk9PntcbiAgY29uc3QgbW91dGhBcmMgPSBhcmMoKVxuICAuaW5uZXJSYWRpdXMobW91dGhSYWRpdXMpXG4gIC5vdXRlclJhZGl1cyhtb3V0aFJhZGl1cyArIG1vdXRoV2lkdGgpXG4gIC5zdGFydEFuZ2xlKE1hdGguUEkgLyAyKVxuICAuZW5kQW5nbGUoTWF0aC5QSSAqIDMgLyAyKTtcbiAgcmV0dXJuIDxwYXRoIGQ9e21vdXRoQXJjKCl9Lz47IFxufSIsImV4cG9ydCBjb25zdCBGYWNlQ29udGFpbmVyID0gKHtjaGlsZHJlbix3aWR0aCxoZWlnaHQsY2VudGVyWCxjZW50ZXJZfSkgPT4gKFxuICA8c3ZnIHdpZHRoID17d2lkdGh9IGhlaWdodCA9e2hlaWdodH0+XG4gICAgPGcgdHJhbnNmb3JtID17YHRyYW5zbGF0ZSgke2NlbnRlclh9LCR7Y2VudGVyWX0pYH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9nPlxuICA8L3N2Zz5cbik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtCYWNrZ3JvdW5kQ2lyY2xlfSBmcm9tICcuL0JhY2tncm91bmRDaXJjbGUnO1xuaW1wb3J0IHtFeWVzfSBmcm9tICcuL0V5ZXMnO1xuaW1wb3J0IHtNb3V0aH0gZnJvbSAnLi9Nb3V0aCc7XG5pbXBvcnQge0ZhY2VDb250YWluZXJ9IGZyb20gJy4vRmFjZUNvbnRhaW5lcic7XG5cbmNvbnN0IHdpZHRoID0gOTYwO1xuY29uc3QgaGVpZ2h0ID0gNTAwO1xuY29uc3QgY2VudGVyWCA9IHdpZHRoLzI7XG5jb25zdCBjZW50ZXJZID0gaGVpZ2h0LzI7XG5jb25zdCBzdHJva2VXaWR0aCA9IDIwO1xuY29uc3QgZXllT2Zmc2V0WCA9IDkwO1xuY29uc3QgZXllT2Zmc2V0WSA9IDEwMDtcbmNvbnN0IGV5ZVJhZGl1cyA9IDUwO1xuY29uc3QgbW91dGhXaWR0aCA9MjA7XG5jb25zdCBtb3V0aFJhZGl1cyA9MTAwO1xuXG5cblxuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxGYWNlQ29udGFpbmVyXG4gICAgd2lkdGggPSB7d2lkdGh9XG4gICAgaGVpZ2h0ID0ge2hlaWdodH1cbiAgICBjZW50ZXJYID0ge2NlbnRlclh9XG4gICAgY2VudGVyWSA9IHtjZW50ZXJZfVxuICAgID5cbiAgICAgIDxCYWNrZ3JvdW5kQ2lyY2xlXG4gICAgICAgIHJhZGl1cyA9e2NlbnRlclkgLSBzdHJva2VXaWR0aCAvMn0gc3Ryb2tlV2lkdGggPXtzdHJva2VXaWR0aH1cbiAgICAgICAgLz5cbiAgICAgIDxFeWVzXG4gICAgICAgIGV5ZU9mZnNldFggPXtleWVPZmZzZXRYfVxuICAgICAgICBleWVPZmZzZXRZID17ZXllT2Zmc2V0WX1cbiAgICAgICAgZXllUmFkaXVzID17ZXllUmFkaXVzfVxuICAgICAgICAvPlxuICAgICAgPE1vdXRoXG4gICAgICAgIG1vdXRoUmFkaXVzID17bW91dGhSYWRpdXN9XG4gICAgICAgIG1vdXRoV2lkdGggPSB7bW91dGhXaWR0aH1cbiAgICAgICAgLz5cbiAgICA8L0ZhY2VDb250YWluZXI+XG4pO1xuXG5jb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgcm9vdEVsZW1lbnQpOyJdLCJuYW1lcyI6WyJhcmMiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0VBQU8sTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztFQUNyRCxFQUFFO0VBQ0YsSUFBSSxHQUFHLE1BQU8sRUFDVixNQUFNLFFBQVEsRUFDZCxRQUFTLE9BQU8sRUFDaEIsZ0JBQWMsYUFBWSxDQUFFO0VBQ2hDLENBQUM7O0VDTk0sTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO0VBQ3JELEVBQUU7RUFDRixJQUFJLG1DQUFVLElBQUksRUFBRSxVQUFXLEVBQ2YsSUFBSSxFQUFFLFVBQVcsRUFDakIsR0FBRyxXQUFVO0VBRTdCLE1BQU0sbUNBQVUsSUFBSSxVQUFXLEVBQ2YsSUFBSSxFQUFFLFVBQVcsRUFDakIsR0FBRyxXQUFVLENBQ1g7RUFDbEIsS0FBTztFQUNQOztFQ1ZPLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUc7RUFDakQsRUFBRSxNQUFNLFFBQVEsR0FBR0EsTUFBRyxFQUFFO0VBQ3hCLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQztFQUMzQixHQUFHLFdBQVcsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0VBQ3hDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0VBQzFCLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQzdCLEVBQUUsT0FBTywrQkFBTSxHQUFHLFFBQVEsSUFBRyxDQUFFLENBQUM7RUFDaEM7O0VDUk8sTUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7RUFDckUsRUFBRSw4QkFBSyxPQUFRLEtBQU0sRUFBQyxRQUFTO0VBQy9CLElBQUksNEJBQUcsV0FBWSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0VBQ3BELE1BQU8sUUFBUztFQUNoQixLQUFRO0VBQ1IsR0FBUTtFQUNSLENBQUM7O0VDQ0QsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0VBQ2xCLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQztFQUNuQixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0VBQ3hCLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7RUFDekIsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO0VBQ3ZCLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztFQUN0QixNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUM7RUFDdkIsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0VBQ3JCLE1BQU0sVUFBVSxFQUFFLEVBQUUsQ0FBQztFQUNyQixNQUFNLFdBQVcsRUFBRSxHQUFHLENBQUM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7RUFDQSxNQUFNLEdBQUcsR0FBRztFQUNaLEVBQUVDLHVCQUFDO0VBQ0gsSUFBSSxPQUFTLEtBQU0sRUFDZixRQUFVLE1BQU8sRUFDakIsU0FBVyxPQUFRLEVBQ25CLFNBQVc7RUFFZixNQUFNQSx1QkFBQztFQUNQLFFBQVEsUUFBUyxPQUFPLEdBQUcsV0FBVyxFQUFFLENBQUUsRUFBQyxhQUFjLGFBQVk7RUFFckUsTUFBTUEsdUJBQUM7RUFDUCxRQUFRLFlBQWEsVUFBVyxFQUN4QixZQUFhLFVBQVcsRUFDeEIsV0FBWSxXQUFVO0VBRTlCLE1BQU1BLHVCQUFDO0VBQ1AsUUFBUSxhQUFjLFdBQVksRUFDMUIsWUFBYyxZQUFXLENBQ3ZCO0VBQ1YsS0FBb0I7RUFDcEIsQ0FBQyxDQUFDO0FBQ0Y7RUFDQSxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ3BELFFBQVEsQ0FBQyxNQUFNLENBQUNBLHVCQUFDLFNBQUcsRUFBRyxFQUFFLFdBQVcsQ0FBQzs7OzsifQ==