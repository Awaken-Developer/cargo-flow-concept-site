
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
    },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#9E76ED' } },
  { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#9E76ED' } },
  { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#9E76ED' } },
  { id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: '#9E76ED' } },
  { id: 'e5-6', source: '5', target: '6', animated: true, style: { stroke: '#9E76ED' } },
  { 
    id: 'e7-1', 
    source: '7', 
    target: '1', 
    label: 'Hosts', 
    labelStyle: { fill: '#555' },
    style: { stroke: '#F5A623' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#F5A623' },
  },
  { 
    id: 'e2-8', 
    source: '2', 
    target: '8', 
    label: 'Suggests products', 
    labelStyle: { fill: '#555' },
    style: { stroke: '#1890ff' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#1890ff' },
  },
  { 
    id: 'e8-3', 
    source: '8', 
    target: '3', 
    label: 'Approves concept', 
    labelStyle: { fill: '#555' },
    style: { stroke: '#1890ff' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#1890ff' },
  },
  { 
    id: 'e4-9', 
    source: '4', 
    target: '9', 
    label: 'Searches for materials', 
    labelStyle: { fill: '#555' },
    style: { stroke: '#1890ff' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#1890ff' },
  },
  { 
    id: 'e9-5', 
    source: '9', 
    target: '5', 
    label: 'Provides options', 
    labelStyle: { fill: '#555' },
    style: { stroke: '#1890ff' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#1890ff' },
  },
  { 
    id: 'e5-8', 
    source: '5', 
    target: '8', 
    label: 'Presents quotation', 
    labelStyle: { fill: '#555' },
    style: { stroke: '#1890ff' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#1890ff' },
  },
  { 
    id: 'e8-6', 
    source: '8', 
    target: '6', 
    label: 'Approves purchase', 
    labelStyle: { fill: '#555' },
    style: { stroke: '#1890ff' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#1890ff' },
  },
];

const AgentFlowDiagram = () => {
  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
    <div style={{ width: '100%', height: '600px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        attributionPosition="bottom-right"
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

const AgentFlow = () => {
  return (
    <section id="agent-flow" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-logistics-primary mb-4">How Our Agents Connect</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI agents work in a sophisticated ecosystem to bring your personalized products from concept to reality.
          </p>
        </div>
        
        <div className="mt-6">
          <AgentFlowDiagram />
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-logistics-primary">Agent Communication Flow</h3>
            <p className="text-gray-600 mb-4">
              Our AI agents communicate in a sequential flow, with each agent responsible for a specific part of the product creation and delivery process.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mt-2 mr-2 flex-shrink-0"></span>
                <span>Analysis Agent monitors user behavior and identifies potential product needs</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mt-2 mr-2 flex-shrink-0"></span>
                <span>Product Manager Agent develops concept based on Analysis Agent findings</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mt-2 mr-2 flex-shrink-0"></span>
                <span>Builder Agent breaks down approved concepts into component specifications</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mt-2 mr-2 flex-shrink-0"></span>
                <span>Crawler Agent searches global supply chains for optimal materials and manufacturing</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mt-2 mr-2 flex-shrink-0"></span>
                <span>Contract Agent handles negotiations and financial optimizations</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mt-2 mr-2 flex-shrink-0"></span>
                <span>Delivery Agent coordinates the most efficient delivery method</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-logistics-primary">User Interaction Points</h3>
            <p className="text-gray-600 mb-4">
              Users maintain control over the process with several key decision points throughout the journey.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mt-2 mr-2 flex-shrink-0"></span>
                <span>Initial agent installation on user's device</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mt-2 mr-2 flex-shrink-0"></span>
                <span>Product concept approval after Product Manager Agent's proposal</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mt-2 mr-2 flex-shrink-0"></span>
                <span>Quotation review after Contract Agent's negotiations</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mt-2 mr-2 flex-shrink-0"></span>
                <span>Final purchase approval before manufacturing begins</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mt-2 mr-2 flex-shrink-0"></span>
                <span>Delivery method selection and tracking</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentFlow;
