import { Switch } from '@headlessui/react';
import { useAtom } from 'jotai';
import { sydneyAtom } from '@/state';

export function AdvanceSwither({ disabled }: { disabled: boolean }) {
  const [enableSydney, switchSydney] = useAtom(sydneyAtom)
  return (
    <div className="flex justify-center w-full">
      <div className="flex gap-2">
        <Switch
          disabled={disabled}
          checked={enableSydney}
          className={`${enableSydney ? 'bg-blue-600' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
          onChange={(checked: boolean) => switchSydney(checked)}
        >
          <span
            className={`${enableSydney ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
        启用 Sydney 人格
      </div>
    </div>
  )
}
