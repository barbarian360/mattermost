// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import type {Draft} from './drafts';

export type ScheduleInfo = {
    id: string;
    scheduled_at: string;
    processed_at?: string;
    error_code?: string;
}

export type SchedulePost = Omit<Draft, 'delete_at'> & ScheduleInfo;
