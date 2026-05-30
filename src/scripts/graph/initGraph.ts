
// // graph/initGraph.ts
// export function initGraph() {
//   const rootData = window.bluenodeData.nodes.find(n => n.id === 'root');
//   const rootNode = document.getElementById('node-root');
//   if (!rootNode || !rootData) return;

//   rootNode.addEventListener('click', (e) => {
//     if (window.isPanning) return;
//     handleNodeClick('root');
//     showNodeDetail(rootData);
//     e.stopPropagation();
//   });

//   rootNode.addEventListener('mouseenter', () => showNodeInfo(rootData));
//   rootNode.addEventListener('mouseleave', hideNodeInfo);
//   showNodeDetail(rootData);
// }