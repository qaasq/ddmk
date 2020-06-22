module;
#include "../Core/Core.h"
export module ModuleName(Pause);

import ModuleName(Config);

#ifdef __INTELLISENSE__
#include "Config.ixx"
#endif

export bool pause = false;

export void Pause(bool enable)
{
	if (enable)
	{
		Windows_ToggleCursor(true);
	}
	else
	{
		if (Config.System.Input.hideMouseCursor)
		{
			Windows_ToggleCursor(false);
		}
	}
}