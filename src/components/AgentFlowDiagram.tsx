
import React from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Analysis Agent' },
    position: { x: 250, y: 0 },
    style: { 
      backgroundColor: '#f8f0ff', 
      borderColor: '#9E76ED',
      borderWidth: 2,
      width: 180,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      fontWeight: 500,
    },
  },
  {
    id: '2',
    data: { label: 'Product Manager Agent' },
    position: { x: 250, y: 100 },
    style: { 
      backgroundColor: '#f8f0ff', 
      borderColor: '#9E76ED',
      borderWidth: 2,
      width: 180,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      fontWeight: 500,
    },
  },
  {
    id: '3',
    data: { label: 'Builder Agent' },
    position: { x: 250, y: 200 },
    style: { 
      backgroundColor: '#f8f0ff', 
      borderColor: '#9E76ED',
      borderWidth: 2,
      width: 180,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      fontWeight: 500,
    },
  },
  {
    id: '4',
    data: { label: 'Crawler Agent' },
    position: { x: 250, y: 300 },
    style: { 
      backgroundColor: '#f8f0ff', 
      borderColor: '#9E76ED',
      borderWidth: 2,
      width: 180,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      fontWeight: 500,
    },
  },
  {
    id: '5',
    data: { label: 'Contract Agent' },
    position: { x: 250, y: 400 },
    style: { 
      backgroundColor: '#f8f0ff', 
      borderColor: '#9E76ED',
      borderWidth: 2,
      width: 180,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      fontWeight: 500,
    },
  },
  {
    id: '6',
    type: 'output',
    data: { label: 'Delivery Agent' },
    position: { x: 250, y: 500 },
    style: { 
      backgroundColor: '#f8f0ff', 
      borderColor: '#9E76ED',
      borderWidth: 2,
      width: 180,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      fontWeight: 500,
    },
  },
  {
    id: '7',
    data: { label: 'User Device' },
    position: { x: 0, y: 100 },
    style: { 
      backgroundColor: '#fff8e6', 
      borderColor: '#F5A623',
      borderWidth: 2,
      width: 150,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      fontWeight: 500,
    },
  },
  {
    id: '8',
    data: { label: 'User' },
    position: { x: 500, y: 150 },
    style: { 
      backgroundColor: '#e6f7ff', 
      borderColor: '#1890ff',
      borderWidth: 2,
      width: 150,
      borderRadius: '50%',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      fontWeight: 500,
    },
  },
  {
    id: '9',
    data: { label: 'Global Supply Chain' },
    position: { x: 500, y: 350 },
    style: { 
      backgroundColor: '#f0f5ff', 
      borderColor: '#1890ff',
      borderWidth: 2,
      width: 150,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      fontWeight: 500,
    },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#9E76ED', strokeWidth: 2 } },
  { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#9E76ED', strokeWidth: 2 } },
  { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#9E76ED', strokeWidth: 2 } },
  { id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: '#9E76ED', strokeWidth: 2 } },
  { id: 'e5-6', source: '5', target: '6', animated: true, style: { stroke: '#9E76ED', strokeWidth: 2 } },
  { 
    id: 'e7-1', 
    source: '7', 
    target: '1', 
    label: 'Hosts', 
    labelStyle: { fill: '#555', fontWeight: 500 },
    style: { stroke: '#F5A623', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#F5A623' },
  },
  { 
    id: 'e2-8', 
    source: '2', 
    target: '8', 
    label: 'Suggests products', 
    labelStyle: { fill: '#555', fontWeight: 500 },
    style: { stroke: '#1890ff', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#1890ff' },
  },
  { 
    id: 'e8-3', 
    source: '8', 
    target: '3', 
    label: 'Approves concept', 
    labelStyle: { fill: '#555', fontWeight: 500 },
    style: { stroke: '#1890ff', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#1890ff' },
  },
  { 
    id: 'e4-9', 
    source: '4', 
    target: '9', 
    label: 'Searches for materials', 
    labelStyle: { fill: '#555', fontWeight: 500 },
    style: { stroke: '#1890ff', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#1890ff' },
  },
  { 
    id: 'e9-5', 
    source: '9', 
    target: '5', 
    label: 'Provides options', 
    labelStyle: { fill: '#555', fontWeight: 500 },
    style: { stroke: '#1890ff', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#1890ff' },
  },
  { 
    id: 'e5-8', 
    source: '5', 
    target: '8', 
    label: 'Presents quotation', 
    labelStyle: { fill: '#555', fontWeight: 500 },
    style: { stroke: '#1890ff', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#1890ff' },
  },
  { 
    id: 'e8-6', 
    source: '8', 
    target: '6', 
    label: 'Approves purchase', 
    labelStyle: { fill: '#555', fontWeight: 500 },
    style: { stroke: '#1890ff', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#1890ff' },
  },
];

const AgentFlowDiagram = () => {
  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
    <div style={{ width: '100%', height: '600px' }} className="rounded-lg overflow-hidden shadow-lg">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        attributionPosition="bottom-right"
      >
        <Controls />
        <MiniMap 
          nodeStrokeColor={(n) => {
            if (n.style?.borderColor) return n.style.borderColor;
            return '#0F2C59';
          }}
          nodeColor={(n) => {
            if (n.style?.backgroundColor) return n.style.backgroundColor;
            return '#fff';
          }}
        />
        <Background variant="dots" size={1} gap={12} color="#0F2C59" />
      </ReactFlow>
    </div>
  );
};

export default AgentFlowDiagram;
