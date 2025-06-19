// import * as go from 'gojs';
// import { useEffect } from 'react';
// import { useImmer } from 'use-immer';  // we use Immer here for simple immutable updates

// import { DiagramWrapper } from './components/Diagram';

// interface AppState {
//   // ...
//   nodeDataArray: Array<go.ObjectData>;
//   linkDataArray: Array<go.ObjectData>;
//   modelData: go.ObjectData;
//   selectedKey: number | null;
//   skipsDiagramUpdate: boolean;
// }

// export const App = () => {
//   // Diagram state
//   const [diagramData, updateDiagramData] = useImmer<AppState>({
//     nodeDataArray: [
//       { key: 0, text: 'Alpha', color: 'lightblue', loc: '0 0' },
//       { key: 1, text: 'Beta', color: 'orange', loc: '150 0' },
//       { key: 2, text: 'Gamma', color: 'lightgreen', loc: '0 150' },
//       { key: 3, text: 'Delta', color: 'pink', loc: '150 150' }
//     ],
//     linkDataArray: [
//       { key: -1, from: 0, to: 1 },
//       { key: -2, from: 0, to: 2 },
//       { key: -3, from: 1, to: 1 },
//       { key: -4, from: 2, to: 3 },
//       { key: -5, from: 3, to: 0 }
//     ],
//     modelData: { canRelink: true },
//     selectedKey: null,
//     skipsDiagramUpdate: false
//   });

//   /**
//    * Handle any app-specific DiagramEvents, in this case just selection changes.
//    * On ChangedSelection, find the corresponding data and set the selectedKey state.
//    *
//    * This is not required, and is only needed when handling DiagramEvents from the GoJS diagram.
//    * @param e a GoJS DiagramEvent
//    */
//   const handleDiagramEvent = (e: go.DiagramEvent) => {
//     const name = e.name;
//     switch (name) {
//       case 'ChangedSelection': {
//         const sel = e.subject.first();
//         updateDiagramData((draft) => {
//           if (sel) {
//             draft.selectedKey = sel.key;
//           } else {
//             draft.selectedKey = null;
//           }
//         });
//         break;
//       }
//       default: break;
//     }
//   };

//   /**
//    * Handle GoJS model changes, which output an object of data changes via Model.toIncrementalData.
//    * This method should iterate over those changes and update state to keep in sync with the GoJS model.
//    * This can be done via setState in React or another preferred state management method,
//    * such as updateDiagramData in a case like this.
//    * @param obj a JSON-formatted string
//    */
//   const handleModelChange = (obj: go.IncrementalData) => {
//     // const insertedNodeKeys = obj.insertedNodeKeys;
//     // const modifiedNodeData = obj.modifiedNodeData;
//     // const removedNodeKeys = obj.removedNodeKeys;
//     // const insertedLinkKeys = obj.insertedLinkKeys;
//     // const modifiedLinkData = obj.modifiedLinkData;
//     // const removedLinkKeys = obj.removedLinkKeys;
//     // const modifiedModelData = obj.modelData;

//     // see gojs-react-basic for an example model change handler
//     // when setting state, be sure to set skipsDiagramUpdate: true since GoJS already has this update
//   };

//   /**
//    * Handle changes to the checkbox on whether to allow relinking.
//    * @param e a change event from the checkbox
//    */
//   const handleRelinkChange = (e: any) => {
//     const target = e.target;
//     const value = target.checked;
//     updateDiagramData((draft) => {
//       draft.modelData = { canRelink: value };
//       draft.skipsDiagramUpdate = false;
//     });
//   };

//   let selKey;
//   if (diagramData.selectedKey !== null) {
//     selKey = <p>Selected key: {diagramData.selectedKey}</p>;
//   }

//   return (
//     <div>
//       <DiagramWrapper
//         nodeDataArray={diagramData.nodeDataArray}
//         linkDataArray={diagramData.linkDataArray}
//         modelData={diagramData.modelData}
//         skipsDiagramUpdate={diagramData.skipsDiagramUpdate}
//         onDiagramEvent={handleDiagramEvent}
//         onModelChange={handleModelChange}
//       />
//       <label>
//         Allow Relinking?
//         <input
//           type='checkbox'
//           id='relink'
//           checked={diagramData.modelData.canRelink}
//           onChange={handleRelinkChange} />
//       </label>
//       {selKey}
//     </div>
//   );
// }