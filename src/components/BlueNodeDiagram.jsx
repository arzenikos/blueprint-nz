// import { useEffect, useRef } from 'react';
// import * as go from 'gojs';

// export default function BlueNodeDiagram({ data }) {
//   const diagramRef = useRef(null);

//   useEffect(() => {
//     if (!diagramRef.current) return;

//     const $ = go.GraphObject.make;
//     const blues = ['#E1F5FE', '#B3E5FC', '#81D4FA', '#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B'];

//     const myDiagram = $(go.Diagram, diagramRef.current, {
//       initialContentAlignment: go.Spot.TopCenter,
//       layout: $(go.TreeLayout, {
//         angle: 90,
//         arrangement: go.TreeLayout.ArrangementVertical,
//         layerSpacing: 40,
//         nodeSpacing: 40
//       }),
//       'undoManager.isEnabled': true
//     });

//     myDiagram.nodeTemplate = $(
//       go.Node, 'Spot',
//       {
//         selectionObjectName: 'PANEL',
//         isTreeExpanded: false,
//         isTreeLeaf: false,
//         click: (e, node) => {
//           e.handled = true;
//           expandNode(node, data);
//         }
//       },
//       $(
//         go.Panel, 'Auto', { name: 'PANEL' },
//         $(go.Shape, 'RoundedRectangle',
//           {
//             name: 'NODE_SHAPE',
//             width: 150,
//             height: 40,
//             fill: 'whitesmoke',
//             stroke: 'white'
//           }
//         ).bind('fill', 'rootdistance', (dist) => blues[Math.min(blues.length - 1, dist)]),
//         $(go.TextBlock,
//           {
//             font: '10pt sans-serif',
//             margin: 4,
//             overflow: go.TextBlock.OverflowEllipsis,
//             wrap: go.TextBlock.WrapFit
//           }
//         ).bind('text', 'key')
//       )
//     );

//     myDiagram.model = new go.TreeModel([{ key: data.key, everExpanded: false, rootdistance: 0 }]);

//     function findNodeByKey(tree, key) {
//       if (!tree) return null;
//       if (tree.key === key) return tree;
//       if (!tree.children) return null;
//       for (const child of tree.children) {
//         const result = findNodeByKey(child, key);
//         if (result) return result;
//       }
//       return null;
//     }

//     function expandNode(node, fullData) {
//       const diagram = node.diagram;
//       diagram.startTransaction('Expand Tree');

//       const data = node.data;
//       const parent = node.findTreeParentNode();

//       if (parent) {
//         parent.findTreeChildrenNodes().each((sibling) => {
//           if (sibling !== node && sibling.isTreeExpanded) {
//             diagram.commandHandler.collapseTree(sibling);
//           }
//         });
//       }

//       if (!data.everExpanded) {
//         diagram.model.setDataProperty(data, 'everExpanded', true);
//         const numChildren = createSubTree(data);
//         if (numChildren === 0) {
//           // optional: hide button if no children
//         }
//       }

//       node.isTreeExpanded
//         ? diagram.commandHandler.collapseTree(node)
//         : diagram.commandHandler.expandTree(node);

//       diagram.commitTransaction('Expand Tree');
//     }

//     function createSubTree(parentData) {
//       const model = myDiagram.model;
//       const parentNode = myDiagram.findNodeForData(parentData);
//       const parentDict = findNodeByKey(data, parentData.key);

//       if (!parentDict || !parentDict.children) return 0;

//       let depth = 1;
//       let p = parentNode.findTreeParentNode();
//       while (p) {
//         depth++;
//         p = p.findTreeParentNode();
//       }

//       parentDict.children.forEach((childNode) => {
//         model.addNodeData({
//           key: childNode.key,
//           parent: parentData.key,
//           rootdistance: depth,
//           everExpanded: false
//         });
//       });

//       return parentDict.children.length;
//     }

//     return () => myDiagram.dispose();
//   }, [data]);

//   return <div id="blueNodeDiagram" ref={diagramRef} style={{ width: '100%', height: '700px' }} />;
// }
