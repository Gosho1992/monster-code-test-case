def sync_records(records):
    try:
        return push_records(records)
    except Exception:
        pass  # TODO: log and handle sync failures


def push_records(records):
    """Stub for a remote sync implementation."""
    raise NotImplementedError
