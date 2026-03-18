export const researchDetails = {
  hymeko: {
    overview: [
      'HyMeKo is a compiler-based framework for describing, analyzing, and computing over directed hypergraphs. It starts from a human-readable textual description and compiles systems into deterministic intermediate representations and sparse tensor formats that can be used for algebraic analysis, machine learning, and inter-process communication.',
      'The framework connects formal hypergraph descriptions with robotics, cognitive systems, neural architectures, knowledge representation, and real-time computational pipelines. It is implemented as a multi-crate Rust workspace with Python bindings, serialization support, and a daemon-oriented IPC layer.',
    ],
    pipeline: [
      'Human-readable .hymeko descriptions define nodes, hyperedges, references, annotations, and modular imports.',
      'A SIMD-tiered lexer and LALRPOP parser build an AST with zero-copy token handling.',
      'String interning, scope resolution, and import resolution turn symbolic descriptions into canonical references.',
      'IR lowering produces a deterministic arena-based intermediate representation with direct lookup tables and parent-child relations.',
      'Merkle hashing and a canonical program hash provide content-addressable identity and O(1) structural change detection.',
      'Tensor generation, query evaluation, serialization, and IPC streaming reuse the compiled IR as a single source of truth.',
    ],
    capabilities: [
      {
        title: 'Description language',
        body:
          'HyMeKo defines a concise language for labeled directed hypergraphs with nodes, hyperedges, signed incidence references, annotations, inheritance, and recursive imports. The dissertation links these descriptions directly to their associated hypergraph structures and proves their conciseness and polynomial transformability.',
      },
      {
        title: 'Deterministic intermediate representation',
        body:
          'The compiled IR uses arena-based storage, B-tree ordering, jump tables, and signed arc references to provide deterministic compilation, efficient traversal, and stable serialization targets for downstream analysis.',
      },
      {
        title: 'Tensor representations',
        body:
          'From the IR, HyMeKo derives sparse tensor views such as star and clique expansions, configurable aggregation schemes, CSR/COO representations, and algebraically meaningful message-passing structures for hypergraph computation.',
      },
      {
        title: 'Query and transformation pipeline',
        body:
          'The framework is designed so that structural query patterns and downstream domain transformations can operate over the compiled hypergraph description without embedding domain-specific assumptions into the core engine.',
      },
      {
        title: 'Zero-copy interoperability',
        body:
          'Python bindings, CBOR serialization, and daemon-based IPC support integration with machine learning workflows, shared-memory transport, and future toolchains that need direct access to compiled hypergraph tensors.',
      },
      {
        title: 'HyperKAN and entropy-oriented extensions',
        body:
          'The broader HyMeKo direction includes structural entropy analysis, domain-specific transforms, and HyperKAN-style architectures in which the compiled incidence topology becomes a stable substrate for learnable computation.',
      },
    ],
    domains: [
      'Robotics and kinematic modeling with joints, links, transforms, controllers, and configuration generation from one source.',
      'Neural architecture and hypergraph-based learning, including sparse tensor conversion and message-passing-oriented computation.',
      'Cognitive systems and CogInfoCom-inspired semantic structures connecting entities, capabilities, perception, and decision-making.',
      'Knowledge representation and many-to-many relational modeling without collapsing everything into pairwise graphs.',
      'Virtual reality, event detection, and multi-body simulation structures that benefit from directed hypergraph semantics.',
    ],
    currentSteps: [
      'Parser, scope resolution, and deterministic IR lowering are already established as the compilation backbone.',
      'Merkle hashing, canonical program identity, and serialization provide stable structural tracking and exchange.',
      'Tensor generation pipelines, sparse formats, and message-passing-oriented computation are part of the current framework direction.',
      'Python bindings and daemon-oriented IPC support integration with external computational workflows.',
    ],
    futureSteps: [
      'Query interpretation and query-as-description workflows can extend HyMeKo into a richer structural retrieval engine.',
      'Domain transforms for robotics, simulation, and neural architectures can turn compiled hypergraphs into downstream artifacts.',
      'Structural entropy tooling can connect hypergraph change analysis with learning and model evaluation.',
      'NURBS-based activation layers and HyperKAN-oriented architectures can build directly on the compiled hypergraph substrate.',
    ],
    repositories: [
      { label: 'hymeko_framework_rust', href: 'https://github.com/kyberszittya/hymeko_framework_rust' },
      { label: 'hymeko_python', href: 'https://github.com/kyberszittya/hymeko_python' },
      { label: 'himeko_hypergraph', href: 'https://github.com/kyberszittya/himeko_hypergraph' },
      { label: 'himeko_lang', href: 'https://github.com/kyberszittya/himeko_lang' },
    ],
    dissertationNote:
      'HyMeKo is closely connected to the dissertation, especially in the formal treatment of hypergraph description language design, semantic modeling, and tensor-oriented transformation.',
  },
} as const;
