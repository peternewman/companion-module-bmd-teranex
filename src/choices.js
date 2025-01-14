module.exports = {
	video_sources: [
		{ id: 'SDI', label: 'SDI (2D, 3D, Express)' },
		{ id: 'SDI1', label: 'SDI 1 (AV)' },
		{ id: 'SDI2', label: 'SDI 2 (AV)' },
		{ id: 'HDMI', label: 'HDMI (2D, 3D, AV)' },
		{ id: 'Composite', label: 'Composite (2D, 3D)' },
		{ id: 'Component', label: 'Component (2D, 3D)' },
		{ id: 'Optical', label: 'Optical (Express, AV)' }
	],

	audio_sources: [
		{ id: 'Embedded', label: 'Embedded (2D, 3D, Express, AV)' },
		{ id: 'AES', label: 'AES (2D, 3D, AV)' },
		{ id: 'RCA', label: 'RCA (2D, 3D, AV)' },
		{ id: 'DB25', label: 'DB25 (2D, 3D, AV))' }
	],

	// Teranex AV and Teranex Express
	output_formats: [
		{ id: '525i59.94 NTSC', label: '525i 59.94hz NTSC'},
		{ id: '625i50 PAL', label: '625i 50hz PAL' },
		{ id: '720p50', label: '720p 50hz' },
		{ id: '720p59.94', label: '720p 59.94hz' },
		{ id: '720p60', label: '720p 60hz' },
		{ id: '1080p23.98', label: '1080p 23.98hz', pixel_offset_min: 0, pixel_offset_max: 2639, line_offset_min: 1, line_offset_max: 1125 },
		{ id: '1080PsF23.98', label: '1080PsF 23.98hz', pixel_offset_min: 0, pixel_offset_max: 2639, line_offset_min: 1, line_offset_max: 1125 },
		{ id: '1080p24', label: '1080p 24hz', pixel_offset_min: 0, pixel_offset_max: 2639, line_offset_min: 1, line_offset_max: 1125 },
		{ id: '1080PsF24', label: '1080PsF 24hz', pixel_offset_min: 0, pixel_offset_max: 2639, line_offset_min: 1, line_offset_max: 1125 },
		{ id: '1080p25', label: '1080p 25hz', pixel_offset_min: 0, pixel_offset_max: 2639, line_offset_min: 1, line_offset_max: 1125 },
		{ id: '1080PsF25', label: '1080PsF 25hz', pixel_offset_min: 0, pixel_offset_max: 2639, line_offset_min: 1, line_offset_max: 1125 },
		{ id: '1080p29.97', label: '1080p 29.97hz', pixel_offset_min: 0, pixel_offset_max: 2639, line_offset_min: 1, line_offset_max: 1125 },
		{ id: '1080PsF29.97', label: '1080PsF 29.97hz', pixel_offset_min: 0, pixel_offset_max: 2639, line_offset_min: 1, line_offset_max: 1125 },
		{ id: '1080p30', label: '1080p 30hz', pixel_offset_min: 0, pixel_offset_max: 2639, line_offset_min: 1, line_offset_max: 1125 },
		{ id: '1080PsF30', label: '1080PsF 30hz', pixel_offset_min: 0, pixel_offset_max: 2639, line_offset_min: 1, line_offset_max: 1125 },
		{ id: '1080i50', label: '1080i 50hz', pixel_offset_min: 0, pixel_offset_max: 2639, line_offset_min: 1, line_offset_max: 1125 },
		{ id: '1080p50', label: '1080p 50hz', pixel_offset_min: 0, pixel_offset_max: 2639, line_offset_min: 1, line_offset_max: 1125 },
		{ id: '1080i59.94', label: '1080i 59.94hz', pixel_offset_min: 0, pixel_offset_max: 2639, line_offset_min: 1, line_offset_max: 1125 },
		{ id: '1080p59.94', label: '1080p 59.94hz', pixel_offset_min: 0, pixel_offset_max: 2639, line_offset_min: 1, line_offset_max: 1125 },
		{ id: '1080i60', label: '1080i 60hz', pixel_offset_min: 0, pixel_offset_max: 2639, line_offset_min: 1, line_offset_max: 1125 },
		{ id: '1080p60', label: '1080p 60hz', pixel_offset_min: 0, pixel_offset_max: 2639, line_offset_min: 1, line_offset_max: 1125 },
		{ id: '2K DCI 23.98p', label: '2K DCI 23.98hz', pixel_offset_min: 0, pixel_offset_max: 5279, line_offset_min: 1, line_offset_max: 2250 },
		{ id: '2K DCI 23.98PsF', label: '2K DCI PsF 23.98hz', pixel_offset_min: 0, pixel_offset_max: 5279, line_offset_min: 1, line_offset_max: 2250 },
		{ id: '2K DCI 24p', label: '2K DCI 24hz', pixel_offset_min: 0, pixel_offset_max: 5279, line_offset_min: 1, line_offset_max: 2250 },
		{ id: '2K DCI 24PsF', label: '2K DCI PsF 24hz', pixel_offset_min: 0, pixel_offset_max: 5279, line_offset_min: 1, line_offset_max: 2250 },
		{ id: '2160p23.98', label: '2160p 23.98hz (AV/Express)', pixel_offset_min: 0, pixel_offset_max: 5279, line_offset_min: 1, line_offset_max: 2250 },
		{ id: '2160p24', label: '2160p 24hz (AV/Express)', pixel_offset_min: 0, pixel_offset_max: 5279, line_offset_min: 1, line_offset_max: 2250 },
		{ id: '2160p25', label: '2160p 25hz (AV/Express)', pixel_offset_min: 0, pixel_offset_max: 5279, line_offset_min: 1, line_offset_max: 2250 },
		{ id: '2160p29.97', label: '2160p 29.97hz (AV/Express)', pixel_offset_min: 0, pixel_offset_max: 5279, line_offset_min: 1, line_offset_max: 2250 },
		{ id: '2160p30', label: '2160p 30hz (AV/Express)', pixel_offset_min: 0, pixel_offset_max: 5279, line_offset_min: 1, line_offset_max: 2250 },
		{ id: '2160p50', label: '2160p 50hz (AV/Express)', pixel_offset_min: 0, pixel_offset_max: 5279, line_offset_min: 1, line_offset_max: 2250 },
		{ id: '2160p59.94', label: '2160p 59.94hz (AV/Express)', pixel_offset_min: 0, pixel_offset_max: 5279, line_offset_min: 1, line_offset_max: 2250 },
		{ id: '2160p60', label: '2160p 60hz (AV/Express)', pixel_offset_min: 0, pixel_offset_max: 5279, line_offset_min: 1, line_offset_max: 2250 }
	],
		
	// Select Teranex preset
	preset_sources: [
		{ id: '1', label: 'Preset 1' },
		{ id: '2', label: 'Preset 2' },
		{ id: '3', label: 'Preset 3' },
		{ id: '4', label: 'Preset 4' },
		{ id: '5', label: 'Preset 5' },
		{ id: '6', label: 'Preset 6' }
	],
	
	// Select Teranex Test Pattern
	testPattern: [
		{ id: 'None', label: 'Off' },
		{ id: 'SMPTEBars', label: 'SMPTE 75%' },
		{ id: 'Bars', label: 'Colorbar 75%' },
		{ id: 'Black', label: 'Black' },
		{ id: 'Grid', label: 'Grid' },
		{ id: 'Multiburst', label: 'Res Chart' }
	],
	
	// Select option for when there is no signal
	noSignal: [
		{id: 'Black', label: 'Black' },
		{id: 'Bars', label: 'Colorbars' }
	],
	
	// Select test tone for test pattern
	testTone: [
		{ id: 'None', label: 'None' },
		{ id: 'Tone750Hz', label: 'Tone .75KHz' },
		{ id: 'Tone1500Hz', label: 'Tone 1.5KHz' },
		{ id: 'Tone3KHz', label: 'Tone 3KHz' },
		{ id: 'Tone6KHz', label: 'Tone 6KHz' }
	],
	
	// Motion ON or OFF for Test Pattern
	testPatternMotion: [
		{ id: 'true', label: 'On' },
		{ id: 'false', label: 'Off' }
	],
	
	//Horizontal rate for test pattern
	horizontalRate: [
		{ id: '-3', label: '-3'},
		{ id: '-2', label: '-2'},
		{ id: '-1', label: '-1'},
		{ id: '0', label: '0'},
		{ id: '1', label: '1'},
		{ id: '2', label: '2'},
		{ id: '3', label: '3'}
	],
	
	// Select Output Display
	outputDisplay: [
		{ id: 'Input', label: 'Input' },
		{ id: 'Black', label: 'Black' },
		{ id: 'Still', label: 'Still' },
		{ id: 'Freeze', label: 'Freeze'}
	],
	
	// Zoom Crop option
	zoomCrop: [
		{ id: 'true', label: 'On' },
		{ id: 'false', label: 'Off' }
	],
}