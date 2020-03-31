[
    { /* This first JSON, refers to the parent node  */
      'Name': 'Progress Items', // Father's name
      'Rol': 'Parent', // Type of node to be
      'Locked': true, // If it is blocked or can be moved freely,
      'Style': {
        "border-color": "#e2e2e2",
        "background-color": "#fafafa",
        "padding-left": 15,
      }
    },
    /* The next nodes will be the children */
    {
      'Name': 'Task ID', // Child Node Name
      'Rol': 'Link', // Type of node to be
      'Parent': 'Progress Items', // Node Father
      'Locked': true, // If it is blocked or can be moved freely
      'Position': { // Node position
        'x': 100,
        'y': 150
      },
      'Style': { // Node styles, for more information see the Cytoscape information
        'text-valign': 'center',
        'text-halign': 'left',
        'label': 'data(label)',
        'background-color': '#4287f5',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'PDS-L1',
      'Rol': 'Link',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 175
      },
      'Style': {
        'text-valign': 'center',
        'text-halign': 'left',
        'label': 'data(label)',
        'background-color': '#4287f5',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'PDS-L2',
      'Rol': 'Link',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 200
      },
      'Style': {
        'text-valign': 'center',
        'text-halign': 'left',
        'label': 'data(label)',
        'background-color': '#4287f5',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'PDS-L3',
      'Rol': 'Link',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 225
      },
      'Style': {
        'text-valign': 'center',
        'text-halign': 'left',
        'label': 'data(label)',
        'background-color': '#4287f5',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'PDS-L4',
      'Rol': 'Link',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 250
      },
      'Style': {
        'text-valign': 'center',
        'text-halign': 'left',
        'label': 'data(label)',
        'background-color': '#4287f5',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'LOC-L1',
      'Rol': 'Link',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 275
      },
      'Style': {
        'text-valign': 'center',
        'text-halign': 'left',
        'label': 'data(label)',
        'background-color': '#4287f5',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'LOC-L2',
      'Rol': 'Link',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 300
      },
      'Style': {
        'text-valign': 'center',
        'text-halign': 'left',
        'label': 'data(label)',
        'background-color': '#4287f5',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'LOC-L3',
      'Rol': 'Link',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 325
      },
      'Style': {
        'text-valign': 'center',
        'text-halign': 'left',
        'label': 'data(label)',
        'background-color': '#4287f5',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'Name',
      'Rol': 'Data',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 350
      },
      'Style': {
        'label': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'left',
        'background-color': '#32a836',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'Planned Start',
      'Rol': 'Data',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 375
      },
      'Style': {
        'label': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'left',
        'background-color': '#32a836',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'Planned Finish',
      'Rol': 'Data',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 400
      },
      'Style': {
        'label': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'left',
        'background-color': '#32a836',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'Weight',
      'Rol': 'Data',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 425
      },
      'Style': {
        'label': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'left',
        'background-color': '#32a836',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'Description',
      'Rol': 'Data',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 450
      },
      'Style': {
        'label': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'left',
        'background-color': '#32a836',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'PDS-L4 Description',
      'Rol': 'Data',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 475
      },
      'Style': {
        'label': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'left',
        'background-color': '#32a836',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }
  ];